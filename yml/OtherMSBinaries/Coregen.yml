---
Name: coregen.exe
Description: Binary coregen.exe (Microsoft CoreCLR Native Image Generator) loads exported function GetCLRRuntimeHost from coreclr.dll or from .DLL in arbitrary path. Coregen is located within "C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\" or another version of Silverlight. Coregen is signed by Microsoft and bundled with Microsoft Silverlight.
Author: Martin Sohn Christensen
Created: 2020-10-09
Commands:
  - Command: coregon.exe.exe /L C:\folder\evil.dll dummy_assembly_name
    Description: Loads the target .DLL in arbitrary path specified with /L.
    Usecase: Execute DLL code
    Category: Execute
    Privileges: User
    MitreID: T1055
    OperatingSystem: Windows
  - Command: coregen.exe dummy_assembly_name
    Description: Loads the coreclr.dll in the corgen.exe directory (e.g. C:\Program Files\Microsoft Silverlight\5.1.50918.0).
    Usecase: Execute DLL code
    Category: Execute
    Privileges: User
    MitreID: T1055
    OperatingSystem: Windows
  - Command: coregen.exe /L C:\folder\evil.dll dummy_assembly_name
    Description: Loads the target .DLL in arbitrary path specified with /L. Since binary is signed it can also be used to bypass application whitelisting solutions.
    Usecase: Execute DLL code
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files\Microsoft Silverlight\5.1.50918.0\coregen.exe
  - Path: C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\coregen.exe
Code_Sample:
  - Code:
Detection:
  - IOC: coregen.exe loading .dll file not in "C:\Program Files (x86)\Microsoft Silverlight\5.1.50918.0\"
  - IOC: coregen.exe loading .dll file not named coreclr.dll
  - IOC: coregen.exe command line containing -L or -l
  - IOC: coregen.exe command line containing unexpected/invald assembly name
  - IOC: coregen.exe application crash by invalid assembly name
Resources:
  - Link: https://www.youtube.com/watch?v=75XImxOOInU
  - Link: https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
Acknowledgement:
  - Person: Nicky Tyrer
    Handle:
  - Person: Evan Pena
    Handle:
  - Person: Casey Erikson
    Handle:
---
