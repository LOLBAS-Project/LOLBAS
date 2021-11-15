---
Name: Fsi.exe
Description: 64-bit FSharp (F#) Interpreter included with Visual Studio and DotNet Core SDK.
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: fsi.exe c:\path\to\test.fsscript
    Description: Execute F# code via script file
    Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1059
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
  - Command: fsi.exe
    Description: Execute F# code via interactive command line
    Usecase: Execute payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1059
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
Full_Path:
  - Path: C:\Program Files\dotnet\sdk\[sdk version]\FSharp\fsi.exe
  - Path: C:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\Common7\IDE\CommonExtensions\Microsoft\FSharp\fsi.exe
Code_Sample:
  - Code: https://gist.github.com/NickTyrer/51eb8c774a909634fa69b4d06fc79ae1
Detection:
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: Fsi.exe execution may be suspicious on non-developer machines
Resources:
  - Link: https://twitter.com/NickTyrer/status/904273264385589248
  - Link: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
Acknowledgement:
  - Person: Nick Tyrer
    Handle: '@NickTyrer'
  - Person: Jimmy
    Handle: '@bohops'
---
