---
Name: Tracker.exe
Description: Tool included with Microsoft .Net Framework.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Tracker.exe /d .\calc.dll /c C:\Windows\write.exe
    Description: Use tracker.exe to proxy execution of an arbitrary DLL into another process. Since tracker.exe is also signed it can be used to bypass application whitelisting solutions.
    Usecase: Injection of locally stored DLL file into target process.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
  - Command: Tracker.exe /d .\calc.dll /c C:\Windows\write.exe
    Description: Use tracker.exe to proxy execution of an arbitrary DLL into another process. Since tracker.exe is also signed it can be used to bypass application whitelisting solutions.
    Usecase: Injection of locally stored DLL file into target process.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path:
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_tracker_execution.yml
Resources:
  - Link: https://twitter.com/subTee/status/793151392185589760
  - Link: https://attack.mitre.org/wiki/Execution
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subTee'
---
