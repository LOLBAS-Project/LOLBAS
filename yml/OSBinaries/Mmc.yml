---
Name: Mmc.exe
Description: Load snap-ins to locally and remotely manage Windows systems
Author: '@bohops'
Created: 2018-12-04
Commands:
  - Command: mmc.exe -Embedding c:\path\to\test.msc
    Description: Launch a 'backgrounded' MMC process and invoke a COM payload
    Usecase: Configure a snap-in to load a COM custom class (CLSID) that has been added to the registry
    Category: Execute
    Privileges: User
    MitreID: T1218.014
    OperatingSystem: Windows 10 (and possibly earlier versions)
Full_Path:
  - Path: C:\Windows\System32\mmc.exe
  - Path: C:\Windows\SysWOW64\mmc.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
