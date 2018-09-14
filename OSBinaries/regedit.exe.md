## regedit.exe
* Functions: Write ADS, Read ADS, Import registry
```

regedit /E c:\ads\file.txt:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
Export the target Registry key to the specified .REG file.

regedit C:\ads\file.txt:regfile.reg"
Import the target .REG file into the Registry.
```
   
* Resources:   
  * https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
   
* Full path:   
  * C:\Windows\System32\regedit.exe
  * C:\Windows\SysWOW64\regedit.exe
   
* Notes: Thanks to Oddvar Moe - @oddvarmoe  
   
