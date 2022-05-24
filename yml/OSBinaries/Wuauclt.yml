---
Name: wuauclt.exe
Description: Windows Update Client
Author: 'David Middlehurst'
Created: 2020-09-23
Commands:
  - Command: wuauclt.exe /UpdateDeploymentProvider Full_Path_To_DLL /RunHandlerComServer
    Description: Full_Path_To_DLL would be the abosolute path to .DLL file and would execute code on attach.
    Usecase: Execute dll via attach/detach methods
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\wuauclt.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/network_connection/sysmon_wuauclt_network_connection.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/f16aca7a353bb01d9862ea1f2a10fa0d866e83c3/rules/windows/process_creation/sysmon_proxy_execution_wuauclt.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/30bee7204cc1b98a47635ed8e52f44fdf776c602/rules/windows/process_creation/win_susp_wuauclt.yml 
  - IOC: wuauclt run with a parameter of a DLL path
  - IOC: Suspicious wuauclt Internet/network connections
Resources:
  - Link: https://dtm.uk/wuauclt/
Acknowledgement:
  - Person: David Middlehurst
    Handle: '@dtmsecurity'
---
