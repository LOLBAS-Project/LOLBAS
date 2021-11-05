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
  - IOC:
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
