---
Name: Dxcap.exe
Description: DirectX diagnostics/debugger included with Visual Studio.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Dxcap.exe -c C:\Windows\System32\notepad.exe
    Description: Launch notepad as a subprocess of Dxcap.exe
    Usecase: Local execution of a process as a subprocess of Dxcap.exe
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Windows\System32\dxcap.exe
  - Path: C:\Windows\SysWOW64\dxcap.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_dxcap.yml
Resources:
  - Link: https://twitter.com/harr0ey/status/992008180904419328
Acknowledgement:
  - Person: Matt harr0ey
    Handle: '@harr0ey'
---
