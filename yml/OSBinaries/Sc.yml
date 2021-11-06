---
Name: Sc.exe
Description: Used by Windows to manage services
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
    Description: Creates a new service and executes the file stored in the ADS.
    Usecase: Execute binary file hidden inside an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\sc.exe
  - Path: C:\Windows\SysWOW64\sc.exe
Code_Sample:
- Code:
Detection:
 - IOC: Services that gets created
Resources:
  - Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
