---
Name: Gpscript.exe
Description: Used by group policy to process scripts
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Gpscript /logon
    Description: Executes logon scripts configured in Group Policy.
    Usecase: Add local group policy logon script to execute file and hide from defensive counter measures
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: Gpscript /startup
    Description: Executes startup scripts configured in Group Policy
    Usecase: Add local group policy logon script to execute file and hide from defensive counter measures
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\gpscript.exe
  - Path: C:\Windows\SysWOW64\gpscript.exe
Code_Sample:
- Code:
Detection:
 - IOC: Scripts added in local group policy
 - IOC: Execution of Gpscript.exe after logon
Resources:
  - Link: https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
