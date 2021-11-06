---
Name: Zipfldr.dll
Description: Compressed Folder library
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe zipfldr.dll,RouteTheCall calc.exe
    Description: Launch an executable payload by calling RouteTheCall.
    Usecase: Launch an executable.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe zipfldr.dll,RouteTheCall file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
    Description: Launch an executable payload by calling RouteTheCall (obfuscated).
    Usecase: Launch an executable.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\zipfldr.dll
  - Path: c:\windows\syswow64\zipfldr.dll
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://twitter.com/moriarty_meng/status/977848311603380224
  - Link: https://twitter.com/bohops/status/997896811904929792
  - Link: https://windows10dll.nirsoft.net/zipfldr_dll.html
Acknowledgement:
  - Person: Moriarty (Execution)
    Handle: '@moriarty_meng'
  - Person: r0lan (Obfuscation)
    Handle: '@r0lan'
---
