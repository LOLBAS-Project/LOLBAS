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
 - IOC: 4688 events with fltMC.exe
Resources:
  - Link: https://www.darkoperator.com/blog/2018/10/5/operating-offensively-against-sysmon
Acknowledgement:
  - Person: Carlos Perez
    Handle: '@Carlos_Perez'
---
