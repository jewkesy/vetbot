#!/usr/bin/python
import csv
import json
import sys

print("HUGE WARNING: THIS SCRIPT EXPECTS THE COLUMNS TO BE LA, LAT, LONG, THEN X COLUMNS OF VETERAN DATA (AND COLUMNS) FOLLOWED BY X COLUMNS OF GENERAL POPULATION DATA")

# Take the input arguments
data_path = sys.argv[1]	# Data csv file
json_path = sys.argv[2]	# Output JSON file

# Only run if we're not loading it as a library
if __name__ == "__main__":
	# Open the files
	with open(data_path, 'r') as data_file, open(json_path, 'w') as json_file:
		# Set up the data reader and discard the less useful column headings
		data_reader = csv.reader(data_file)
		headings = data_reader.next()
		headings = headings[3:]
		
		# We will just be putting the JSON data into a recursive dictionary
		json_data = []
		
		# Iterate through the local_authorities, ingesting the data
		for local_authority in data_reader:
			# Make a new dictinary for this local authority and populate it
			#	with basic information
			json_entry = {}
			json_entry["authority"] = local_authority[0]
			json_entry["latitude"] = float(local_authority[1])
			json_entry["longitude"] = float(local_authority[2])
			
			# Make blank dictionaries for the general and veteran populations
			#	and prepare to populate
			gen_dict = {}
			vet_dict = {}
			local_authority = local_authority[3:]
			num_columns = len(local_authority) // 2
			
			# Iterate through the columns and store the data
			for idx in range(num_columns):
				vet_dict[headings[idx]] = float(local_authority[idx].replace(',',''))
				gen_dict[headings[idx]] = float(local_authority[idx + num_columns].replace(',',''))
			
			# Add the json entry to the data structure
			json_entry["veteran"] = vet_dict
			json_entry["general"] = gen_dict
			json_data.append(json_entry)
		
		# Output all of the data to the JSON file
		json.dump(json_data, json_file)

