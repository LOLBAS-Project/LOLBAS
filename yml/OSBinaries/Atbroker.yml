---
Name: Atbroker.exe
Description: Helper binary for Assistive Technology (AT)
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: ATBroker.exe /start malware
    Description: Start a registered Assistive Technology (AT).
    Usecase: Executes code defined in registry for a new AT. Modifications must be made to the system registry to either register or modify an existing Assistibe Technology (AT) service entry.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\Atbroker.exe
  - Path: C:\Windows\SysWOW64\Atbroker.exe
Code_Sample:
- Code:
Detection:
 - IOC: Changes to HKCU\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\Configuration
 - IOC: Changes to HKLM\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs
 - IOC: Unknown AT starting C:\Windows\System32\ATBroker.exe /start malware
Resources:
  - Link: http://www.hexacorn.com/blog/2016/07/22/beyond-good-ol-run-key-part-42/
Acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
---
