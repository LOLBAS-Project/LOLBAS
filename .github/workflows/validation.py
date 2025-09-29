import glob
import os
import sys
import re
from datetime import date
from typing import List, Literal, Optional

import yaml
from pydantic import BaseModel, HttpUrl, RootModel, ValidationError, constr, model_validator, field_validator, ConfigDict

# Disable datetime parsing
yaml.SafeLoader.yaml_implicit_resolvers = {k: [r for r in v if r[0] != 'tag:yaml.org,2002:timestamp'] for k, v in yaml.SafeLoader.yaml_implicit_resolvers.items()}


safe_str = constr(pattern=r'^([a-zA-Z0-9\s.,!?\'"():;\-\+_*#@/\\&%~=]|`[a-zA-Z0-9\s.,!?\'"():;\-\+_*#@/\\&<>%\{\}~=]+`|->)+$')


class LolbasModel(BaseModel):
    model_config = ConfigDict(extra="forbid")


class AliasItem(LolbasModel):
    Alias: Optional[str]


class TagItem(RootModel[dict[constr(pattern=r'^[A-Z]'), str]]):
    pass


class CommandItem(LolbasModel):
    Command: str
    Description: safe_str
    Usecase: safe_str
    Category: Literal['ADS', 'AWL Bypass', 'Compile', 'Conceal', 'Copy', 'Credentials', 'Decode', 'Download', 'Dump', 'Encode', 'Execute', 'Reconnaissance', 'Tamper', 'UAC Bypass', 'Upload']
    Privileges: str
    MitreID: constr(pattern=r'^T[0-9]{4}(\.[0-9]{3})?$')
    OperatingSystem: str
    Tags: Optional[List[TagItem]] = None


class FullPathItem(LolbasModel):
    Path: constr(pattern=r'^(([cC]:)\\([a-zA-Z0-9\-\_\. \(\)<>]+\\)*([a-zA-Z0-9_\-\.]+\.[a-z0-9]{3})|no default)$')


class CodeSampleItem(LolbasModel):
    Code: str


class DetectionItem(LolbasModel):
    IOC: Optional[str] = None
    Sigma: Optional[HttpUrl] = None
    Analysis: Optional[HttpUrl] = None
    Elastic: Optional[HttpUrl] = None
    Splunk: Optional[HttpUrl] = None
    BlockRule: Optional[HttpUrl] = None

    @model_validator(mode="after")
    def validate_exclusive_urls(cls, values):
        url_fields = ['IOC', 'Sigma', 'Analysis', 'Elastic', 'Splunk', 'BlockRule']
        present = [field for field in url_fields if values.__dict__.get(field) is not None]

        if len(present) != 1:
            raise ValueError(f"Exactly one of the following must be provided: {url_fields}.", f"Currently set: {present or 'none'}")

        return values


class ResourceItem(LolbasModel):
    Link: HttpUrl


class AcknowledgementItem(LolbasModel):
    Person: str
    Handle: Optional[constr(pattern=r'^(@(\w){1,15})?$')] = None


class MainModel(LolbasModel):
    Name: str
    Description: safe_str
    Aliases: Optional[List[AliasItem]] = None
    Author: str
    Created: constr(pattern=r'\d{4}-\d{2}-\d{2}')
    Commands: List[CommandItem]
    Full_Path: List[FullPathItem]
    Code_Sample: Optional[List[CodeSampleItem]] = None
    Detection: Optional[List[DetectionItem]] = None
    Resources: Optional[List[ResourceItem]] = None
    Acknowledgement: Optional[List[AcknowledgementItem]] = None


if __name__ == "__main__":
    yaml_files = glob.glob("yml/**", recursive=True)

    if not yaml_files:
        print("No YAML files found under 'yml/**'.")
        sys.exit(1)

    has_errors = False
    for file_path in yaml_files:
        if os.path.isfile(file_path) and not file_path.startswith('yml/HonorableMentions/'):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    data = yaml.safe_load(f)
                MainModel(**data)
                print(f"✅ Valid: {file_path}")
            except ValidationError as ve:
                print(f"❌ Validation error in {file_path}:\n{ve}\n")
                for err in ve.errors():
                    # GitHub Actions error format
                    path = '.'.join([str(x) for x in err.get('loc', [None])])
                    msg = err.get('msg', 'Unknown validation error')
                    print(f"::error file={file_path},line=1,title=Schema error::'{msg}' for {path}")
                    has_errors = True
            except Exception as e:
                print(f"⚠️ Error processing {file_path}: {e}\n")
                print(f"::error file={file_path},line=1,title=Processing error::Error processing file: {e}")
                has_errors = True

    sys.exit(1 if has_errors else 0)
