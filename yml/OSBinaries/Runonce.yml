---
Name: Runonce.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Runonce.exe /AlternateShellStartup
    Description: Executes a Run Once Task that has been configured in the registry
    Usecase: Persistence, bypassing defensive counter measures
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\runonce.exe
  - Path: C:\Windows\SysWOW64\runonce.exe
Code_Sample:
- Code:
Detection:
 - IOC: HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\YOURKEY
Resources:
  - Link: https://twitter.com/pabraeken/status/990717080805789697
  - Link: https://cmatskas.com/configure-a-runonce-task-on-windows/
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
