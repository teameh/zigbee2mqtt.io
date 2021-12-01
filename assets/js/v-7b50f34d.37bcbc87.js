"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[87653],{79716:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-7b50f34d",path:"/devices/SG-V100-ZB.html",title:"Dawon DNS SG-V100-ZB control via MQTT",lang:"en-US",frontmatter:{title:"Dawon DNS SG-V100-ZB control via MQTT",description:"Integrate your Dawon DNS SG-V100-ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-03-09T19:58:46.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SG-V100-ZB.md",git:{updatedTime:163837549e4}}},22212:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});const i=(0,a(66252).uE)('<h1 id="dawon-dns-sg-v100-zb" tabindex="-1"><a class="header-anchor" href="#dawon-dns-sg-v100-zb" aria-hidden="true">#</a> Dawon DNS SG-V100-ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SG-V100-ZB</td></tr><tr><td>Vendor</td><td>Dawon DNS</td></tr><tr><td>Description</td><td>IOT remote control smart gas lock</td></tr><tr><td>Exposes</td><td>battery, switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SG-V100-ZB.jpg" alt="Dawon DNS SG-V100-ZB"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),o={},d=(0,a(83744).Z)(o,[["render",function(e,t){return i}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);