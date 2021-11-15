---
Name: Installutil.exe
Description: The Installer tool is a command-line utility that allows you to install and uninstall server resources by executing the installer components in specified assemblies
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
    Description: Execute the target .NET DLL or EXE.
    Usecase: Use to execute code and bypass application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1218.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
    Description: Execute the target .NET DLL or EXE.
    Usecase: Use to execute code and bypass application whitelisting
    Category: Execute
    Privileges: User
    MitreID: T1218.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\InstallUtil.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\InstallUtil.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\InstallUtil.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/a04fbe2a99f1dcbbfeb0ee4957ae4b06b0866254/rules/windows/process_creation/win_possible_applocker_bypass.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/defense_evasion_installutil_beacon.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Resources:
  - Link: https://pentestlab.blog/2017/05/08/applocker-bypass-installutil/
  - Link: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_12
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1218.004/T1218.004.md
  - Link: https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/
  - Link: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
  - Link: https://docs.microsoft.com/en-us/dotnet/framework/tools/installutil-exe-installer-tool
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
