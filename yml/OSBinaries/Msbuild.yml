---
Name: Msbuild.exe
Description: Used to compile and execute code
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: msbuild.exe pshell.xml
    Description: Build and execute a C# project stored in the target XML file.
    Usecase: Compile and run code
    Category: AWL bypass
    Privileges: User
    MitreID: T1127.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msbuild.exe project.csproj
    Description: Build and execute a C# project stored in the target csproj file.
    Usecase: Compile and run code
    Category: Execute
    Privileges: User
    MitreID: T1127.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msbuild.exe @sample.rsp
    Description: Executes Logger statements from rsp file
    Usecase: Execute DLL
    Category: Execute
    Privileges: User
    MitreID: T1127.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msbuild.exe /logger:TargetLogger,C:\Loggers\TargetLogger.dll;MyParameters,Foo
    Description: Executes generated Logger dll file with TargetLogger export
    Usecase: Execute DLL
    Category: Execute
    Privileges: User
    MitreID: T1127.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: msbuild.exe project.proj
    Description: Execute jscript/vbscript code through XML/XSL Transformation. Requires Visual Studio MSBuild v14.0+.
    Usecase: Execute project file that contains XslTransformation tag parameters
    Category: Execute
    Privileges: User
    MitreID: T1127.001
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v3.5\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v3.5\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Msbuild.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Msbuild.exe
  - Path: C:\Program Files (x86)\MSBuild\14.0\bin\MSBuild.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/a04fbe2a99f1dcbbfeb0ee4957ae4b06b0866254/rules/windows/process_creation/win_possible_applocker_bypass.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/5a3af872d86903c13e508348f54e3b519eb01dce/rules/windows/network_connection/silenttrinity_stager_msbuild_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/suspicious_msbuild_spawn.yml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/suspicious_msbuild_rename.yml
  - Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/msbuild_suspicious_spawned_by_script_process.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_msbuild_beacon_sequence.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_msbuild_making_network_connections.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/ef7548f04c4341e0d1a172810330d59453f46a21/rules/windows/defense_evasion_execution_msbuild_started_by_script.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_execution_msbuild_started_by_office_app.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_execution_msbuild_started_renamed.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules 
  - IOC: Msbuild.exe should not normally be executed on workstations
Resources:
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1127/T1127.md
  - Link: https://github.com/Cn33liz/MSBuildShell
  - Link: https://pentestlab.blog/2017/05/29/applocker-bypass-msbuild/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://gist.github.com/bohops/4ffc43a281e87d108875f07614324191
  - Link: https://github.com/LOLBAS-Project/LOLBAS/issues/165
  - Link: https://www.daveaglick.com/posts/msbuild-loggers-and-logging-events
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Cn33liz
    Handle: '@Cneelis'
  - Person: Jimmy
    Handle: '@bohops'
---
