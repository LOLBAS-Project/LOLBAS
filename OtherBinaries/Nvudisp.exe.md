## Nvudisp.exe
* Functions: Execute, Copy, Add registry, Create shortcut, kill process
```

Nvudisp.exe System calc.exe
Execute calc.exe as a subprocess.

Nvudisp.exe Copy test.txt,test-2.txt
Copy fila A to file B.

Nvudisp.exe SetReg HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Run\malware=malware.exe
Add/Edit a Registry key value.

Nvudisp.exe CreateShortcut test.lnk,"Test","c:\windows\system32\calc.exe\","","c:\windows\system32\"
Create shortcut file.

Nvudisp.exe KillApp calculator.exe
Kill a process.

Nvudisp.exe Run foo
Run process
```
   
* Resources:   
  * http://sysadminconcombre.blogspot.ca/2018/04/run-system-commands-through-nvidia.html
   
* Full path:   
  * C:\windows\system32\nvuDisp.exe
   
* Notes: Thanks to Pierre-Alexandre Braeken - @pabraeken  
   
