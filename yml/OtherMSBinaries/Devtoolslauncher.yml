---
Name: Devtoolslauncher.exe
Description: Binary will execute specified binary. Part of VS/VScode installation.
Author: 'felamos'
Created: 2019-10-04
Commands:
  - Command: devtoolslauncher.exe LaunchForDeploy [PATH_TO_BIN] "argument here" test
    Description: The above binary will execute other binary.
    Usecase: Execute any binary with given arguments and it will call developertoolssvc.exe. developertoolssvc is actually executing the binary. https://i.imgur.com/Go7rc0I.png
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 7 and up with VS/VScode installed
  - Command: devtoolslauncher.exe LaunchForDebug [PATH_TO_BIN] "argument here" test
    Description: The above binary will execute other binary.
    Usecase: Execute any binary with given arguments.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 7 and up with VS/VScode installed
Full_Path:
  - Path: 'c:\windows\system32\devtoolslauncher.exe'
Code_Sample:
  - Code:
Detection:
  - IOC: DeveloperToolsSvc.exe spawned an unknown process
Resources:
  - Link: https://twitter.com/_felamos/status/1179811992841797632
Acknowledgement:
  - Person: felamos
    Handle: '@_felamos'
---
