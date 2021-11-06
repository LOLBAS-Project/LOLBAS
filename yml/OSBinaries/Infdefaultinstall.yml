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
 - Sigma: https://github.com/SigmaHQ/sigma/blob/85d47aeabc25bbd023284849f4466c1e00b855ce/rules/windows/process_creation/process_creation_infdefaultinstall.yml
 - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Resources:
  - Link: https://twitter.com/KyleHanslovan/status/911997635455852544
  - Link: https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
  - Link: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
Acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
---
