---
Name: Pktmon.exe
Description: Capture Network Packets on the windows 10 with October 2018 Update or later.
Author: 'Derek Johnson'
Created: 2020-08-12
Commands:
  - Command: pktmon.exe start --etw
    Description: Will start a packet capture and store log file as PktMon.etl. Use pktmon.exe stop
    Usecase: use this a built in network sniffer on windows 10 to capture senstive traffic
    Category: Reconnaissance
    Privileges: Administrator
    MitreID: T1040
    OperatingSystem: Windows 10 1809 and later
  - Command: pktmon.exe filter add -p 445
    Description: Select Desired ports for packet capture
    Usecase: Look for interesting traffic such as telent or FTP
    Category: Reconnaissance
    Privileges: Administrator
    MitreID: T1040
    OperatingSystem: Windows 10 1809 and later
Full_Path:
  - Path: c:\windows\system32\pktmon.exe
  - Path: c:\windows\syswow64\pktmon.exe
Code_Sample:
  - Code:
Detection:
  - IOC: .etl files found on system
Resources:
  - Link: https://binar-x79.com/windows-10-secret-sniffer/
Acknowledgement:
  - Person: Derek Johnson
    Handle: ''
---
