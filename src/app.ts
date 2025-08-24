import express from 'express';
import siteRoutes from './routes/siteRoutes';
import buildingRoutes from './routes/buildingRoutes';
import levelsRoutes from './routes/levelsRoutes';


const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pointr API çalışıyor 🚀');
});


app.use('/api/sites', siteRoutes);
app.use('/api/buildings', buildingRoutes);
app.use('/api/levels', levelsRoutes);

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor`);
});