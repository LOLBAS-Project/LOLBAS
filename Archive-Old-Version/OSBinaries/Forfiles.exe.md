## Forfiles.exe
* Functions: Execute, Read ADS
```

forfiles /p c:\windows\system32 /m notepad.exe /c calc.exe
Executes calc.exe since there is a match for notepad.exe in the c:\\windows\\System32 folder.

forfiles /p c:\windows\system32 /m notepad.exe /c "c:\folder\normal.dll:evil.exe"
Executes the evil.exe Alternate Data Stream (AD) since there is a match for notepad.exe in the c:\\windows\\system32 folder.
```
   
* Resources:   
  * https://twitter.com/vector_sec/status/896049052642533376
  * https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  * https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
   
* Full path:   
  * C:\Windows\system32\forfiles.exe
  * C:\Windows\sysWOW64\forfiles.exe
   
* Notes: Thanks to Eric - @vector_sec, Oddvar Moe - @oddvarmoe  
   
