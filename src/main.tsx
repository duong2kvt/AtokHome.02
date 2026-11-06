import React,{useCallback,useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion,useReducedMotion} from 'motion/react';
import {transition,initialState,restoreState} from './flow.mjs';
import {quests,type Quest} from './quests';
import {assets} from './assets';
import {Animated} from './design/Motion';
import {HomeDiscovery} from './design/HomeDiscovery';
import {HomePromotion} from './design/HomePromotion';
import {LatestMissions} from './design/LatestMissions';
import {AdSheet} from './design/AdSheet';
import {MissionReward} from './design/MissionReward';
import {QuestReward} from './design/QuestReward';
import {CompletedPersonalCard} from './design/CompletedPersonalCard';
import '@fontsource/inter/latin-400.css';
import '@fontsource/inter/latin-500.css';
import '@fontsource/inter/latin-600.css';
import '@fontsource/inter/latin-700.css';
import './design/composition.css';
import './design/typography.css';
import './app.css';
const home=(name:string)=>(assets as Record<string,string>)['1984:37146/'+name];
const nav=(name:string)=>(assets as Record<string,string>)['1931:37366/'+name];
const reward=(name:string)=>(assets as Record<string,string>)['2060:60244/'+name];
function readState(){try{return restoreState(JSON.parse(localStorage.getItem('atok-quests-pwa-v2')||'null'));}catch{return initialState();}}
function Token(){return <span className="token"><img src={home('imgGroup37255')||home('imgGroup37254')} alt=""/></span>;}
function StatusBar(){return <div className="statusbar simulated-status"><strong>9:41</strong><span><img src={nav('imgCellularConnection')} alt="Mobile signal"/><img src={nav('imgWifi')} alt="Wi-Fi"/><img src={nav('imgBattery')} alt="Battery"/></span></div>;}
function QuestCard({quest,done,onGo}:{quest:Quest;done:boolean;onGo:()=>void}){
 return <article className={'quest-card '+(done?'done':'')} data-quest={quest.id}>
 <img className="quest-illustration" src={'assets/quest-'+quest.image+'.png'} alt=""/>
 <div className="quest-copy"><h3>{quest.title}</h3><div className="progress-track"><span style={{width:done?'100%':'0%'}}/><span className="progress-label">{done?quest.target:0}/{quest.target}</span></div></div>
 <span className="quest-reward"><Token/>{quest.reward}</span>
 {done?<span className="checked"><img src={reward('imgIconCheckLine')} alt="Completed"/></span>:<button className="quest-go" aria-label={'Go: '+quest.title} onClick={onGo}>Go</button>}
 </article>;
}
function App(){
 const [state,setState]=useState(readState),[busy,setBusy]=useState(false),[fail,setFail]=useState(false),[toast,setToast]=useState(''),[completionMotion,setCompletionMotion]=useState(false),[rewardReady,setRewardReady]=useState(false),[installPrompt,setInstallPrompt]=useState<any>(null),[online,setOnline]=useState(navigator.onLine);
 const viewport=useRef<HTMLDivElement>(null),dialog=useRef<HTMLDialogElement>(null),request=useRef<AbortController|null>(null),locked=useRef(false);
 const reduce=useReducedMotion(),review=new URLSearchParams(location.search).has('review');
 const send=useCallback((event:any)=>setState((s:any)=>transition(s,event)),[]);
 useEffect(()=>{try{localStorage.setItem('atok-quests-pwa-v2',JSON.stringify(state));}catch{setToast('Your browser could not save this preview.');}},[state]);
 useEffect(()=>{const handler=(e:any)=>{e.preventDefault();setInstallPrompt(e);};const connection=()=>setOnline(navigator.onLine);window.addEventListener('beforeinstallprompt',handler);window.addEventListener('online',connection);window.addEventListener('offline',connection);return()=>{request.current?.abort();window.removeEventListener('beforeinstallprompt',handler);window.removeEventListener('online',connection);window.removeEventListener('offline',connection);};},[]);
 useEffect(()=>{if(!toast)return;const id=setTimeout(()=>setToast(''),4000);return()=>clearTimeout(id);},[toast]);
 useEffect(()=>{viewport.current?.scrollTo({top:0});if(state.screen==='ad')dialog.current?.showModal();else dialog.current?.close();},[state.screen]);
 useEffect(()=>{setRewardReady(state.screen!=='quest-reward'||!!reduce);if(state.screen!=='quest-reward')return;const t=setTimeout(()=>setRewardReady(true),reduce?0:5000);return()=>clearTimeout(t);},[state.screen,reduce]);
 function closeSheet(){request.current?.abort();locked.current=false;setBusy(false);send({type:'CANCEL_AD'});}
 async function watchAd(){
 if(locked.current)return;locked.current=true;setBusy(true);request.current=new AbortController();const signal=request.current.signal;
 try{await new Promise<void>((resolve,reject)=>{const timer=setTimeout(resolve,600);signal.addEventListener('abort',()=>{clearTimeout(timer);reject(new DOMException('Cancelled','AbortError'));},{once:true});});if(signal.aborted)return;if(fail)throw Error('Ad unavailable. Please try again.');send({type:'AD_VERIFIED',receipt:crypto.randomUUID()});}
 catch(e){if(e instanceof Error&&e.name!=='AbortError')setToast(e.message);}
 finally{locked.current=false;setBusy(false);}
 }
 function outside(){setToast('This destination is not included in the supplied prototype.');}
 function openQuest(q:Quest){if(q.id==='personal')send({type:'OPEN_AD'});else outside();}
 const rewardScreen=state.screen==='mission-reward'||state.screen==='quest-reward';
 return <div className={'page'+(review?' review-page':'')}><main className={'app-shell '+(rewardScreen?'reward-mode':'')} aria-label="Atok mobile app">
 {!rewardScreen&&<><header className={state.screen==='home'?'home-header':'quest-header'}><StatusBar/>{state.screen==='home'?<div className="balance-bar"><button className="balance-button" onClick={outside} aria-label="Wallet"><span className="balance-token"><Animated as="span" sourceId="1984:37151" className="coin-edge"><img src={home('imgTokenShadedSpinningEdge')} alt=""/></Animated><span className="coin-center"><Animated as="span" sourceId="1984:37152" className="coin-face"><img src={home('imgGroup37254')} alt="ATOK"/></Animated></span></span><strong>200,967,000.4658</strong><img className="chevron" src={home('imgIconChevronRightLineMedium')} alt=""/></button><button className="header-icon" aria-label="Notifications" onClick={outside}><img src={home('imgLeadingIcon')} alt=""/><span className="notification-dot">1</span></button><button className="header-icon" aria-label="Messages" onClick={outside}><img src={home('imgLeadingIcon1')} alt=""/></button></div>:<div className="quest-titlebar"><button className="back-button" aria-label="Back to Home" onClick={()=>send({type:'HOME'})}><img src={nav('imgIconChevronLeftLineMedium')} alt=""/></button><h1>All quest</h1></div>}</header>
 <div ref={viewport} className={'screen-scroll '+(state.screen==='home'?'home-scroll':'quests-scroll')} inert={state.screen==='ad'}>
 {state.screen==='home'?<><section className="home-progress"><div className="sky-bg"><img src={home('imgImageFrame')} alt=""/><img className="sky-character" src={home('imgAsset')} alt=""/></div><h2>Quest progress</h2><div className="home-progress-content">{[{title:'Daily quest',description:'Complete 6 Daily quests',count:state.personalCompleted?1:0,total:6,amount:'20',details:true},{title:'Game quest',description:'Complete 3 Game quests',count:0,total:3,amount:'2',details:true},{title:'Weekly quest',description:'Complete 4 Weekly quests',count:0,total:4,amount:'20',details:false}].map(q=><article className="summary-card" key={q.title}><div><h3>{q.title}</h3><p>{q.description}</p></div><span className="summary-count">{q.count}/{q.total}</span><div className="summary-bottom"><span><Token/>{q.amount} ATOK</span>{q.details&&<button onClick={()=>send({type:'OPEN_QUESTS'})} aria-label={'Details: '+q.title}>Details</button>}</div></article>)}<div className="remaining">Time remains: <strong>22:09:04</strong></div></div></section><HomeDiscovery onQuests={()=>send({type:'OPEN_QUESTS'})}/><div role="button" tabIndex={0} aria-label="Personal missions" onClick={()=>send({type:'OPEN_QUESTS'})} onKeyDown={e=>{if(e.key==='Enter')send({type:'OPEN_QUESTS'});}}><HomePromotion/></div><LatestMissions/></>:<>
 {(['daily','weekly'] as const).map(group=><section className="quest-group" key={group}><div className="section-heading"><h2>{group==='daily'?'Daily quests':'Weekly quests'}</h2><span><img src={(assets as Record<string,string>)['1931:37371/imgIconClockLine']} alt=""/>{group==='daily'?'23:59:59':'167:59:59'}</span></div><div className="quest-list">{quests.filter(q=>q.group===group).map(q=>q.id==='personal'&&state.questCollected&&completionMotion?<div key={q.id} className="completed-card-slot"><CompletedPersonalCard/></div>:<QuestCard key={q.id} quest={q} done={q.id==='personal'&&state.personalCompleted} onGo={()=>openQuest(q)}/>)}</div></section>)}
 </>}
 </div>
 {state.screen==='home'&&<nav className="bottom-nav" aria-label="Main navigation">{[['Home','imgGroup3'],['Game','imgGroup2'],['Create',''],['Announ','imgGroup1'],['Profile','imgGroup']].map(([label,img])=><button key={label} aria-label={label} onClick={()=>label==='Home'?send({type:'HOME'}):outside()}>{img?<img src={home(img)} alt=""/>:<span className="create-plus">+</span>}{label==='Announ'&&<span className="notification-dot">12</span>}{label!=='Create'&&<span>{label}</span>}</button>)}</nav>}
 <div className="home-indicator" aria-hidden/>
 </>}
 {state.screen==='mission-reward'&&<div className="reward-screen"><MissionReward onCollect={()=>send({type:'COLLECT_MISSION'})}/></div>}
 {state.screen==='quest-reward'&&<div className="reward-screen" aria-busy={!rewardReady}><QuestReward onCollect={()=>{if(!rewardReady)return;setCompletionMotion(true);send({type:'COLLECT_QUEST'});}}/></div>}
 <dialog ref={dialog} className="ad-dialog" aria-label="Personal mission" onCancel={e=>{e.preventDefault();closeSheet();}}><AdSheet onWatch={watchAd} onCancel={closeSheet}/>{toast&&<div className="toast" role="alert">{toast}</div>}{busy&&<div className="verification-overlay" role="status">Verifying preview completion…</div>}</dialog>
 {toast&&state.screen!=='ad'&&<div className="toast" role="status">{toast}</div>}
 </main>
 <footer className="app-caption"><span>Atok · Interactive prototype</span>{!online&&<span>Offline</span>}{installPrompt&&<button onClick={async()=>{await installPrompt.prompt();setInstallPrompt(null);}}>Install app</button>}<a href="?review=1">Review</a></footer>
 {review&&<aside className="review-tools"><h2>Demo -02 review</h2><p>Connected Figma prototype. Reward values are design fixtures; no live ads or wallet transactions.</p><button onClick={()=>{request.current?.abort();setCompletionMotion(false);setState(initialState());}}>Reset demo</button><button onClick={()=>setState({...initialState(),screen:'quests'})}>All quests</button><button onClick={()=>setState({...initialState(),screen:'mission-reward'})}>Mission reward</button><button onClick={()=>setState({...initialState(),screen:'quest-reward',missionCollected:true,personalCompleted:true})}>Replay reward motion</button><label><input type="checkbox" checked={fail} onChange={e=>setFail(e.target.checked)}/> Simulate ad failure</label><a href="behavior-specification.md">Behavior specification</a></aside>}
 </div>;
}
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register(import.meta.env.BASE_URL+'sw.js').catch(()=>{}));
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
