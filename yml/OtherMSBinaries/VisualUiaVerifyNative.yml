---
Name: VisualUiaVerifyNative.exe
Description: A Windows SDK binary for manual and automated testing of Microsoft UI Automation implementation and controls.
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: VisualUiaVerifyNative.exe
    Description: Generate Serialized gadget and save to - C:\Users\[current user]\AppData\Roaminguiverify.config before executing.
    Usecase: Execute proxied payload with Microsoft signed binary to bypass WDAC policies
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 2004 (likely previous and newer versions as well)
Full_Path:
  - Path: c:\Program Files (x86)\Windows Kits\10\bin\[SDK version]\arm64\UIAVerify\VisualUiaVerifyNative.exe
  - Path: c:\Program Files (x86)\Windows Kits\10\bin\[SDK version]\x64\UIAVerify\VisualUiaVerifyNative.exe
  - Path: c:\Program Files (x86)\Windows Kits\10\bin\[SDK version]\UIAVerify\VisualUiaVerifyNative.exe
Code_Sample:
  - Code:
Detection:
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: As a Windows SDK binary, execution on a system may be suspicious
Resources:
  - Link: https://bohops.com/2020/10/15/exploring-the-wdac-microsoft-recommended-block-rules-visualuiaverifynative/
  - Link: https://github.com/MicrosoftDocs/windows-itpro-docs/commit/937db704b9148e9cee7c7010cad4d00ce9c4fdad
Acknowledgement:
  - Person: Lee Christensen
    Handle: '@tifkin'
  - Person: Jimmy
    Handle: '@bohops'
---
