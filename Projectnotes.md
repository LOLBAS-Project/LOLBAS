# LOLBAS-Project

## What is a LOLBIN?

Living off the land is using the tools on the systems to perform your intended actions. A LOLBIN is a binary used by an attacker to achieve their goals.

## Categories

Initial Access
Persistence
Privilege Escalation
Defense Evasion
Credential Access
Discovery
Lateral Movement
Execution
Collection
Exfiltration
Command and Control

## Sub-cats
"Application Whitelisting Bypass"
"squiblydoo"
"Component Object Model Hijacking"
"Signed Script Proxy Execution"
"Path Interception"
"Search Order Hijacking"
"Launch process"
"UAC Bypass"
"AutoRun Persistence"
"Credential Dumping"

## Roadmap

### 2.0

[x] Determine field mappings between existing Markdown and future structured format
[x] Define any additional fields required during launch (Date, Categories)
[x] Migrate
[ ] Sanity checking & populate blank fields (e.g. Categories, Code Sample, Detection).
[ ] Define CONTRIBUTING.md to guide contributions. What is the technical criteria for a LOLBIN/LOLSCRIPT/LOLLIB? Suggested ambiguous files: regedit.exe, notepad.exe, powershell.exe, cmd.exe.
    [ ] https://stackoverflow.com/questions/19109912/do-i-need-quotes-for-strings-in-yaml
    [ ] https://stackoverflow.com/questions/3790454/in-yaml-how-do-i-break-a-string-over-multiple-lines
    [ ] https://til.hashrocket.com/posts/d7c96e2ee7-multiline-strings-in-yaml

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

## 2.0 Schema

The goal for this version is feature parity with the current Markdown format along with any other fields required to support 2.0 objectives.

<> - Denotes existing values
"" - Value does not exist. Key will be created but not immediately populated.

### YAML
- Name: <Markdown Heading>
- Description: <Function Text>
- Author: ''
- Created: 2018-05-25
- Categories: []
- Commands:
  - <Code Block 1>
    - Description: ''
  - <Code Block 2>
    - Description: ''
- Full Path:
  - <Full Path 1>
  - <Full Path 2>
- Code Sample:
  - <Code Sample 1>
  - <Code Sample 2>
- Detection:
  - <Detection 1>
  - <Detection 2>
- Resources:
  - <Resource 1>
  - <Resource 2>
- Notes: <Notes>, <Acknowledgements>

### JSON (more like no, son, you're not getting used, gtfo)
{
    "Name": "<Markdown Heading>",
    "Description": "<Function Text>",
    "Created": "",
    "Categories": [""],
    "Commands": ["<Code Block>"],
    "Full path": ["<Full Path>],
    "Code sample": ["<Code Sample>"],
    "Resources": ["<Resources>"],
    "Acknowledgments": ["<Acknowledgements>"],
    "Detection": ["<Detection>",]
    "Notes": "<Notes>",
}
