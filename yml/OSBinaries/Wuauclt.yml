---
Name: wuauclt.exe
Description: Windows Update Client
Author: 'David Middlehurst'
Created: 2020-09-23
Commands:
  - Command: wuauclt.exe /UpdateDeploymentProvider <Full_Path_To_DLL> /RunHandlerComServer
    Description: Full_Path_To_DLL would be the abosolute path to .DLL file and would execute code on attach.
    Usecase: Execute dll via attach/detach methods
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\wuauclt.exe
Code_Sample:
- Code:
Detection:
 - IOC: wuauclt run with a parameter of a DLL path
Resources:
  - Link: https://dtm.uk/wuauclt/
Acknowledgement:
  - Person: David Middlehurst
    Handle: '@dtmsecurity'
---
