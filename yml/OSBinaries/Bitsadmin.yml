---
Name: Bitsadmin.exe
Description: Used for managing background intelligent transfer
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: bitsadmin /create 1 bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL bitsadmin /RESUME 1 bitsadmin /complete 1
    Description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command from an Alternate data stream, then resume and complete the job.
    Usecase: Performs execution of specified file in the alternate data stream, can be used as a defensive evasion or persistence technique.
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: bitsadmin /create 1 bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe c:\data\playfolder\autoruns.exe bitsadmin /RESUME 1 bitsadmin /complete 1
    Description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin /reset
    Description: Command for copying cmd.exe to another folder
    Usecase: Copy file
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\cmd.exe NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
    Description: One-liner that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
    Usecase: Execute binary file specified. Can be used as a defensive evasion.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\bitsadmin.exe
  - Path: C:\Windows\SysWOW64\bitsadmin.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/90ca1a8ad2e5c96d09a9ae4ff92483a2110d49ff/rules/windows/process_creation/win_process_creation_bitsadmin_download.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/abcaf00aeef3769aa2a6f66f7fb6537b867c1691/rules/proxy/proxy_ua_bitsadmin_susp_tld.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/e40b8592544721c689f8ae96477ea1218e4c7a05/rules/windows/process_creation/win_monitoring_for_persistence_via_bits.yml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/bitsadmin_download_file.yml
  - IOC: Child process from bitsadmin.exe
  - IOC: bitsadmin creates new files
  - IOC: bitsadmin adds data to alternate data stream
Resources:
  - Link: https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679 - slide 53
  - Link: https://www.youtube.com/watch?v=_8xJaaQlpBo
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Rob Fuller
    Handle: '@mubix'
  - Person: Chris Gates
    Handle: '@carnal0wnage'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
