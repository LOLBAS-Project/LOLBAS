## Shell32.dll
* Functions: Execute
```

rundll32.exe shell32.dll,Control_RunDLL payload.dll
Launch DLL payload.

rundll32.exe shell32.dll,ShellExec_RunDLL beacon.exe
Launch executable payload.

rundll32 SHELL32.DLL,ShellExec_RunDLL "cmd.exe" "/c echo hi"
Launch executable payload with arguments.
```
   
* Resources:   
  * https://twitter.com/Hexacorn/status/885258886428725250
  * https://twitter.com/pabraeken/status/991768766898941953
  * https://twitter.com/mattifestation/status/776574940128485376
  * https://twitter.com/KyleHanslovan/status/905189665120149506
   
* Full path:   
  * c:\windows\system32\shell32.dll
  * c:\windows\sysWOW64\shell32.dll
   
* Notes: Thanks to Adam - @hexacorn (Control_RunDLL), Pierre-Alexandre Braeken - @pabraeken (ShellExec_RunDLL), Matt Graeber - @mattifestation (ShellExec_RunDLL), Kyle Hanslovan - @KyleHanslovan (ShellExec_RunDLL)  
   
