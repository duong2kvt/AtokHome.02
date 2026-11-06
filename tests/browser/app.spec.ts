import {test,expect} from '@playwright/test';
test('mobile prototype flow completes once and survives reload',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('./');await page.getByRole('button',{name:'Details: Daily quest',exact:true}).click();
 await page.getByRole('button',{name:'Go: Complete 3 Personal missions',exact:true}).click();
 await expect(page.getByRole('dialog')).toBeVisible();await page.getByRole('button',{name:'Watch ad',exact:true}).click();
 await expect(page.getByText('Mission completion reward',{exact:true})).toBeVisible();await expect(page.getByText('1.624',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Collect',exact:true}).click();
 await expect(page.getByText('Quest completion reward',{exact:true})).toBeVisible();
 await page.waitForTimeout(5200);
 await page.screenshot({path:'test-results/quest-reward.png'});
 await page.getByRole('button',{name:'Collect',exact:true}).click();
 await expect(page.getByRole('heading',{name:'All quest',exact:true})).toBeVisible();
 await page.reload();await expect(page.locator('[data-quest="personal"]')).toHaveClass(/done/);
 await expect(page.locator('[data-quest="personal"] .progress-label')).toHaveText('3/3');
 expect(errors).toEqual([]);
});
test('cancel and provider failure preserve progress',async({page})=>{
 await page.goto('./?review=1');await page.getByRole('button',{name:'All quests',exact:true}).click();await page.getByRole('button',{name:'Go: Complete 3 Personal missions',exact:true}).click();
 await page.getByRole('button',{name:'Not now',exact:true}).click();await expect(page.locator('[data-quest="personal"] .progress-label')).toHaveText('0/3');
 await page.getByLabel('Simulate ad failure').check();await page.getByRole('button',{name:'Go: Complete 3 Personal missions',exact:true}).click();await page.getByRole('button',{name:'Watch ad',exact:true}).click();
 await expect(page.getByText('Ad unavailable. Please try again.',{exact:true})).toBeVisible();await expect(page.getByRole('dialog')).toBeVisible();
});
test('assets, mobile bounds, manifest and offline navigation',async({page})=>{
 await page.goto('./');await page.waitForLoadState('networkidle');
 expect(await page.locator('img').evaluateAll(images=>images.filter((i:any)=>!i.complete||!i.naturalWidth).map(i=>i.getAttribute('src')))).toEqual([]);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBeTruthy();
 const manifest=await page.request.get('./manifest.webmanifest');expect(manifest.ok()).toBeTruthy();expect((await manifest.json()).display).toBe('standalone');
 await page.evaluate(async()=>{await navigator.serviceWorker.ready;if(!navigator.serviceWorker.controller)await new Promise<void>(resolve=>navigator.serviceWorker.addEventListener('controllerchange',()=>resolve(),{once:true}));});
 await page.screenshot({path:'test-results/home-mobile.png',fullPage:true});
 const offlineErrors:string[]=[];page.on('pageerror',e=>offlineErrors.push(e.message));page.on('console',m=>{if(m.type()==='error')offlineErrors.push(m.text());});await page.context().setOffline(true);await page.reload();console.log('Offline diagnostic',JSON.stringify({url:page.url(),body:(await page.locator('body').innerText()).slice(0,1200),errors:offlineErrors}));await expect(page.getByRole('button',{name:'Details: Daily quest',exact:true})).toBeVisible();await page.context().setOffline(false);
});
