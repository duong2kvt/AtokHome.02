# Demo -02 implementation specification
Source design: https://www.figma.com/design/dUUl5QJ6HYusaiaFmVNtz2/Atok-App-2027?node-id=2060-70684
Prototype starting frame: 1984:37146. Retrieved on 2026-11-06 through connected Figma MCP, session 086c2d3a-8cdb-4394-bea2-6a5949e47144.

## Inventory
1984:37146 Home (390×1096); 1931:37364 All quest (390×1110); 2010:43007 ad sheet over list (390×844); 2010:48851 Mission reward (390×844); 2060:60244 Quest reward Motion (390×844); 2060:63046 Back to All quest (390×1110).
Sparse responses were not used as implementation detail: the daily quest cards, weekly list, navigation and sheet were read separately with high-fidelity design context. Resolved text sizes/line heights were read from the actual nodes; they differ from some exported fallback token values. Static quest illustrations were exported from their original image slots.

## Prototype evidence
- Home Details button I1984:37169;1283:27882;1984:37262 and Quest discovery item 1984:37227 navigate to 1931:37364.
- Personal quest Go I1931:37396;1884:36668 navigates to 2010:43007.
- Watch ad I2010:45881;6681:24874;841:17767;10154:2653 navigates to 2010:48851.
- Collect 2010:58026 navigates to 2060:60244.
- Collect 2060:60264 navigates to 2060:63046.
These navigate actions have no prototype transition in the returned data. Their navigation is implemented as state transitions. Closing the ad sheet uses its visible Not now action; back and Escape return without completion.
Inherited component hover/button reactions and game component variants were read. The Home promotion references external variant 119:8675 after 4 seconds; its outside-section transition is not implemented.
No extra product annotations were present in the requested section.

## Motion
The original keyframe values, times, easing and node IDs are retained in src/design/motion-data.ts.
- Home: 2-second token edge and face scale loop.
- Quest reward: 5-second coordinated timeline. Quest card enters from Y -200; fill translates X -200→0; 0/3,1/3,2/3,3/3 swap at source times; two strikethrough lines scale from their left edge; check enters from Y -40 with source easing; reward text uses the WORD/LEFT_RIGHT two-group preset starting 2560.075ms, per-group 909.091ms with 90.909ms stagger, bottom 60px, scale70%, opacity0, spring mass1/stiffness100/damping10.
- Return list: 4-second progress, count, strike and check sequence.
Reward tracks play once in the product flow instead of endlessly repeating the showcase; no repeated reward is granted. Motion on and reduced-motion final states are both supported. Collect remains immediately available, matching the prototype navigation action; animated counter layers are decorative for screen readers.

## Simulation boundaries
The visible personal quest starts at 0/3 but the supplied prototype jumps from one Watch ad to a completed-quest reward. This prototype reproduces that path and settles the fixture to 3/3 on mission Collect. This is not a production claim that a single advertisement completes three real missions.
Mission amount1.624 and quest amount0.45 are design fixtures. No balance credit is performed. State is local to the browser, versioned and validated. Duplicate ad receipt and collect events cannot grant repeated completion. Cancel/failure preserve state.
The actual provider APIs, user identity, daily reset timezone, verification/postback contracts and settlement rules are not supplied. Production rewards must be server-authoritative and idempotent.

## Open design discrepancy
Weekly copy says “Complete 12 Personal missions” but its progress reads 0/10. Both are preserved from Figma pending clarification. Game, Avatar, referral and chat destination flows are not provided and are not invented.
