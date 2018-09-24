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
        
        "---" | Add-Content $Outfile
        "name: $($YamlObject.Name)"| Add-Content $Outfile
        "description: $($YamlObject.Description)"| Add-Content $Outfile
        "functions:"| Add-Content $Outfile
                
        foreach($cmd in $YamlObject.Commands)
        {
        "  $($cmd.Category):"| Add-Content $Outfile
            "    - description: $($cmd.Description)"| Add-Content $Outfile
            "      code: $($cmd.Command)"| Add-Content $Outfile
            "      mitreid: $($cmd.MitreID)"| Add-Content $Outfile
            "      mitrelink: $($cmd.MitreLink)"| Add-Content $Outfile
            "      operatingsystem: $($cmd.Operatingsystem)"| Add-Content $Outfile
            "      privileges: $($cmd.Privileges)"| Add-Content $Outfile
            "      usecase: $($cmd.UseCase)"| Add-Content $Outfile
        }
        "resources:"| Add-Content $Outfile
        foreach($link in $YamlObject.Resources)
        {
            "    - resource: $($link.link)"| Add-Content $Outfile
        }
        "fullpath:"| Add-Content $Outfile
        foreach($path in $YamlObject.'Full path')
        {
           "    - path: $($path.path)"| Add-Content $Outfile
        }
        "detection:"| Add-Content $Outfile 
        foreach($IOC in $YamlObject.Detection)
        {
            "  - IOC: $($IOC.IOC)"| Add-Content $Outfile 
        }
        "acknowledgement:"| Add-Content $Outfile 
        foreach($pers in $YamlObject.Acknowledgement)
        {
            "  - Person: $($pers.Person)"| Add-Content $Outfile
            "    Handle: `'$($pers.Handle)`'"| Add-Content $Outfile
        }
        "---" | Add-Content $Outfile
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
        $Outpath
            
    )

    Begin
    {
    }
    Process
    {

    


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

        Convert-YamlToMD -YamlObject $_ -Outfile "$Outpath\$($_.name.split(".")[0]).md"
    }

    
    }
    End
    {
    }
}

#Generate the stuff!
#Bins
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSBinaries" -Outpath "c:\tamp\Binaries" -Verbose
#Invoke-GenerateMD -YmlPath "$mainpath\yml\OtherMSBinaries" -Outpath "c:\tamp\OtherMSBinaries" -Verbose

##Scripts
#Invoke-GenerateMD -YmlPath "$mainpath\yml\OSScripts" -Outpath "c:\tamp\Scripts" -Verbose

##Libs
#Invoke-GenerateMD -YmlPath "$mainpath\yml\OSLibraries" -Outpath "c:\tamp\Libraries" -Verbose