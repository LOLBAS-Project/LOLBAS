---
Name: Csc.exe
Description: Binary file used by .NET to compile C# code
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: csc.exe -out:My.exe File.cs
    Description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to My.exe.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: csc -target:library File.cs
    Description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to a dll file.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe
Code_Sample:
- Code:
Detection:
 - IOC: Csc.exe should normally not run a system unless it is used for development.
Resources:
  - Link: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/command-line-building-with-csc-exe
Acknowledgement:
  - Person:
    Handle:
---
