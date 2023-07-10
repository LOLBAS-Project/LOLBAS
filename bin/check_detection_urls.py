import os
import argparse
import requests
import yaml
import csv

def check_url(url):
    try:
        response = requests.get(url)
        return response.status_code
    except requests.exceptions.RequestException as e:
        return str(e)

def process_yaml(file_path, verbose, csv_writer):
    with open(file_path, 'r') as stream:
        try:
            yaml_content = yaml.safe_load(stream)
            if 'Detection' in yaml_content:
                for detection in yaml_content['Detection']:
                    for key, value in detection.items():
                        if isinstance(value, str) and value.startswith('http'):
                            status = check_url(value)
                            if status != 200:
                                if verbose:
                                    print(f'URL {value} in file {file_path} returned status {status}')
                                csv_writer.writerow([file_path, key, value, status])
        except yaml.YAMLError as exc:
            print(exc)

def main():
    parser = argparse.ArgumentParser(description='Check URLs in YAML files.')
    parser.add_argument('-d', '--directory', required=True, help='Directory to check')
    parser.add_argument('-v', '--verbose', action='store_true', help='Verbose output')
    parser.add_argument('-o', '--output', default='results.csv', help='Output CSV file')
    args = parser.parse_args()

    with open(args.output, 'w', newline='') as csvfile:
        csv_writer = csv.writer(csvfile)
        csv_writer.writerow(['File Path', 'Field Name', 'URL', 'Status'])

        for root, dirs, files in os.walk(args.directory):
            for file in files:
                if file.endswith('.yml'):
                    if args.verbose:
                        print(f'Processing file {os.path.join(root, file)}')
                    process_yaml(os.path.join(root, file), args.verbose, csv_writer)

if __name__ == "__main__":
    main()

