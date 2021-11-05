---
Name: Infdefaultinstall.exe
Description: Binary used to perform installation based on content inside inf files
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: InfDefaultInstall.exe Infdefaultinstall.inf
    Description: Executes SCT script using scrobj.dll from a command in entered into a specially prepared INF file.
    Usecase: Code execution
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\Infdefaultinstall.exe
  - Path: C:\Windows\SysWOW64\Infdefaultinstall.exe
Code_Sample:
- Code: https://gist.github.com/KyleHanslovan/5e0f00d331984c1fb5be32c40f3b265a
Detection:
 - IOC:
Resources:
  - Link: https://twitter.com/KyleHanslovan/status/911997635455852544
  - Link: https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
Acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
---
