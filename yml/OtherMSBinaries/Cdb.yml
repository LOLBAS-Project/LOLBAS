---
Name: Cdb.exe
Description: Debugging tool included with Windows Debugging Tools.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: cdb.exe -cf x64_calc.wds -o notepad.exe
    Description: Launch 64-bit shellcode from the x64_calc.wds file using cdb.exe.
    Usecase: Local execution of assembly shellcode.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
  - Command: |
     cdb.exe -pd -pn <process_name>
     .shell <cmd>
    Description: Attaching to any process and executing shell commands
    Usecase: Run a shell command under a trusted Microsoft signed binary
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\cdb.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\cdb.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_cdb.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_unusual_process_network_connection.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: http://www.exploit-monday.com/2016/08/windbg-cdb-shellcode-runner.html
  - Link: https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options
  - Link: https://gist.github.com/mattifestation/94e2b0a9e3fe1ac0a433b5c3e6bd0bda
  - Link: https://blog.thecybersecuritytutor.com/the-power-of-cdb-debugging-tool/
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: mr.d0x
    Handle: '@mrd0x'
  - Person: Spooky Sec
    Handle: '@sec_spooky'
---
