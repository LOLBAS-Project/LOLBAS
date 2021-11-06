---
Name: Cscript.exe
Description: Binary used to execute scripts in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: cscript c:\ads\file.txt:script.vbs
    Description: Use cscript.exe to exectute a Visual Basic script stored in an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cscript.exe
  - Path: C:\Windows\SysWOW64\cscript.exe
Code_Sample:
- Code:
Detection:
 - IOC: Cscript.exe executing files from alternate data streams
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
