import glob
import os
import sys
from datetime import date
from typing import List, Literal, Optional

import yaml
from pydantic import (BaseModel, Field, HttpUrl, RootModel, ValidationError,
                      constr, model_validator)

safe_str = constr(pattern=r'^([a-zA-Z0-9\s.,!?\'"():;\-\+_*#@/\\&%~=]|`[a-zA-Z0-9\s.,!?\'"():;\-\+_*#@/\\&<>%\{\}~=]+`|->)+$')


class AliasItem(BaseModel):
    Alias: Optional[str]


class TagItem(RootModel[dict[constr(pattern=r'^[A-Z]'), str]]):
    pass


class CommandItem(BaseModel):
    Command: str
    Description: safe_str
    Usecase: safe_str
    Category: Literal['ADS', 'AWL Bypass', 'Compile', 'Conceal', 'Copy', 'Credentials', 'Decode', 'Download', 'Dump', 'Encode', 'Execute', 'Reconnaissance', 'Tamper', 'UAC Bypass', 'Upload']
    Privileges: str
    MitreID: constr(pattern=r'^T[0-9]{4}(\.[0-9]{3})?$')
    OperatingSystem: str
    Tags: Optional[List[TagItem]] = None


class FullPathItem(BaseModel):
    Path: constr(pattern=r'^(([cC]:)\\([a-zA-Z0-9\-\_\. \(\)<>]+\\)*([a-zA-Z0-9_\-\.]+\.[a-z0-9]{3})|no default)$')


class CodeSampleItem(BaseModel):
    Code: str


class DetectionItem(BaseModel):
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
            raise ValueError(
                f"Exactly one of the following must be provided: {url_fields}. "
                f"Currently set: {present or 'none'}"
            )

        return values

class ResourceItem(BaseModel):
    Link: HttpUrl


class AcknowledgementItem(BaseModel):
    Person: str
    Handle: Optional[constr(pattern=r'^(@(\w){1,15})?$')] = None


class MainModel(BaseModel):
    Name: str
    Description: str
    Aliases: Optional[List[AliasItem]] = None
    Author: str
    Created: date
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
        sys.exit(0)

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
                    print(f"::error file={file_path},line=1,col=1::'{msg}' for {path}")
            except Exception as e:
                print(f"⚠️ Error processing {file_path}: {e}\n")
                print(f"::error file={file_path},line=1,col=1::Error processing file: {e}")
