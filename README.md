# Living Off The Land Binaries and Scripts (and now also Libraries)

<img src="https://github.com/api0cradle/LOLBAS/raw/master/Logo/LOLBAS.png" height="250">


There are currently three different lists.

* [LOLBins](LOLBins.md)    
* [LOLLibs](LOLLibs.md)    
* [LOLScripts](LOLScripts.md)    


## Goal
The goal of the LOLBAS project are to document every binary, script and library that can be used for Living Off The Land techniques.   
Primarily files that offer "extra" functionality. 


## Definition

* Must be a Microsoft signed file. (OS or downloaded from Microsoft site)
* Only extra "unexpected" functionality is interesting (Not interesting to document what it was intended for)
  * Exceptions are Application Whitelisting bypasses

* Functionality can include:
   * Executing code
      * Arbitrary code execution
      * Pass-through execution of other programs (unsigned), script (via a LOLBin)
   * Compile code
   * File operations
      * downloading
      * upload
      * copy
    * Persistence
      * pass-through persistence utilizing existing LOLBin
      * persistence (Hide data in ADS, execute at logon etc)
    * UAC bypass
    * Credentials
    * Dumping process
    * Surveillance (keylogger, network trace)
    * Evade logging/remove log entry
    * DLL Side-Loading/Hijacking (Binary must maintain path integrity - e.g. Without copying a binary to another folder that the user controls)


## YML
A yml version of every file is located under the yml folder. 
This is the master for all things LOLBAS. 
We generate the MD files from this and later it will also be the base for an upcoming webportal.


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
   
    
## Versions - Roadmap
All features are added to the issues in this repo. 

### 1.0
* Hosted https://github.com/api0cradle/LOLBAS/
* Only MD files
    
       
### 2.0 -- Current
* Hosted here on this repo
* Everything converted to YML files   
* MD files generated from YML files
* Clearer definition     
* Management scripts
    
    	
### 2.1
* More categories
* Jekyll frontend
* Privileges required
   
   
### 2.2
* ATT&CK Mitre mapping
* LOLBIN GUID - Unique ID for each bin
* Sub-Categories
  * Signed executing unsigned
  * Signed executing signed 
* Split commands into command, argument structure, and example. i.e. Command: cmstp.exe; ArgStructure: /ini /s <inf_file>; Example: cmstp.exe /ini /s c:\cmstp\CorpVPN.inf

  
### 2.3
* Tests for PRs to ensure fields are valid
* Provide the project in DB format (sqlite)