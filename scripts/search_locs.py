#!/usr/bin/python
import csv
import requests
import sys

# Disable urllib warnings because our security is bad and we don't want to be embarassed
#urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

# Take the input arguments
loc_path = sys.argv[1]	# Locations csv file
out_path = sys.argv[2]	# Annotated locations output csv file
geo_key = sys.argv[3]	# The API key for the Google Geocaching API

# Only run if we're not loading it as a library
if __name__ == "__main__":
	# Open the files
	with open(loc_path, 'r') as loc_file, open(out_path, 'w') as out_file:
		# Set up the locations reader
		loc_reader = csv.reader(loc_file)
		loc_reader.next()
		
		# Set up the locations writer
		out_writer = csv.writer(out_file)
		out_writer.writerow(['local authority','latitude','longitude'])
		
		# Iterate through the input locations
		for location in loc_reader:
			# Get the lat long values from the Google Geocaching API
			api_response = requests.get('https://maps.googleapis.com/maps/api/geocode/json?address={0}&key={1}'.format(location[0], geo_key))
			api_response_dict = api_response.json()
			
			# Check Google found the location
			if api_response_dict['status'] == 'OK':
				latitude = api_response_dict['results'][0]['geometry']['location']['lat']
				longitude = api_response_dict['results'][0]['geometry']['location']['lng']
			
			# Warn the user if we didn't find the location
			else:
				print('Unable to process location: {0}'.format(location[0]))
			
			# Output the annotated location to the csv
			out_writer.writerow(location + [latitude, longitude])

