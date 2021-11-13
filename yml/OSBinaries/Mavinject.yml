---
Name: Mavinject.exe
Description: Used by App-v in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: MavInject.exe 3110 /INJECTRUNNING c:\folder\evil.dll
    Description: Inject evil.dll into a process with PID 3110.
    Usecase: Inject dll file into running process
    Category: Execute
    Privileges: User
    MitreID: T1218.013
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: Mavinject.exe 4172 /INJECTRUNNING "c:\ads\file.txt:file.dll"
    Description: Inject file.dll stored as an Alternate Data Stream (ADS) into a process with PID 4172
    Usecase: Inject dll file into running process
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\mavinject.exe
  - Path: C:\Windows\SysWOW64\mavinject.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_mavinject_proc_inj.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c44b22b52fce406d45ddb6743a02b9ff8c62c7c6/rules/windows/process_creation/sysmon_creation_mavinject_dll.yml
  - IOC: mavinject.exe should not run unless APP-v is in use on the workstation
Resources:
  - Link: https://twitter.com/gN3mes1s/status/941315826107510784
  - Link: https://twitter.com/Hexcorn/status/776122138063409152
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Giuseppe N3mes1s
    Handle: '@gN3mes1s'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
