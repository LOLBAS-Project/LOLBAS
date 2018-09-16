---
name: ieframe.dll
description: Internet Browser DLL for translating HTML code.
functions:
  execute:
    - description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
      code: rundll32.exe ieframe.dll,OpenURL "C:\test\calc.url"
    - description: Launch an executable payload via proxy through a renamed URL (information) file by calling OpenURL.
      code: rundll32.exe ieframe.dll,OpenURL c:\\test\\calc-url-file.zz
resources:
    - resource: http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
    - resource: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - resource: https://twitter.com/bohops/status/997690405092290561
    - resource: https://gist.githubusercontent.com/bohops/89d7b11fa32062cfe31be9fdb18f050e/raw/1206a613a6621da21e7fd164b80a7ff01c5b64ab/calc.url
    - resource: https://windows10dll.nirsoft.net/ieframe_dll.html
fullpath: 
    - path: c:\windows\system32\ieframe.dll
    - path: c:\windows\syswow64\ieframe.dll
notes: Thanks to Adam - @hexacorn, Jimmy - @bohops
---