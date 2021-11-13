---
Name: Url.dll
Description: Internet Shortcut Shell Extension DLL.
Author:
Created: 2018-05-25
Commands:
  - Command: rundll32.exe url.dll,OpenURL "C:\test\calc.hta"
    Description: Launch a HTML application payload by calling OpenURL.
    Usecase: Invoke an HTML Application via mshta.exe (Default Handler).
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe url.dll,OpenURL "C:\test\calc.url"
    Description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
    Usecase: Load an executable payload by calling a .url file with or without quotes.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
    Description: Launch an executable by calling OpenURL.
    Usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe url.dll,FileProtocolHandler calc.exe
    Description: Launch an executable by calling FileProtocolHandler.
    Usecase: Launch an executable.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
    Description: Launch an executable by calling FileProtocolHandler.
    Usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
  - Command: rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
    Description: Launch a HTML application payload by calling FileProtocolHandler.
    Usecase: Invoke an HTML Application via mshta.exe (Default Handler).
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\url.dll
  - Path: c:\windows\syswow64\url.dll
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
Resources:
  - Link: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
  - Link: https://twitter.com/DissectMalware/status/995348436353470465
  - Link: https://twitter.com/bohops/status/974043815655956481
  - Link: https://twitter.com/yeyint_mth/status/997355558070927360
  - Link: https://twitter.com/Hexacorn/status/974063407321223168
  - Link: https://windows10dll.nirsoft.net/url_dll.html
Acknowledgement:
  - Person: Adam (OpenURL)
    Handle: '@hexacorn'
  - Person: Jimmy (OpenURL)
    Handle: '@bohops'
  - Person: Malwrologist (FileProtocolHandler - HTA)
    Handle: '@DissectMalware'
  - Person: r0lan (Obfuscation)
    Handle: '@r0lan'
---
