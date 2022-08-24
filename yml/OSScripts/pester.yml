---
Name: Pester.bat
Description: Used as part of the Powershell pester
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Pester.bat [/help|?|-?|/?] "$null; notepad"
    Description: Execute code using Pester. The third parameter can be anything. The fourth is the payload. Example here executes notepad
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
  - Command: Pester.bat ;calc.exe
    Description: Execute code using Pester. Example here executes calc.exe
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: c:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\bin\Pester.bat
  - Path: c:\Program Files\WindowsPowerShell\Modules\Pester\*\bin\Pester.bat
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_pester.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/process_creation/proc_creation_win_susp_pester_parent.yml
Resources:
  - Link: https://twitter.com/Oddvarmoe/status/993383596244258816
  - Link: https://twitter.com/_st0pp3r_/status/1560072680887525378
Acknowledgement:
  - Person: Emin Atac
    Handle: '@p0w3rsh3ll'
  - Person: Stamatis Chatzimangou
    Handle: '@_st0pp3r_' 
---
