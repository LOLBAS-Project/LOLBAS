---
Name: Schtasks.exe
Description: Schedule periodic tasks
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr c:\some\directory\revshell.exe
    Description: Create a recurring task to execute every minute.
    Usecase: Create a recurring task, to eg. to keep reverse shell session(s) alive
    Category: Execute
    Privileges: User
    MitreID: T1053.005
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\schtasks.exe
  - Path: c:\windows\syswow64\schtasks.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Services that gets created
Resources:
  - Link: https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/23633/
Acknowledgement:
  - Person:
    Handle:
---
