---
Name: Pcwutl.dll
Description: Microsoft HTML Viewer
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe pcwutl.dll,LaunchApplication calc.exe
    Description: Launch executable by calling the LaunchApplication function.
    Usecase: Launch an executable.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\pcwutl.dll
  - Path: c:\windows\syswow64\pcwutl.dll
Code_Sample:
  - Code:
Detection:
  - Analysis: https://redcanary.com/threat-detection-report/techniques/rundll32/
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
Resources:
  - Link: https://twitter.com/harr0ey/status/989617817849876488
  - Link: https://windows10dll.nirsoft.net/pcwutl_dll.html
Acknowledgement:
  - Person: Matt harr0ey
    Handle: '@harr0ey'
---
