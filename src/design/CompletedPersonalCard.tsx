// Adapted from high-fidelity Figma node 2060:67639.
import type React from 'react';
import {Animated,RewardAmount} from './Motion';
const imgImage='assets/2060-67639-imgImage.png';
const imgGroup='assets/2060-67639-imgGroup.svg';
const imgIconCheckLine='assets/2060-67639-imgIconCheckLine.svg';
const imgGroup37254='assets/2060-67639-imgGroup37254.svg';
export function CompletedPersonalCard(){return (<div className="design-452" data-node-id="2060:67639" data-name="Quest card">
      <div className="design-453" data-node-id="2060:67640" data-name="Image slot">
        <div className="design-454" data-node-id="2060:67641" data-name="Image">
          <img alt="" className="design-455" src={imgImage} />
          <div className="design-456" data-node-id="2060:67642">
            <div className="design-457" data-node-id="2060:67643" data-name="Badge Contextual">
              <div className="design-458" data-node-id="2060:67644" data-name="Tabbar Icon">
                <div className="design-459" data-node-id="2060:67645" data-name="Group">
                  <img alt="" className="design-460" src={imgGroup} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-461" data-node-id="2060:67651" data-name="Containner">
        <div className="design-462" data-node-id="2060:67652" data-name="Text">
          <p className="design-463" data-node-id="2060:67653">
            Complete 3 Personal missions
          </p>
          <div className="design-464" data-node-id="2060:67654" data-name="Progress bar">
            <Animated as="div" sourceId="2060:67662" className="design-465" data-node-id="2060:67662" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Progress" />
            <div className="design-466" data-node-id="2060:67663" data-name="Text containner">
              <Animated as="p" sourceId="2060:67667" className="design-467" data-node-id="2060:67667">
                3/3
              </Animated>
              <Animated as="p" sourceId="2060:67671" className="design-468" data-node-id="2060:67671">
                0/3
              </Animated>
              <Animated as="p" sourceId="2060:67676" className="design-469" data-node-id="2060:67676">
                1/3
              </Animated>
              <Animated as="p" sourceId="2060:67681" className="design-470" data-node-id="2060:67681">
                2/3
              </Animated>
            </div>
          </div>
          <Animated as="div" sourceId="2060:67686" className="design-471" data-node-id="2060:67686" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Strikethrough — line 1" />
          <Animated as="div" sourceId="2060:67691" className="design-472" data-node-id="2060:67691" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Strikethrough — line 2" />
        </div>
      </div>
      <div className="design-473" data-node-id="2060:67692" data-name="Containner">
        <Animated as="div" sourceId="2060:67704" className="design-474" data-node-id="2060:67704" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Quest mark">
          <div className="design-475" data-node-id="2060:67705" data-name="icon-check-line">
            <img alt="" className="design-476" src={imgIconCheckLine} />
          </div>
        </Animated>
      </div>
      <div className="design-477" data-node-id="2060:67708" data-name="Atok Badge">
        <div className="design-478" data-node-id="I2060:67708;1901:36806" data-name="Atok-token">
          <div className="design-479" data-node-id="I2060:67708;1901:36806;15731:3721">
            <img alt="" className="design-480" src={imgGroup37254} />
          </div>
        </div>
        <div className="design-481" data-node-id="I2060:67708;1901:36807" data-name="Text-Wrapper">
          <p className="design-482" data-node-id="I2060:67708;1901:36808">
            0.45
          </p>
        </div>
      </div>
    </div>);}
