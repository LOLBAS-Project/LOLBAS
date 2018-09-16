---
name: syssetup.dll
description: Windows NT System Setup 
functions:
  awl-bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\\test\\shady.inf   
  execute:
    - description: Launch an executable file via the SetupInfObjectInstallAction function and .inf file section directive.
      code: rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\temp\calc.INF
resources:
    - resource: https://twitter.com/pabraeken/status/994392481927258113
    - resource: https://twitter.com/harr0ey/status/975350238184697857
    - resource: https://twitter.com/bohops/status/975549525938135040
    - resource: https://raw.githubusercontent.com/huntresslabs/evading-autoruns/master/shady.inf
    - resource: https://gist.github.com/enigma0x3/469d82d1b7ecaf84f4fb9e6c392d25ba#file-backdoor-minimalist-sct
    - resource: https://gist.githubusercontent.com/bohops/0cc6586f205f3691e04a1ebf1806aabd/raw/baf7b29891bb91e76198e30889fbf7d6642e8974/calc_exe.inf
    - resource: https://windows10dll.nirsoft.net/syssetup_dll.html
fullpath: 
    - path: c:\windows\system32\syssetup.dll
    - path: c:\windows\syswow64\syssetup.dll
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (Execute), Matt harr0ey - @harr0ey (Execute), Jimmy - @bohops (COM Scriptlet)
---