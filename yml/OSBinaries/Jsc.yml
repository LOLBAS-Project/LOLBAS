---
Name: Jsc.exe
Description: Binary file used by .NET to compile javascript code to .exe or .dll format
Author: 'Oddvar Moe'
Created: 2019-05-31
Commands:
  - Command: jsc.exe scriptfile.js
    Description: Use jsc.exe to compile javascript code stored in scriptfile.js and output scriptfile.exe.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: jsc.exe /t:library Library.js
    Description: Use jsc.exe to compile javascript code stored in Library.js and output Library.dll.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Jsc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Jsc.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Jsc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Jsc.exe
Code_Sample:
- Code:
Detection:
 - IOC: Jsc.exe should normally not run a system unless it is used for development.
Resources:
  - Link: https://twitter.com/DissectMalware/status/998797808907046913
  - Link: https://www.phpied.com/make-your-javascript-a-windows-exe/
Acknowledgement:
  - Person: Malwrologist
    Handle: '@DissectMalware'
---
