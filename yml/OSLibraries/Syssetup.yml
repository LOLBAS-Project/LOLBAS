---
Name: Syssetup.dll
Description: Windows NT System Setup
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\test\shady.inf
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
    Usecase: Run local or remote script(let) code through INF file specification (Note May pop an error window).
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\temp\something.inf
    Description: Launch an executable file via the SetupInfObjectInstallAction function and .inf file section directive.
    Usecase: Load an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\syssetup.dll
  - Path: c:\windows\syswow64\syssetup.dll
Code_Sample:
  - Code: https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
  - Code: https://gist.github.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba#file-backdoor-minimalist-sct
  - Code: https://gist.github.com/homjxi0e/87b29da0d4f504cb675bb1140a931415
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_rundll32_application_control_bypass___syssetup.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/994392481927258113
  - Link: https://twitter.com/harr0ey/status/975350238184697857
  - Link: https://twitter.com/bohops/status/975549525938135040
  - Link: https://windows10dll.nirsoft.net/syssetup_dll.html
Acknowledgement:
  - Person: Pierre-Alexandre Braeken (Execute)
    Handle: '@pabraeken'
  - Person: Matt harr0ey (Execute)
    Handle: '@harr0ey'
  - Person: Jimmy (Scriptlet)
    Handle: '@bohops'
---
