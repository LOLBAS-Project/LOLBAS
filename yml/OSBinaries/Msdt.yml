---
Name: Msdt.exe
Description: Microsoft diagnostics tool
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
    Description: Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
    Description: Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file.
    Usecase: Execute code bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\Msdt.exe
  - Path: C:\Windows\SysWOW64\Msdt.exe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/PCW8E57.xml
Detection:
 - IOC:
Resources:
  - Link: https://web.archive.org/web/20160322142537/https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
  - Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
  - Link: https://twitter.com/harr0ey/status/991338229952598016
Acknowledgement:
  - Person:
    Handle:
---
