---
name: url.dll
description: Internet Shortcut Shell Extension DLL.
functions:
  execute:
    - description: Launch a HTML application payload by calling OpenURL.
      code: rundll32.exe url.dll,OpenURL "C:\\test\\calc.hta"
    - description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
      code: rundll32.exe url.dll,OpenURL "C:\\test\\calc.url"
    - description: Launch an executable payload by calling OpenURL (obfuscated).
      code: rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
    - description: Launch an executable payload by calling FileProtocolHandler.
      code: rundll32.exe url.dll,FileProtocolHandler calc.exe
    - description: Launch a HTML application payload by calling FileProtocolHandler.
      code: rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
    - description: Launch an executable payload by calling FileProtocolHandler (obfuscated).
      code: rundll32.exe url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
resources:
    - resource: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - resource: https://twitter.com/DissectMalware/status/995348436353470465
    - resource: https://twitter.com/bohops/status/974043815655956481
    - resource: https://twitter.com/yeyint_mth/status/997355558070927360
    - resource: https://twitter.com/Hexacorn/status/974063407321223168
    - resource: https://windows10dll.nirsoft.net/url_dll.html
fullpath: 
    - path: c:\windows\system32\url.dll
    - path: c:\windows\syswow64\url.dll
notes: Thanks to Jimmy - @bohops (OpenURL), Adam - @hexacorn (OpenURL), Malwrologist - @DissectMalware (FileProtocolHandler - HTA), r0lan - @yeyint_mth (Obfuscation)
---