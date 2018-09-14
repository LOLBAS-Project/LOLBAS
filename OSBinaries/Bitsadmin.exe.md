## Bitsadmin.exe
* Functions: Execute, Download, Copy, Read ADS
```

bitsadmin /create 1
bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe
bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL
bitsadmin /RESUME 1
bitsadmin /complete 1




Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.

bitsadmin /create 1
bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe c:\data\playfolder\autoruns.exe
bitsadmin /RESUME 1
bitsadmin /complete 1

Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.

bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin /reset
One-liner version that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.

bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
One-Liner version that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
```
   
* Resources:   
  * https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679 - Slide 53
  * https://www.youtube.com/watch?v=_8xJaaQlpBo
  * https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
   
* Full path:   
  * c:\Windows\System32\bitsadmin.exe
  * c:\Windows\SysWOW64\bitsadmin.exe
   
* Notes: Thanks to Rob Fuller - @mubix , Chris Gates - @carnal0wnage, Oddvar Moe - @oddvarmoe  
   
