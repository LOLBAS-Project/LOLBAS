---
Name: Forfiles.exe
Description: Selects and executes a command on a file or set of files. This command is useful for batch processing.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: forfiles /p c:\windows\system32 /m notepad.exe /c calc.exe
    Description: Executes calc.exe since there is a match for notepad.exe in the c:\windows\System32 folder.
    Usecase: Use forfiles to start a new process to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: forfiles /p c:\windows\system32 /m notepad.exe /c "c:\folder\normal.dll:evil.exe"
    Description: Executes the evil.exe Alternate Data Stream (AD) since there is a match for notepad.exe in the c:\windows\system32 folder.
    Usecase: Use forfiles to start a new process from a binary hidden in an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\forfiles.exe
  - Path: C:\Windows\SysWOW64\forfiles.exe
Code_Sample:
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://twitter.com/vector_sec/status/896049052642533376
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Eric
    Handle: '@vector_sec'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
