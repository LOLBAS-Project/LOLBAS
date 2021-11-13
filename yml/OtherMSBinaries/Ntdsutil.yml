---
Name: ntdsutil.exe
Description: Command line utility used to export Active Directory.
Author: 'Tony Lambert'
Created: 2020-01-10
Commands:
  - Command: ntdsutil.exe "ac i ntds" "ifm" "create full c:\" q q
    Description: Dump NTDS.dit into folder
    Usecase: Dumping of Active Directory NTDS.dit database
    Category: Dump
    Privileges: Administrator
    MitreID: T1003.003
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Windows\System32\ntdsutil.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_ntdsutil.yml
  - Splunk: https://github.com/splunk/security_content/blob/2b87b26bdc2a84b65b1355ffbd5174bdbdb1879c/detections/endpoint/ntdsutil_export_ntds.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
  - IOC: ntdsutil.exe with command line including "ifm"
Resources:
  - Link: https://adsecurity.org/?p=2398#CreateIFM
Acknowledgement:
  - Person: Sean Metcalf
    Handle: '@PyroTek3'
---
