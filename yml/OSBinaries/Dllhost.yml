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
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/network_connection/sysmon_dllhost_net_connections.yml
 - Splunk: https://github.com/splunk/security_content/blob/552b67da9452fb0765e3624b3d6e3ef6c0508bda/detections/endpoint/dllhost_with_no_command_line_arguments_with_network.yml
 - Splunk: https://github.com/splunk/security_content/blob/961a81d4a5cb5c5febec4894d6d812497171a85c/detections/endpoint/suspicious_dllhost_no_command_line_arguments.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/c457614e37bf7b6db02de84c7fa71a5620783236/rules/windows/defense_evasion_unusual_network_connection_via_dllhost.toml
 - IOC: DotNet CLR libraries loaded into dllhost.exe
 - IOC: DotNet CLR Usage Log - dllhost.exe.log
 - IOC: Suspicious network connectings originating from dllhost.exe
Resources:
  - Link: https://twitter.com/CyberRaiju/status/1167415118847598594
  - Link: https://nasbench.medium.com/what-is-the-dllhost-exe-process-actually-running-ef9fe4c19c08
Acknowledgement:
  - Person: Jai Minton
    Handle: '@CyberRaiju'
  - Person: Nasreddine Bencherchali
    Handle: '@nas_bench'
---
