---
Name: Setupapi.dll
Description: Windows Setup Application Programming Interface
Author:
Created: '2018-05-25'
Commands:
  - Command: rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\Tools\shady.inf
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
    UseCase: Run local or remote script(let) code through INF file specification.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\\Tools\\calc_exe.inf
    Description: Launch an executable file via the InstallHinfSection function and .inf file section directive.
    UseCase: Load an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\setupapi.dll
  - Path: c:\windows\syswow64\setupapi.dll
Code_Sample:
  - Code: https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
  - Code: https://gist.github.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba#file-backdoor-minimalist-sct
  - Code: https://gist.githubusercontent.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba/raw/6cb52b88bcc929f5555cd302d9ed848b7e407052/Backdoor-Minimalist.sct
  - Code: https://gist.githubusercontent.com/bohops/0cc6586f205f3691e04a1ebf1806aabd/raw/baf7b29891bb91e76198e30889fbf7d6642e8974/calc_exe.inf
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_setupapi_installhinfsection.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_rundll32_application_control_bypass___setupapi.yml
Resources:
  - Link: https://github.com/huntresslabs/evading-autoruns
  - Link: https://twitter.com/pabraeken/status/994742106852941825
  - Link: https://windows10dll.nirsoft.net/setupapi_dll.html
Acknowledgement:
  - Person: Kyle Hanslovan (COM Scriptlet)
    Handle: '@KyleHanslovan'
  - Person: Huntress Labs (COM Scriptlet)
    Handle: '@HuntressLabs'
  - Person: Casey Smith (COM Scriptlet)
    Handle: '@subTee'
  - Person: Nick Carr (Threat Intel)
    Handle: '@ItsReallyNick'
---
