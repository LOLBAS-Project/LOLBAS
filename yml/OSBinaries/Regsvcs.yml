---
Name: Regsvcs.exe
Description: Regsvcs and Regasm are Windows command-line utilities that are used to register .NET Component Object Model (COM) assemblies
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: regsvcs.exe AllTheThingsx64.dll
    Description: Loads the target .DLL file and executes the RegisterClass function.
    Usecase: Execute dll file and bypass Application whitelisting
    Category: Execute
    Privileges: Local Admin
    MitreID: T1218.009
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvcs.exe AllTheThingsx64.dll
    Description: Loads the target .DLL file and executes the RegisterClass function.
    Usecase: Execute dll file and bypass Application whitelisting
    Category: AWL bypass
    Privileges: Local Admin
    MitreID: T1218.009
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\regsvcs.exe
  - Path: C:\Windows\SysWOW64\regsvcs.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.009/T1218.009.md
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
