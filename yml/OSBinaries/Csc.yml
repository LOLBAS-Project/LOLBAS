---
Name: Csc.exe
Description: Binary file used by .NET to compile C# code
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: csc.exe -out:My.exe File.cs
    Description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to My.exe.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
  - Command: csc -target:library File.cs
    Description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to a dll file.
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe
Code_Sample:
- Code:
Detection:
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_csc.yml
 - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_susp_csc_folder.yml
 - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_dotnet_compiler_parent_process.toml
 - Elastic: https://github.com/elastic/detection-rules/blob/82ec6ac1eeb62a1383792719a1943b551264ed16/rules/windows/defense_evasion_execution_msbuild_started_unusal_process.toml
 - IOC: Csc.exe should normally not run as System account unless it is used for development.
Resources:
  - Link: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/command-line-building-with-csc-exe
Acknowledgement:
  - Person:
    Handle:
---
