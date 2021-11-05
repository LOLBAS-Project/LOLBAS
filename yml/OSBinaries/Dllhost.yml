---
Name: Dllhost.exe
Description: Used by Windows to DLL Surrogate COM Objects
Author: 'Nasreddine Bencherchali'
Created: '2020-11-07'
Commands:
  - Command: dllhost.exe /Processid:{CLSID}
    Description: Use dllhost.exe to load a registered or hijacked COM Server payload.
    Usecase: Execute a DLL Surrogate COM Object.
    Category: Execute
    Privileges: User
    MitreID: T1546.015
    OperatingSystem: Windows 10 (and likely previous versions)
Full_Path:
  - Path: C:\Windows\System32\dllhost.exe
  - Path: C:\Windows\SysWOW64\dllhost.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://twitter.com/CyberRaiju/status/1167415118847598594
  - Link: https://nasbench.medium.com/what-is-the-dllhost-exe-process-actually-running-ef9fe4c19c08
Acknowledgement:
  - Person: Jai Minton
    Handle: '@CyberRaiju'
  - Person: Nasreddine Bencherchali
    Handle: '@nas_bench'
---
