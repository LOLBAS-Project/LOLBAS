---
Name: Procdump(64).exe
Description: SysInternals Memory Dump Tool
Author: 'Alfie Champion (@ajpc500)'
Created: '2020-10-14'
Commands:
  - Command: procdump.exe -md calc.dll explorer.exe
    Description: Loads calc.dll where DLL is configured with a 'MiniDumpCallbackRoutine' exported function. Valid process must be provided as dump still created.
    Usecase: Performs execution of unsigned DLL.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 8.1 and higher, Windows Server 2012 and higher.
  - Command: procdump.exe -md calc.dll foobar
    Description: Loads calc.dll where configured with DLL_PROCESS_ATTACH execution, process argument can be arbitrary.
    Usecase: Performs execution of unsigned DLL.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 8.1 and higher, Windows Server 2012 and higher.
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/f36b1cbd2a3f1a7423f43a67a182549778700615/rules/windows/process_creation/win_susp_procdump.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/f36b1cbd2a3f1a7423f43a67a182549778700615/rules/windows/process_creation/win_procdump.yml
  - Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/dump_lsass_via_procdump.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
  - IOC: Process creation with given '-md' parameter
  - IOC: Anomalous child processes of procdump
  - IOC: Unsigned DLL load via procdump.exe or procdump64.exe
Resources:
  - Link: https://twitter.com/ajpc500/status/1448588362382778372?s=20
Acknowledgement:
  - Name: Alfie Champion
    Handle: '@ajpc500'
---
