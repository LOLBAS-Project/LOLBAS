---
Name: Stordiag.exe
Description: Storage diagnostic tool
Author: 'Eral4m'
Created: '2021-10-21'
Commands:
  - Command: stordiag.exe
    Description: Once executed, Stordiag.exe will execute schtasks.exe systeminfo.exe and fltmc.exe - if stordiag.exe is copied to a folder and an arbitrary executable is renamed to one of these names, stordiag.exe will execute it.
    Usecase: Possible defence evasion purposes.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10
Full_Path:
  - Path: c:\windows\system32\stordiag.exe
  - Path: c:\windows\syswow64\stordiag.exe
Detection:
  - IOC: systeminfo.exe, fltmc.exe or schtasks.exe being executed outside of their normal path of c:\windows\system32\ or c:\windows\syswow64\
Resources:
  - Link: https://twitter.com/eral4m/status/1451112385041911809
Acknowledgement:
  - Person: Eral4m
    Handle: '@eral4m'
---
