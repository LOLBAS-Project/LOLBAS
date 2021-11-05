---
Name: Rasautou.exe
Description: Windows Remote Access Dialer
Author: 'Tony Lambert'
Created: 2020-01-10
Commands:
  - Command: rasautou -d powershell.dll -p powershell -a a -e e
    Description: Loads the target .DLL specified in -d and executes the export specified in -p. Options removed in Windows 10.
    Usecase: Execute DLL code
    Category: Execute
    Privileges: User, Administrator in Windows 8
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1
Full_Path:
  - Path: C:\Windows\System32\rasautou.exe
Code_Sample:
- Code:
Detection:
 - IOC: rasautou.exe command line containing -d and -p
Resources:
  - Link: https://github.com/fireeye/DueDLLigence
  - Link: https://www.fireeye.com/blog/threat-research/2019/10/staying-hidden-on-the-endpoint-evading-detection-with-shellcode.html
Acknowledgement:
  - Person: FireEye
    Handle: '@FireEye'
---
