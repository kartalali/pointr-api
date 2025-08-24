import { Request, Response } from 'express';

interface LevelPayload {
  name: string;
  buildingId: number;
}

interface Level {
  id: number;
  name: string;
  buildingId: number;
}

let levels: Level[] = [];

export const importLevels = (req: Request<{}, {}, LevelPayload | LevelPayload[]>, res: Response) => {
  const payload = req.body;

  const isArray = Array.isArray(payload);
  const inputLevels = isArray ? payload : [payload];

  const invalid = inputLevels.filter(l => !l.name || !l.buildingId);
  if (invalid.length > 0) {
    return res.status(400).json({ error: 'Her level için name ve buildingId zorunludur' });
  }

  const newLevels: Level[] = inputLevels.map(l => ({
    id: Date.now() + Math.floor(Math.random() * 1000), // benzersiz ID
    name: l.name,
    buildingId: l.buildingId
  }));

  levels.push(...newLevels);

  return res.status(201).json({
    message: `${newLevels.length} level başarıyla eklendi`,
    levels: newLevels
  });
};