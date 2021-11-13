---
Name: Cscript.exe
Description: Binary used to execute scripts in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: cscript c:\ads\file.txt:script.vbs
    Description: Use cscript.exe to exectute a Visual Basic script stored in an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cscript.exe
  - Path: C:\Windows\SysWOW64\cscript.exe
Code_Sample:
 - Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_script_execution.yml
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/file_event/sysmon_susp_clr_logs.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_unusual_dir_ads.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/command_and_control_remote_file_copy_scripts.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
 - Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/wscript_or_cscript_suspicious_child_process.yml
 - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
 - IOC: Cscript.exe executing files from alternate data streams
 - IOC: DotNet CLR libraries loaded into cscript.exe
 - IOC: DotNet CLR Usage Log - cscript.exe.log
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
