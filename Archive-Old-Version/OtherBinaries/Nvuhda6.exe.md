## Nvuhda6.exe
* Functions: Execute, Copy, Add registry, Create shortcut, kill process
```

nvuhda6.exe System calc.exe
Execute calc.exe as a subprocess.

nvuhda6.exe Copy test.txt,test-2.txt
Copy fila A to file B.

nvuhda6.exe SetReg HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run\malware=malware.exe
Add/Edit a Registry key value

nvuhda6.exe CreateShortcut test.lnk,"Test","C:\Windows\System32\calc.exe","","C:\Windows\System32\"
Create shortcut file.

nvuhda6.exe KillApp calc.exe
Kill a process.

nvuhda6.exe Run foo
Run process
```
   
* Resources:   
  * http://www.hexacorn.com/blog/2017/11/10/reusigned-binaries-living-off-the-signed-land/
   
* Full path:   
  * Missing
   
* Notes: Thanks to Adam - @hexacorn  
   
