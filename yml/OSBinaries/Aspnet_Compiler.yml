---
Name: Aspnet_Compiler.exe
Description: ASP.NET Compilation Tool
Author: Jimmy (@bohops)
Created: 2021-09-26
Commands:
  - Command: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe -v none -p C:\users\cpl.internal\desktop\asptest\ -f C:\users\cpl.internal\desktop\asptest\none -u
    Description: Execute C# code with the Build Provider and proper folder structure in place.
    Usecase: Execute proxied payload with Microsoft signed binary to bypass application control solutions
    Category: AWL Bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10
Full_Path:
  - Path: c:\Windows\Microsoft.NET\Framework\v4.0.30319\aspnet_compiler.exe
  - Path: c:\Windows\Microsoft.NET\Framework64\v4.0.30319\aspnet_compiler.exe
Code_Sample:
  - Code: https://github.com/ThunderGunExpress/BringYourOwnBuilder
Detection:
  - IOC: Sysmon Event ID 1 - Process Creation
Resources:
  - Link: https://ijustwannared.team/2020/08/01/the-curious-case-of-aspnet_compiler-exe/
  - Link: https://docs.microsoft.com/en-us/dotnet/api/system.web.compilation.buildprovider.generatecode?view=netframework-4.8
Acknowledgement:
  - Person: cpl
    Handle: '@cpl3h'
---
