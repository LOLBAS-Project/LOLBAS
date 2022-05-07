---
Name: OfflineScannerShell.exe
Description: Windows Defender Offline Shell
Author: 'Elliot Killick'
Created: '2021-08-16'
Commands:
  - Command: OfflineScannerShell
    Description: Execute mpclient.dll library in the current working directory
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows 10
Full_Path:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/35a7244c62820fbc5a832e50b1e224ac3a1935da/rules/windows/process_creation/proc_creation_win_lolbas_offlinescannershell.yml
  - Path: C:\Program Files\Windows Defender\Offline\OfflineScannerShell.exe
Detection:
  - IOC: OfflineScannerShell.exe should not be run on a normal workstation
Acknowledgement:
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
