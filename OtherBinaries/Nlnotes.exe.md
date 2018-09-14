## Nlnotes.exe
* Functions: Execute
```

NLNOTES.EXE /authenticate "=N:\Lotus\Notes\Data\notes.ini" -Command if((Get-ExecutionPolicy ) -ne AllSigned) { Set-ExecutionPolicy -Scope Process Bypass }
Run PowerShell via LotusNotes.
```
   
* Resources:   
  * https://gist.github.com/danielbohannon/50ec800e92a888b7d45486e5733c359f
  * https://twitter.com/HanseSecure/status/995578436059127808
   
* Full path:   
  * C:\Program Files (x86)\IBM\Lotus\Notes\Notes.exe
   
* Notes: Thanks to Daniel Bohannon - @danielhbohannon  
   
