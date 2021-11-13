---
Name: WorkFolders.exe
Description: Work Folders
Author: 'Elliot Killick'
Created: '2021-08-16'
Commands:
  - Command: WorkFolders
    Description: Execute control.exe in the current working directory
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\WorkFolders.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b4d5b44ea86cda24f38a87d3b0c5f9d4455bf841/rules/windows/process_creation/win_susp_workfolders.yml
  - IOC: WorkFolders.exe should not be run on a normal workstation
Resources:
  - Link: https://www.ctus.io/2021/04/12/exploading/
  - Link: https://twitter.com/ElliotKillick/status/1449812843772227588
Acknowledgement:
  - Person: John Carroll
    Handle: '@YoSignals'
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
