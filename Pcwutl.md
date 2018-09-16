---
name: pcwutl.dll
description: Program Compatibility Troubleshooter Helper
functions:
  execute:
    - description: Launch executable by calling the LaunchApplication function.
      code: rundll32.exe pcwutl.dll,LaunchApplication calc.exe
resources:
    - resource: https://twitter.com/harr0ey/status/989617817849876488
    - resource: https://windows10dll.nirsoft.net/pcwutl_dll.html
fullpath: 
    - path: c:\windows\system32\pcwutl.dll
    - path: c:\windows\syswow64\pcwutl.dll
notes: Thanks to Matt harr0ey - @harr0ey.
---