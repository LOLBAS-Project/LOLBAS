---
name: zipfldr.dll
description: Compressed Folder library
functions:
  execute:
    - description: Launch an executable payload by calling RouteTheCall.
      code: rundll32.exe zipfldr.dll,RouteTheCall calc.exe
    - description: Launch an executable payload by calling RouteTheCall (obfuscated).
      code: rundll32.exe zipfldr.dll,RouteTheCall file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
resources:
    - resource: https://twitter.com/moriarty_meng/status/977848311603380224
    - resource: https://twitter.com/bohops/status/997896811904929792
    - resource: https://windows10dll.nirsoft.net/zipfldr_dll.html
fullpath: 
    - path: c:\windows\system32\zipfldr.dll
    - path: c:\windows\syswow64\zipfldr.dll
notes: Thanks to Moriarty - @moriarty_meng (Execute), r0lan - @yeyint_mth (Obfuscation)
---