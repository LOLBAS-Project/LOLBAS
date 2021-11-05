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
  - IOC: ntdsutil.exe with command line including "ifm"
Resources:
  - Link: https://adsecurity.org/?p=2398#CreateIFM
Acknowledgement:
  - Person: Sean Metcalf
    Handle: '@PyroTek3'
---
