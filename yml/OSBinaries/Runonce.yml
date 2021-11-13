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
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6d2acb166070541925636d1d1273e46020e38387/rules/windows/registry_event/sysmon_runonce_persistence.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_runonce_execution.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/2926e98c5d998706ef7e248a63fb0367c841f685/rules/windows/persistence_run_key_and_startup_broad.toml
  - IOC: Registy key add - HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\YOURKEY
Resources:
  - Link: https://twitter.com/pabraeken/status/990717080805789697
  - Link: https://cmatskas.com/configure-a-runonce-task-on-windows/
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
