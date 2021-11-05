---
Name: Extexport.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Extexport.exe c:\test foo bar
    Description: Load a DLL located in the c:\test folder with one of the following names mozcrt19.dll, mozsqlite3.dll, or sqlite.dll
    Usecase: Execute dll file
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Program Files\Internet Explorer\Extexport.exe
  - Path: C:\Program Files (x86)\Internet Explorer\Extexport.exe
Code_Sample:
- Code:
Detection:
 - IOC: Extexport.exe loads dll and is execute from other folder the original path
Resources:
  - Link: http://www.hexacorn.com/blog/2018/04/24/extexport-yet-another-lolbin/
Acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
---
