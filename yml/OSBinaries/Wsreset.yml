---
Name: Wsreset.exe
Description: Used to reset Windows Store settings according to its manifest file
Author: 'Oddvar Moe'
Created: 2019-03-18
Commands:
  - Command: wsreset.exe
    Description: During startup, wsreset.exe checks the registry value HKCU\Software\Classes\AppX82a6gwre4fdg3bt635tn5ctqjf8msdd2\Shell\open\command for the command to run. Binary will be executed as a high-integrity process without a UAC prompt being displayed to the user.
    Usecase: Execute a binary or script as a high-integrity process without a UAC prompt.
    Category: UAC bypass
    Privileges: User
    MitreID: T1548.002
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\wsreset.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_wsreset_uac_bypass.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/af599e487728ec95eab96d8a980718aa6a0699e4/rules/windows/process_creation/win_uac_bypass_wsreset.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_uac_wsreset.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/registry_event/sysmon_bypass_via_wsreset.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/wsreset_uac_bypass.yml
  - IOC: wsreset.exe launching child process other than mmc.exe
  - IOC: Creation or modification of the registry value HKCU\Software\Classes\AppX82a6gwre4fdg3bt635tn5ctqjf8msdd2\Shell\open\command
  - IOC: Microsoft Defender Antivirus as Behavior:Win32/UACBypassExp.T!gen
Resources:
  - Link: https://www.activecyber.us/activelabs/windows-uac-bypass
  - Link: https://twitter.com/ihack4falafel/status/1106644790114947073
  - Link: https://github.com/hfiref0x/UACME/blob/master/README.md
Acknowledgement:
  - Person: Hashim Jawad
    Handle: '@ihack4falafel'
---
