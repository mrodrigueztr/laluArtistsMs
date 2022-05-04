const connectDB = require('../db/lalu_artist_db');
const app = require('../laluArtist');

const port = process.env.PORT || 3005;

const start = async () => {
  try {
    await connectDB('mongodb+srv://mrodrigueztr:prueba@api-rest.ty8tf.mongodb.net/laluArtistsDb?retryWrites=true&w=majority');
    app.listen(port, () =>
      console.log(`Server is listening on port ...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();