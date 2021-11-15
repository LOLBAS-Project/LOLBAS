---
Name: Wfc.exe
Description: The Workflow Command-line Compiler tool is included with the Windows Software Development Kit (SDK).
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: wfc.exe c:\path\to\test.xoml
    Description: Execute arbitrary C# code embedded in a XOML file.
    Usecase: Execute proxied payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft SDKs\Windows\v10.0A\bin\NETFX 4.8 Tools\wfc.exe
Code_Sample:
  - Code: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
Detection:
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: As a Windows SDK binary, execution on a system may be suspicious
Resources:
  - Link: https://bohops.com/2020/11/02/exploring-the-wdac-microsoft-recommended-block-rules-part-ii-wfc-fsi/
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: Jimmy
    Handle: '@bohops'
---
