---
Name: Msbuild.exe 
Description: Used to compile and execute code
Author: 'Oddvar Moe'
Created: '2018-05-25'
Commands:
  - Command: msbuild.exe pshell.xml
    Description: Build and execute a C# project stored in the target XML file.
    Usecase: Compile and run code
    Category: AWL bypass
    Privileges: User
    MitreID: T1127
    MitreLink: https://attack.mitre.org/wiki/Technique/T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msbuild.exe project.csproj
    Description: Build and execute a C# project stored in the target csproj file.
    Usecase: Compile and run code
    Category: Execute
    Privileges: User
    MitreID: T1127
    MitreLink: https://attack.mitre.org/wiki/Technique/T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v3.5\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v3.5\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Msbuild.exe
Code_Sample: 
- Code:
Detection:
 - IOC: Msbuild.exe should not normally be executed on workstations
Resources:
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1127/T1127.md
  - Link: https://github.com/Cn33liz/MSBuildShell
  - Link: https://pentestlab.blog/2017/05/29/applocker-bypass-msbuild/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Cn33liz
    Handle: '@Cneelis'
---