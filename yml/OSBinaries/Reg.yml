---
Name: Reg.exe
Description: Used to manipulate the registry
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: reg export HKLM\SOFTWARE\Microsoft\Evilreg c:\ads\file.txt:evilreg.reg
    Description: Export the target Registry key and save it to the specified .REG file within an Alternate data stream.
    Usecase: Hide/plant registry information in Alternate data stream for later use
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\reg.exe
  - Path: C:\Windows\SysWOW64\reg.exe
Code_Sample:
- Code:
Detection:
 - IOC: reg.exe writing to an ADS
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
