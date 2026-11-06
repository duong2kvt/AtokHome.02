import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';
const assets=JSON.parse(fs.readFileSync('assets-manifest.json','utf8'));
for(const item of assets){if(!item.path.startsWith('public/assets/')||!/^https:\/\/www\.figma\.com\/api\/mcp\/asset\//.test(item.url))throw Error('Invalid asset entry');
 if(fs.existsSync(item.path)&&fs.statSync(item.path).size>0)continue;
 fs.mkdirSync(path.dirname(item.path),{recursive:true});
 const result=spawnSync('curl',['-f','-L','--retry','2','--max-time','90','-sS','-o',item.path+'.download',item.url],{stdio:'inherit'});
 if(result.status!==0)throw Error('Asset download failed: '+item.path);
 if(!fs.statSync(item.path+'.download').size)throw Error('Empty asset: '+item.path);
 fs.renameSync(item.path+'.download',item.path);
}
console.log('Verified '+assets.length+' local Figma assets.');
