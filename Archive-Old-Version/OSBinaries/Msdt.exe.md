## Msdt.exe
* Functions: Execute
```

Open .diagcab package


msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file.
```
   
* Resources:   
  * https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
  * https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
  * https://twitter.com/harr0ey/status/991338229952598016
   
* Full path:   
  * C:\Windows\System32\Msdt.exe    
  * C:\Windows\SysWOW64\Msdt.exe    
   
* Notes: Thanks to:
See the Payloads folder for an example PCW8E57.xml file.
  
   
