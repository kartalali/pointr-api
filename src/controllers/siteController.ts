import { Request, Response } from 'express';

interface SitePayload {
  name: string;
  location: string;
}

interface Site {
  id: number;
  name: string;
  location: string;
}

let sites: Site[] = [];

export const createSite = (req: Request<{}, {}, SitePayload>, res: Response) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: 'Name ve location zorunludur' });
  }

  const newSite: Site = {
    id: Date.now(),
    name,
    location
  };

  sites.push(newSite);
  return res.status(201).json(newSite);
};

export const getSite = (req: Request, res: Response) => {
  const siteId = Number(req.params.id);
  const site = sites.find(s => s.id === siteId);

  if (!site) {
    return res.status(404).json({ error: 'Site bulunamadı' });
  }

  return res.status(200).json(site);
};

export const deleteSite = (req: Request, res: Response) => {
  const siteId = Number(req.params.id);
  const index = sites.findIndex(s => s.id === siteId);

  if (index === -1) {
    return res.status(404).json({ error: 'Site bulunamadı' });
  }

  const deletedSite = sites.splice(index, 1)[0];
  return res.status(200).json({ message: 'Site silindi', site: deletedSite });
};