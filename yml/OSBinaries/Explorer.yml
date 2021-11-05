---
Name: Explorer.exe
Description: Binary used for managing files and system components within Windows
Author: 'Jai Minton'
Created: 2020-06-24
Commands:
  - Command: explorer.exe /root,"C:\Windows\System32\calc.exe"
    Description: Execute calc.exe with the parent process spawning from a new instance of explorer.exe
    Usecase: Performs execution of specified file with explorer parent process breaking the process tree, can be used for defense evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows XP, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: explorer.exe C:\Windows\System32\notepad.exe
    Description: Execute calc.exe with the parent process spawning from a new instance of explorer.exe
    Usecase: Performs execution of specified file with explorer parent process breaking the process tree, can be used for defense evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10 (Tested)
Full_Path:
  - Path: C:\Windows\explorer.exe
  - Path: C:\Windows\SysWOW64\explorer.exe
Code_Sample:
- Code:
Detection:
 - IOC: Multiple instances of explorer.exe or explorer.exe using the /root command line can help to detect this.
Resources:
  - Link: https://twitter.com/CyberRaiju/status/1273597319322058752?s=20
  - Link: https://twitter.com/bohops/status/1276356245541335048
  - Link: https://twitter.com/bohops/status/986984122563391488
Acknowledgement:
  - Person: Jai Minton
    Handle: '@CyberRaiju'
  - Person: Jimmy
    Handle: '@bohops'
---
