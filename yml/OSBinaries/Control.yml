---
Name: Control.exe
Description: Binary used to launch controlpanel items in Windows
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: control.exe c:\windows\tasks\file.txt:evil.dll
    Description: Execute evil.dll which is stored in an Alternate Data Stream (ADS).
    Usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
    Category: ADS
    Privileges: User
    MitreID: T1218.002
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\control.exe
  - Path: C:\Windows\SysWOW64\control.exe
Code_Sample:
- Code:
Detection:
 - IOC: Control.exe executing files from alternate data streams.
Resources:
  - Link: https://pentestlab.blog/2017/05/24/applocker-bypass-control-panel/
  - Link: https://www.contextis.com/resources/blog/applocker-bypass-registry-key-manipulation/
  - Link: https://twitter.com/bohops/status/955659561008017409
  - Link: https://docs.microsoft.com/en-us/windows/desktop/shell/executing-control-panel-items
  - Link: https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
