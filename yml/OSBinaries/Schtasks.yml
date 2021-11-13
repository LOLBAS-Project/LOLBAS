---
Name: Schtasks.exe
Description: Schedule periodic tasks
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr c:\some\directory\revshell.exe
    Description: Create a recurring task to execute every minute.
    Usecase: Create a recurring task to keep reverse shell session(s) alive
    Category: Execute
    Privileges: User
    MitreID: T1053.005
    OperatingSystem: Windows
  - Command: schtasks /create /s targetmachine /tn "MyTask" /tr c:\some\directory\notevil.exe /sc daily 
    Description: Create a scheduled task on a remote computer for persistence/lateral movement
    Usecase: Create a remote task to run daily relative to the the time of creation
    Category: Execute
    Privileges: Administrator
    MitreID: T1053.005
    OperatingSystem: Windows
Full_Path:
  - Path: c:\windows\system32\schtasks.exe
  - Path: c:\windows\syswow64\schtasks.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/59000b993d6280d9bf063eefdcdf30ea0e83aa5e/rules/windows/process_creation/win_susp_schtask_creation.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/ef7548f04c4341e0d1a172810330d59453f46a21/rules/windows/persistence_local_scheduled_task_creation.toml
  - Splunk: https://github.com/splunk/security_content/blob/18f63553a9dc1a34122fa123deae2b2f9b9ea391/detections/endpoint/schtasks_scheduling_job_on_remote_system.yml
  - IOC: Suspicious task creation events
Resources:
  - Link: https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/23633/
Acknowledgement:
  - Person:
    Handle:
---
