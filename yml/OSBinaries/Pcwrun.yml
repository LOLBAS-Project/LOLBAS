---
Name: Pcwrun.exe
Description: Program Compatibility Wizard
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Pcwrun.exe c:\temp\beacon.exe
    Description: Open the target .EXE file with the Program Compatibility Wizard.
    Usecase: Proxy execution of binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\pcwrun.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_indirect_cmd_compatibility_assistant.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/991335019833708544
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
