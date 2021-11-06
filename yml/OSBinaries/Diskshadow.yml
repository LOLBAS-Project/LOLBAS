---
Name: Diskshadow.exe
Description: Diskshadow.exe is a tool that exposes the functionality offered by the volume shadow copy Service (VSS).
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: diskshadow.exe /s c:\test\diskshadow.txt
    Description: Execute commands using diskshadow.exe from a prepared diskshadow script.
    Usecase: Use diskshadow to exfiltrate data from VSS such as NTDS.dit
    Category: Dump
    Privileges: User
    MitreID: T1003.003
    OperatingSystem: Windows server
  - Command: diskshadow> exec calc.exe
    Description: Execute commands using diskshadow.exe to spawn child process
    Usecase: Use diskshadow to bypass defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows server
Full_Path:
  - Path: C:\Windows\System32\diskshadow.exe
  - Path: C:\Windows\SysWOW64\diskshadow.exe
Code_Sample:
- Code:
Detection:
 - IOC: Child process from diskshadow.exe
 - IOC: Diskshadow reading input from file
Resources:
  - Link: https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
