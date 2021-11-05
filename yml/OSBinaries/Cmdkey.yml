---
Name: Cmdkey.exe
Description: creates, lists, and deletes stored user names and passwords or credentials.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: cmdkey /list
    Description: List cached credentials
    Usecase: Get credential information from host
    Category: Credentials
    Privileges: User
    MitreID: T1078
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\cmdkey.exe
  - Path: C:\Windows\SysWOW64\cmdkey.exe
Code_Sample:
- Code:
Detection:
 - IOC: Usage of this command could be an IOC
Resources:
  - Link: https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
  - Link: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmdkey
Acknowledgement:
  - Person:
    Handle:
---
