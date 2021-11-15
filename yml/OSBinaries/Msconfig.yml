---
Name: Msconfig.exe
Description: MSConfig is a troubleshooting tool which is used to temporarily disable or re-enable software, device drivers or Windows services that run during startup process to help the user determine the cause of a problem with Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: Msconfig.exe -5
    Description: Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml.
    Usecase: Code execution using Msconfig.exe
    Category: Execute
    Privileges: Administrator
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\msconfig.exe
Code_Sample:
  - Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/mscfgtlc.xml
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b731c2059445eef53e37232a5f3634c3473aae0c/rules/windows/process_creation/win_uac_bypass_msconfig_gui.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b731c2059445eef53e37232a5f3634c3473aae0c/rules/windows/file_event/sysmon_uac_bypass_msconfig_gui.yml
  - IOC: mscfgtlc.xml changes in system32 folder
Resources:
  - Link: https://twitter.com/pabraeken/status/991314564896690177
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
