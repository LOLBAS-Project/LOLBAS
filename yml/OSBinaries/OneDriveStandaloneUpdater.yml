---
Name: OneDriveStandaloneUpdater.exe
Description: OneDrive Standalone Updater
Author: 'Elliot Killick'
Created: '2021-08-22'
Commands:
  - Command: OneDriveStandaloneUpdater
    Description: Download a file from the web address specified in HKCU\Software\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC. ODSUUpdateXMLUrlFromOC and UpdateXMLUrlFromOC must be equal to non-empty string values in that same registry key. UpdateOfficeConfigTimestamp is a UNIX epoch time which must be set to a large QWORD such as 99999999999 (in decimal) to indicate the URL cache is good. The downloaded file will be in %localappdata%\OneDrive\StandaloneUpdater\PreSignInSettingsConfig.json
    Usecase: Download a file from the Internet without executing any anomalous executables with suspicious arguments
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
Full_Path:
  - Path: '%localappdata%\Microsoft\OneDrive\OneDriveStandaloneUpdater.exe'
Detection:
  - IOC: HKCU\Software\Microsoft\OneDrive\UpdateOfficeConfig\UpdateRingSettingURLFromOC being set to a suspicious non-Microsoft controlled URL
  - IOC: Reports of downloading from suspicious URLs in %localappdata%\OneDrive\setup\logs\StandaloneUpdate_*.log files
Resources:
  - Link: https://github.com/LOLBAS-Project/LOLBAS/pull/153
Acknowledgement:
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
