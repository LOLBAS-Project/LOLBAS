import os       
import yaml
import argparse
from os import path, walk
from tqdm import tqdm
from jinja2 import Environment, FileSystemLoader

def read_lolbas(LOLBAS_PATH, VERBOSE):
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
            print("processing lolba yaml {0}".format(manifest_file))

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

def write_count(lolbas, LOLBAS_PATH):
    j2_env = Environment(loader=FileSystemLoader(os.path.join(os.path.dirname(__file__), 'templates')),trim_blocks=False)

    template = j2_env.get_template('lolbas_count.j2.svg')
    lolbas_count = len(lolbas)
    output = template.render(lolbas_count=lolbas_count)
    output_path = LOLBAS_PATH + '/lolbas_count.svg'
    with open(output_path, 'w') as f:
        output = output.encode('ascii', 'ignore').decode('ascii')
        f.write(output)
if __name__ == "__main__":

    # grab arguments
    parser = argparse.ArgumentParser(description="Generates lolbas_count.svg", epilog="""This generates the svg that gets used as the project badge""")
    parser.add_argument("-lolbas_path", "--lpath", required=False, default='.', help="path to the lolbas repo")
    parser.add_argument("-v", "--verbose", required=False, default=False, action='store_true', help="prints verbose output")

   # parse them
    args = parser.parse_args()
    LOLBAS_PATH = args.lpath
    VERBOSE = args.verbose

    print("processing lolbas")
    lolbas = read_lolbas(LOLBAS_PATH, VERBOSE)
    print("writing enriched lolbas")
    write_count(lolbas, LOLBAS_PATH)
