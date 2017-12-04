# vetbot
## MOD AI Hackathon
VetBot is a converstational AI and interactive visualisation for exploring veteran social data created for the 2017 MOD AI Hackathon. It allows users from different backgrounds to access geographic data using queries submitted in plain English. We hope that VetBot will empower journalists, charities, and government employees to investigate the level of support veterans are given in the UK and to help inform the strategy surrounding the Armed Forces Covenant and its commitments for their welfare.

At this time VetBot is equipped with data on the quality of employment and health of UK veterans when compared to the general population.

### Dependencies:
* Linux/UNIX
* node.js
* IBM Watson Conversation
  - N.B. Our Watson instance was calibrated on IBM's servers and is not exportable (contact the authors for more information)
* A MongoDB database containing veterans data
  - The data schema is *TBC*

### Local setup instructions:
1. In the __*ui*__ folder perform an `npm install`
2. Update __*config.js*__ with
  - address and credentials for your Watson Conversation instance, and
  - address and credentials for the MongoDB datastore
3. Launch the server with `node server.js`
4. Navigate to __*localhost:3000*__ in your web browser
