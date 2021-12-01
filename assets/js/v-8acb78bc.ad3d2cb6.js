"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81150],{16981:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-8acb78bc",path:"/devices/E1E-G7F.html",title:"Sengled E1E-G7F control via MQTT",lang:"en-US",frontmatter:{title:"Sengled E1E-G7F control via MQTT",description:"Integrate your Sengled E1E-G7F via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-05-29T19:41:16.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Long press action",slug:"long-press-action",children:[]}]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/E1E-G7F.md",git:{updatedTime:163837549e4}}},56272:(e,t,i)=>{i.r(t),i.d(t,{default:()=>l});var n=i(66252);const o=(0,n.uE)('<h1 id="sengled-e1e-g7f" tabindex="-1"><a class="header-anchor" href="#sengled-e1e-g7f" aria-hidden="true">#</a> Sengled E1E-G7F</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>E1E-G7F</td></tr><tr><td>Vendor</td><td>Sengled</td></tr><tr><td>Description</td><td>Smart switch</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/E1E-G7F.jpg" alt="Sengled E1E-G7F"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset the switch by pressing and holding the on and off buttons at the same time for at least 3 seconds. The indicator will start flashing, indicating a successful reset. The device will enter pairing mode for one minute. If the device is not connected in one minute, you must restart the pairing process.</p><p>If device won&#39;t go in to pairing mode, try installing a fresh battery.</p><h3 id="long-press-action" tabindex="-1"><a class="header-anchor" href="#long-press-action" aria-hidden="true">#</a> Long press action</h3>',7),a=(0,n.Uk)("The device will sometimes output a single push in addition to a long press. You can mitigate this by using the Debounce device configuration. Refer to "),d=(0,n.Uk)("How to use device type specific configuration"),r=(0,n.Uk)("."),s=(0,n.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>up</code>, <code>down</code>, <code>off</code>, <code>on_double</code>, <code>on_long</code>, <code>off_double</code>, <code>off_long</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',5),c={},l=(0,i(83744).Z)(c,[["render",function(e,t){const i=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[a,(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[d])),_:1})]),r]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,n]of t)e[i]=n;return e}}}]);