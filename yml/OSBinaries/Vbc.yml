---
Name: vbc.exe
Description: Binary file used for compile vbs code
Author: Lior Adar
Created: 2020-02-27
Commands:
  - Command: vbc.exe /target:exe c:\temp\vbs\run.vb
    Description: Binary file used by .NET to compile vb code to .exe
    Usecase: Compile attacker code on system. Bypass defensive counter measures.
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10,7
  - Command: vbc -reference:Microsoft.VisualBasic.dll c:\temp\vbs\run.vb
    Description: Description of the second command
    Usecase: A description of the usecase
    Category: Compile
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 10,7
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\vbc.exe
  - Path: C:\Windows\Microsoft.NET\Framework64\v3.5\vbc.exe
Code_Sample:
   - Code:
Detection:
   - Sigma: https://github.com/SigmaHQ/sigma/blob/08ca62cc8860f4660e945805d0dd615ce75258c1/rules/windows/process_creation/win_visual_basic_compiler.yml
   - Elastic: https://github.com/elastic/detection-rules/blob/61afb1c1c0c3f50637b1bb194f3e6fb09f476e50/rules/windows/defense_evasion_dotnet_compiler_parent_process.toml
Acknowledgement:
  - Person: Lior Adar
    Handle:
  - Person: Hai Vaknin(Lux)
    Handle:
---
