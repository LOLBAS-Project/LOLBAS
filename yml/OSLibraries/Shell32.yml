---
Name: Shell32.dll
Description: Windows Shell Common Dll
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe shell32.dll,Control_RunDLL payload.dll
    Description: Launch a DLL payload by calling the Control_RunDLL function.
    Usecase: Load a DLL payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe shell32.dll,ShellExec_RunDLL beacon.exe
    Description: Launch an executable by calling the ShellExec_RunDLL function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
  - Command: rundll32 SHELL32.DLL,ShellExec_RunDLL "cmd.exe" "/c echo hi"
    Description: Launch command line by calling the ShellExec_RunDLL function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
Full_Path:
  - Path: c:\windows\system32\shell32.dll
  - Path: c:\windows\syswow64\shell32.dll
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/rundll32_control_rundll_hunt.yml
Resources:
  - Link: https://twitter.com/Hexacorn/status/885258886428725250
  - Link: https://twitter.com/pabraeken/status/991768766898941953
  - Link: https://twitter.com/mattifestation/status/776574940128485376
  - Link: https://twitter.com/KyleHanslovan/status/905189665120149506
  - Link: https://windows10dll.nirsoft.net/shell32_dll.html
Acknowledgement:
  - Person: Adam (Control_RunDLL)
    Handle: '@hexacorn'
  - Person: Pierre-Alexandre Braeken (ShellExec_RunDLL)
    Handle: '@pabraeken'
  - Person: Matt Graeber (ShellExec_RunDLL)
    Handle: '@mattifestation'
  - Person: Kyle Hanslovan (ShellExec_RunDLL)
    Handle: '@KyleHanslovan'
---
