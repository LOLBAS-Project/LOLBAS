---
Name: Reg.exe
Description: Used to manipulate the registry
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: reg export HKLM\SOFTWARE\Microsoft\Evilreg c:\ads\file.txt:evilreg.reg
    Description: Export the target Registry key and save it to the specified .REG file within an Alternate data stream.
    Usecase: Hide/plant registry information in Alternate data stream for later use
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: reg save HKLM\SECURITY c:\test\security.bak && reg save HKLM\SYSTEM c:\test\system.bak && reg save HKLM\SAM c:\test\sam.bak
    Description: Dump registry hives (SAM, SYSTEM, SECURITY) to retrieve password hashes and key material
    Usecase: Dump credentials from the Security Account Manager (SAM)
    Category: Credentials
    Privileges: Administrator
    MitreID: T1003.002
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\reg.exe
  - Path: C:\Windows\SysWOW64\reg.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/d9edc9f0e365257aa497cc7707e58f396088958e/rules/windows/process_creation/win_regedit_import_keys_ads.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/d9edc9f0e365257aa497cc7707e58f396088958e/rules/windows/process_creation/win_regedit_import_keys.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/9f27ab5426a0b061f1f2787e3dc947d6d75ad8c0/rules/windows/process_creation/win_grabbing_sensitive_hives_via_reg.yml
  - Splunk: https://github.com/splunk/security_content/blob/bee2a4cefa533f286c546cbe6798a0b5dec3e5ef/detections/endpoint/attempted_credential_dump_from_registry_via_reg_exe.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/f6421d8c534f295518a2c945f530e8afc4c8ad1b/rules/windows/credential_access_dump_registry_hives.toml
  - IOC: reg.exe writing to an ADS
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://pure.security/dumping-windows-credentials/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
