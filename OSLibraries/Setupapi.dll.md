## Setupapi.dll
* Functions: Execute
```

rundll32 setupapi,InstallHinfSection DefaultInstall 132 c:\temp\calc.inf
Launch an executable file via the InstallHinfSection function and .inf file section directive.

rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\\Tools\\shady.inf
Remote fetch and execute a COM Scriptlet by calling an information file directive.
```
   
* Resources:   
  * https://twitter.com/pabraeken/status/994742106852941825
  * https://twitter.com/subTee/status/951115319040356352
  * https://twitter.com/KyleHanslovan/status/911997635455852544
  * https://github.com/huntresslabs/evading-autoruns
   
* Full path:   
  * c:\windows\system32\Setupapi.dll
  * c:\windows\sysWOW64\Setupapi.dll
   
* Notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (Executable), Kyle Hanslovan - @KyleHanslovan (COM Scriptlet), Huntress Labs - @HuntressLabs (COM Scriptlet), Casey Smith - @subTee (COM Scriptlet)  
   
