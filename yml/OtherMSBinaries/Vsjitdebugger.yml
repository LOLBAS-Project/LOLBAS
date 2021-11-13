---
Name: vsjitdebugger.exe
Description: Just-In-Time (JIT) debugger included with Visual Studio
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Vsjitdebugger.exe calc.exe
    Description: Executes calc.exe as a subprocess of Vsjitdebugger.exe.
    Usecase: Execution of local PE file as a subprocess of Vsjitdebugger.exe.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\vsjitdebugger.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/8beb70e970b814d0ab60625206ea0d8a21a9bff8/rules/windows/process_creation/win_susp_use_of_vsjitdebugger_bin.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/990758590020452353
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
