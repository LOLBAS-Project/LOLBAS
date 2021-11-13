---
Name: Control.exe
Description: Binary used to launch controlpanel items in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: control.exe c:\windows\tasks\file.txt:evil.dll
    Description: Execute evil.dll which is stored in an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1218.002
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\control.exe
  - Path: C:\Windows\SysWOW64\control.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/e8b633f54fce88e82b1c3d5e7c7bfa7d3d0beee7/rules/windows/process_creation/win_susp_control_cve_2021_40444.yml
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_control_dll_load.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/0875c1e4c4370ab9fbf453c8160bb5abc8ad95e7/rules/windows/defense_evasion_execution_control_panel_suspicious_args.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_unusual_dir_ads.toml
 - IOC: Control.exe executing files from alternate data streams
 - IOC: Control.exe executing library file without cpl extension 
 - IOC: Suspicious network connections from control.exe
Resources:
  - Link: https://pentestlab.blog/2017/05/24/applocker-bypass-control-panel/
  - Link: https://www.contextis.com/resources/blog/applocker-bypass-registry-key-manipulation/
  - Link: https://twitter.com/bohops/status/955659561008017409
  - Link: https://docs.microsoft.com/en-us/windows/desktop/shell/executing-control-panel-items
  - Link: https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
