---
Name: Verclsid.exe
Description:
Author: '@bohops'
Created: 2018-12-04
Commands:
  - Command: verclsid.exe /S /C {CLSID}
    Description: Used to verify a COM object before it is instantiated by Windows Explorer
    Usecase: Run a com object created in registry to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218.012
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\verclsid.exe
  - Path: C:\Windows\SysWOW64\verclsid.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
  - Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
Acknowledgement:
  - Person: Nick Tyrer
    Handle: '@NickTyrer'
---
