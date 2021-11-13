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
  - Sigma: https://github.com/SigmaHQ/sigma/blob/0fcbce993288f993e626494a50dad15fc26c8a0c/rules/windows/process_creation/win_susp_certutil_command.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_certutil_encode.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/e9260679d4aeae7f696001c5b14d318d31c8f076/rules/windows/process_creation/process_creation_root_certificate_installed.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/4a11ef9514938e7a7e32cf5f379e975cebf5aed3/rules/windows/defense_evasion_suspicious_certutil_commands.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/command_and_control_certutil_network_connection.toml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_download_with_urlcache_and_split_arguments.yml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_download_with_verifyctl_and_split_arguments.yml
  - Splunk: https://github.com/splunk/security_content/blob/3f77e24974239fcb7a339080a1a483e6bad84a82/detections/endpoint/certutil_with_decode_argument.yml
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
