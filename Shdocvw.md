---
name: shdocvw.dll
description: Shell Doc Object and Control Library.
functions:
  execute:
    - description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
      code: rundll32.exe shdocvw.dll,OpenURL "C:\test\calc.url"
    - description: Launch an executable payload via proxy through a renamed URL (information) file by calling OpenURL.
      code: rundll32.exe shdocvw.dll,OpenURL "C:\test\calc.zz"
resources:
    - resource: http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
    - resource: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - resource: https://twitter.com/bohops/status/997690405092290561
    - resource: https://gist.githubusercontent.com/bohops/89d7b11fa32062cfe31be9fdb18f050e/raw/1206a613a6621da21e7fd164b80a7ff01c5b64ab/calc.url
    - resource: https://windows10dll.nirsoft.net/shdocvw_dll.html
fullpath: 
    - path: c:\windows\system32\shdocvw.dll
    - path: c:\windows\syswow64\shdocvw.dll
notes: Thanks to Adam - @hexacorn, Jimmy - @bohops
---