function zeros(n){for(var t=new Array(n);n-->0;)t[n]=0;return t}function zclip(n){var t=n.length;if(n[t-1])return n;while(t>1&&n[t-1]==0)t--;return n.slice(0,t)}function nbits(n){var i=1,t;return(t=n>>>16)!=0&&(n=t,i+=16),(t=n>>8)!=0&&(n=t,i+=8),(t=n>>4)!=0&&(n=t,i+=4),(t=n>>2)!=0&&(n=t,i+=2),(t=n>>1)!=0&&(n=t,i+=1),i}function badd(n,t){var f=n.length,e=t.length;if(f<e)return badd(t,n);for(var u=new Array(f),r=0,i=0;i<e;i++)r+=n[i]+t[i],u[i]=r&bm,r>>>=bs;for(;i<f;i++)r+=n[i],u[i]=r&bm,r>>>=bs;return r&&(u[i]=r),u}function bsub(n,t){var f=n.length,u=t.length,e,r,i;if(u>f)return[];if(u==f){if(t[u-1]>n[u-1])return[];if(u==1)return[n[0]-t[0]]}for(e=new Array(f),r=0,i=0;i<u;i++)r+=n[i]-t[i],e[i]=r&bm,r>>=bs;for(;i<f;i++)r+=n[i],e[i]=r&bm,r>>=bs;return r?[]:zclip(e)}function ip(n,t,i,r,u){var f=i&bdm,e=i>>bd,o=r&bdm,s=r>>bd,h=e*o+s*f,c=f*o+((h&bdm)<<bd)+n[t]+u;return n[t]=c&bm,e*s+(h>>bd)+(c>>bs)}function bsqr(n){for(var r=n.length,e=2*r,u=zeros(e),f=0,i,t=0;t<r;t++){for(f=ip(u,2*t,n[t],n[t],0),i=t+1;i<r;i++)f=ip(u,t+i,2*n[i],n[t],f);u[t+r]=f}return zclip(u)}function bmul(n,t){for(var f=n.length,o=t.length,e=zeros(f+o-1),u,r,i=0;i<o;i++){for(u=0,r=0;r<f;r++)u=ip(e,i+r,n[r],t[i],u);e[i+f]=u}return zclip(e)}function toppart(n,t,i){for(var r=0;t>=0&&i-->0;)r=r*bx2+n[t--];return r}function bdiv(n,t){var u=n.length-1,f=t.length-1,v=u-f,i,y,p,r,h,e,l,w,b,c,k;if(u<f||u==f&&(n[u]<t[u]||u>0&&n[u]==t[u]&&n[u-1]<t[u-1]))return this.q=[0],this.mod=n,this;if(u==f&&toppart(n,f,2)/toppart(t,f,2)<4){for(i=n.concat(),y=0;;){if(p=bsub(i,t),p.length==0)break;i=p;y++}return this.q=[y],this.mod=i,this}var a=Math.floor(Math.log(t[f])/log2)+1,o=bs-a,i=n.concat(),s=t.concat();if(o){for(r=f;r>0;r--)s[r]=s[r]<<o&bm|s[r-1]>>a;for(s[0]=s[0]<<o&bm,i[u]&bm<<a&bm&&(i[++u]=0,v++),r=u;r>0;r--)i[r]=i[r]<<o&bm|i[r-1]>>a;i[0]=i[0]<<o&bm}for(e=zeros(v+1),l=zeros(v).concat(s);;){if(h=bsub(i,l),h.length==0)break;e[v]++;i=h}for(w=s[f],b=toppart(s,f,2),r=u;r>f;r--){for(c=r-f-1,e[c]=r>=i.length?1:i[r]==w?bm:Math.floor(toppart(i,r,2)/w),k=toppart(i,r,3);e[c]*b>k;)e[c]--;l=l.slice(1);h=bsub(i,bmul([e[c]],l));h.length==0&&(e[c]--,h=bsub(i,bmul([e[c]],l)));i=h}if(o){for(r=0;r<i.length-1;r++)i[r]=i[r]>>o|i[r+1]<<a&bm;i[i.length-1]>>=o}return this.q=zclip(e),this.mod=zclip(i),this}function simplemod(n,t){for(var i=0,r,u=n.length-1;u>=0;u--)r=n[u],i=((r>>bd)+(i<<bd))%t,i=((r&bdm)+(i<<bd))%t;return i}function bmod(n,t){if(t.length==1){if(n.length==1)return[n[0]%t[0]];if(t[0]<bdm)return[simplemod(n,t[0])]}var i=bdiv(n,t);return i.mod}function bmod2(n,t,i){var f=n.length-(t.length<<1),s;if(f>0)return bmod2(n.slice(0,f).concat(bmod2(n.slice(f),t,i)),t,i);var u=t.length+1,c=t.length-1,e,l=bmul(n.slice(c),i).slice(u),o=n.slice(0,u),h=bmul(l,t).slice(0,u),r=bsub(o,h);for(r.length==0&&(o[u]=1,r=bsub(o,h)),s=0;;s++){if(e=bsub(r,t),e.length==0)break;if(r=e,s>=3)return bmod2(r,t,i)}return r}function bexpmod(n,t,i){for(var r=n.concat(),u=t.length-1,f=nbits(t[u])-2;u>=0;u--){for(;f>=0;f-=1)r=bmod(bsqr(r),i),t[u]&1<<f&&(r=bmod(bmul(r,n),i));f=bs-1}return r}function bmodexp(n,t,i){var u=n.concat(),e=t.length-1,r=i.length*2,f=zeros(r+1);for(f[r]=1,f=bdiv(f,i).q,r=nbits(t[e])-2;e>=0;e--){for(;r>=0;r-=1)u=bmod2(bsqr(u),i,f),t[e]&1<<r&&(u=bmod2(bmul(u,n),i,f));r=bs-1}return u}function RSAencrypt(n,t,i){return bexpmod(n,t,i)}function RSAdecrypt(n,t,i,r,u){var e=bmodexp(bmod(n,i),bmod(t,bsub(i,[1])),i),o=bmodexp(bmod(n,r),bmod(t,bsub(r,[1])),r),f=bsub(o,e);return f.length==0?(f=bsub(e,o),f=bmod(bmul(f,u),r),f=bsub(r,f)):f=bmod(bmul(f,u),r),badd(bmul(f,i),e)}function mpi2b(n){var i=1,u=[0],s=0,f=256,h,e=n.length,t,r,o;if(e<2)return alert("string too short, not a MPI"),0;if(t=(e-2)*8,r=n.charCodeAt(0)*256+n.charCodeAt(1),r>t||r<t-8)return alert("not a MPI, bits="+r+",len="+t),0;for(o=0;o<t;o++)(f<<=1)>255&&(f=1,h=n.charCodeAt(--e)),i>bm&&(i=1,u[++s]=0),h&f&&(u[s]|=i),i<<=1;return u}function b2mpi(n){for(var u=1,s=0,f=[0],e=1,t=0,i=n.length*bs,o="",r=0;r<i;r++)n[s]&u&&(f[t]|=e),(e<<=1)>255&&(e=1,f[++t]=0),(u<<=1)>bm&&(u=1,s++);while(t&&f[t]==0)t--;for(u=256,i=8;i>0;i--)if(f[t]&(u>>=1))break;if(i+=t*8,o+=String.fromCharCode(i/256)+String.fromCharCode(i%256),i)for(r=t;r>=0;r--)o+=String.fromCharCode(f[r]);return o}function B0(n){return n&255}function B1(n){return n>>8&255}function B2(n){return n>>16&255}function B3(n){return n>>24&255}function F1(n,t,i,r){return B1(T1[n&255])|B1(T1[t>>8&255])<<8|B1(T1[i>>16&255])<<16|B1(T1[r>>>24])<<24}function packBytes(n){var r,t,i=n.length,u=new Array(i/4);if(n&&!(i%4)){for(r=0,t=0;t<i;t+=4)u[r++]=n[t]|n[t+1]<<8|n[t+2]<<16|n[t+3]<<24;return u}}function unpackBytes(n){for(var r=0,u=n.length,i=new Array(u*4),t=0;t<u;t++)i[r++]=B0(n[t]),i[r++]=B1(n[t]),i[r++]=B2(n[t]),i[r++]=B3(n[t]);return i}function keyExpansion(n){var i,f,t,o,u,s,c=new Array(maxrk+1),h=n.length,l=new Array(maxkc),r=new Array(maxkc),a=0,e;if(h==16)s=10,i=4;else if(h==24)s=12,i=6;else if(h==32)s=14,i=8;else{alert("Invalid AES key length "+h);return}for(f=0;f<maxrk+1;f++)c[f]=new Array(4);for(f=0,t=0;t<h;t++,f+=4)l[t]=n.charCodeAt(f)|n.charCodeAt(f+1)<<8|n.charCodeAt(f+2)<<16|n.charCodeAt(f+3)<<24;for(t=i-1;t>=0;t--)r[t]=l[t];for(o=0,u=0,t=0;t<i&&o<s+1;){for(;t<i&&u<4;t++,u++)c[o][u]=r[t];u==4&&(o++,u=0)}while(o<s+1){if(e=r[i-1],r[0]^=S[B1(e)]|S[B2(e)]<<8|S[B3(e)]<<16|S[B0(e)]<<24,r[0]^=Rcon[a++],i!=8)for(t=1;t<i;t++)r[t]^=r[t-1];else{for(t=1;t<i/2;t++)r[t]^=r[t-1];for(e=r[i/2-1],r[i/2]^=S[B0(e)]|S[B1(e)]<<8|S[B2(e)]<<16|S[B3(e)]<<24,t=i/2+1;t<i;t++)r[t]^=r[t-1]}for(t=0;t<i&&o<s+1;){for(;t<i&&u<4;t++,u++)c[o][u]=r[t];u==4&&(o++,u=0)}}return this.rounds=s,this.rk=c,this}function AESencrypt(n,t){for(var r,u,f,e,o=packBytes(n),s=t.rounds,h=o[0],c=o[1],l=o[2],a=o[3],i=0;i<s-1;i++)r=h^t.rk[i][0],u=c^t.rk[i][1],f=l^t.rk[i][2],e=a^t.rk[i][3],h=T1[r&255]^T2[u>>8&255]^T3[f>>16&255]^T4[e>>>24],c=T1[u&255]^T2[f>>8&255]^T3[e>>16&255]^T4[r>>>24],l=T1[f&255]^T2[e>>8&255]^T3[r>>16&255]^T4[u>>>24],a=T1[e&255]^T2[r>>8&255]^T3[u>>16&255]^T4[f>>>24];return i=s-1,r=h^t.rk[i][0],u=c^t.rk[i][1],f=l^t.rk[i][2],e=a^t.rk[i][3],o[0]=F1(r,u,f,e)^t.rk[s][0],o[1]=F1(u,f,e,r)^t.rk[s][1],o[2]=F1(f,e,r,u)^t.rk[s][2],o[3]=F1(e,r,u,f)^t.rk[s][3],unpackBytes(o)}function s2r(n){for(var f,u,t="",i=0,r=0,o=n.length,e=0;e<o;e++)u=n.charCodeAt(e),r==0?(t+=b64s.charAt(u>>2&63),f=(u&3)<<4):r==1?(t+=b64s.charAt(f|u>>4&15),f=(u&15)<<2):r==2&&(t+=b64s.charAt(f|u>>6&3),i+=1,i%60==0&&(t+="\n"),t+=b64s.charAt(u&63)),i+=1,i%60==0&&(t+="\n"),r+=1,r==3&&(r=0);return r>0&&(t+=b64s.charAt(f),i+=1,i%60==0&&(t+="\n"),t+="=",i+=1),r==1&&(i%60==0&&(t+="\n"),t+="="),t}function r2s(n){for(var i,u="",t=0,f=0,e=n.length,r=0;r<e;r++)i=b64s.indexOf(n.charAt(r)),i>=0&&(t&&(u+=String.fromCharCode(f|i>>6-t&255)),t=t+2&7,f=i<<t&255);return u}function rc4Init(){for(var t,i=new Array(256),n=0;n<256;n++)s[n]=n,i[n]=randomByte()^timeByte();for(y=0,n=0;n<2;n++)for(x=0;x<256;x++)y=(i[n]+s[x]+y)%256,t=s[x],s[x]=s[y],s[y]=t;x=0;y=0}function rc4Next(n){var t;return x=x+1&255,y=s[x]+y&255,t=s[x],s[x]=s[y],s[y]=t,(n^s[(s[x]+s[y])%256])&255}function keyByte(){return keyArray[keyRead++%keyNext]}function keyPressEntropy(){keyArray[keyNext++%256]^=timeByte()}function mouseByte(){return mouseArray[mouseRead++%mouseNext]}function mouseMoveEntropy(n){var t;n||(n=window.event);mouseMoveSkip--<=0&&(t=oldMoveHandler?n.clientX<<4|n.clientY&15:n.screenX<<4|n.screenY&15,mouseArray[mouseNext++%256]^=rc4Next(t&255),mouseArray[mouseNext++%256]^=rc4Next(timeByte()),mouseMoveSkip=randomByte()&7)}function eventsEnd(){document.removeEventListener?(document.removeEventListener("mousemove",mouseMoveEntropy,!1),document.removeEventListener("keypress",keyPressEntropy,!1)):document.detachEvent?(document.detachEvent("onmousemove",mouseMoveEntropy),document.detachEvent("onkeypress",keyPressEntropy)):document.releaseEvents?(document.releaseEvents(EVENT.MOUSEMOVE),document.onMousemove=0,document.releaseEvents(EVENT.KEYPRESS),document.onKeypress=0):(document.onMousemove=oldMoveHandler,document.onKeypress=oldKeyHandler)}function eventsCollect(){document.implementation.hasFeature("Events","2.0")&&document.addEventListener?(document.addEventListener("mousemove",mouseMoveEntropy,!1),document.addEventListener("keypress",keyPressEntropy,!1)):document.attachEvent?(document.attachEvent("onmousemove",mouseMoveEntropy),document.attachEvent("onkeypress",keyPressEntropy)):document.captureEvents?(document.captureEvents(Event.MOUSEMOVE),document.onMousemove=mouseMoveEntropy,document.captureEvents(Event.KEYPRESS),document.onMousemove=keyPressEntropy):(oldMoveHandler=document.onmousemove,document.onMousemove=mouseMoveEntropy,oldKeyHandler=document.onkeypress,document.onKeypress=keyPressEntropy);rc4Init()}function randomByte(){return Math.round(Math.random()*255)&255}function timeByte(){return(new Date).getTime()>>>2&255}function rnTimer(){for(var n=timeByte(),t=0;t<256;t++)n^=randomByte(),rnArray[rnNext++&255]^=n;window.setTimeout("rnTimer()",randomByte()|128)}function randomString(n,t){for(var r="",i=timeByte(),u=0;u<n;)(i^=rnArray[rnRead++&255]^mouseByte()^keyByte(),i==0&&t)||(u++,r+=String.fromCharCode(i));return r}function hex2s(n){var i="",t;for(n.length%2&&(n+="0"),t=0;t<n.length;t+=2)i+=String.fromCharCode(parseInt(n.slice(t,t+2),16));return i}function crc24(n){for(var t=11994318,r=0;r<n.length;r++)for(t^=(n.charCodeAt(r)&255)<<16,i=0;i<8;i++)t<<=1,t&16777216&&(t^=25578747);return String.fromCharCode(t>>16&255)+String.fromCharCode(t>>8&255)+String.fromCharCode(t&255)}function GPGencrypt(n,t){var i,f,s=t.length,c=n.length,r=new Array(bpbl),e=new Array(bpbl),u=new Array(bpbl+2),o=[],h="";if(s%bpbl)for(i=s%bpbl;i<bpbl;i++)t+="\0";for(o=keyExpansion(n),i=0;i<bpbl;i++)r[i]=0,e[i]=randomByte();for(r=AESencrypt(r,o),i=0;i<bpbl;i++)u[i]=r[i]^=e[i];for(r=AESencrypt(r,o),u[bpbl]=r[0]^e[bpbl-2],u[bpbl+1]=r[1]^e[bpbl-1],i=0;i<bpbl+2;i++)h+=String.fromCharCode(u[i]);for(r=u.slice(2,bpbl+2),f=0;f<t.length;f+=bpbl)for(r=AESencrypt(r,o),i=0;i<bpbl;i++)r[i]^=t.charCodeAt(f+i),h+=String.fromCharCode(r[i]);return h.substr(0,s+bpbl+2)}function GPGpkt(n,t){t>255&&(n+=1);var i=String.fromCharCode(n);return t>255&&(i+=String.fromCharCode(t/256)),i+String.fromCharCode(t%256)}function GPGpkesk(n,t,i,r,u){var s=[],h=[],o="",f=r2s(u),e=Math.floor((f.charCodeAt(0)*256+f.charCodeAt(1)+7)/8),a,c,l,v,y;if(s=mpi2b(f.substr(0,e+2)),t){var p=[],w=[],b=[],k=[],d=Math.floor((f.charCodeAt(e+2)*256+f.charCodeAt(e+3)+7)/8)+2;p=mpi2b(f.substr(e+2,d));w=mpi2b(f.substr(e+2+d));h[0]=9;b=bmodexp(p,h,s);k=bmodexp(w,h,s)}else h=mpi2b(f.substr(e+2));for(a=r.length,c=0,l=0;l<a;l++)c+=r.charCodeAt(l);return c&=65535,v=(e-2)*8+2,y=String.fromCharCode(v/256)+String.fromCharCode(v%256)+String.fromCharCode(2)+randomString(e-a-6,1)+"\0"+String.fromCharCode(i)+r+String.fromCharCode(c/256)+String.fromCharCode(c&255),t?(o=b2mpi(b)+b2mpi(bmod(bmul(mpi2b(y),k),s)),GPGpkt(132,o.length+10)+String.fromCharCode(3)+n+String.fromCharCode(16)+o):(o=b2mpi(bmodexp(mpi2b(y),h,s)),GPGpkt(132,o.length+10)+String.fromCharCode(3)+n+String.fromCharCode(1)+o)}function GPGld(n){return n.indexOf("\r\n")==-1&&(n=n.replace(/\n/g,"\r\n")),GPGpkt(172,n.length+10)+"t"+String.fromCharCode(4)+"file\0\0\0\0"+n}function GPGsed(n,t){var i=GPGencrypt(n,GPGld(t));return GPGpkt(164,i.length)+i}function doEncrypt(n,t,i,r){var f=7,o=[16,24,32][f-7],e=randomString(o,0),u;return n=hex2s(n),u=GPGpkesk(n,t,f,e,i)+GPGsed(e,r),"-----BEGIN PGP MESSAGE-----\nVersion: haneWIN JavascriptPG v2.0\n\n"+s2r(u)+"\n="+s2r(crc24(u))+"\n-----END PGP MESSAGE-----\n"}var bs=28,bx2=1<<bs,bm=bx2-1,bx=bx2>>1,bd=bs>>1,bdm=(1<<bd)-1,log2=Math.log(2),Rcon=[1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],S=[99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],T1=[2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],T2=[1667483301,2088564868,2004348569,2071721613,4076011277,1802229437,1869602481,3318059348,808476752,16843267,1734856361,724260477,4278118169,3621238114,2880130534,1987505306,3402272581,2189565853,3385428288,2105408135,4210749205,1499050731,1195871945,4042324747,2913812972,3570709351,2728550397,2947499498,2627478463,2762232823,1920132246,3233848155,3082253762,4261273884,2475900334,640044138,909536346,1061125697,4160222466,3435955023,875849820,2779075060,3857043764,4059166984,1903288979,3638078323,825320019,353708607,67373068,3351745874,589514341,3284376926,404238376,2526427041,84216335,2593796021,117902857,303178806,2155879323,3806519101,3958099238,656887401,2998042573,1970662047,151589403,2206408094,741103732,437924910,454768173,1852759218,1515893998,2694863867,1381147894,993752653,3604395873,3014884814,690573947,3823361342,791633521,2223248279,1397991157,3520182632,0,3991781676,538984544,4244431647,2981198280,1532737261,1785386174,3419114822,3200149465,960066123,1246401758,1280088276,1482207464,3486483786,3503340395,4025468202,2863288293,4227591446,1128498885,1296931543,859006549,2240090516,1162185423,4193904912,33686534,2139094657,1347461360,1010595908,2678007226,2829601763,1364304627,2745392638,1077969088,2408514954,2459058093,2644320700,943222856,4126535940,3166462943,3065411521,3671764853,555827811,269492272,4294960410,4092853518,3537026925,3452797260,202119188,320022069,3974939439,1600110305,2543269282,1145342156,387395129,3301217111,2812761586,2122251394,1027439175,1684326572,1566423783,421081643,1936975509,1616953504,2172721560,1330618065,3705447295,572671078,707417214,2425371563,2290617219,1179028682,4008625961,3099093971,336865340,3739133817,1583267042,185275933,3688607094,3772832571,842163286,976909390,168432670,1229558491,101059594,606357612,1549580516,3267534685,3553869166,2896970735,1650640038,2442213800,2509582756,3840201527,2038035083,3890730290,3368586051,926379609,1835915959,2374828428,3587551588,1313774802,2846444e3,1819072692,1448520954,4109693703,3941256997,1701169839,2054878350,2930657257,134746136,3132780501,2021191816,623200879,774790258,471611428,2795919345,3031724999,3334903633,3907570467,3722289532,1953818780,522141217,1263245021,3183305180,2341145990,2324303749,1886445712,1044282434,3048567236,1718013098,1212715224,50529797,4143380225,235805714,1633796771,892693087,1465364217,3115936208,2256934801,3250690392,488454695,2661164985,3789674808,4177062675,2560109491,286335539,1768542907,3654920560,2391672713,2492740519,2610638262,505297954,2273777042,3924412704,3469641545,1431677695,673730680,3755976058,2357986191,2711706104,2307459456,218962455,3216991706,3873888049,1111655622,1751699640,1094812355,2576951728,757946999,252648977,2964356043,1414834428,3149622742,370551866],T3=[1673962851,2096661628,2012125559,2079755643,4076801522,1809235307,1876865391,3314635973,811618352,16909057,1741597031,727088427,4276558334,3618988759,2874009259,1995217526,3398387146,2183110018,3381215433,2113570685,4209972730,1504897881,1200539975,4042984432,2906778797,3568527316,2724199842,2940594863,2619588508,2756966308,1927583346,3231407040,3077948087,4259388669,2470293139,642542118,913070646,1065238847,4160029431,3431157708,879254580,2773611685,3855693029,4059629809,1910674289,3635114968,828527409,355090197,67636228,3348452039,591815971,3281870531,405809176,2520228246,84545285,2586817946,118360327,304363026,2149292928,3806281186,3956090603,659450151,2994720178,1978310517,152181513,2199756419,743994412,439627290,456535323,1859957358,1521806938,2690382752,1386542674,997608763,3602342358,3011366579,693271337,3822927587,794718511,2215876484,1403450707,3518589137,0,3988860141,541089824,4242743292,2977548465,1538714971,1792327274,3415033547,3194476990,963791673,1251270218,1285084236,1487988824,3481619151,3501943760,4022676207,2857362858,4226619131,1132905795,1301993293,862344499,2232521861,1166724933,4192801017,33818114,2147385727,1352724560,1014514748,2670049951,2823545768,1369633617,2740846243,1082179648,2399505039,2453646738,2636233885,946882616,4126213365,3160661948,3061301686,3668932058,557998881,270544912,4293204735,4093447923,3535760850,3447803085,202904588,321271059,3972214764,1606345055,2536874647,1149815876,388905239,3297990596,2807427751,2130477694,1031423805,1690872932,1572530013,422718233,1944491379,1623236704,2165938305,1335808335,3701702620,574907938,710180394,2419829648,2282455944,1183631942,4006029806,3094074296,338181140,3735517662,1589437022,185998603,3685578459,3772464096,845436466,980700730,169090570,1234361161,101452294,608726052,1555620956,3265224130,3552407251,2890133420,1657054818,2436475025,2503058581,3839047652,2045938553,3889509095,3364570056,929978679,1843050349,2365688973,3585172693,1318900302,2840191145,1826141292,1454176854,4109567988,3939444202,1707781989,2062847610,2923948462,135272456,3127891386,2029029496,625635109,777810478,473441308,2790781350,3027486644,3331805638,3905627112,3718347997,1961401460,524165407,1268178251,3177307325,2332919435,2316273034,1893765232,1048330814,3044132021,1724688998,1217452104,50726147,4143383030,236720654,1640145761,896163637,1471084887,3110719673,2249691526,3248052417,490350365,2653403550,3789109473,4176155640,2553000856,287453969,1775418217,3651760345,2382858638,2486413204,2603464347,507257374,2266337927,3922272489,3464972750,1437269845,676362280,3752164063,2349043596,2707028129,2299101321,219813645,3211123391,3872862694,1115997762,1758509160,1099088705,2569646233,760903469,253628687,2960903088,1420360788,3144537787,371997206],T4=[3332727651,4169432188,4003034999,4136467323,4279104242,3602738027,3736170351,2438251973,1615867952,33751297,3467208551,1451043627,3877240574,3043153879,1306962859,3969545846,2403715786,530416258,2302724553,4203183485,4011195130,3001768281,2395555655,4211863792,1106029997,3009926356,1610457762,1173008303,599760028,1408738468,3835064946,2606481600,1975695287,3776773629,1034851219,1282024998,1817851446,2118205247,4110612471,2203045068,1750873140,1374987685,3509904869,4178113009,3801313649,2876496088,1649619249,708777237,135005188,2505230279,1181033251,2640233411,807933976,933336726,168756485,800430746,235472647,607523346,463175808,3745374946,3441880043,1315514151,2144187058,3936318837,303761673,496927619,1484008492,875436570,908925723,3702681198,3035519578,1543217312,2767606354,1984772923,3076642518,2110698419,1383803177,3711886307,1584475951,328696964,2801095507,3110654417,0,3240947181,1080041504,3810524412,2043195825,3069008731,3569248874,2370227147,1742323390,1917532473,2497595978,2564049996,2968016984,2236272591,3144405200,3307925487,1340451498,3977706491,2261074755,2597801293,1716859699,294946181,2328839493,3910203897,67502594,4269899647,2700103760,2017737788,632987551,1273211048,2733855057,1576969123,2160083008,92966799,1068339858,566009245,1883781176,4043634165,1675607228,2009183926,2943736538,1113792801,540020752,3843751935,4245615603,3211645650,2169294285,403966988,641012499,3274697964,3202441055,899848087,2295088196,775493399,2472002756,1441965991,4236410494,2051489085,3366741092,3135724893,841685273,3868554099,3231735904,429425025,2664517455,2743065820,1147544098,1417554474,1001099408,193169544,2362066502,3341414126,1809037496,675025940,2809781982,3168951902,371002123,2910247899,3678134496,1683370546,1951283770,337512970,2463844681,201983494,1215046692,3101973596,2673722050,3178157011,1139780780,3299238498,967348625,832869781,3543655652,4069226873,3576883175,2336475336,1851340599,3669454189,25988493,2976175573,2631028302,1239460265,3635702892,2902087254,4077384948,3475368682,3400492389,4102978170,1206496942,270010376,1876277946,4035475576,1248797989,1550986798,941890588,1475454630,1942467764,2538718918,3408128232,2709315037,3902567540,1042358047,2531085131,1641856445,226921355,260409994,3767562352,2084716094,1908716981,3433719398,2430093384,100991747,4144101110,470945294,3265487201,1784624437,2935576407,1775286713,395413126,2572730817,975641885,666476190,3644383713,3943954680,733190296,573772049,3535497577,2842745305,126455438,866620564,766942107,1008868894,361924487,3374377449,2269761230,2868860245,1350051880,2776293343,59739276,1509466529,159418761,437718285,1708834751,3610371814,2227585602,3501746280,2193834305,699439513,1517759789,504434447,2076946608,2835108948,1842789307,742004246],maxkc=8,maxrk=14,b64s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",oldKeyHandler,keyRead=0,keyNext=0,keyArray=new Array(256),mouseMoveSkip=0,oldMoveHandler,mouseRead=0,mouseNext=0,mouseArray=new Array(256),s=new Array(256),x,y,rnArray=new Array(256),rnNext=0,rnRead=0,bpbl;rnTimer();eventsCollect();bpbl=16;/*This js file was minified by WSM.*/