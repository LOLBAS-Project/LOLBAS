---
Name: Netsh.exe
Description: Netsh is a Windows tool used to manipulate network interface settings.
Author: 'Freddie Barr-Smith'
Created: 2019-12-24
Commands:
  - Command: netsh.exe add helper C:\Users\User\file.dll
    Description: Use Netsh in order to execute a .dll file and also gain persistence, every time the netsh command is called
    Usecase: Proxy execution of .dll
    Category: Execute
    Privileges: User
    MitreID: T1546.007
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\WINDOWS\System32\Netsh.exe
  - Path: C:\WINDOWS\SysWOW64\Netsh.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Netsh initiating a network connection
Resources:
  - Link: https://freddiebarrsmith.com/trix/trix.html
  - Link: https://htmlpreview.github.io/?https://github.com/MatthewDemaske/blogbackup/blob/master/netshell.html
  - Link: https://liberty-shell.com/sec/2018/07/28/netshlep/
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
