// Adapted from high-fidelity Figma node 1984:37175.
import type React from 'react';
import {Animated,RewardAmount} from './Motion';
const imgImage='assets/1984-37146-imgImage.png';
const imgImage1='assets/1984-37146-imgImage1.png';
const imgImage2='assets/1984-37146-imgImage2.png';
const imgGiftDynamicColor='assets/1984-37146-imgGiftDynamicColor.png';
const imgImage3='assets/1984-37146-imgImage3.png';
const imgSubtract='assets/1984-37146-imgSubtract.svg';
const imgLv07='assets/1984-37146-imgLv07.svg';
const imgSymbol='assets/1984-37146-imgSymbol.svg';
const imgLogoSymbol='assets/1984-37146-imgLogoSymbol.svg';
const imgSubtract1='assets/1984-37146-imgSubtract1.svg';
const imgLv10='assets/1984-37146-imgLv10.svg';
const imgSymbol1='assets/1984-37146-imgSymbol1.svg';
const imgLogoSymbol1='assets/1984-37146-imgLogoSymbol1.svg';
export function HomeDiscovery({onQuests}:{onQuests:()=>void}){return (<div className="design-0" data-node-id="1984:37175" data-name="Containner">
          <div className="design-1" data-node-id="1984:37178" data-name="Headline">
            <p className="design-2" data-node-id="1984:37179">
              Discovery
            </p>
          </div>
          <div className="design-3" data-node-id="1984:37180" data-name="Home section/Features">
            <div className="design-4" data-node-id="1984:37182" data-name="List">
              <div className="design-5" data-node-id="1984:37183" data-name="Item">
                <div className="design-6" data-node-id="1984:37184" data-name="Icon">
                  <div className="design-7" data-node-id="1984:37185" data-name="NFT">
                    <div className="design-8" data-node-id="1984:37186" data-name="Group">
                      <div className="design-9" data-node-id="1984:37187" style={{ containerType: "size" }}>
                        <div className="design-10">
                          <div className="design-11" data-name="NFT card">
                            <div className="design-12" data-node-id="1984:37188" data-name="bg" />
                            <div className="design-13" data-node-id="1984:37189" data-name="Subtract">
                              <img alt="" className="design-14" src={imgSubtract} />
                            </div>
                            <div className="design-15" data-node-id="1984:37192" data-name="image">
                              <img alt="" className="design-16" src={imgImage} />
                            </div>
                            <div className="design-17" data-node-id="1984:37193" data-name="NFT card/badge">
                              <div className="design-18" data-node-id="I1984:37193;20247:20336" data-name="LV. 07">
                                <img alt="" className="design-19" src={imgLv07} />
                              </div>
                              <div className="design-20" data-node-id="I1984:37193;20247:20207" data-name="NFT logo">
                                <div className="design-21" data-node-id="I1984:37193;20247:20207;8323:27311" data-name="Symbol">
                                  <div className="design-22">
                                    <img alt="" className="design-23" src={imgSymbol} />
                                  </div>
                                </div>
                              </div>
                              <div className="design-24" data-node-id="I1984:37193;20247:20208" />
                            </div>
                            <div className="design-25" data-node-id="1984:37194" data-name="Logo/Symbol">
                              <img alt="" className="design-26" src={imgLogoSymbol} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="design-27" data-node-id="1984:37195" style={{ containerType: "size" }}>
                        <div className="design-28">
                          <div className="design-29" data-name="NFT card">
                            <div className="design-30" data-node-id="1984:37196" data-name="bg" />
                            <div className="design-31" data-node-id="1984:37197" data-name="Subtract">
                              <img alt="" className="design-32" src={imgSubtract1} />
                            </div>
                            <div className="design-33" data-node-id="1984:37200" data-name="image">
                              <img alt="" className="design-34" src={imgImage1} />
                            </div>
                            <div className="design-35" data-node-id="1984:37201" data-name="NFT card/badge">
                              <div className="design-36" data-node-id="I1984:37201;20247:20333" data-name="LV. 10">
                                <img alt="" className="design-37" src={imgLv10} />
                              </div>
                              <div className="design-38" data-node-id="I1984:37201;20247:19437" data-name="NFT logo">
                                <div className="design-39" data-node-id="I1984:37201;20247:19437;8323:27311" data-name="Symbol">
                                  <img alt="" className="design-40" src={imgSymbol1} />
                                </div>
                              </div>
                              <div className="design-41" data-node-id="I1984:37201;20247:19870" />
                            </div>
                            <div className="design-42" data-node-id="1984:37202" data-name="Logo/Symbol">
                              <img alt="" className="design-43" src={imgLogoSymbol1} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="design-44" data-node-id="1984:37203">
                  Digital Edition
                </p>
              </div>
              <div className="design-45" data-node-id="1984:37204" data-name="Item">
                <div className="design-46" data-node-id="1984:37205" data-name="Icon">
                  <div className="design-47" data-node-id="1984:37206" data-name="Avatar">
                    <div className="design-48" data-node-id="1984:37207" data-name="BG" />
                    <div className="design-49" data-node-id="1984:37209" data-name="Image">
                      <div className="design-50">
                        <img alt="" className="design-51" src={imgImage2} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="design-52" data-node-id="1984:37210">
                  Avatar
                </p>
              </div>
              <div className="design-53" data-node-id="1984:37211" data-name="Item">
                <div className="design-54" data-node-id="1984:37212" data-name="Icon">
                  <div className="design-55" data-node-id="1984:37213" data-name="Referral program">
                    <div className="design-56" data-node-id="1984:37225" data-name="gift-dynamic-color">
                      <img alt="" className="design-57" src={imgGiftDynamicColor} />
                    </div>
                  </div>
                </div>
                <p className="design-58" data-node-id="1984:37226">
                  Referral
                </p>
              </div>
              <button type="button" onClick={onQuests} className="design-59" data-node-id="1984:37227" data-name="Item">
                <div className="design-60" data-node-id="1984:37228" data-name="Icon">
                  <div className="design-61" data-node-id="1984:37229" data-name="Frame">
                    <div className="design-62" data-node-id="1984:37230" data-name="Image">
                      <img alt="" className="design-63" src={imgImage3} />
                    </div>
                  </div>
                </div>
                <p className="design-64" data-node-id="1984:37231">
                  Quest
                </p>
              </button>
            </div>
          </div>
        </div>);}
