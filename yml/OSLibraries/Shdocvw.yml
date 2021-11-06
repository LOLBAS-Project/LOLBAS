---
Name: Shdocvw.dll
Description: Shell Doc Object and Control Library.
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe shdocvw.dll,OpenURL "C:\test\calc.url"
    Description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
    Usecase: Load an executable payload by calling a .url file with or without quotes.  The .url file extension can be renamed.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\shdocvw.dll
  - Path: c:\windows\syswow64\shdocvw.dll
Code_Sample:
  - Code: https://gist.githubusercontent.com/bohops/89d7b11fa32062cfe31be9fdb18f050e/raw/1206a613a6621da21e7fd164b80a7ff01c5b64ab/calc.url
Detection:
  - IOC:
Resources:
    - Link: http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
    - Link: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - Link: https://twitter.com/bohops/status/997690405092290561
    - Link: https://windows10dll.nirsoft.net/shdocvw_dll.html
Acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
  - Person: Jimmy
    Handle: '@bohops'
---
