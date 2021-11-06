---
Name: Runscripthelper.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: runscripthelper.exe surfacecheck \\?\C:\Test\Microsoft\Diagnosis\scripts\test.txt C:\Test
    Description: Execute the PowerShell script named test.txt
    Usecase: Bypass constrained language mode and execute Powershell script
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.15_none_c2df1bba78111118\Runscripthelper.exe
  - Path: C:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.192_none_ad4699b571e00c4a\Runscripthelper.exe
Code_Sample:
- Code:
Detection:
 - IOC: Event 4014 - Powershell logging
 - IOC: Event 400
Resources:
  - Link: https://posts.specterops.io/bypassing-application-whitelisting-with-runscripthelper-exe-1906923658fc
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
---
