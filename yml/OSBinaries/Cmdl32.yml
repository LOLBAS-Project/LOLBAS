---
Name: cmdl32.exe
Description: Microsoft Connection Manager Auto-Download
Author: 'Elliot Killick'
Created: '2021-08-26'
Commands:
  - Command: cmdl32 /vpn /lan %cd%\config
    Description: Download a file from the web address specified in the configuration file. The downloaded file will be in %TMP% under the name VPNXXXX.tmp where "X" denotes a random number or letter.
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cmdl32.exe
  - Path: C:\Windows\SysWOW64\cmdl32.exe
Detection:
  - IOC: Reports of downloading from suspicious URLs in %TMP%\config.log
  - IOC: Useragent Microsoft(R) Connection Manager Vpn File Update
Resources:
  - Link: https://github.com/LOLBAS-Project/LOLBAS/pull/151
Acknowledgement:
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
