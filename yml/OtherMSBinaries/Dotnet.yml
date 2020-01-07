---
Name: Dotnet.exe
Description: dotnet.exe comes with .NET Framework
Author: 'felamos'
Created: '2019-11-12'
Commands:
  - Command: dotnet.exe [PATH_TO_DLL]
    Description: dotnet.exe will execute any dll even if applocker is enabled.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows 7 and up with .NET installed
  - Command: dotnet.exe [PATH_TO_DLL]
    Description: dotnet.exe will execute any DLL.
    Usecase: Execute DLL
    Category: Execute
    Privileges: User
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows 7 and up with .NET installed
Full_Path:
  - Path: 'C:\Program Files\dotnet\dotnet.exe'
Detection: 
  - IOC: dotnet.exe spawned an unknown process
Resources:
  - Link: https://twitter.com/_felamos/status/1204705548668555264
Acknowledgement:
  - Person: felamos
    Handle: '@_felamos'
---
