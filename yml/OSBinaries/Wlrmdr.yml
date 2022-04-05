---
Name: Wlrmdr.exe
Description: Windows Logon Reminder executable
Author: Moshe Kaplan
Created: 2022-02-16
Commands:
  - Command: "wlrmdr.exe -s 3600 -f 0 -t _ -m _ -a 11 -u calc.exe"
    Description: Execute calc.exe with wlrmdr.exe as parent process
    Usecase: Use wlrmdr as a proxy binary to evade defensive countermeasures
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: c:\windows\system32\wlrmdr.exe
Code_Sample:
  - Code:
Detection:
  - IOC: wlrmdr.exe spawning any new processes
Resources:
  - Link: https://twitter.com/0gtweet/status/1493963591745220608
  - Link: https://twitter.com/Oddvarmoe/status/927437787242090496
  - Link: https://twitter.com/falsneg/status/1461625526640992260
  - Link: https://docs.microsoft.com/en-us/windows/win32/api/shellapi/ns-shellapi-notifyicondataw
Acknowledgement:
  - Person: Grzegorz Tworek
    Handle: '@0gtweet'
  - Person: Oddvar Moe
    Handle: '@Oddvarmoe'
  - Person: Freddy
    Handle: '@falsneg'
---
