---
Name: Rpcping.exe
Description: Used to verify rpc connection
Author: 'Oddvar Moe'
Created: '2018-05-25'
Commands:
  - Command: rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
    Description: Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.
    Usecase: Capture credentials on a non-standard port
    Category: Credentials
    Privileges: User
    MitreID: T1003
    MitreLink: https://attack.mitre.org/wiki/Technique/T1003
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\System32\rpcping.exe
  - Path: C:\Windows\SysWOW64\rpcping.exe
Code_Sample: 
- Code:
Detection:
 - IOC:
Resources:
  - Link: https://github.com/vysec/RedTips
  - Link: https://twitter.com/vysecurity/status/974806438316072960
  - Link: https://twitter.com/vysecurity/status/873181705024266241
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Vincent Yiu
    Handle: '@vysecurity'
---