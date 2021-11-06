---
Name: CL_Invocation.ps1
Description: Aero diagnostics script
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: . C:\\Windows\\diagnostics\\system\\AERO\\CL_Invocation.ps1   \nSyncInvoke <executable> [args]
    Description: Import the PowerShell Diagnostic CL_Invocation script and call SyncInvoke to launch an executable.
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1
  - Path: C:\Windows\diagnostics\system\Audio\CL_Invocation.ps1
  - Path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Invocation.ps1
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/2d36d62e88c45a59e22d17849b41ba346a1cb66a/rules/windows/process_creation/win_cl_invocation_lolscript.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/e5b3a1cc14aaad6f2acc569fab9849567f98df3e/rules/windows/powershell/powershell_script/powershell_cl_invocation_lolscript_count.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/e5b3a1cc14aaad6f2acc569fab9849567f98df3e/rules/windows/powershell/powershell_script/powershell_cl_invocation_lolscript.yml
Resources:
  - Link:
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
