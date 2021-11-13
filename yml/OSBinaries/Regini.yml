---
Name: Regini.exe
Description: Used to manipulate the registry
Author: 'Oddvar Moe'
Created: 2020-07-03
Commands:
  - Command: regini.exe newfile.txt:hidden.ini
    Description: Write registry keys from data inside the Alternate data stream.
    Usecase: Write to registry
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\regini.exe
  - Path: C:\Windows\SysWOW64\regini.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/d9edc9f0e365257aa497cc7707e58f396088958e/rules/windows/process_creation/win_regini_ads.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/d9edc9f0e365257aa497cc7707e58f396088958e/rules/windows/process_creation/win_regini.yml
  - IOC: regini.exe reading from ADS
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Eli Salem
    Handle: '@elisalem9'
---
