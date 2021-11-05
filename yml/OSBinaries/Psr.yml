---
Name: Psr.exe
Description: Windows Problem Steps Recorder, used to record screen and clicks.
Author: Leon Rodenko
Created: 2020-06-27
Commands:
  - Command: psr.exe /start /output D:\test.zip /sc 1 /gui 0
    Description: Record a user screen without creating a GUI. You should use "psr.exe /stop" to stop recording and create output file.
    Usecase: Can be used to take screenshots of the user environment
    Category: Reconnaissance
    Privileges: User
    MitreID: T1113
    OperatingSystem: since Windows 7 (client) / Windows 2008 R2
Full_Path:
  - Path: c:\windows\system32\psr.exe
  - Path: c:\windows\syswow64\psr.exe
Code_Sample:
  - Code:
Detection:
  - IOC: psr.exe spawned
  - IOC: suspicious activity when running with "/gui 0" flag
Resources:
  - Link: https://social.technet.microsoft.com/wiki/contents/articles/51722.windows-problem-steps-recorder-psr-quick-and-easy-documenting-of-your-steps-and-procedures.aspx
Acknowledgement:
  - Person: Leon Rodenko
    Handle: '@L3m0nada'
---
