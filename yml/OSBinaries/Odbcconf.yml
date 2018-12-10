---
Name: Odbcconf.exe
Description: Used in Windows for managing ODBC connections
Author: 'Oddvar Moe'
Created: '2018-05-25'
Commands:
  - Command: odbcconf -f file.rsp
    Description: Load DLL specified in target .RSP file. See the Playloads folder for an example .RSP file.
    Usecase: Execute dll file using technique that can evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\odbcconf.exe
  - Path: C:\Windows\SysWOW64\odbcconf.exe
Code_Sample: 
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/file.rsp
Detection:
 - IOC:
Resources:
  - Link: https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
  - Link: https://github.com/woanware/application-restriction-bypasses
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---