---
Name: Regedit.exe
Description: Used by Windows to manipulate registry
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: regedit /E c:\ads\file.txt:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
    Description: Export the target Registry key to the specified .REG file.
    Usecase: Hide registry data in alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regedit C:\ads\file.txt:regfile.reg
    Description: Import the target .REG file into the Registry.
    Usecase: Import hidden registry data from alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\regedit.exe
  - Path: C:\Windows\SysWOW64\regedit.exe
Code_Sample:
- Code:
Detection:
 - IOC: regedit.exe reading and writing to alternate data stream
 - IOC: regedit.exe should normally not be executed by end-users
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
