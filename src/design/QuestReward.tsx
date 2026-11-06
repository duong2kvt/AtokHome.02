// Adapted from high-fidelity Figma node 2060:60244.
import type React from 'react';
import {Animated,RewardAmount} from './Motion';
const imgImage='assets/2060-60244-imgImage.png';
const imgParty='assets/2060-60244-imgParty.png';
const imgParty1='assets/2060-60244-imgParty1.png';
const imgParty2='assets/2060-60244-imgParty2.png';
const imgSphere2='assets/2060-60244-imgSphere2.png';
const imgSphere='assets/2060-60244-imgSphere.png';
const imgSphere3='assets/2060-60244-imgSphere3.png';
const imgSphere4='assets/2060-60244-imgSphere4.png';
const imgSphere1='assets/2060-60244-imgSphere1.png';
const imgCellularConnection='assets/2060-60244-imgCellularConnection.svg';
const imgWifi='assets/2060-60244-imgWifi.svg';
const imgBattery='assets/2060-60244-imgBattery.svg';
const imgGroup='assets/2060-60244-imgGroup.svg';
const imgIconCheckLine='assets/2060-60244-imgIconCheckLine.svg';
const imgGroup37254='assets/2060-60244-imgGroup37254.svg';
export function QuestReward({onCollect}:{onCollect:()=>void}){return (<div className="design-327" data-node-id="2060:60244" data-name="Quest reward - Motion">
      <div className="design-328" data-node-id="2060:60245" data-name="Top-Navigation/Mobile">
        <div className="design-329" data-node-id="I2060:60245;12014:45359" data-name="Status-bar/IOS/Mobile">
          <div className="design-330" data-node-id="I2060:60245;12014:45359;12013:39831" data-name="Wrapper">
            <div className="design-331" data-node-id="I2060:60245;12014:45359;12013:39958" data-name="Status Bar - iPhone">
              <div className="design-332" data-node-id="I2060:60245;12014:45359;12013:39959" data-name="Frame">
                <div className="design-333" data-node-id="I2060:60245;12014:45359;12013:39960" data-name="Time">
                  <p className="design-334" data-node-id="I2060:60245;12014:45359;12013:39961" style={{ fontVariationSettings: '"wdth" 100' }}>
                    9:41
                  </p>
                </div>
                <div className="design-335" data-node-id="I2060:60245;12014:45359;12013:39962" data-name="Dynamic Island spacer" />
                <div className="design-336" data-node-id="I2060:60245;12014:45359;12013:39963" data-name="Levels">
                  <div className="design-337" data-node-id="I2060:60245;12014:45359;12013:39964" data-name="Cellular Connection">
                    <img alt="" className="design-338" src={imgCellularConnection} />
                  </div>
                  <div className="design-339" data-node-id="I2060:60245;12014:45359;12013:39965" data-name="Wifi">
                    <img alt="" className="design-340" src={imgWifi} />
                  </div>
                  <div className="design-341" data-node-id="I2060:60245;12014:45359;12013:39966" data-name="Battery">
                    <img alt="" className="design-342" src={imgBattery} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-343" data-node-id="2060:60246" data-name="Body">
        <div className="design-344" data-node-id="2060:60247" data-name="Containner">
          <div className="design-345" data-node-id="2060:60248" data-name="Heading">
            <div className="design-346" data-node-id="2060:60582" data-name="Top">
              <p className="design-347" data-node-id="2060:60250">
                You receive
                <br aria-hidden />
                ATOK rewards!
              </p>
              <Animated as="div" sourceId="2060:60584" className="design-348" data-node-id="2060:60584" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Quest card">
                <div className="design-349" data-node-id="2060:60585" data-name="Image slot">
                  <div className="design-350" data-node-id="2060:60586" data-name="Image">
                    <img alt="" className="design-351" src={imgImage} />
                    <div className="design-352" data-node-id="2060:60587">
                      <div className="design-353" data-node-id="2060:60588" data-name="Badge Contextual">
                        <div className="design-354" data-node-id="2060:60589" data-name="Tabbar Icon">
                          <div className="design-355" data-node-id="2060:60590" data-name="Group">
                            <img alt="" className="design-356" src={imgGroup} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="design-357" data-node-id="2060:60596" data-name="Containner">
                  <div className="design-358" data-node-id="2060:60597" data-name="Text">
                    <p className="design-359" data-node-id="2060:60598">
                      Complete 3 Personal missions
                    </p>
                    <div className="design-360" data-node-id="2060:60599" data-name="Progress bar">
                      <Animated as="div" sourceId="2060:60600" className="design-361" data-node-id="2060:60600" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Progress" />
                      <div className="design-362" data-node-id="2060:60601" data-name="Text containner">
                        <Animated as="p" sourceId="2060:60602" className="design-363" data-node-id="2060:60602">
                          3/3
                        </Animated>
                        <Animated as="p" sourceId="2072:42315" className="design-364" data-node-id="2072:42315">
                          0/3
                        </Animated>
                        <Animated as="p" sourceId="2072:42319" className="design-365" data-node-id="2072:42319">
                          1/3
                        </Animated>
                        <Animated as="p" sourceId="2072:42324" className="design-366" data-node-id="2072:42324">
                          2/3
                        </Animated>
                      </div>
                    </div>
                    <Animated as="div" sourceId="2069:42315" className="design-367" data-node-id="2069:42315" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Strikethrough — line 1" />
                    <Animated as="div" sourceId="2069:42320" className="design-368" data-node-id="2069:42320" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Strikethrough — line 2" />
                  </div>
                </div>
                <div className="design-369" data-node-id="2060:60603" data-name="Containner">
                  <Animated as="div" sourceId="2060:60604" className="design-370" data-node-id="2060:60604" style={{ "--motion-design-transform": "initial", "--motion-design-transform-inverse": "initial", "--motion-layout-transform": "translate(0px)" } as React.CSSProperties} data-name="Quest mark">
                    <div className="design-371" data-node-id="2060:61619" data-name="icon-check-line">
                      <img alt="" className="design-372" src={imgIconCheckLine} />
                    </div>
                  </Animated>
                </div>
                <div className="design-373" data-node-id="2060:60606" data-name="Atok Badge">
                  <div className="design-374" data-node-id="I2060:60606;1901:36806" data-name="Atok-token">
                    <div className="design-375" data-node-id="I2060:60606;1901:36806;15731:3721">
                      <img alt="" className="design-376" src={imgGroup37254} />
                    </div>
                  </div>
                  <div className="design-377" data-node-id="I2060:60606;1901:36807" data-name="Text-Wrapper">
                    <p className="design-378" data-node-id="I2060:60606;1901:36808">
                      0.45
                    </p>
                  </div>
                </div>
              </Animated>
            </div>
            <p className="design-379" data-node-id="2060:60252">
              Quest completion reward
            </p>
            <RewardAmount  className="design-380" data-node-id="2060:60251">
              0.45
            </RewardAmount>
          </div>
          <div className="design-381" data-node-id="2060:60253" data-name="Illustration">
            <div className="design-382" data-node-id="2060:60254" style={{ containerType: "size" }}>
              <div className="design-383">
                <div className="design-384" data-name="Party">
                  <img alt="" className="design-385" src={imgParty} />
                </div>
              </div>
            </div>
            <div className="design-386" data-node-id="2060:60255" style={{ containerType: "size" }}>
              <div className="design-387">
                <div className="design-388" data-name="Party">
                  <img alt="" className="design-389" src={imgParty1} />
                </div>
              </div>
            </div>
            <div className="design-390" data-node-id="2060:60256" style={{ containerType: "size" }}>
              <div className="design-391">
                <div className="design-392" data-name="Party">
                  <img alt="" className="design-393" src={imgParty2} />
                </div>
              </div>
            </div>
            <div className="design-394" data-node-id="2060:60257" data-name="sphere-2">
              <img alt="" className="design-395" src={imgSphere2} />
            </div>
            <div className="design-396" data-node-id="2060:60258" data-name="sphere">
              <img alt="" className="design-397" src={imgSphere} />
            </div>
            <div className="design-398" data-node-id="2060:60259" data-name="sphere-2">
              <img alt="" className="design-399" src={imgSphere3} />
            </div>
            <div className="design-400" data-node-id="2060:60260" data-name="sphere-2">
              <img alt="" className="design-401" src={imgSphere4} />
            </div>
            <div className="design-402" data-node-id="2060:60261" data-name="sphere-2">
              <img alt="" className="design-403" src={imgSphere4} />
            </div>
            <div className="design-404" data-node-id="2060:60262" data-name="sphere-1">
              <img alt="" className="design-405" src={imgSphere1} />
            </div>
          </div>
        </div>
      </div>
      <div className="design-406" data-node-id="2060:60263" data-name="Footer">
        <button type="button" onClick={onCollect} className="design-407" data-node-id="2060:60264" data-name="Buttons">
          <div className="design-408" data-node-id="I2060:60264;308:46360" data-name="Button/Main">
            <div className="design-409" data-node-id="I2060:60264;308:46360;1014:3617" data-name="Container">
              <div className="design-410" data-node-id="I2060:60264;308:46360;1014:3619" data-name="Label-Wrapper">
                <p className="design-411" data-node-id="I2060:60264;308:46360;1014:3620">
                  Collect
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="design-412" data-node-id="2060:60265" data-name="System/Bottom-Indicator">
        <div className="design-413" data-node-id="I2060:60265;308:46295" data-name="Indicator" />
      </div>
    </div>);}
