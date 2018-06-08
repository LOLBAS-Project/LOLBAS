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

Right now it is me that decides if the files are a valid contribution or not. 
I try my best to conclude with help from others in the InfoSec community and I do not wish to exclude anything. 
Also, please be patient if it takes some time for your contribution to be added to the list. I am just one guy.   

Every binary, script and library has it's own .md file in the subfolders. That way I should be easier to maintain and reuse. 
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
- [ ] Better classification system
	- [ ] Load DLL
	- [ ] Arbitrary unsigned code execution
	- [ ] Launch other process
- [ ] Better contribution template
- [ ] Provide the project in DB format (sqlite)
- [ ] Re-factor project (version 2.0) and move it to a dedicated project site (https://github.com/LOLBAS-Project)
- [ ] Map it to the Mitre Att&ck <3
- [ ] LOLGuiBins
- [ ] More list based on classifications
- [ ] LOLBAS lists for Linux? OSX?
