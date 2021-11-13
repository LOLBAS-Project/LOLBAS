---
Name: SQLToolsPS.exe
Description: Tool included with Microsoft SQL that loads SQL Server cmdlts. A replacement for sqlps.exe. Successor to sqlps.exe in SQL Server 2016+.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: SQLToolsPS.exe -noprofile -command Start-Process calc.exe
    Description: Run a SQL Server PowerShell mini-console without Module and ScriptBlock Logging.
    Usecase: Execute PowerShell command.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program files (x86)\Microsoft SQL Server\130\Tools\Binn\sqlps.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_use_of_sqltoolsps_bin.yml
  - Splunk: https://github.com/splunk/security_content/blob/aa9f7e0d13a61626c69367290ed1b7b71d1281fd/docs/_posts/2021-10-05-suspicious_copy_on_system32.md
Resources:
  - Link: https://twitter.com/pabraeken/status/993298228840992768
  - Link: https://docs.microsoft.com/en-us/sql/powershell/sql-server-powershell?view=sql-server-2017
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
