import { test, expect } from '@playwright/test';

let createdSiteId: number;

test('Site ekleme - başarılı', async ({ request }) => {
  const res = await request.post('/api/sites', {
    data: { name: 'Campus X', location: 'Ankara' }
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.name).toBe('Campus X');
  createdSiteId = body.id; 
});

test('Site getirme - geçerli ID', async ({ request }) => {
  const res = await request.get(`/api/sites/${createdSiteId}`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.id).toBe(createdSiteId);
});

test('Site getirme - geçersiz ID', async ({ request }) => {
  const res = await request.get('/api/sites/999999');
  expect(res.status()).toBe(404);
});

test('Site silme - geçerli ID', async ({ request }) => {
  const res = await request.delete(`/api/sites/${createdSiteId}`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.site.id).toBe(createdSiteId);
});

test('Site silme - tekrar silme', async ({ request }) => {
  const res = await request.delete(`/api/sites/${createdSiteId}`);
  expect(res.status()).toBe(404);
});