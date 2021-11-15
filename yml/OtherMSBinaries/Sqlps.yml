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
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_use_of_sqlps_bin.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/80d2aee9449050652ca02fe8892e7bc23de3b70c/rules/windows/image_load/sysmon_in_memory_powershell.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/execution_suspicious_powershell_imgload.toml
  - Splunk: https://github.com/splunk/security_content/blob/aa9f7e0d13a61626c69367290ed1b7b71d1281fd/docs/_posts/2021-10-05-suspicious_copy_on_system32.md
Resources:
  - Link: https://twitter.com/bryon_/status/975835709587075072
  - Link: https://docs.microsoft.com/en-us/sql/powershell/sql-server-powershell?view=sql-server-2017
Acknowledgement:
  - Person: Bryon
    Handle: '@bryon_'
---
