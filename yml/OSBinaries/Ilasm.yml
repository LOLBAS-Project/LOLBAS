---
Name: Ilasm.exe
Description: used for compile c# code into dll or exe.
Author: Hai vaknin (lux)
Created: 2020-03-17
Commands:
  - Command: ilasm.exe C:\public\test.txt /exe
    Description: Binary file used by .NET to compile C#/intermediate (IL) code to .exe
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10,7
  - Command: ilasm.exe C:\public\test.txt /dll
    Description: Binary file used by .NET to compile C#/intermediate (IL) code to dll
    Usecase: A description of the usecase
    Category: Compile
    Privileges: User
    MitreID: T1127
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\ilasm.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\ilasm.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Ilasm may not be used often in production environments (such as on endpoints)
Resources:
  - Link: https://github.com/LuxNoBulIshit/BeforeCompileBy-ilasm/blob/master/hello_world.txt
Acknowledgement:
  - Person: Hai Vaknin(Lux)
    Handle: '@VakninHai'
  - Person: Lior Adar
    Handle:
---
