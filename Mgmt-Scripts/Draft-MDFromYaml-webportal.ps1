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
        
        $Exe = @()
        $Down = @()
        $Uplo = @()
        $Enco = @()
        $Deco = @()
        $Copy = @()
        $Cred = @()
        $Comp = @()
        $ADS = @()
        $AWL = @()
        $Reco = @()
        $Dump = @()
        foreach($grp in $YamlObject.Commands)
        {
            if($grp.Category -eq "Execute"){$Exe += $grp}
            if($grp.Category -eq "Download"){$Down += $grp}
            if($grp.Category -eq "Upload"){$Uplo += $grp}
            if($grp.Category -eq "Encode"){$Enco += $grp}
            if($grp.Category -eq "Decode"){$Deco += $grp}
            if($grp.Category -eq "Alternate data streams"){$ADS += $grp}
            if($grp.Category -eq "Copy"){$Copy += $grp}
            if($grp.Category -eq "Credentials"){$Cred += $grp}
            if($grp.Category -eq "Compile"){$Comp += $grp}
            if($grp.Category -eq "AWL bypass"){$AWL += $grp}
            if($grp.Category -eq "Reconnaissance"){$Reco += $grp}
            if($grp.Category -eq "Dump"){$Dump += $grp}
        }

        if($Exe)
        {
            "  $($Exe[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Exe)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Down)
        {
            "  $($Down[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Down)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Uplo)
        {
            "  $($Uplo[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Uplo)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Enco)
        {
            "  $($Enco[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Enco)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Deco)
        {
            "  $($Deco[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Deco)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Copy)
        {
            "  $($Copy[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Copy)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Cred)
        {
            "  $($Cred[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Cred)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Comp)
        {
            "  $($Comp[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Comp)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($ADS)
        {
            "  $($ADS[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $ADS)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($AWL)
        {
            "  $($AWL[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $AWL)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Reco)
        {
            "  $($Reco[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Reco)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        if($Dump)
        {
            "  $($Dump[0].Category.ToLower()):"| Add-Content $Outfile
            foreach($Ex in $Dump)
            {
                "    - description: $($Ex.Description)"| Add-Content $Outfile
                "      code: $($Ex.Command)"| Add-Content $Outfile
                "      mitreid: $($Ex.MitreID)"| Add-Content $Outfile
                "      mitrelink: $($Ex.MitreLink)"| Add-Content $Outfile
                "      operatingsystem: $($Ex.Operatingsystem)"| Add-Content $Outfile
                "      privileges: $($Ex.Privileges)"| Add-Content $Outfile
                "      usecase: $($Ex.UseCase)"| Add-Content $Outfile
            }
        }
        
        #$Groups = $YamlObject.Commands | Group-Object {$_.Category}
            #"  $($grp.Name):"| Add-Content $Outfile
            #"    - description: $($cmd.Description)"| Add-Content $Outfile
            #"      code: $($cmd.Command)"| Add-Content $Outfile
            #"      mitreid: $($cmd.MitreID)"| Add-Content $Outfile
            #"      mitrelink: $($cmd.MitreLink)"| Add-Content $Outfile
            #"      operatingsystem: $($cmd.Operatingsystem)"| Add-Content $Outfile
            #"      privileges: $($cmd.Privileges)"| Add-Content $Outfile
            #"      usecase: $($cmd.UseCase)"| Add-Content $Outfile
                
                
        #foreach($cmd in $YamlObject.Commands)
        #{
        #"  $($cmd.Category):"| Add-Content $Outfile
        #    "    - description: $($cmd.Description)"| Add-Content $Outfile
        #    "      code: $($cmd.Command)"| Add-Content $Outfile
        #    "      mitreid: $($cmd.MitreID)"| Add-Content $Outfile
        #    "      mitrelink: $($cmd.MitreLink)"| Add-Content $Outfile
        #    "      operatingsystem: $($cmd.Operatingsystem)"| Add-Content $Outfile
        #    "      privileges: $($cmd.Privileges)"| Add-Content $Outfile
        #    "      usecase: $($cmd.UseCase)"| Add-Content $Outfile
        #}
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
Invoke-GenerateMD -YmlPath "$mainpath\yml\OtherMSBinaries" -Outpath "c:\tamp\OtherMSBinaries" -Verbose

##Scripts
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSScripts" -Outpath "c:\tamp\Scripts" -Verbose

##Libs
Invoke-GenerateMD -YmlPath "$mainpath\yml\OSLibraries" -Outpath "c:\tamp\Libraries" -Verbose