---
Name: Mshtml.dll
Description: Microsoft HTML Viewer
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe Mshtml.dll,PrintHTML "C:\temp\calc.hta"
    Description: Invoke an HTML Application via mshta.exe (Note - Pops a security warning and a print dialogue box).
    Usecase: Launch an HTA application.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\mshtml.dll
  - Path: c:\windows\syswow64\mshtml.dll
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/998567549670477824
  - Link: https://windows10dll.nirsoft.net/mshtml_dll.html
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
