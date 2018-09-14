#A hacky script to convert YML to MD file the way I want
# Used primarly for generating MD files to the LOLBAS-Project site
#Author: Oddvar Moe
#If you can use it, be my guest!

$mainpath = "C:\data\gitprojects\LOLBAS"


function Convert-YamlToMD
{
    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory=$true)]
        $YamlObject,

        [Parameter(Mandatory=$true)]
        [String]
        $Outfile
    )

    Begin
    {
    }
    Process
    {
        # Header
        "`#`# $($YamlObject.Name)" | Add-Content $Outfile
        "* Functions: $($YamlObject.Description)" | Add-Content $Outfile
        
        "``````" | Add-Content $Outfile
        foreach($cmd in $YamlObject.Commands)
        {
            "`n$($cmd.command)" | Add-Content $Outfile
            "$($cmd.description)" | Add-Content $Outfile
        }
        "``````" | Add-Content $Outfile
        
        "   " | Add-Content $Outfile
        
        "* Resources:   " | Add-Content $Outfile
        foreach($link in $YamlObject.Resources)
        {
            "  * $($link)" | Add-Content $Outfile
        }

        "   " | Add-Content $Outfile

        "* Full path:   " | Add-Content $Outfile
        foreach($path in $YamlObject.'Full path')
        {
           "  * $($path)" | Add-Content $outfile
        }
        
        "   " | Add-Content $Outfile
        
        "* Notes: $($YamlObject.Notes)  " | Add-Content $Outfile
        
        "   " | Add-Content $Outfile
    }
    End
    {
    }
}

function Add-MainIndex
{
    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory=$true)]
        $YamlObject,

        [Parameter(Mandatory=$true)]
        [String]
        $Outfile,

        [Parameter(Mandatory=$true)]
        [String]
        $Type
    )

    Begin
    {
    }
    Process
    {
        # Header
        # OS BINARIES
        #[Atbroker.exe](OSBinaries/Atbroker.md)    

        if($Type -eq "OSBinaries") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }

        if($Type -eq "OSLibraries") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }

        if($Type -eq "OSScripts") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }

        if($Type -eq "OtherBinaries") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }

        if($Type -eq "OtherMSBinaries") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }

        if($Type -eq "OtherScripts") {
            "`[$($YamlObject.Name)`]`($Type/$($YamlObject.Name).md`)" | Add-Content $Outfile
        }
        #"" | Add-Content $Outfile
    }
    End
    {
    }
}

function New-MainIndex
{
    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory=$true)]
        [String]
        $Outfile,

        [Parameter(Mandatory=$true)]
        [String]
        $Type
    )

    Begin
    {
    }
    Process
    {
        if($Type -eq "OSBinaries") {
            "`# LOLBins - Living Off The Land Binaries" | Add-Content $Outfile
            "Please contribute and do point out errors or resources I have forgotten. If you are missing from the acknowledgement, please let me know (I did not forget anyone on purpose). " | Add-Content $Outfile
            "   " | Add-Content $Outfile
            "`# OS BINARIES" | Add-Content $Outfile
        }
                        
        if($Type -eq "OtherMSBinaries") {
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile

            "`# OTHER MICROSOFT SIGNED BINARIES" | Add-Content $Outfile
        }

        if($Type -eq "OtherBinaries") {
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile

            "`# OTHER NON MICROSOFT BINARIES" | Add-Content $Outfile
        }

        if($Type -eq "OSScripts") {
            "`# LOLScripts - Living Off The Land Scripts" | Add-Content $Outfile
            "Please contribute and do point out errors or resources I have forgotten. If you are missing from the acknowledgement, please let me know (I did not forget anyone on purpose). " | Add-Content $Outfile
            "   " | Add-Content $Outfile
            "`# OS SCRIPTS" | Add-Content $Outfile
        }

        if($Type -eq "OtherScripts") {
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile
            "   " | Add-content $Outfile

            "`# OTHER NON MICROSOFT SCRIPTS" | Add-Content $Outfile
        }

        if($Type -eq "OSLibraries") {
            "`# LOLLibs - Living Off The Land Libraries" | Add-Content $Outfile
            "Please contribute and do point out errors or resources I have forgotten. If you are missing from the acknowledgement, please let me know (I did not forget anyone on purpose). " | Add-Content $Outfile
            "   " | Add-Content $Outfile
            "`# OS LIBRARIES" | Add-Content $Outfile
        }

    }
    End
    {
    }
}

function Invoke-GenerateMD 
{
    [CmdletBinding()]
    Param
    (
        [Parameter(Mandatory=$true)]
        [String]
        $Ymlpath,

        [Parameter(Mandatory=$true)]
        [String]
        $Outpath,

        [Parameter(Mandatory=$true)]
        [String]
        $indexfile
    )

    Begin
    {
    }
    Process
    {

    #Initialize index files
    New-MainIndex -Type $($Outpath.Split("\")[-1]) -Outfile $indexfile



    # Read yaml files
    $bins = @()
    cd 
    get-childitem -Path $Ymlpath -File | foreach{
        Write-Verbose "Add yamls to array"
        write-verbose $_

        [string[]]$fileContent = Get-Content $_.FullName
        $content = ''
        foreach ($line in $fileContent) { $content = $content + "`n" + $line }
        $yaml = ConvertFrom-YAML $content
        $bins += $yaml
    }

    $bins | foreach{
        Write-Verbose "Converting files to yaml"
        write-verbose "$($_.name)"

        Convert-YamlToMD -YamlObject $_ -Outfile "$Outpath\$($_.name).md"
        Add-MainIndex -YamlObject $_ -Outfile $indexfile -Type $($Outpath.Split("\")[-1])
    }

    
    }
    End
    {
    }
}

#Generate the stuff!
#Bins
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSBinaries" -Outpath "$mainpath\OSBinaries" -indexfile "$mainpath\LOLBins.md" -Verbose
Invoke-GenerateMD -YmlPath "$mainpath\yml\OtherMSBinaries" -Outpath "$mainpath\OtherMSBinaries" -indexfile "$mainpath\LOLBins.md" -Verbose
Invoke-GenerateMD -YmlPath "$mainpath\yml\OtherBinaries" -Outpath "$mainpath\OtherBinaries" -indexfile "$mainpath\LOLBins.md" -Verbose

#Scripts
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSScripts" -Outpath "$mainpath\OSSCripts" -indexfile "$mainpath\LOLScripts.md" -Verbose
Invoke-GenerateMD -YmlPath "$mainpath\yml\OtherScripts" -Outpath "$mainpath\OtherScripts" -indexfile "$mainpath\LOLScripts.md" -Verbose

#Libs
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSLibraries" -Outpath "$mainpath\OSLibraries" -indexfile "$mainpath\LOLLibs.md" -Verbose