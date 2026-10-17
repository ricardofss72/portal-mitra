import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const apps=JSON.parse(readFileSync(new URL('../src/config/apps.json',import.meta.url),'utf8'));
test('catálogo inicial válido, sem links inseguros ou identificadores repetidos',()=>{assert.equal(apps.length,3);assert.equal(new Set(apps.map(a=>a.id)).size,apps.length);for(const app of apps){assert.ok(app.name&&app.description);assert.equal(typeof app.active,'boolean');assert.ok(Number.isFinite(app.order));if(app.url){const u=new URL(app.url);assert.equal(u.protocol,'https:');assert.equal(u.username+u.password,'');}}assert.equal(apps.find(a=>a.id==='mtgym').url,'https://maingym.lovable.app');assert.ok(!apps.some(a=>/smart.?id/i.test(a.name)));});
