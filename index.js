const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

let users = [
  {
    id: 1,
    username: "test",    
    name: "John Doe",
    dateOfBirth: "1990-05-20",
    address: "Measurement Street 567",
    city: "London",
    country: "uk",
    email: "john.doe@demo.com"
  }
];

let sensors = [
    {
        deviceType: "Ruuvi Tag",
        description: "Sensor located in sunny countryside close to a lake",
        locationLatitude: 44.381232,
        locationLongitude: -134.122711,
        sensorTypesTemperature: true,
        sensorTypesHumidity: false,
        sensorTypesRainfall: true,
        sensorTypesWind: false,
        sensorTypesCloudCoverage: true
    }
];

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/sensors', (req, res) => {
    res.json(sensors);
})

app.post('/users', (req, res) => {
  console.log('Hello /users');
  
  if(req.body.hasOwnProperty('email') && req.body.hasOwnProperty('username') &&
  req.body.hasOwnProperty('name') && req.body.hasOwnProperty('dateOfBirth') &&
  req.body.hasOwnProperty('address') && req.body.hasOwnProperty('city') &&
  req.body.hasOwnProperty('country'))
  {
    // I accept or validate more
    //if (typeof req.body.email === 'string') 
    const result = {
      id: 234622
    }

    users.push({
      id: users.length + 1,
      username: req.body.username,
      name: req.body.name,
      dateOfBirth: req.body.dateOfBirth,
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      email: req.body.email
    })
  
    res.status(201).json(result);
  }
  else
  {
    res.sendStatus(400);
  }
})

app.post('/sensors', (req, res) => {
    console.log('Hello /sensors');
    
    if(req.body.hasOwnProperty('deviceType') && req.body.hasOwnProperty('description') &&
    req.body.hasOwnProperty('locationLatitude') && req.body.hasOwnProperty('locationLongitude') &&
    req.body.hasOwnProperty('sensorTypesTemperature') && req.body.hasOwnProperty('sensorTypesHumidity') &&
    req.body.hasOwnProperty('sensorTypesRainfall') && req.body.hasOwnProperty('sensorTypesWind') && 
    req.body.hasOwnProperty('sensorTypesCloudCoverage'))
    {
      // I accept or validate more
      const result = {
        identificationCode: 9320977
      }
  
      sensors.push({
        identificationCode: sensors.length + 1,
        deviceType: req.body.deviceType,
        description: req.body.description,
        locationLatitude: req.body.locationLatitude,
        locationLongitude: req.body.locationLongitude,
        sensorTypesTemperature: req.body.sensorTypesTemperature,
        sensorTypesHumidity: req.body.sensorTypesHumidity,
        sensorTypesRainfall: req.body.sensorTypesRainfall,
        sensorTypesWind: req.body.sensorTypesWind,
        sensorTypesCloudCoverage: req.body.sensorTypesCloudCoverage
      })
    
      res.status(201).json(result);
    }
    else
    {
      res.sendStatus(400);
    }
})

app.put('/users/:id', (req, res) => {
    if(req.body.hasOwnProperty('email') && req.body.hasOwnProperty('username') &&
    req.body.hasOwnProperty('name') && req.body.hasOwnProperty('dateOfBirth') &&
    req.body.hasOwnProperty('address') && req.body.hasOwnProperty('city') &&
    req.body.hasOwnProperty('country'))
    {
      // I accept or validate more
      const result = {
        id: 234622
      };
  
      users.push({
        id: users.length + 1,
        username: req.body.username,
        name: req.body.name,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        email: req.body.email
      })
    
      res.status(200).json(result);
    }
    else
    {
      res.sendStatus(204);
    }
});

app.put('/sensors/:identificationCode', (req, res) => {
    console.log('Hello /sensors');
    
    if(req.body.hasOwnProperty('deviceType') && req.body.hasOwnProperty('description') &&
    req.body.hasOwnProperty('locationLatitude') && req.body.hasOwnProperty('locationLongitude') &&
    req.body.hasOwnProperty('sensorTypesTemperature') && req.body.hasOwnProperty('sensorTypesHumidity') &&
    req.body.hasOwnProperty('sensorTypesRainfall') && req.body.hasOwnProperty('sensorTypesWind') && 
    req.body.hasOwnProperty('sensorTypesCloudCoverage'))
    {
      // I accept or validate more
      const result = {
        identificationCode: 9320977
      };
  
      users.push({
        uniqueIdentificationCode: sensors.length + 1,
        deviceType: req.body.deviceType,
        description: req.body.description,
        locationLatitude: req.body.locationLatitude,
        locationLongitude: req.body.locationLongitude,
        sensorTypesTemperature: req.body.sensorTypesTemperature,
        sensorTypesHumidity: req.body.sensorTypesHumidity,
        sensorTypesRainfall: req.body.sensorTypesRainfall,
        sensorTypesWind: req.body.sensorTypesWind,
        sensorTypesCloudCoverage: req.body.sensorTypesCloudCoverage
      });
    
      res.status(200).json(result);
    }
    else
    {
      res.sendStatus(204);
    }
});

app.delete('/sensors/:identificationCode', (req, res) => {
    sensors = sensors.filter(sensors => sensors.uniqueIdentificationCode != req.params.uniqueIdentificationCode);
    res.sendStatus(200);
})
  


app.listen(port, () => console.log(`Example app listening on port ${port}!`))