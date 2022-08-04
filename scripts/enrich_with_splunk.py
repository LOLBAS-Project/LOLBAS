import yaml
import argparse
import sys
import re
import json 
from os import path, walk
from tqdm import tqdm


def  read_security_content_detections(SECURITY_CONTENT_PATH):
    types = ["endpoint", "application", "cloud", "network", "web", "experimental", "deprecated"]
    manifest_files = []
    for t in types:
        for root, dirs, files in walk(SECURITY_CONTENT_PATH + 'detections/' + t):
            for file in files:
                if file.endswith(".yml"):
                    manifest_files.append((path.join(root, file)))

    detections = []
    for manifest_file in tqdm(manifest_files):
        detection_yaml = dict()
        if VERBOSE:
            print("processing yaml {0}".format(manifest_file))

        with open(manifest_file, 'r') as stream:
            try:
                if 'ssa' not in manifest_file:
                    object = list(yaml.safe_load_all(stream))[0]
                    object['file_path'] = manifest_file
            except yaml.YAMLError as exc:
                print(exc)
                print("Error reading {0}".format(manifest_file))
                sys.exit(1)
        detection_yaml = object
        detections.append(detection_yaml)
    return detections

def read_lolbas(LOLBAS_PATH):
    types = ["OSBinaries", "OSLibraries", "OSScripts", "OtherMSBinaries"]
    manifest_files = []
    for t in types:
        for root, dirs, files in walk(LOLBAS_PATH + '/yml/' + t):
            for file in files:
                if file.endswith(".yml"):
                    manifest_files.append((path.join(root, file)))

    lolbas = []
    for manifest_file in tqdm(manifest_files):
        lolba_yaml = dict()
        if VERBOSE:
            print("processing yaml {0}".format(manifest_file))

        with open(manifest_file, 'r') as stream:
            try:
                object = list(yaml.safe_load_all(stream))[0]
                object['file_path'] = manifest_file
            except yaml.YAMLError as exc:
                print(exc)
                print("Error reading {0}".format(manifest_file))
                sys.exit(1)
        lolba_yaml = object
        lolbas.append(lolba_yaml)
    return lolbas

def confirm_match(lolba, matching_id_detections):
    matching_detections = []
    search_word = lolba['Name'].split('.')[0]
    for detection in matching_id_detections:
        if re.findall(search_word, detection['name'], re.IGNORECASE):
            matching_detections.append(detection)

    return matching_detections

def enrich_lolbas(detections,lolbas):
    detections_with_mitre = dict()
    enriched_lolbas = []

    for detection in detections:
        detection_obj = dict()
        detection_obj['name'] = detection['name']
        detection_obj['id'] = detection['id']
        detection_obj['description'] = detection['description']
        detection_obj['kind'] = detection['file_path'].split('/')[-2]

        if 'mitre_attack_id' in detection['tags']:
            for mitre_id in detection['tags']['mitre_attack_id']:
                if mitre_id not in detections_with_mitre:
                    detections_with_mitre[mitre_id] = []
                    detections_with_mitre[mitre_id].append(detection_obj)
                else:
                    detections_with_mitre[mitre_id].append(detection_obj)
    
    for lolba in lolbas:
        for command in lolba['Commands']:
            if 'MitreID' in command:
                if command['MitreID'] in detections_with_mitre:
                    matching_id_detections = detections_with_mitre[command['MitreID']]
                    matching_detections = confirm_match(lolba,matching_id_detections)
                    for matching_detection in matching_detections:
                        print(lolba['Name'], matching_detection['name'])
                        detection_string = 'Splunk: https://research.splunk.com/' + matching_detection['kind'] + '/' + matching_detection['id'] + '/'
                        if 'Detection' in lolba and lolba['Detection'] != None:
                            lolba['Detection'].append(detection_string)
                        else:
                            lolba['Detection'] = []
                            lolba['Detection'].append(detection_string)

        # unique all detections
        unique_detection_list = []
        if 'Detection' in lolba and lolba['Detection'] != None:
            for detection in lolba['Detection']:
                if detection in unique_detection_list:
                    pass
                else:
                    unique_detection_list.append(detection)
            lolba['Detection'] = unique_detection_list    
        enriched_lolbas.append(lolba)
    return enriched_lolbas

def write_lolbas(enriched_lolbas, LOLBAS_PATH):
    for lolba in enriched_lolbas:
        file_path = lolba['file_path']
        lolba.pop('file_path')
        print(yaml.dump(lolba, indent=2))
        with open(file_path, 'w') as outfile:
            yaml.dump(lolba, outfile, default_flow_style=False, sort_keys=False)

if __name__ == "__main__":

    # grab arguments
    parser = argparse.ArgumentParser(description="Generates documentation from Splunk Security Content", epilog="""
    This generates documention in the form of jekyll site research.splunk.com from Splunk Security Content yamls. """)
    parser.add_argument("-splunk_security_content_path", "--spath", required=False, default='security_content/', help="path to security_content repo")
    parser.add_argument("-lolbas_path", "--lpath", required=False, default='.', help="path to the lolbas repo")
    parser.add_argument("-v", "--verbose", required=False, default=False, action='store_true', help="prints verbose output")
    
   # parse them
    args = parser.parse_args()
    SECURITY_CONTENT_PATH = args.spath
    LOLBAS_PATH = args.lpath
    VERBOSE = args.verbose

    if not (path.isdir(SECURITY_CONTENT_PATH) or path.isdir(SECURITY_CONTENT_PATH)):
        print("error: {0} is not a directory".format(SECURITY_CONTENT_PATH))
        sys.exit(1)

    print("processing splunk security content detections")
    detections = read_security_content_detections(SECURITY_CONTENT_PATH)
    print("processing lolbas")
    lolbas = read_lolbas(LOLBAS_PATH)
    print("enriching lolbas")
    enriched_lolbas = enrich_lolbas(detections, lolbas)
    print("writing enriched lolbas")
    write_lolbas(enriched_lolbas, LOLBAS_PATH)




    



