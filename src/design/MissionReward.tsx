// Adapted from high-fidelity Figma node 2010:48851.
import type React from 'react';
import {Animated,RewardAmount} from './Motion';
const imgParty='assets/2010-48851-imgParty.png';
const imgParty1='assets/2010-48851-imgParty1.png';
const imgParty2='assets/2010-48851-imgParty2.png';
const imgSphere2='assets/2010-48851-imgSphere2.png';
const imgSphere='assets/2010-48851-imgSphere.png';
const imgSphere3='assets/2010-48851-imgSphere3.png';
const imgSphere4='assets/2010-48851-imgSphere4.png';
const imgSphere1='assets/2010-48851-imgSphere1.png';
const imgCellularConnection='assets/2010-48851-imgCellularConnection.svg';
const imgWifi='assets/2010-48851-imgWifi.svg';
const imgBattery='assets/2010-48851-imgBattery.svg';
export function MissionReward({onCollect}:{onCollect:()=>void}){return (<div className="design-272" data-node-id="2010:48851" data-name="Home">
      <div className="design-273" data-node-id="2010:48852" data-name="Top-Navigation/Mobile">
        <div className="design-274" data-node-id="I2010:48852;12014:45359" data-name="Status-bar/IOS/Mobile">
          <div className="design-275" data-node-id="I2010:48852;12014:45359;12013:39831" data-name="Wrapper">
            <div className="design-276" data-node-id="I2010:48852;12014:45359;12013:39958" data-name="Status Bar - iPhone">
              <div className="design-277" data-node-id="I2010:48852;12014:45359;12013:39959" data-name="Frame">
                <div className="design-278" data-node-id="I2010:48852;12014:45359;12013:39960" data-name="Time">
                  <p className="design-279" data-node-id="I2010:48852;12014:45359;12013:39961" style={{ fontVariationSettings: '"wdth" 100' }}>
                    9:41
                  </p>
                </div>
                <div className="design-280" data-node-id="I2010:48852;12014:45359;12013:39962" data-name="Dynamic Island spacer" />
                <div className="design-281" data-node-id="I2010:48852;12014:45359;12013:39963" data-name="Levels">
                  <div className="design-282" data-node-id="I2010:48852;12014:45359;12013:39964" data-name="Cellular Connection">
                    <img alt="" className="design-283" src={imgCellularConnection} />
                  </div>
                  <div className="design-284" data-node-id="I2010:48852;12014:45359;12013:39965" data-name="Wifi">
                    <img alt="" className="design-285" src={imgWifi} />
                  </div>
                  <div className="design-286" data-node-id="I2010:48852;12014:45359;12013:39966" data-name="Battery">
                    <img alt="" className="design-287" src={imgBattery} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="design-288" data-node-id="2010:48864" data-name="Body">
        <div className="design-289" data-node-id="2010:48865" data-name="Containner">
          <div className="design-290" data-node-id="2010:49730" data-name="Heading">
            <p className="design-291" data-node-id="2010:49732">
              You receive
              <br aria-hidden />
              ATOK rewards!
            </p>
            <p className="design-292" data-node-id="2010:49747">
              Mission completion reward
            </p>
            <p className="design-293" data-node-id="2010:49733">
              1.624
            </p>
          </div>
          <div className="design-294" data-node-id="2010:49766" data-name="Illustration">
            <div className="design-295" data-node-id="2010:49767" style={{ containerType: "size" }}>
              <div className="design-296">
                <div className="design-297" data-name="Party">
                  <img alt="" className="design-298" src={imgParty} />
                </div>
              </div>
            </div>
            <div className="design-299" data-node-id="2010:49768" style={{ containerType: "size" }}>
              <div className="design-300">
                <div className="design-301" data-name="Party">
                  <img alt="" className="design-302" src={imgParty1} />
                </div>
              </div>
            </div>
            <div className="design-303" data-node-id="2010:49769" style={{ containerType: "size" }}>
              <div className="design-304">
                <div className="design-305" data-name="Party">
                  <img alt="" className="design-306" src={imgParty2} />
                </div>
              </div>
            </div>
            <div className="design-307" data-node-id="2010:49770" data-name="sphere-2">
              <img alt="" className="design-308" src={imgSphere2} />
            </div>
            <div className="design-309" data-node-id="2010:49771" data-name="sphere">
              <img alt="" className="design-310" src={imgSphere} />
            </div>
            <div className="design-311" data-node-id="2010:49772" data-name="sphere-2">
              <img alt="" className="design-312" src={imgSphere3} />
            </div>
            <div className="design-313" data-node-id="2010:49773" data-name="sphere-2">
              <img alt="" className="design-314" src={imgSphere4} />
            </div>
            <div className="design-315" data-node-id="2010:49774" data-name="sphere-2">
              <img alt="" className="design-316" src={imgSphere4} />
            </div>
            <div className="design-317" data-node-id="2010:49775" data-name="sphere-1">
              <img alt="" className="design-318" src={imgSphere1} />
            </div>
          </div>
        </div>
      </div>
      <div className="design-319" data-node-id="2010:58025" data-name="Footer">
        <button type="button" onClick={onCollect} className="design-320" data-node-id="2010:58026" data-name="Buttons">
          <div className="design-321" data-node-id="I2010:58026;308:46360" data-name="Button/Main">
            <div className="design-322" data-node-id="I2010:58026;308:46360;1014:3617" data-name="Container">
              <div className="design-323" data-node-id="I2010:58026;308:46360;1014:3619" data-name="Label-Wrapper">
                <p className="design-324" data-node-id="I2010:58026;308:46360;1014:3620">
                  Collect
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="design-325" data-node-id="2010:58035" data-name="System/Bottom-Indicator">
        <div className="design-326" data-node-id="I2010:58035;308:46295" data-name="Indicator" />
      </div>
    </div>);}
