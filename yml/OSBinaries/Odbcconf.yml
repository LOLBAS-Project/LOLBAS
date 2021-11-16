---
Name: Odbcconf.exe
Description: Used in Windows for managing ODBC connections
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: odbcconf -f file.rsp
    Description: Load DLL specified in target .RSP file. See the Playloads folder for an example .RSP file.
    Usecase: Execute dll file using technique that can evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218.008
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: odbcconf /a {REGSVR c:\test\test.dll}
    Description: Execute DllREgisterServer from DLL specified.
    Usecase: Execute dll file using technique that can evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218.008
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\odbcconf.exe
  - Path: C:\Windows\SysWOW64\odbcconf.exe
Code_Sample:
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/file.rsp
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_odbcconf.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Resources:
  - Link: https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
  - Link: https://github.com/woanware/application-restriction-bypasses
  - Link: https://twitter.com/Hexacorn/status/1187143326673330176
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Adam
    Handle: '@Hexacorn'
---
