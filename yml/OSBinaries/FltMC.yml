---
Name: fltMC.exe
Description: Filter Manager Control Program used by Windows
Author: 'John Lambert'
Created: '2021-09-18'
Commands:
  - Command: fltMC.exe unload SysmonDrv
    Description: Unloads a driver used by security agents
    Usecase: Defense evasion
    Category: ADS
    Privileges: Admin
    MitreID: T1562.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\fltMC.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c27084dd0c432335fa4369e5002a61dfe0ab9c65/rules/windows/process_creation/win_sysmon_driver_unload.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_via_filter_manager.toml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/unload_sysmon_filter_driver.yml
  - IOC: 4688 events with fltMC.exe
Resources:
  - Link: https://www.darkoperator.com/blog/2018/10/5/operating-offensively-against-sysmon
Acknowledgement:
  - Person: Carlos Perez
    Handle: '@Carlos_Perez'
---
