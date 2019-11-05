---
Name: Tttracer.exe
Description: Used by Windows 1809 and newer to Debug Time Travel
Author: 'Oddvar Moe'
Created: '2019-11-5'
Commands:
  - Command: tttracer.exe C:\windows\system32\calc.exe
    Description: Execute calc using tttracer.exe. Requires administrator privileges
    Usecase: Spawn process using other binary
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows 10 1809 and newer
Full_Path:
  - Path: C:\Windows\System32\tttracer.exe
  - Path: C:\Windows\SysWOW64\tttracer.exe
Code_Sample: 
  - Code:
Detection:
  - IOC: Parent child relationship. Tttracer parent for executed command
Resources:
  - Link: https://twitter.com/oulusoyum/status/1191329746069655553
Acknowledgement:
  - Person: Onur Ulusoy
    Handle: '@oulusoyum'
---