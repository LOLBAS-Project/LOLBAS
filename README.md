# Living Off The Land Binaries and Scripts (and now also Libraries)

<img src="https://github.com/api0cradle/LOLBAS/raw/master/Logo/LOLBAS.png" height="250">


There are currently three different lists.

* [LOLBins](LOLBins.md)    
* [LOLLibs](LOLLibs.md)    
* [LOLScripts](LOLScripts.md)    


The goal of these lists are to document every binary, script and library that can be used for Living Off The Land techniques. 

Definition of LOLBAS candidates (Binaries,scripts and libraries):
* LOLBAS candidates must be present on the system by default or introduced by application/software "installation" from a "reputable" vendor or open-source entity. Otherwise, LOLBAS determination is subject to scrutiny by the (security) community and agreed upon standards.
* Can be used as an attacker tool directly or can perform other actions than what it was intended to do (Ex: regsvr32 - execute code from SCT online)
  * executing code
  * downloading/upload files
  * bypass UAC
  * compile code
  * getting creds/dumping process
  * surveillance (keylogger, network trace)
  * evade logging/remove log entry
  * side-loading/hijacking of DLL
  * pass-through execution of other programs, script (via a LOLBin)
  * pass-through persistence utilizing existing LOLBin
  * persistence (Hide data in ADS, execute at logon etc)

Every binary, script and library has it's own .md file in the subfolders. That way I should be easier to maintain and reuse. 

A yml version of every file is located under the yml folder. 
This is the master for all things LOLBAS. 
We generate the MD files from this and later it will also be the base for an upcoming webportal.

I have borrowed examples from the community (And a lot from Red Canary - Atomic Red Team - Thanks @subtee)
Would really love if the community could contribute as much as possible. That would make it better for everyone.
If you think it is hard to make a pull request using github, don't hesitate to send me a tweet and I will add the contribution for you.


## STORY
"Living off the land" was coined by Matt Graeber - @mattifestation <3    
One of the first "Living Off The Land" talks (That I know of) is this one:
https://www.youtube.com/watch?v=j-r6UonEkUw   

The term LOLBins came from a twitter discussion on what to call these binaries. It was first proposed by Philip Goh - @MathCasualty here:
https://twitter.com/MathCasualty/status/969174982579273728

The term LOLScripts came from Jimmy - @bohops: 
https://twitter.com/bohops/status/984828803120881665

Common hashtags for these files are:

#LOLBin   
#LOLBins   
#LOLScript   
#LOLScripts   
#LOLLib   
#LOLLibs   

A "highly scientific poll" was also conducted to agree (69% yes) on the name LOLBins.
https://twitter.com/Oddvarmoe/status/985432848961343488 

The domain http://lolbins.com has been registered by an unknown individual and redirected it to this project. (Thank you)

The awesome logos in the logo folder was provided by Adam Nadrowski (@_sup_mane) - Thank you so much man! 

Love this logo:   
<img src="https://github.com/api0cradle/LOLBAS/raw/master/Logo/LOL1.png" height="250">

## Future work / Todo list

### 2.0

[x] Determine field mappings between existing Markdown and future structured format
[x] Define any additional fields required during launch (Date, Categories)
[x] Migrate
[x] Sanity checking & populate blank fields (e.g. Categories, Code Sample, Detection).
[ ] Define CONTRIBUTING.md to guide contributions. Suggested ambiguous files: regedit.exe, notepad.exe, powershell.exe, cmd.exe.
    [ ] https://stackoverflow.com/questions/19109912/do-i-need-quotes-for-strings-in-yaml
    [ ] https://stackoverflow.com/questions/3790454/in-yaml-how-do-i-break-a-string-over-multiple-lines
    [ ] https://til.hashrocket.com/posts/d7c96e2ee7-multiline-strings-in-yaml
[x] Re-factor project (version 2.0) and move it to a dedicated project site (https://github.com/LOLBAS-Project)
     
     
### 2.1

[ ] ATT&CK links
[ ] LOLBIN GUID?
[ ] Jekyll front end a la GTFOBINS?
[ ] Sub-Categories
[ ] Tests for PRs to ensure fields are valid
[ ] Create management scripts (find blank fields, ensure all fields are present, update fields)
[ ] Privileges required
[ ] Signed executing signed? Signed executing unsigned? @mattifestation's tweet has some good stuff.
[ ] Specific tags/labeling for specific capability caveats, for example a App Whitelist bypass that works on AppLocker & Solidcore could cary tags for each product
[ ] split commands into command, argument structure, and example. i.e. Command: cmstp.exe; ArgStructure: /ini /s <inf_file>; Example: cmstp.exe /ini /s c:\cmstp\CorpVPN.inf
[ ] Provide the project in DB format (sqlite)