import { test, expect } from '@playwright/test';

test('Level ekleme - tekli', async ({ request }) => {
  const res = await request.post('/api/levels', {
    data: { name: 'Zemin Kat', buildingId: 1 }
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.levels.length).toBe(1);
  expect(body.levels[0].name).toBe('Zemin Kat');
});

test('Level ekleme - çoklu', async ({ request }) => {
  const res = await request.post('/api/levels', {
    data: [
      { name: '1. Kat', buildingId: 1 },
      { name: '2. Kat', buildingId: 1 }
    ]
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body.levels.length).toBe(2);
  expect(body.levels[0].name).toBe('1. Kat');
  expect(body.levels[1].name).toBe('2. Kat');
});

test('Level ekleme - eksik alan', async ({ request }) => {
  const res = await request.post('/api/levels', {
    data: { name: '', buildingId: null }
  });
  expect(res.status()).toBe(400);
});