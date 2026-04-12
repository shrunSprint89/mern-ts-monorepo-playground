# MongoDB Setup

## Configuration

1. **Update Environment Variables**
   
   Edit `server/.env` and replace the placeholders with your actual MongoDB credentials:
   
   ```
   MONGODB_URI=mongodb+srv://<db_username>:<db_password>@merncluster.cloxr.mongodb.net/?appName=mernCluster
   ```
   
   Replace:
   - `<db_username>` with your MongoDB username
   - `<db_password>` with your MongoDB password

2. **Start the Server**
   
   ```bash
   cd server
   npm run dev
   ```

## Features

- ✅ Automatic connection on server startup
- ✅ Connection health check (ping)
- ✅ Graceful shutdown handling
- ✅ Connection event logging
- ✅ Environment variable validation
- ✅ TypeScript support with proper types

## Testing the Connection

Once the server starts, you should see:
```
🔗 Mongoose connected to MongoDB
✅ Pinged your deployment. You successfully connected to MongoDB!
🚀 Server running on port 5000
```

You can also test the health endpoint:
```bash
curl http://localhost:5000/api/health
```
