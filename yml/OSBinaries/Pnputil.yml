---
Name: Pnputil.exe
Description: Used for installing drivers
Author: Hai vaknin (lux)
Created: 2020-12-25
Commands:
  - Command: pnputil.exe -i -a C:\Users\hai\Desktop\mo.inf
    Description: Used for installing drivers
    Usecase: Add malicious driver
    Category: Execute
    Privileges: Administrator
    MitreID: T1547
    OperatingSystem: Windows 10,7
Full_Path:
  - Path: C:\Windows\system32\pnputil.exe
Code_Sample: 
  - Code: https://github.com/LuxNoBulIshit/test.inf/blob/main/inf
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/a8a0d546f347febb0423aa920dbc10713cc1f92f/rules/windows/process_creation/process_creation_lolbins_suspicious_driver_installed_by_pnputil.yml
Acknowledgement:
  - Person: Hai Vaknin(Lux)
    Handle: '@LuxNoBulIshit'
  - Person: Avihay eldad
    Handle: '@aloneliassaf'
---
