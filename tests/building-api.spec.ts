import { test, expect } from '@playwright/test';

let createdBuildingId: number;

test('Bina ekleme - başarılı', async ({ request }) => {
  const res = await request.post('/api/buildings', {
    data: { name: 'A Blok', siteId: 1 }
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.name).toBe('A Blok');
  createdBuildingId = body.id;
});

test('Bina getirme - geçerli ID', async ({ request }) => {
  const res = await request.get(`/api/buildings/${createdBuildingId}`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.id).toBe(createdBuildingId);
});

test('Bina getirme - geçersiz ID', async ({ request }) => {
  const res = await request.get('/api/buildings/999999');
  expect(res.status()).toBe(404);
});

test('Bina silme - geçerli ID', async ({ request }) => {
  const res = await request.delete(`/api/buildings/${createdBuildingId}`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.building.id).toBe(createdBuildingId);
});

test('Bina silme - tekrar silme', async ({ request }) => {
  const res = await request.delete(`/api/buildings/${createdBuildingId}`);
  expect(res.status()).toBe(404);
});