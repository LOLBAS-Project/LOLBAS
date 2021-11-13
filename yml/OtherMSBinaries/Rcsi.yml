---
Name: rcsi.exe
Description: Non-Interactive command line inerface included with Visual Studio.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: rcsi.exe bypass.csx
    Description: Use embedded C# within the csx script to execute the code.
    Usecase: Local execution of arbitrary C# code stored in local CSX file.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
  - Command: rcsi.exe bypass.csx
    Description: Use embedded C# within the csx script to execute the code.
    Usecase: Local execution of arbitrary C# code stored in local CSX file.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path:
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/7bca85e40618126643b9712b80bd663c21908e26/rules/windows/process_creation/win_susp_csi.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://github.com/SigmaHQ/sigma/blob/7bca85e40618126643b9712b80bd663c21908e26/rules/windows/process_creation/win_susp_csi.yml
Resources:
  - Link: https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/
Acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
---
