---
Name: Sqlps.exe
Description: Tool included with Microsoft SQL Server that loads SQL Server cmdlets. Microsoft SQL Server\100 and 110 are Powershell v2. Microsoft SQL Server\120 and 130 are Powershell version 4. Replaced by SQLToolsPS.exe in SQL Server 2016, but will be included with installation for compatability reasons.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Sqlps.exe -noprofile
    Description: Run a SQL Server PowerShell mini-console without Module and ScriptBlock Logging.
    Usecase: Execute PowerShell commands without ScriptBlock logging.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program files (x86)\Microsoft SQL Server\100\Tools\Binn\sqlps.exe
  - Path: C:\Program files (x86)\Microsoft SQL Server\110\Tools\Binn\sqlps.exe
  - Path: C:\Program files (x86)\Microsoft SQL Server\120\Tools\Binn\sqlps.exe
  - Path: C:\Program files (x86)\Microsoft SQL Server\130\Tools\Binn\sqlps.exe
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://twitter.com/bryon_/status/975835709587075072
  - Link: https://docs.microsoft.com/en-us/sql/powershell/sql-server-powershell?view=sql-server-2017
Acknowledgement:
  - Person: Bryon
    Handle: '@bryon_'
---
