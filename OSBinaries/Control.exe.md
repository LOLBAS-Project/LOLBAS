## Control.exe
* Functions: Execute, Read ADS
```

control.exe c:\windows\tasks\file.txt:evil.dll
Execute evil.dll which is stored in an Alternate Data Stream (ADS).
```
   
* Resources:   
  * https://pentestlab.blog/2017/05/24/applocker-bypass-control-panel/
  * https://www.contextis.com/resources/blog/applocker-bypass-registry-key-manipulation/
  * https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/
  * https://twitter.com/bohops/status/955659561008017409
   
* Full path:   
  * C:\Windows\system32\control.exe    
  * C:\Windows\sysWOW64\control.exe     
   
* Notes: Thanks to Jimmy - @bohops  
   