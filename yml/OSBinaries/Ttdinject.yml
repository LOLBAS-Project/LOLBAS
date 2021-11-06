---
Name: Ttdinject.exe
Description: Used by Windows 1809 and newer to Debug Time Travel (Underlying call of tttracer.exe)
Author: 'Maxime Nadeau'
Created: 2020-05-12
Commands:
  - Command: TTDInject.exe /ClientParams "7 tmp.run 0 0 0 0 0 0 0 0 0 0" /Launch "C:/Windows/System32/calc.exe"
    Description: Execute calc using ttdinject.exe. Requires administrator privileges. A log file will be created in tmp.run. The log file can be changed, but the length (7) has to be updated.
    Usecase: Spawn process using other binary
    Category: Execute
    Privileges: Administrator
    MitreID: T1127
    OperatingSystem: Windows 10 2004
  - Command: ttdinject.exe /ClientScenario TTDRecorder /ddload 0 /ClientParams "7 tmp.run 0 0 0 0 0 0 0 0 0 0" /launch "C:/Windows/System32/calc.exe"
    Description: Execute calc using ttdinject.exe. Requires administrator privileges. A log file will be created in tmp.run. The log file can be changed, but the length (7) has to be updated.
    Usecase: Spawn process using other binary
    Category: Execute
    Privileges: Administrator
    MitreID: T1127
    OperatingSystem: Windows 10 1909
Full_Path:
  - Path: C:\Windows\System32\ttdinject.exe
  - Path: C:\Windows\Syswow64\ttdinject.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Parent child relationship. Ttdinject.exe parent for executed command
  - IOC: Multiple queries made to the IFEO registry key of an untrusted executable (Ex. "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\payload.exe") from the ttdinject.exe process
Resources:
  - Link: https://twitter.com/Oddvarmoe/status/1196333160470138880
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: Maxime Nadeau
    Handle: '@m_nad0'
---
