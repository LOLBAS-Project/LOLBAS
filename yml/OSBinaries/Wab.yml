---
Name: Wab.exe
Description: Windows address book manager
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: wab.exe
    Description: Change HKLM\Software\Microsoft\WAB\DLLPath and execute DLL of choice
    Usecase: Execute dll file. Bypass defensive counter measures
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Program Files\Windows Mail\wab.exe
  - Path: C:\Program Files (x86)\Windows Mail\wab.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/a80c29a7c2e2e500a1a532db2a2a8bd69bd4a63d/rules/windows/registry_event/sysmon_wab_dllpath_reg_change.yml
  - IOC: WAB.exe should normally never be used
Resources:
  - Link: https://twitter.com/Hexacorn/status/991447379864932352
  - Link: http://www.hexacorn.com/blog/2018/05/01/wab-exe-as-a-lolbin/
Acknowledgement:
  - Person: Adam
    Handle: '@Hexacorn'
---
