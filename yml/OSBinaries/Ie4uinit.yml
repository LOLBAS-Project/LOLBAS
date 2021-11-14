---
Name: Ie4uinit.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: ie4uinit.exe -BaseSettings
    Description: Executes commands from a specially prepared ie4uinit.inf file.
    Usecase: Get code execution by copy files to another location
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: c:\windows\system32\ie4uinit.exe
  - Path: c:\windows\sysWOW64\ie4uinit.exe
  - Path: c:\windows\system32\ieuinit.inf
  - Path: c:\windows\sysWOW64\ieuinit.inf
Code_Sample:
  - Code:
Detection:
  - IOC: ie4uinit.exe copied outside of %windir%
  - IOC: ie4uinit.exe loading an inf file (ieuinit.inf) from outside %windir%
Resources:
  - Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
