# Robber
**Robber** is a free open source tool developed using Delphi XE2 without any 3rd party dependencies.

What is DLL hijacking ?!

Windows has a search path for DLLs in its underlying architecture. If you can figure out what DLLs an executable requests without an absolute path (triggering this search process), you can then place your hostile DLL somewhere higher up the search path so it'll be found before the real version is, and Windows will happilly feed your attack code to the application.

So, let's pretend Windows's DLL search path looks something like this:

>A) .                   <-- current working directory of the executable, highest priority, first check

>B) \Windows

>C) \Windows\system32

>D) \Windows\syswow64   <-- lowest priority, last check

and some executable "Foo.exe" requests "bar.dll", which happens to live in the syswow64 (D) subdir. This gives you the opportunity to place your malicious version in A), B) or C) and it will be loaded into executable.

As stated before, even an absolute full path can't protect against this, if you can replace the DLL with your own version.

Microsoft Windows protect system pathes like System32 using Windows File Protection mechanism but the best way to protect executable from DLL hijacking in entrprise solutions is :

- Use absolute path instead of relative path
- If you have personal sign, sign your DLL files and check the sign in your application before load DLL into memory. otherwise check the hash of DLL file with original DLL hash)

And of course, this isn't really limited to Windows either. Any OS which allows for dynamic linking of external libraries is theoretically vulnerable to this.

**Robber** use simple mechanism to figure out DLLs that prone to hijacking :

1. Scan import table of executable and find out DLLs that linked to executable
2. Search for DLL files placed inside executable that match with linked DLL (as i said before current working directory of the executable has highest priority)
3. If any DLL found, scan the export table of theme
4. Compare import table of executable with export table of DLL and if any matching was found, the executable and matched common functions flag as DLL hijack candidate.

Feauters :

- Ability to select scan type (signed/unsigned applications)
- Determine executable signer
- Determine wich referenced DLLs candidate for hijacking
- Determine exported method names of candidate DLLs
- Detrmine wich hijacks is suitable for use (executable Size, Signed, number of dependent DLLs) and show theme in diffrent color

[Find out latest Robber executable here](https://github.com/MojtabaTajik/Robber/releases)

 <img src="https://raw.githubusercontent.com/MojtabaTajik/Robber/master/Resources/Robber.PNG">


