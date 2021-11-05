---
Name: Dotnet.exe
Description: dotnet.exe comes with .NET Framework
Author: 'felamos'
Created: 2019-11-12
Commands:
  - Command: dotnet.exe [PATH_TO_DLL]
    Description: dotnet.exe will execute any dll even if applocker is enabled.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with .NET installed
  - Command: dotnet.exe [PATH_TO_DLL]
    Description: dotnet.exe will execute any DLL.
    Usecase: Execute DLL
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 7 and up with .NET installed
  - Command: dotnet.exe msbuild [Path_TO_XML_CSPROJ]
    Description: dotnet.exe with msbuild (SDK Version) will execute unsigned code
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10 with .NET Core installed
Full_Path:
  - Path: 'C:\Program Files\dotnet\dotnet.exe'
Detection:
  - IOC: dotnet.exe spawned an unknown process
Resources:
  - Link: https://twitter.com/_felamos/status/1204705548668555264
  - Link: https://gist.github.com/bohops/3f645a7238d8022830ecf5511b3ecfbc
  - Link: https://bohops.com/2019/08/19/dotnet-core-a-vector-for-awl-bypass-defense-evasion/
Acknowledgement:
  - Person: felamos
    Handle: '@_felamos'
  - Person: Jimmy
    Handle: '@bohops'
---
