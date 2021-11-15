---
Name: FsiAnyCpu.exe
Description: 32/64-bit FSharp (F#) Interpreter included with Visual Studio.
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: fsianycpu.exe c:\path\to\test.fsscript
    Description: Execute F# code via script file
    Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1059
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  - Command: fsianycpu.exe
    Description: Execute F# code via interactive command line
    Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1059
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
Full_Path:
  - Path: c:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp\fsianycpu.exe
Code_Sample:
  - Code: https://gist.github.com/NickTyrer/51eb8c774a909634fa69b4d06fc79ae1
Detection:
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: FsiAnyCpu.exe execution may be suspicious on non-developer machines
Resources:
  - Link: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
Acknowledgement:
  - Person: Nick Tyrer
    Handle: '@NickTyrer'
  - Person: Jimmy
    Handle: '@bohops'
---
