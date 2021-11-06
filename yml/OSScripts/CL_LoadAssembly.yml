---
Name: CL_LoadAssembly.ps1
Description: PowerShell Diagnostic Script
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: '”powershell.exe -command "set-location -path C:\Windows\diagnostics\system\Audio; import-module .\CL_LoadAssembly.ps1; LoadAssemblyFromPath ..\..\..\..\testing\fun.dll;[Program]::Fun()'
    Description: Proxy execute Managed DLL with PowerShell
    Usecase: Execute proxied payload with Microsoft signed binary
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10 21H1 (likely other versions as well)
Full_Path:
  - Path: C:\Windows\diagnostics\system\Audio\CL_LoadAssembly.ps1
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
