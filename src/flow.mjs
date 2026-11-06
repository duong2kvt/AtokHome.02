export const initialState=()=>({version:2,screen:'home',personalCompleted:false,missionCollected:false,questCollected:false,receipts:[]});
export function restoreState(raw){
 if(!raw||raw.version!==2||!['home','quests','ad','mission-reward','quest-reward'].includes(raw.screen)||!Array.isArray(raw.receipts))return initialState();
 if(typeof raw.personalCompleted!=='boolean'||typeof raw.missionCollected!=='boolean'||typeof raw.questCollected!=='boolean'||raw.questCollected&&!raw.missionCollected||raw.missionCollected&&!raw.personalCompleted)return initialState();
 return {...raw,screen:raw.screen==='ad'?'quests':raw.screen,receipts:raw.receipts.filter(x=>typeof x==='string').slice(-30)};
}
export function transition(state,event){
 const s={...state,receipts:[...state.receipts]};
 switch(event.type){
 case 'OPEN_QUESTS':return {...s,screen:'quests'};
 case 'HOME':return {...s,screen:'home'};
 case 'OPEN_AD':return s.personalCompleted?s:{...s,screen:'ad'};
 case 'CANCEL_AD':return {...s,screen:'quests'};
 case 'AD_VERIFIED':
 if(s.screen!=='ad'||typeof event.receipt!=='string'||!event.receipt||s.receipts.includes(event.receipt))return s;
 return {...s,screen:'mission-reward',receipts:[...s.receipts,event.receipt]};
 case 'COLLECT_MISSION':
 if(s.screen!=='mission-reward'||s.missionCollected)return s;
 return {...s,screen:'quest-reward',missionCollected:true,personalCompleted:true};
 case 'COLLECT_QUEST':
 if(s.screen!=='quest-reward'||!s.missionCollected||s.questCollected)return s;
 return {...s,screen:'quests',questCollected:true};
 default:return s;
 }
}
