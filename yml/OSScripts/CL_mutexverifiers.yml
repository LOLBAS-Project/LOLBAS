---
Name: CL_Mutexverifiers.ps1
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: . C:\\Windows\\diagnostics\\system\\AERO\\CL_Mutexverifiers.ps1   \nrunAfterCancelProcess calc.ps1
    Description: Import the PowerShell Diagnostic CL_Mutexverifiers script and call runAfterCancelProcess to launch an executable.
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
  - Path: C:\Windows\diagnostics\system\Audio\CL_Mutexverifiers.ps1
  - Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
  - Path: C:\Windows\diagnostics\system\Video\CL_Mutexverifiers.ps1
  - Path: C:\Windows\diagnostics\system\Speech\CL_Mutexverifiers.ps1
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff6c54ded6b52f379cec11fe17c1ccb956faa660/rules/windows/process_creation/proc_creation_win_lolbas_cl_mutexverifiers.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/995111125447577600
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
