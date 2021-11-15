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
  - Command: mmc.exe gpedit.msc
    Description: Load an arbitrary payload DLL by configuring COR Profiler registry settings and launching MMC to bypass UAC.
    Usecase: Modify HKCU\Environment key in Registry with COR profiler values then launch MMC to load the payload DLL.
    Category: UAC Bypass
    Privileges: Administrator
    MitreID: T1218.014
    OperatingSystem: Windows 10 (and possibly earlier versions)
Full_Path:
  - Path: C:\Windows\System32\mmc.exe
  - Path: C:\Windows\SysWOW64\mmc.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_mmc_spawn_shell.yml
 - Sigma: https://github.com/SigmaHQ/sigma/blob/b731c2059445eef53e37232a5f3634c3473aae0c/rules/windows/file_event/sysmon_uac_bypass_dotnet_profiler.yml
Resources:
  - Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
  - Link: https://offsec.almond.consulting/UAC-bypass-dotnet.html
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: clem
    Handle: '@clavoillotte'
---
