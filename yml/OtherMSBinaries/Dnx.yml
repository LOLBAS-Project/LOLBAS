---
Name: dnx.exe
Description: .Net Execution environment file included with .Net.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: dnx.exe consoleapp
    Description: Execute C# code located in the consoleapp folder via 'Program.cs' and 'Project.json' (Note - Requires dependencies)
    Usecase: Local execution of C# project stored in consoleapp folder.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: N/A
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_dnx.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
Acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
---
