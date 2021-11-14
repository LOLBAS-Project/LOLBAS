---
Name: DefaultPack.EXE
Description: This binary can be downloaded along side multiple software downloads on the microsoft website. It gets downloaded when the user forgets to uncheck the option to set Bing as the default search provider.
Author: '@checkymander'
Created: 2020-10-01
Commands:
  - Command: DefaultPack.EXE /C:"process.exe args"
    Description: Use DefaultPack.EXE to execute arbitrary binaries, with added argument support.
    Usecase: Can be used to execute stagers, binaries, and other malicious commands.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft\DefaultPack\
Code_Sample:
  - Code:
Detection:
  - IOC: DefaultPack.EXE spawned an unknown process
Resources:
  - Link: https://twitter.com/checkymander/status/1311509470275604480.
Acknowledgement:
  - Person: checkymander
    Handle: '@checkymander'
---
