---
Name: Eventvwr.exe
Description: Displays Windows Event Logs in a GUI window.
Author: 'Jacob Gajek'
Created: 2018-11-01
Commands:
  - Command: eventvwr.exe
    Description: During startup, eventvwr.exe checks the registry value HKCU\Software\Classes\mscfile\shell\open\command for the location of mmc.exe, which is used to open the eventvwr.msc saved console file. If the location of another binary or script is added to this registry value, it will be executed as a high-integrity process without a UAC prompt being displayed to the user.
    Usecase: Execute a binary or script as a high-integrity process without a UAC prompt.
    Category: UAC bypass
    Privileges: User
    MitreID: T1548.002
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\eventvwr.exe
  - Path: C:\Windows\SysWOW64\eventvwr.exe
Code_Sample:
  - Code: https://github.com/enigma0x3/Misc-PowerShell-Stuff/blob/master/Invoke-EventVwrBypass.ps1
Detection:
 - IOC: eventvwr.exe launching child process other than mmc.exe
 - IOC: Creation or modification of the registry value HKCU\Software\Classes\mscfile\shell\open\command
Resources:
  - Link: https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/
  - Link: https://github.com/enigma0x3/Misc-PowerShell-Stuff/blob/master/Invoke-EventVwrBypass.ps1
Acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
  - Person: Matt Graeber
    Handle: '@mattifestation'
---
