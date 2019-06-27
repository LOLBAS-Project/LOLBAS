---
Name: Update.exe
Description: Update is the squirrel update utility used by Microsoft Electron app (Teams in this case)
Author: 'Mr.Un1k0d3r'
Created: '2019-06-26'
Commands:
  - Command: Update.exe --processStart payload.exe --process-start-args "whatever args"
    Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.
    Usecase: Application Whitelisting Bypass
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --processStart payload.exe --process-start-args "whatever args"
    Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.
    Usecase: Execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    MitreLink: https://attack.mitre.org/wiki/Technique/T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
Full_Path:
  - Path: '%userprofile%\AppData\Local\Microsoft\Teams\Update.exe'
Detection: 
  - IOC: Update.exe spawned an unknown process
Resources:
  - Link: https://twitter.com/MrUn1k0d3r/status/1143928885211537408
Acknowledgement:
  - Person: Mr.Un1k0d3r
    Handle: '@MrUn1k0d3r'
---
