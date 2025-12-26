const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const database = client.db("carDB");
    const usersCollection = database.collection("users");
    const carsCollection = database.collection("cars");
    const bookingsCollection = database.collection("bookings");

    // Auth routes
    app.post('/auth/login', async (req, res) => {
      try {
        const { email, password } = req.body;
        const user = await usersCollection.findOne({ email });
        if (user && password === '123456') {
          res.send({ success: true, user: { email: user.email, displayName: user.name, role: user.role } });
        } else {
          res.status(401).send({ success: false, message: 'Invalid credentials' });
        }
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.post('/auth/register', async (req, res) => {
      try {
        const { name, email, password } = req.body;
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
          return res.status(400).send({ success: false, message: 'User already exists with this email' });
        }
        const newUser = { 
          name: name || email.split('@')[0], 
          email, 
          password, 
          role: 'user',
          photo: null,
          createdAt: new Date()
        };
        const result = await usersCollection.insertOne(newUser);
        res.send({ success: true, user: { email, displayName: newUser.name, role: 'user' }, insertedId: result.insertedId });
      } catch (error) {
        res.status(500).send({ success: false, error: error.message });
      }
    });

    // User routes
    app.post('/user', async (req, res) => {
      try {
        const user = req.body;
        const query = { email: user.email };
        const existingUser = await usersCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: 'User already exists', insertedId: null });
        }
        // Set default photo to null if not provided
        if (!user.photo) {
          user.photo = null;
        }
        const result = await usersCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/user/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const query = { email: email };
        const result = await usersCollection.findOne(query);
        res.send(result || { role: 'user' });
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/users', async (req, res) => {
      try {
        const result = await usersCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.delete('/user/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await usersCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.patch('/user/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const updateDoc = {
          $set: {
            role: 'admin'
          }
        };
        const result = await usersCollection.updateOne(query, updateDoc);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Car routes
    app.post('/car', async (req, res) => {
      try {
        const car = req.body;
        const result = await carsCollection.insertOne(car);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/cars', async (req, res) => {
      try {
        const result = await carsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/carDetails/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await carsCollection.findOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.delete('/car/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await carsCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Booking routes
    app.post('/booking', async (req, res) => {
      try {
        const booking = req.body;
        const result = await bookingsCollection.insertOne(booking);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/bookings', async (req, res) => {
      try {
        const result = await bookingsCollection.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.get('/bookings/:email', async (req, res) => {
      try {
        const email = req.params.email;
        const query = { email: email };
        const result = await bookingsCollection.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.delete('/booking/:id', async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await bookingsCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Create admin user if not exists
    try {
      const existingAdmin = await usersCollection.findOne({ email: "admin@gmail.com" });
      if (!existingAdmin) {
        const adminUser = {
          name: "Admin",
          email: "admin@gmail.com",
          password: "123456",
          photo: "https://via.placeholder.com/150",
          role: "admin"
        };
        await usersCollection.insertOne(adminUser);
        console.log("Admin user created");
      }
    } catch (error) {
      console.log("Admin user setup:", error.message);
    }

    app.get('/', (req, res) => {
      res.send('Car Hire Server is running!');
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);