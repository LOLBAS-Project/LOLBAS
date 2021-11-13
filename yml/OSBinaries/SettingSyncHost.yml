---
Name: SettingSyncHost.exe
Description: Host Process for Setting Synchronization
Author: 'Elliot Killick'
Created: '2021-08-26'
Commands:
  - Command: SettingSyncHost -LoadAndRunDiagScript anything
    Description: Execute file specified in %COMSPEC%
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 8, Windows 8.1, Windows 10
  - Command: SettingSyncHost -LoadAndRunDiagScriptNoCab anything
    Description: Execute a batch script in the background (no window ever pops up) which can be subverted to running arbitrary programs by setting the current working directory to %TMP% and creating files such as reg.bat/reg.exe in that directory thereby causing them to execute instead of the ones in C:\Windows\System32.
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism. Additionally, effectively act as a -WindowStyle Hidden option (as there is in PowerShell) for any arbitrary batch file.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\SettingSyncHost.exe
  - Path: C:\Windows\SysWOW64\SettingSyncHost.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_using_settingsynchost_as_lolbin.yml
  - IOC: SettingSyncHost.exe should not be run on a normal workstation
Resources:
  - Link: https://www.hexacorn.com/blog/2020/02/02/settingsynchost-exe-as-a-lolbin/
Acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
