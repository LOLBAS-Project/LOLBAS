---
name: mshtml.dll
description: Microsoft HTML Viewer.
functions:
  execute:
    - description: Invoke an HTML Application via mshta.exe (Note - Pops a security warning and a print dialogue box).
      code: rundll32.exe Mshtml.dll,PrintHTML "C:\temp\calc.hta"
resources:
    - resource: https://twitter.com/pabraeken/status/998567549670477824
    - resource: https://windows10dll.nirsoft.net/mshtml_dll.html
fullpath: 
    - path: c:\windows\system32\mshtml.dll
    - path: c:\windows\syswow64\mshtml.dll
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken.
---