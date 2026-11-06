export type Quest={id:string;title:string;target:number;reward:string;image:number;group:'daily'|'weekly'};
export const quests:Quest[]=[
 {id:'avatar',title:'Answer questions from Avatar',target:1,reward:'0.45',image:0,group:'daily'},
 {id:'personal',title:'Complete 3 Personal missions',target:3,reward:'0.45',image:1,group:'daily'},
 {id:'lucky',title:'Play Lucky spin 2 times',target:2,reward:'0.45',image:2,group:'daily'},
 {id:'roller',title:'Play Roller 2 times',target:2,reward:'1.55',image:3,group:'daily'},
 {id:'jackpot',title:'Play Jackpot 2 times',target:2,reward:'1.55',image:4,group:'daily'},
 {id:'plinko',title:'Drop 5 Plinko balls',target:5,reward:'1.55',image:5,group:'daily'},
 {id:'mystery',title:'Complete 3 Mystery missions',target:3,reward:'0.45',image:6,group:'weekly'},
 {id:'refer',title:'Refer 1 friend using your referral code',target:1,reward:'0.45',image:7,group:'weekly'},
 {id:'friend',title:'Add 1 friend successfully on Atok chat',target:1,reward:'0.45',image:8,group:'weekly'},
 {id:'weekly-personal',title:'Complete 12 Personal missions',target:10,reward:'0.45',image:1,group:'weekly'}
];
