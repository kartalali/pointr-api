import { Request, Response } from 'express';

interface BuildingPayload {
  name: string;
  siteId: number;
}

interface Building {
  id: number;
  name: string;
  siteId: number;
}

let buildings: Building[] = [];

export const createBuilding = (req: Request<{}, {}, BuildingPayload>, res: Response) => {
  const { name, siteId } = req.body;

  if (!name || !siteId) {
    return res.status(400).json({ error: 'Name ve siteId zorunludur' });
  }

  const newBuilding: Building = {
    id: Date.now(),
    name,
    siteId
  };

  buildings.push(newBuilding);
  return res.status(201).json(newBuilding);
};

export const getBuilding = (req: Request, res: Response) => {
  const buildingId = Number(req.params.id);
  const building = buildings.find(b => b.id === buildingId);

  if (!building) {
    return res.status(404).json({ error: 'Bina bulunamadı' });
  }

  return res.status(200).json(building);
};

export const deleteBuilding = (req: Request, res: Response) => {
  const buildingId = Number(req.params.id);
  const index = buildings.findIndex(b => b.id === buildingId);

  if (index === -1) {
    return res.status(404).json({ error: 'Bina bulunamadı' });
  }

  const deletedBuilding = buildings.splice(index, 1)[0];
  return res.status(200).json({ message: 'Bina silindi', building: deletedBuilding });
};