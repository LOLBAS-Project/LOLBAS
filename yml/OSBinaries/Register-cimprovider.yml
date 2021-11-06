---
Name: Register-cimprovider.exe
Description: Used to register new wmi providers
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Register-cimprovider -path "C:\folder\evil.dll"
    Description: Load the target .DLL.
    Usecase: Execute code within dll file
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\Register-cimprovider.exe
  - Path: C:\Windows\SysWOW64\Register-cimprovider.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://twitter.com/PhilipTsukerman/status/992021361106268161
Acknowledgement:
  - Person: Philip Tsukerman
    Handle: '@PhilipTsukerman'
---
