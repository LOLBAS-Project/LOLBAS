---
Name: Slmgr.vbs
Description: Script used to manage windows license activation
Author: 'Oddvar Moe'
Created: '2018-05-25'
Commands:
  - Command: reg.exe import c:\path\to\Slmgr.reg & cscript.exe /b c:\windows\system32\slmgr.vbs
    Description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216
    MitreLink: https://attack.mitre.org/wiki/Technique/T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\slmgr.vbs
  - Path: C:\Windows\SysWOW64\slmgr.vbs
Code_Sample: 
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr_calc.sct
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Slmgr.reg
Detection:
  - IOC:
Resources:
  - Link: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
  - Link: https://www.youtube.com/watch?v=3gz1QmiMhss
Acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
  - Person: Casey Smith
    Handle: '@subtee'
---