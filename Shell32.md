---
name: shell32.dll
description: Windows Shell Common Dll
functions:
  execute:
    - description: Launch DLL payload.
      code: rundll32.exe shell32.dll,Control_RunDLL payload.dll
    - description: Launch executable payload.
      code: rundll32.exe shell32.dll,ShellExec_RunDLL beacon.exe
    - description: Launch executable payload with arguments.
      code: rundll32 SHELL32.DLL,ShellExec_RunDLL "cmd.exe" "/c echo hi"    
resources:
    - resource: https://twitter.com/Hexacorn/status/885258886428725250
    - resource: https://twitter.com/pabraeken/status/991768766898941953
    - resource: https://twitter.com/mattifestation/status/776574940128485376
    - resource: https://twitter.com/KyleHanslovan/status/905189665120149506
    - resource: https://windows10dll.nirsoft.net/shell32_dll.html
fullpath: 
    - path: c:\windows\system32\shell32.dll
    - path: c:\windows\syswow64\shell32.dll
notes: Thanks to Adam - @hexacorn (Control_RunDLL), Pierre-Alexandre Braeken - @pabraeken (ShellExec_RunDLL), Matt Graeber - @mattifestation (ShellExec_RunDLL), Kyle Hanslovan - @KyleHanslovan (ShellExec_RunDLL)
---