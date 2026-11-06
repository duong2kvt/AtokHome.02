// Adapted from high-fidelity Figma node 2010:45881.
import type React from 'react';
import {Animated,RewardAmount} from './Motion';
const imgImg1='assets/2010-45881-imgImg1.png';
const imgImg='assets/2010-45881-imgImg.svg';
const imgIcon='assets/2010-45881-imgIcon.svg';
const imgGroup37253='assets/2010-45881-imgGroup37253.svg';
const imgIcon1='assets/2010-45881-imgIcon1.svg';
export function AdSheet({onWatch,onCancel}:{onWatch:()=>void;onCancel:()=>void}){return (<div className="design-414" data-node-id="2010:45881" data-name="Bottom-Sheet/Modal">
      <div className="design-415" data-node-id="I2010:45881;10109:735314" data-name="Wrapper">
        <div className="design-416" data-node-id="I2010:45881;6681:24874" data-name="Sheet">
          <div className="design-417" data-node-id="I2010:45881;6681:24874;841:17719" data-name="Container">
            <div className="design-418" data-node-id="I2010:45881;6681:24874;4059:14216" data-name="System/Top-Indicator">
              <div className="design-419" data-node-id="I2010:45881;6681:24874;4059:14216;836:8397" data-name="Indicator" />
            </div>
            <div className="design-420" data-node-id="I2010:45881;6681:24874;4060:9314" data-name="Body">
              <div className="design-421" data-node-id="I2010:45881;6681:24874;4060:9315" data-name="Contents">
                <div className="design-422" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45872" data-name="Container">
                  <div className="design-423" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45932" data-name="Image">
                    <div className="design-424" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45933" data-name="img">
                      <div className="design-425" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45934" data-name="Mask group">
                        <div className="design-426" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45938" style={{ maskImage: `url("${imgImg}")` }} data-name="img">
                          <div className="design-427">
                            <img alt="" className="design-428" src={imgImg1} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="design-429" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45939" data-name="symbol">
                      <div className="design-430" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45941" data-name="icon">
                        <img alt="" className="design-431" src={imgIcon} />
                      </div>
                    </div>
                    <div className="design-432" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45943" data-name="ATOK-3D">
                      <div className="design-433" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45943;14239:74454">
                        <img alt="" className="design-434" src={imgGroup37253} />
                      </div>
                    </div>
                    <div className="design-435" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45944" data-name="Icon">
                      <img alt="" className="design-436" src={imgIcon1} />
                    </div>
                  </div>
                  <div className="design-437" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45877" data-name="Heading">
                    <p className="design-438" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45879">
                      Earn more ATOK
                    </p>
                    <p className="design-439" data-node-id="I2010:45881;6681:24874;4060:9315;2010:45880">
                      Watch video and receive bonus ATOK
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="design-440" data-node-id="I2010:45881;6681:24874;841:17766" data-name="Footer">
              <div className="design-441" data-node-id="I2010:45881;6681:24874;841:17767" data-name=".Primitives/Bottom-Sheet/Actions">
                <button type="button" onClick={onWatch} className="design-442" data-node-id="I2010:45881;6681:24874;841:17767;10154:2653" data-name="Button/Main">
                  <div className="design-443" data-node-id="I2010:45881;6681:24874;841:17767;10154:2653;1014:3617" data-name="Container">
                    <div className="design-444" data-node-id="I2010:45881;6681:24874;841:17767;10154:2653;1014:3619" data-name="Label-Wrapper">
                      <p className="design-445" data-node-id="I2010:45881;6681:24874;841:17767;10154:2653;1014:3620">
                        Watch ad
                      </p>
                    </div>
                  </div>
                </button>
                <button type="button" onClick={onCancel} className="design-446" data-node-id="I2010:45881;6681:24874;841:17767;10154:2652" data-name="Button/Main">
                  <div className="design-447" data-node-id="I2010:45881;6681:24874;841:17767;10154:2652;1014:4340" data-name="Container">
                    <div className="design-448" data-node-id="I2010:45881;6681:24874;841:17767;10154:2652;1014:4342" data-name="Label-Wrapper">
                      <p className="design-449" data-node-id="I2010:45881;6681:24874;841:17767;10154:2652;1014:4343">
                        Not now
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="design-450" data-node-id="I2010:45881;6681:24874;992:1294" data-name="System/Bottom-Indicator">
              <div className="design-451" data-node-id="I2010:45881;6681:24874;992:1294;308:46295" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>);}
