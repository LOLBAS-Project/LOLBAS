---
Name: Msdeploy.exe
Description: Microsoft tool used to deploy Web Applications.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="c:\temp\calc.bat"
    Description: Launch calc.bat via msdeploy.exe.
    Usecase: Local execution of batch file using msdeploy.exe.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows server
  - Command: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="c:\temp\calc.bat"
    Description: Launch calc.bat via msdeploy.exe.
    Usecase: Local execution of batch file using msdeploy.exe.
    Category: AWL bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows server
Full_Path:
  - Path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://twitter.com/pabraeken/status/995837734379032576
  - Link: https://twitter.com/pabraeken/status/999090532839313408
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
