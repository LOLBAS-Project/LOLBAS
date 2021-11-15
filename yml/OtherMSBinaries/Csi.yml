---
Name: csi.exe
Description: Command line interface included with Visual Studio.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: csi.exe file
    Description: Use csi.exe to run unsigned C# code.
    Usecase: Local execution of unsigned C# code.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: c:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\Roslyn\csi.exe
  - Path: c:\Program Files (x86)\Microsoft Web Tools\Packages\Microsoft.Net.Compilers.X.Y.Z\tools\csi.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/7bca85e40618126643b9712b80bd663c21908e26/rules/windows/process_creation/win_susp_csi.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_use_of_csharp_console.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: https://twitter.com/subTee/status/781208810723549188
  - Link: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
