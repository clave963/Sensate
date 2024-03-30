// Complete Project Details at: https://RandomNerdTutorials.com/

// Database Paths
var dataFloatPath = 'brightness'; // Assuming analog value is stored as a float
var dataIntPath = 'brightness'; // Assuming analog value is stored as an integer

// Get a database reference 
const databaseFloat = database.ref(dataFloatPath);
const databaseInt = database.ref(dataIntPath);

// Variables to save database current values
var floatReading;
var intReading;

// Attach an asynchronous callback to read the data
databaseFloat.on('value', (snapshot) => {
  floatReading = snapshot.val();
  console.log(floatReading);
  document.getElementById("reading-float").innerHTML = floatReading;
  updateBrightness(floatReading); // Update brightness information
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

databaseInt.on('value', (snapshot) => {
  intReading = snapshot.val();
  console.log(intReading);
  document.getElementById("reading-int").innerHTML = intReading;
  updateBrightness(intReading); // Update brightness information
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});

function updateBrightness(value) {
  var brightnessLabel = document.getElementById("brightness-label");

  if (value < 40) {
    brightnessLabel.innerHTML = "Dark";
  } else if (value < 800) {
    brightnessLabel.innerHTML = "Dim";
  } else if (value < 2000) {
    brightnessLabel.innerHTML = "Light";
  } else if (value < 3200) {
    brightnessLabel.innerHTML = "Bright";
  } else {
    brightnessLabel.innerHTML = "Very bright";
  }
}