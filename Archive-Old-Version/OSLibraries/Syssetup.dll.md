## Syssetup.dll
* Functions: Execute
```

rundll32 syssetup,SetupInfObjectInstallAction DefaultInstall 128 c:\temp\calc.INF
Launch an executable file via the SetupInfObjectInstallAction function and .inf file section directive.

rundll32.exe syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\\test\\shady.inf
Remote fetch and execute a COM Scriptlet by calling an information file directive.
```
   
* Resources:   
  * https://twitter.com/pabraeken/status/994392481927258113
  * https://twitter.com/harr0ey/status/975350238184697857
  * https://twitter.com/bohops/status/975549525938135040
   
* Full path:   
  * c:\windows\system32\Syssetup.dll
  * c:\windows\sysWOW64\Syssetup.dll
   
* Notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (Execute), Matt harr0ey - @harr0ey (Execute), Jimmy - @bohops (COM Scriptlet)  
   
