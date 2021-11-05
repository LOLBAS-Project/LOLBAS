---
Name: At.exe
Description: Schedule periodic tasks
Author: 'Freddie Barr-Smith'
Created: 2019-09-20
Commands:
  - Command: C:\Windows\System32\at.exe at 09:00 /interactive /every:m,t,w,th,f,s,su C:\Windows\System32\revshell.exe
    Description: Create a recurring task to execute every day at a specific time.
    Usecase: Create a recurring task, to eg. to keep reverse shell session(s) alive
    Category: Execute
    Privileges: Local Admin
    MitreID: T1053.002
    OperatingSystem: Windows 7 or older
Full_Path:
  - Path: C:\WINDOWS\System32\At.exe
  - Path: C:\WINDOWS\SysWOW64\At.exe
Detection:
  - IOC: Scheduled task is created
  - IOC: Windows event log - type 3 login
  - IOC: C:\Windows\System32\Tasks\At1 (substitute 1 with subsequent number of at job)
  - IOC: C:\Windows\Tasks\At1.job
  - IOC: Registry Key - Microsoft\Windows NT\CurrentVersion\Schedule\TaskCache\Tree\At1.
Resources:
  - Link: https://freddiebarrsmith.com/at.txt
  - Link: https://sushant747.gitbooks.io/total-oscp-guide/privilege_escalation_windows.html - Escalate to System from Administrator
  - Link: https://www.secureworks.com/blog/where-you-at-indicators-of-lateral-movement-using-at-exe-on-windows-7-systems
Acknowledgement:
  - Person: 'Freddie Barr-Smith'
    Handle:
  - Person: 'Riccardo Spolaor'
    Handle:
  - Person: 'Mariano Graziano'
    Handle:
  - Person: 'Xabier Ugarte-Pedrero'
    Handle:
---
