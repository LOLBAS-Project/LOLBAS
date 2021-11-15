---
Name: Tttracer.exe
Description: Used by Windows 1809 and newer to Debug Time Travel
Author: 'Oddvar Moe'
Created: 2019-11-05
Commands:
  - Command: tttracer.exe C:\windows\system32\calc.exe
    Description: Execute calc using tttracer.exe. Requires administrator privileges
    Usecase: Spawn process using other binary
    Category: Execute
    Privileges: Administrator
    MitreID: T1127
    OperatingSystem: Windows 10 1809 and newer
  - Command: TTTracer.exe -dumpFull -attach pid
    Description: Dumps process using tttracer.exe. Requires administrator privileges
    Usecase: Dump process by PID
    Category: Dump
    Privileges: Administrator
    MitreID: T1003
    OperatingSystem: Windows 10 1809 and newer
Full_Path:
  - Path: C:\Windows\System32\tttracer.exe
  - Path: C:\Windows\SysWOW64\tttracer.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/5951ad1d9a781a49d61df9af03c7b83ac67a0012/rules/windows/image_load/process_creation_tttracer_mod_load.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/5951ad1d9a781a49d61df9af03c7b83ac67a0012/rules/windows/image_load/sysmon_tttracer_mod_load.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
  - IOC: Parent child relationship. Tttracer parent for executed command
Resources:
  - Link: https://twitter.com/oulusoyum/status/1191329746069655553
  - Link: https://twitter.com/mattifestation/status/1196390321783025666
  - Link: https://lists.samba.org/archive/cifs-protocol/2016-April/002877.html
Acknowledgement:
  - Person: Onur Ulusoy
    Handle: '@oulusoyum'
  - Person: Matt Graeber
    Handle: '@mattifestation'
---
