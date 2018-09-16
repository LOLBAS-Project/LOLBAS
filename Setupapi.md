---
name: setupapi.dll
description: Windows Setup Application Programming Interface
functions:
  awl-bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\\Tools\\shady.inf
  execute:
    - description: Launch an executable file via the InstallHinfSection function and .inf file section directive.
      code: rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\\Tools\\calc_exe.inf
resources:
    - resource: https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
    - resource: https://gist.github.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba#file-backdoor-minimalist-sct
    - resource: https://gist.githubusercontent.com/bohops/0cc6586f205f3691e04a1ebf1806aabd/raw/baf7b29891bb91e76198e30889fbf7d6642e8974/calc_exe.inf
    - resource: https://windows10dll.nirsoft.net/setupapi_dll.html
fullpath: 
    - path: c:\windows\system32\setupapi.dll
    - path: c:\windows\syswow64\setupapi.dll
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (Executable), Kyle Hanslovan - @KyleHanslovan (COM Scriptlet), Huntress Labs - @HuntressLabs (COM Scriptlet), Casey Smith - @subTee (COM Scriptlet).
---