---
Name: VSIISExeLauncher.exe
Description: Binary will execute specified binary. Part of VS/VScode installation.
Author: 'timwhite'
Created: '2021-09-24'
Commands:
  - Command: VSIISExeLauncher.exe -p [PATH_TO_BIN] -a "argument here"
    Description: The above binary will execute other binary.
    Usecase: Execute any binary with given arguments.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 and up with VS/VScode installed
Full_Path:
  - Path: 'C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\IDE\Extensions\Microsoft\Web Tools\ProjectSystem\VSIISExeLauncher.exe'
Code_Sample:
  - Code:
Detection:
  - IOC: VSIISExeLauncher.exe spawned an unknown process
Resources:
  - Link: https://github.com/timwhitez
Acknowledgement:
  - Person: timwhite
    Handle:
---
