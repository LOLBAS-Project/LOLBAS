---
Name: Diskshadow.exe
Description: Diskshadow.exe is a tool that exposes the functionality offered by the volume shadow copy Service (VSS).
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: diskshadow.exe /s c:\test\diskshadow.txt
    Description: Execute commands using diskshadow.exe from a prepared diskshadow script.
    Usecase: Use diskshadow to exfiltrate data from VSS such as NTDS.dit
    Category: Dump
    Privileges: User
    MitreID: T1003.003
    OperatingSystem: Windows server
  - Command: diskshadow> exec calc.exe
    Description: Execute commands using diskshadow.exe to spawn child process
    Usecase: Use diskshadow to bypass defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows server
Full_Path:
  - Path: C:\Windows\System32\diskshadow.exe
  - Path: C:\Windows\SysWOW64\diskshadow.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/b4d5b44ea86cda24f38a87d3b0c5f9d4455bf841/rules/windows/process_creation/win_susp_diskshadow.yml
 - Sigma: https://github.com/SigmaHQ/sigma/blob/b3df5bf325461df9bcfeb051895b0c8dc3258234/rules/windows/process_creation/win_shadow_copies_deletion.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
 - IOC: Child process from diskshadow.exe
Resources:
  - Link: https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
