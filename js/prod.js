/*!

JSZip - A Javascript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2014 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/master/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/master/LICENSE
*/
!function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;"undefined"!=typeof window?b=window:"undefined"!=typeof global?b=global:"undefined"!=typeof self&&(b=self),b.JSZip=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);throw new Error("Cannot find module '"+g+"'")}var j=c[g]={exports:{}};b[g][0].call(j.exports,function(a){var c=b[g][1][a];return e(c?c:a)},j,j.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";c.encode=function(a){for(var b,c,e,f,g,h,i,j="",k=0;k<a.length;)b=a.charCodeAt(k++),c=a.charCodeAt(k++),e=a.charCodeAt(k++),f=b>>2,g=(3&b)<<4|c>>4,h=(15&c)<<2|e>>6,i=63&e,isNaN(c)?h=i=64:isNaN(e)&&(i=64),j=j+d.charAt(f)+d.charAt(g)+d.charAt(h)+d.charAt(i);return j},c.decode=function(a){var b,c,e,f,g,h,i,j="",k=0;for(a=a.replace(/[^A-Za-z0-9\+\/\=]/g,"");k<a.length;)f=d.indexOf(a.charAt(k++)),g=d.indexOf(a.charAt(k++)),h=d.indexOf(a.charAt(k++)),i=d.indexOf(a.charAt(k++)),b=f<<2|g>>4,c=(15&g)<<4|h>>2,e=(3&h)<<6|i,j+=String.fromCharCode(b),64!=h&&(j+=String.fromCharCode(c)),64!=i&&(j+=String.fromCharCode(e));return j}},{}],2:[function(a,b){"use strict";function c(){this.compressedSize=0,this.uncompressedSize=0,this.crc32=0,this.compressionMethod=null,this.compressedContent=null}c.prototype={getContent:function(){return null},getCompressedContent:function(){return null}},b.exports=c},{}],3:[function(a,b,c){"use strict";c.STORE={magic:"\x00\x00",compress:function(a){return a},uncompress:function(a){return a},compressInputType:null,uncompressInputType:null},c.DEFLATE=a("./flate")},{"./flate":8}],4:[function(a,b){"use strict";var c=a("./utils"),d=[0,1996959894,3993919788,2567524794,124634137,1886057615,3915621685,2657392035,249268274,2044508324,3772115230,2547177864,162941995,2125561021,3887607047,2428444049,498536548,1789927666,4089016648,2227061214,450548861,1843258603,4107580753,2211677639,325883990,1684777152,4251122042,2321926636,335633487,1661365465,4195302755,2366115317,997073096,1281953886,3579855332,2724688242,1006888145,1258607687,3524101629,2768942443,901097722,1119000684,3686517206,2898065728,853044451,1172266101,3705015759,2882616665,651767980,1373503546,3369554304,3218104598,565507253,1454621731,3485111705,3099436303,671266974,1594198024,3322730930,2970347812,795835527,1483230225,3244367275,3060149565,1994146192,31158534,2563907772,4023717930,1907459465,112637215,2680153253,3904427059,2013776290,251722036,2517215374,3775830040,2137656763,141376813,2439277719,3865271297,1802195444,476864866,2238001368,4066508878,1812370925,453092731,2181625025,4111451223,1706088902,314042704,2344532202,4240017532,1658658271,366619977,2362670323,4224994405,1303535960,984961486,2747007092,3569037538,1256170817,1037604311,2765210733,3554079995,1131014506,879679996,2909243462,3663771856,1141124467,855842277,2852801631,3708648649,1342533948,654459306,3188396048,3373015174,1466479909,544179635,3110523913,3462522015,1591671054,702138776,2966460450,3352799412,1504918807,783551873,3082640443,3233442989,3988292384,2596254646,62317068,1957810842,3939845945,2647816111,81470997,1943803523,3814918930,2489596804,225274430,2053790376,3826175755,2466906013,167816743,2097651377,4027552580,2265490386,503444072,1762050814,4150417245,2154129355,426522225,1852507879,4275313526,2312317920,282753626,1742555852,4189708143,2394877945,397917763,1622183637,3604390888,2714866558,953729732,1340076626,3518719985,2797360999,1068828381,1219638859,3624741850,2936675148,906185462,1090812512,3747672003,2825379669,829329135,1181335161,3412177804,3160834842,628085408,1382605366,3423369109,3138078467,570562233,1426400815,3317316542,2998733608,733239954,1555261956,3268935591,3050360625,752459403,1541320221,2607071920,3965973030,1969922972,40735498,2617837225,3943577151,1913087877,83908371,2512341634,3803740692,2075208622,213261112,2463272603,3855990285,2094854071,198958881,2262029012,4057260610,1759359992,534414190,2176718541,4139329115,1873836001,414664567,2282248934,4279200368,1711684554,285281116,2405801727,4167216745,1634467795,376229701,2685067896,3608007406,1308918612,956543938,2808555105,3495958263,1231636301,1047427035,2932959818,3654703836,1088359270,936918e3,2847714899,3736837829,1202900863,817233897,3183342108,3401237130,1404277552,615818150,3134207493,3453421203,1423857449,601450431,3009837614,3294710456,1567103746,711928724,3020668471,3272380065,1510334235,755167117];b.exports=function(a,b){if("undefined"==typeof a||!a.length)return 0;var e="string"!==c.getTypeOf(a);"undefined"==typeof b&&(b=0);var f=0,g=0,h=0;b=-1^b;for(var i=0,j=a.length;j>i;i++)h=e?a[i]:a.charCodeAt(i),g=255&(b^h),f=d[g],b=b>>>8^f;return-1^b}},{"./utils":21}],5:[function(a,b){"use strict";function c(){this.data=null,this.length=0,this.index=0}var d=a("./utils");c.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<a||0>a)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var b,c=0;for(this.checkOffset(a),b=this.index+a-1;b>=this.index;b--)c=(c<<8)+this.byteAt(b);return this.index+=a,c},readString:function(a){return d.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date((a>>25&127)+1980,(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1)}},b.exports=c},{"./utils":21}],6:[function(a,b,c){"use strict";c.base64=!1,c.binary=!1,c.dir=!1,c.createFolders=!1,c.date=null,c.compression=null,c.comment=null},{}],7:[function(a,b,c){"use strict";var d=a("./utils");c.string2binary=function(a){return d.string2binary(a)},c.string2Uint8Array=function(a){return d.transformTo("uint8array",a)},c.uint8Array2String=function(a){return d.transformTo("string",a)},c.string2Blob=function(a){var b=d.transformTo("arraybuffer",a);return d.arrayBuffer2Blob(b)},c.arrayBuffer2Blob=function(a){return d.arrayBuffer2Blob(a)},c.transformTo=function(a,b){return d.transformTo(a,b)},c.getTypeOf=function(a){return d.getTypeOf(a)},c.checkSupport=function(a){return d.checkSupport(a)},c.MAX_VALUE_16BITS=d.MAX_VALUE_16BITS,c.MAX_VALUE_32BITS=d.MAX_VALUE_32BITS,c.pretty=function(a){return d.pretty(a)},c.findCompression=function(a){return d.findCompression(a)},c.isRegExp=function(a){return d.isRegExp(a)}},{"./utils":21}],8:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Uint32Array,e=a("pako");c.uncompressInputType=d?"uint8array":"array",c.compressInputType=d?"uint8array":"array",c.magic="\b\x00",c.compress=function(a){return e.deflateRaw(a)},c.uncompress=function(a){return e.inflateRaw(a)}},{pako:24}],9:[function(a,b){"use strict";function c(a,b){return this instanceof c?(this.files={},this.comment=null,this.root="",a&&this.load(a,b),void(this.clone=function(){var a=new c;for(var b in this)"function"!=typeof this[b]&&(a[b]=this[b]);return a})):new c(a,b)}var d=a("./base64");c.prototype=a("./object"),c.prototype.load=a("./load"),c.support=a("./support"),c.defaults=a("./defaults"),c.utils=a("./deprecatedPublicUtils"),c.base64={encode:function(a){return d.encode(a)},decode:function(a){return d.decode(a)}},c.compressions=a("./compressions"),b.exports=c},{"./base64":1,"./compressions":3,"./defaults":6,"./deprecatedPublicUtils":7,"./load":10,"./object":13,"./support":17}],10:[function(a,b){"use strict";var c=a("./base64"),d=a("./zipEntries");b.exports=function(a,b){var e,f,g,h;for(b=b||{},b.base64&&(a=c.decode(a)),f=new d(a,b),e=f.files,g=0;g<e.length;g++)h=e[g],this.file(h.fileName,h.decompressed,{binary:!0,optimizedBinaryString:!0,date:h.date,dir:h.dir,comment:h.fileComment.length?h.fileComment:null,createFolders:b.createFolders});return f.zipComment.length&&(this.comment=f.zipComment),this}},{"./base64":1,"./zipEntries":22}],11:[function(a,b){(function(a){"use strict";b.exports=function(b,c){return new a(b,c)},b.exports.test=function(b){return a.isBuffer(b)}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],12:[function(a,b){"use strict";function c(a){this.data=a,this.length=this.data.length,this.index=0}var d=a("./uint8ArrayReader");c.prototype=new d,c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./uint8ArrayReader":18}],13:[function(a,b){"use strict";var c=a("./support"),d=a("./utils"),e=a("./crc32"),f=a("./signature"),g=a("./defaults"),h=a("./base64"),i=a("./compressions"),j=a("./compressedObject"),k=a("./nodeBuffer"),l=a("./utf8"),m=a("./stringWriter"),n=a("./uint8ArrayWriter"),o=function(a){if(a._data instanceof j&&(a._data=a._data.getContent(),a.options.binary=!0,a.options.base64=!1,"uint8array"===d.getTypeOf(a._data))){var b=a._data;a._data=new Uint8Array(b.length),0!==b.length&&a._data.set(b,0)}return a._data},p=function(a){var b=o(a),e=d.getTypeOf(b);return"string"===e?!a.options.binary&&c.nodebuffer?k(b,"utf-8"):a.asBinary():b},q=function(a){var b=o(this);return null===b||"undefined"==typeof b?"":(this.options.base64&&(b=h.decode(b)),b=a&&this.options.binary?A.utf8decode(b):d.transformTo("string",b),a||this.options.binary||(b=d.transformTo("string",A.utf8encode(b))),b)},r=function(a,b,c){this.name=a,this.dir=c.dir,this.date=c.date,this.comment=c.comment,this._data=b,this.options=c,this._initialMetadata={dir:c.dir,date:c.date}};r.prototype={asText:function(){return q.call(this,!0)},asBinary:function(){return q.call(this,!1)},asNodeBuffer:function(){var a=p(this);return d.transformTo("nodebuffer",a)},asUint8Array:function(){var a=p(this);return d.transformTo("uint8array",a)},asArrayBuffer:function(){return this.asUint8Array().buffer}};var s=function(a,b){var c,d="";for(c=0;b>c;c++)d+=String.fromCharCode(255&a),a>>>=8;return d},t=function(){var a,b,c={};for(a=0;a<arguments.length;a++)for(b in arguments[a])arguments[a].hasOwnProperty(b)&&"undefined"==typeof c[b]&&(c[b]=arguments[a][b]);return c},u=function(a){return a=a||{},a.base64!==!0||null!==a.binary&&void 0!==a.binary||(a.binary=!0),a=t(a,g),a.date=a.date||new Date,null!==a.compression&&(a.compression=a.compression.toUpperCase()),a},v=function(a,b,c){var e,f=d.getTypeOf(b);if(c=u(c),c.createFolders&&(e=w(a))&&x.call(this,e,!0),c.dir||null===b||"undefined"==typeof b)c.base64=!1,c.binary=!1,b=null;else if("string"===f)c.binary&&!c.base64&&c.optimizedBinaryString!==!0&&(b=d.string2binary(b));else{if(c.base64=!1,c.binary=!0,!(f||b instanceof j))throw new Error("The data of '"+a+"' is in an unsupported format !");"arraybuffer"===f&&(b=d.transformTo("uint8array",b))}var g=new r(a,b,c);return this.files[a]=g,g},w=function(a){"/"==a.slice(-1)&&(a=a.substring(0,a.length-1));var b=a.lastIndexOf("/");return b>0?a.substring(0,b):""},x=function(a,b){return"/"!=a.slice(-1)&&(a+="/"),b="undefined"!=typeof b?b:!1,this.files[a]||v.call(this,a,null,{dir:!0,createFolders:b}),this.files[a]},y=function(a,b){var c,f=new j;return a._data instanceof j?(f.uncompressedSize=a._data.uncompressedSize,f.crc32=a._data.crc32,0===f.uncompressedSize||a.dir?(b=i.STORE,f.compressedContent="",f.crc32=0):a._data.compressionMethod===b.magic?f.compressedContent=a._data.getCompressedContent():(c=a._data.getContent(),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c)))):(c=p(a),(!c||0===c.length||a.dir)&&(b=i.STORE,c=""),f.uncompressedSize=c.length,f.crc32=e(c),f.compressedContent=b.compress(d.transformTo(b.compressInputType,c))),f.compressedSize=f.compressedContent.length,f.compressionMethod=b.magic,f},z=function(a,b,c,g){var h,i,j,k,m=(c.compressedContent,d.transformTo("string",l.utf8encode(b.name))),n=b.comment||"",o=d.transformTo("string",l.utf8encode(n)),p=m.length!==b.name.length,q=o.length!==n.length,r=b.options,t="",u="",v="";j=b._initialMetadata.dir!==b.dir?b.dir:r.dir,k=b._initialMetadata.date!==b.date?b.date:r.date,h=k.getHours(),h<<=6,h|=k.getMinutes(),h<<=5,h|=k.getSeconds()/2,i=k.getFullYear()-1980,i<<=4,i|=k.getMonth()+1,i<<=5,i|=k.getDate(),p&&(u=s(1,1)+s(e(m),4)+m,t+="up"+s(u.length,2)+u),q&&(v=s(1,1)+s(this.crc32(o),4)+o,t+="uc"+s(v.length,2)+v);var w="";w+="\n\x00",w+=p||q?"\x00\b":"\x00\x00",w+=c.compressionMethod,w+=s(h,2),w+=s(i,2),w+=s(c.crc32,4),w+=s(c.compressedSize,4),w+=s(c.uncompressedSize,4),w+=s(m.length,2),w+=s(t.length,2);var x=f.LOCAL_FILE_HEADER+w+m+t,y=f.CENTRAL_FILE_HEADER+"\x00"+w+s(o.length,2)+"\x00\x00\x00\x00"+(j===!0?"\x00\x00\x00":"\x00\x00\x00\x00")+s(g,4)+m+t+o;return{fileRecord:x,dirRecord:y,compressedObject:c}},A={load:function(){throw new Error("Load method is not defined. Is the file jszip-load.js included ?")},filter:function(a){var b,c,d,e,f=[];for(b in this.files)this.files.hasOwnProperty(b)&&(d=this.files[b],e=new r(d.name,d._data,t(d.options)),c=b.slice(this.root.length,b.length),b.slice(0,this.root.length)===this.root&&a(c,e)&&f.push(e));return f},file:function(a,b,c){if(1===arguments.length){if(d.isRegExp(a)){var e=a;return this.filter(function(a,b){return!b.dir&&e.test(a)})}return this.filter(function(b,c){return!c.dir&&b===a})[0]||null}return a=this.root+a,v.call(this,a,b,c),this},folder:function(a){if(!a)return this;if(d.isRegExp(a))return this.filter(function(b,c){return c.dir&&a.test(b)});var b=this.root+a,c=x.call(this,b),e=this.clone();return e.root=c.name,e},remove:function(a){a=this.root+a;var b=this.files[a];if(b||("/"!=a.slice(-1)&&(a+="/"),b=this.files[a]),b&&!b.dir)delete this.files[a];else for(var c=this.filter(function(b,c){return c.name.slice(0,a.length)===a}),d=0;d<c.length;d++)delete this.files[c[d].name];return this},generate:function(a){a=t(a||{},{base64:!0,compression:"STORE",type:"base64",comment:null}),d.checkSupport(a.type);var b,c,e=[],g=0,j=0,k=d.transformTo("string",this.utf8encode(a.comment||this.comment||""));for(var l in this.files)if(this.files.hasOwnProperty(l)){var o=this.files[l],p=o.options.compression||a.compression.toUpperCase(),q=i[p];if(!q)throw new Error(p+" is not a valid compression method !");var r=y.call(this,o,q),u=z.call(this,l,o,r,g);g+=u.fileRecord.length+r.compressedSize,j+=u.dirRecord.length,e.push(u)}var v="";v=f.CENTRAL_DIRECTORY_END+"\x00\x00\x00\x00"+s(e.length,2)+s(e.length,2)+s(j,4)+s(g,4)+s(k.length,2)+k;var w=a.type.toLowerCase();for(b="uint8array"===w||"arraybuffer"===w||"blob"===w||"nodebuffer"===w?new n(g+j+v.length):new m(g+j+v.length),c=0;c<e.length;c++)b.append(e[c].fileRecord),b.append(e[c].compressedObject.compressedContent);for(c=0;c<e.length;c++)b.append(e[c].dirRecord);b.append(v);var x=b.finalize();switch(a.type.toLowerCase()){case"uint8array":case"arraybuffer":case"nodebuffer":return d.transformTo(a.type.toLowerCase(),x);case"blob":return d.arrayBuffer2Blob(d.transformTo("arraybuffer",x));case"base64":return a.base64?h.encode(x):x;default:return x}},crc32:function(a,b){return e(a,b)},utf8encode:function(a){return d.transformTo("string",l.utf8encode(a))},utf8decode:function(a){return l.utf8decode(a)}};b.exports=A},{"./base64":1,"./compressedObject":2,"./compressions":3,"./crc32":4,"./defaults":6,"./nodeBuffer":11,"./signature":14,"./stringWriter":16,"./support":17,"./uint8ArrayWriter":19,"./utf8":20,"./utils":21}],14:[function(a,b,c){"use strict";c.LOCAL_FILE_HEADER="PK",c.CENTRAL_FILE_HEADER="PK",c.CENTRAL_DIRECTORY_END="PK",c.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK",c.ZIP64_CENTRAL_DIRECTORY_END="PK",c.DATA_DESCRIPTOR="PK\b"},{}],15:[function(a,b){"use strict";function c(a,b){this.data=a,b||(this.data=e.string2binary(this.data)),this.length=this.data.length,this.index=0}var d=a("./dataReader"),e=a("./utils");c.prototype=new d,c.prototype.byteAt=function(a){return this.data.charCodeAt(a)},c.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)},c.prototype.readData=function(a){this.checkOffset(a);var b=this.data.slice(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5,"./utils":21}],16:[function(a,b){"use strict";var c=a("./utils"),d=function(){this.data=[]};d.prototype={append:function(a){a=c.transformTo("string",a),this.data.push(a)},finalize:function(){return this.data.join("")}},b.exports=d},{"./utils":21}],17:[function(a,b,c){(function(a){"use strict";if(c.base64=!0,c.array=!0,c.string=!0,c.arraybuffer="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof Uint8Array,c.nodebuffer="undefined"!=typeof a,c.uint8array="undefined"!=typeof Uint8Array,"undefined"==typeof ArrayBuffer)c.blob=!1;else{var b=new ArrayBuffer(0);try{c.blob=0===new Blob([b],{type:"application/zip"}).size}catch(d){try{var e=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,f=new e;f.append(b),c.blob=0===f.getBlob("application/zip").size}catch(d){c.blob=!1}}}}).call(this,"undefined"!=typeof Buffer?Buffer:void 0)},{}],18:[function(a,b){"use strict";function c(a){a&&(this.data=a,this.length=this.data.length,this.index=0)}var d=a("./dataReader");c.prototype=new d,c.prototype.byteAt=function(a){return this.data[a]},c.prototype.lastIndexOfSignature=function(a){for(var b=a.charCodeAt(0),c=a.charCodeAt(1),d=a.charCodeAt(2),e=a.charCodeAt(3),f=this.length-4;f>=0;--f)if(this.data[f]===b&&this.data[f+1]===c&&this.data[f+2]===d&&this.data[f+3]===e)return f;return-1},c.prototype.readData=function(a){if(this.checkOffset(a),0===a)return new Uint8Array(0);var b=this.data.subarray(this.index,this.index+a);return this.index+=a,b},b.exports=c},{"./dataReader":5}],19:[function(a,b){"use strict";var c=a("./utils"),d=function(a){this.data=new Uint8Array(a),this.index=0};d.prototype={append:function(a){0!==a.length&&(a=c.transformTo("uint8array",a),this.data.set(a,this.index),this.index+=a.length)},finalize:function(){return this.data}},b.exports=d},{"./utils":21}],20:[function(a,b,c){"use strict";for(var d=a("./utils"),e=a("./support"),f=a("./nodeBuffer"),g=new Array(256),h=0;256>h;h++)g[h]=h>=252?6:h>=248?5:h>=240?4:h>=224?3:h>=192?2:1;g[254]=g[254]=1;var i=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=e.uint8array?new Uint8Array(i):new Array(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},j=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+g[a[c]]>b?c:b},k=function(a){var b,c,e,f,h=a.length,i=new Array(2*h);for(c=0,b=0;h>b;)if(e=a[b++],128>e)i[c++]=e;else if(f=g[e],f>4)i[c++]=65533,b+=f-1;else{for(e&=2===f?31:3===f?15:7;f>1&&h>b;)e=e<<6|63&a[b++],f--;f>1?i[c++]=65533:65536>e?i[c++]=e:(e-=65536,i[c++]=55296|e>>10&1023,i[c++]=56320|1023&e)}return i.length!==c&&(i.subarray?i=i.subarray(0,c):i.length=c),d.applyFromCharCode(i)};c.utf8encode=function(a){return e.nodebuffer?f(a,"utf-8"):i(a)},c.utf8decode=function(a){if(e.nodebuffer)return d.transformTo("nodebuffer",a).toString("utf-8");a=d.transformTo(e.uint8array?"uint8array":"array",a);for(var b=[],c=0,f=a.length,g=65536;f>c;){var h=j(a,Math.min(c+g,f));b.push(e.uint8array?k(a.subarray(c,h)):k(a.slice(c,h))),c=h}return b.join("")}},{"./nodeBuffer":11,"./support":17,"./utils":21}],21:[function(a,b,c){"use strict";function d(a){return a}function e(a,b){for(var c=0;c<a.length;++c)b[c]=255&a.charCodeAt(c);return b}function f(a){var b=65536,d=[],e=a.length,f=c.getTypeOf(a),g=0,h=!0;try{switch(f){case"uint8array":String.fromCharCode.apply(null,new Uint8Array(0));break;case"nodebuffer":String.fromCharCode.apply(null,j(0))}}catch(i){h=!1}if(!h){for(var k="",l=0;l<a.length;l++)k+=String.fromCharCode(a[l]);return k}for(;e>g&&b>1;)try{d.push("array"===f||"nodebuffer"===f?String.fromCharCode.apply(null,a.slice(g,Math.min(g+b,e))):String.fromCharCode.apply(null,a.subarray(g,Math.min(g+b,e)))),g+=b}catch(i){b=Math.floor(b/2)}return d.join("")}function g(a,b){for(var c=0;c<a.length;c++)b[c]=a[c];return b}var h=a("./support"),i=a("./compressions"),j=a("./nodeBuffer");c.string2binary=function(a){for(var b="",c=0;c<a.length;c++)b+=String.fromCharCode(255&a.charCodeAt(c));return b},c.arrayBuffer2Blob=function(a){c.checkSupport("blob");try{return new Blob([a],{type:"application/zip"})}catch(b){try{var d=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,e=new d;return e.append(a),e.getBlob("application/zip")}catch(b){throw new Error("Bug : can't construct the Blob.")}}},c.applyFromCharCode=f;var k={};k.string={string:d,array:function(a){return e(a,new Array(a.length))},arraybuffer:function(a){return k.string.uint8array(a).buffer},uint8array:function(a){return e(a,new Uint8Array(a.length))},nodebuffer:function(a){return e(a,j(a.length))}},k.array={string:f,array:d,arraybuffer:function(a){return new Uint8Array(a).buffer},uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(a)}},k.arraybuffer={string:function(a){return f(new Uint8Array(a))},array:function(a){return g(new Uint8Array(a),new Array(a.byteLength))},arraybuffer:d,uint8array:function(a){return new Uint8Array(a)},nodebuffer:function(a){return j(new Uint8Array(a))}},k.uint8array={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return a.buffer},uint8array:d,nodebuffer:function(a){return j(a)}},k.nodebuffer={string:f,array:function(a){return g(a,new Array(a.length))},arraybuffer:function(a){return k.nodebuffer.uint8array(a).buffer},uint8array:function(a){return g(a,new Uint8Array(a.length))},nodebuffer:d},c.transformTo=function(a,b){if(b||(b=""),!a)return b;c.checkSupport(a);var d=c.getTypeOf(b),e=k[d][a](b);return e},c.getTypeOf=function(a){return"string"==typeof a?"string":"[object Array]"===Object.prototype.toString.call(a)?"array":h.nodebuffer&&j.test(a)?"nodebuffer":h.uint8array&&a instanceof Uint8Array?"uint8array":h.arraybuffer&&a instanceof ArrayBuffer?"arraybuffer":void 0},c.checkSupport=function(a){var b=h[a.toLowerCase()];if(!b)throw new Error(a+" is not supported by this browser")},c.MAX_VALUE_16BITS=65535,c.MAX_VALUE_32BITS=-1,c.pretty=function(a){var b,c,d="";for(c=0;c<(a||"").length;c++)b=a.charCodeAt(c),d+="\\x"+(16>b?"0":"")+b.toString(16).toUpperCase();return d},c.findCompression=function(a){for(var b in i)if(i.hasOwnProperty(b)&&i[b].magic===a)return i[b];return null},c.isRegExp=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},{"./compressions":3,"./nodeBuffer":11,"./support":17}],22:[function(a,b){"use strict";function c(a,b){this.files=[],this.loadOptions=b,a&&this.load(a)}var d=a("./stringReader"),e=a("./nodeBufferReader"),f=a("./uint8ArrayReader"),g=a("./utils"),h=a("./signature"),i=a("./zipEntry"),j=a("./support"),k=a("./object");c.prototype={checkSignature:function(a){var b=this.reader.readString(4);if(b!==a)throw new Error("Corrupted zip or bug : unexpected signature ("+g.pretty(b)+", expected "+g.pretty(a)+")")},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2),this.zipComment=this.reader.readString(this.zipCommentLength),this.zipComment=k.utf8decode(this.zipComment)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.versionMadeBy=this.reader.readString(2),this.versionNeeded=this.reader.readInt(2),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var a,b,c,d=this.zip64EndOfCentralSize-44,e=0;d>e;)a=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readString(b),this.zip64ExtensibleData[a]={id:a,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),this.disksCount>1)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var a,b;for(a=0;a<this.files.length;a++)b=this.files[a],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(h.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8()},readCentralDir:function(){var a;for(this.reader.setIndex(this.centralDirOffset);this.reader.readString(4)===h.CENTRAL_FILE_HEADER;)a=new i({zip64:this.zip64},this.loadOptions),a.readCentralPart(this.reader),this.files.push(a)},readEndOfCentral:function(){var a=this.reader.lastIndexOfSignature(h.CENTRAL_DIRECTORY_END);if(-1===a)throw new Error("Corrupted zip : can't find end of central directory");if(this.reader.setIndex(a),this.checkSignature(h.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===g.MAX_VALUE_16BITS||this.diskWithCentralDirStart===g.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===g.MAX_VALUE_16BITS||this.centralDirRecords===g.MAX_VALUE_16BITS||this.centralDirSize===g.MAX_VALUE_32BITS||this.centralDirOffset===g.MAX_VALUE_32BITS){if(this.zip64=!0,a=this.reader.lastIndexOfSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),-1===a)throw new Error("Corrupted zip : can't find the ZIP64 end of central directory locator");this.reader.setIndex(a),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(h.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}},prepareReader:function(a){var b=g.getTypeOf(a);this.reader="string"!==b||j.uint8array?"nodebuffer"===b?new e(a):new f(g.transformTo("uint8array",a)):new d(a,this.loadOptions.optimizedBinaryString)},load:function(a){this.prepareReader(a),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},b.exports=c},{"./nodeBufferReader":12,"./object":13,"./signature":14,"./stringReader":15,"./support":17,"./uint8ArrayReader":18,"./utils":21,"./zipEntry":23}],23:[function(a,b){"use strict";function c(a,b){this.options=a,this.loadOptions=b}var d=a("./stringReader"),e=a("./utils"),f=a("./compressedObject"),g=a("./object");c.prototype={isEncrypted:function(){return 1===(1&this.bitFlag)},useUTF8:function(){return 2048===(2048&this.bitFlag)},prepareCompressedContent:function(a,b,c){return function(){var d=a.index;a.setIndex(b);var e=a.readData(c);return a.setIndex(d),e}},prepareContent:function(a,b,c,d,f){return function(){var a=e.transformTo(d.uncompressInputType,this.getCompressedContent()),b=d.uncompress(a);if(b.length!==f)throw new Error("Bug : uncompressed data size mismatch");return b}},readLocalPart:function(a){var b,c;if(a.skip(22),this.fileNameLength=a.readInt(2),c=a.readInt(2),this.fileName=a.readString(this.fileNameLength),a.skip(c),-1==this.compressedSize||-1==this.uncompressedSize)throw new Error("Bug or corrupted zip : didn't get enough informations from the central directory (compressedSize == -1 || uncompressedSize == -1)");if(b=e.findCompression(this.compressionMethod),null===b)throw new Error("Corrupted zip : compression "+e.pretty(this.compressionMethod)+" unknown (inner file : "+this.fileName+")");if(this.decompressed=new f,this.decompressed.compressedSize=this.compressedSize,this.decompressed.uncompressedSize=this.uncompressedSize,this.decompressed.crc32=this.crc32,this.decompressed.compressionMethod=this.compressionMethod,this.decompressed.getCompressedContent=this.prepareCompressedContent(a,a.index,this.compressedSize,b),this.decompressed.getContent=this.prepareContent(a,a.index,this.compressedSize,b,this.uncompressedSize),this.loadOptions.checkCRC32&&(this.decompressed=e.transformTo("string",this.decompressed.getContent()),g.crc32(this.decompressed)!==this.crc32))throw new Error("Corrupted zip : CRC32 mismatch")},readCentralPart:function(a){if(this.versionMadeBy=a.readString(2),this.versionNeeded=a.readInt(2),this.bitFlag=a.readInt(2),this.compressionMethod=a.readString(2),this.date=a.readDate(),this.crc32=a.readInt(4),this.compressedSize=a.readInt(4),this.uncompressedSize=a.readInt(4),this.fileNameLength=a.readInt(2),this.extraFieldsLength=a.readInt(2),this.fileCommentLength=a.readInt(2),this.diskNumberStart=a.readInt(2),this.internalFileAttributes=a.readInt(2),this.externalFileAttributes=a.readInt(4),this.localHeaderOffset=a.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");this.fileName=a.readString(this.fileNameLength),this.readExtraFields(a),this.parseZIP64ExtraField(a),this.fileComment=a.readString(this.fileCommentLength),this.dir=16&this.externalFileAttributes?!0:!1},parseZIP64ExtraField:function(){if(this.extraFields[1]){var a=new d(this.extraFields[1].value);this.uncompressedSize===e.MAX_VALUE_32BITS&&(this.uncompressedSize=a.readInt(8)),this.compressedSize===e.MAX_VALUE_32BITS&&(this.compressedSize=a.readInt(8)),this.localHeaderOffset===e.MAX_VALUE_32BITS&&(this.localHeaderOffset=a.readInt(8)),this.diskNumberStart===e.MAX_VALUE_32BITS&&(this.diskNumberStart=a.readInt(4))}},readExtraFields:function(a){var b,c,d,e=a.index;for(this.extraFields=this.extraFields||{};a.index<e+this.extraFieldsLength;)b=a.readInt(2),c=a.readInt(2),d=a.readString(c),this.extraFields[b]={id:b,length:c,value:d}},handleUTF8:function(){if(this.useUTF8())this.fileName=g.utf8decode(this.fileName),this.fileComment=g.utf8decode(this.fileComment);else{var a=this.findExtraFieldUnicodePath();null!==a&&(this.fileName=a);var b=this.findExtraFieldUnicodeComment();null!==b&&(this.fileComment=b)}},findExtraFieldUnicodePath:function(){var a=this.extraFields[28789];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileName)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null},findExtraFieldUnicodeComment:function(){var a=this.extraFields[25461];if(a){var b=new d(a.value);return 1!==b.readInt(1)?null:g.crc32(this.fileComment)!==b.readInt(4)?null:g.utf8decode(b.readString(a.length-5))}return null}},b.exports=c},{"./compressedObject":2,"./object":13,"./stringReader":15,"./utils":21}],24:[function(a,b){"use strict";var c=a("./lib/utils/common").assign,d=a("./lib/deflate"),e=a("./lib/inflate"),f=a("./lib/zlib/constants"),g={};c(g,d,e,f),b.exports=g},{"./lib/deflate":25,"./lib/inflate":26,"./lib/utils/common":27,"./lib/zlib/constants":30}],25:[function(a,b,c){"use strict";function d(a,b){var c=new s(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}function f(a,b){return b=b||{},b.gzip=!0,d(a,b)}var g=a("./zlib/deflate.js"),h=a("./utils/common"),i=a("./utils/strings"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=0,m=4,n=0,o=1,p=-1,q=0,r=8,s=function(a){this.options=h.assign({level:p,method:r,chunkSize:16384,windowBits:15,memLevel:8,strategy:q,to:""},a||{});var b=this.options;b.raw&&b.windowBits>0?b.windowBits=-b.windowBits:b.gzip&&b.windowBits>0&&b.windowBits<16&&(b.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=g.deflateInit2(this.strm,b.level,b.method,b.windowBits,b.memLevel,b.strategy);if(c!==n)throw new Error(j[c]);b.header&&g.deflateSetHeader(this.strm,b.header)
};s.prototype.push=function(a,b){var c,d,e=this.strm,f=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?m:l,e.input="string"==typeof a?i.string2buf(a):a,e.next_in=0,e.avail_in=e.input.length;do{if(0===e.avail_out&&(e.output=new h.Buf8(f),e.next_out=0,e.avail_out=f),c=g.deflate(e,d),c!==o&&c!==n)return this.onEnd(c),this.ended=!0,!1;(0===e.avail_out||0===e.avail_in&&d===m)&&this.onData("string"===this.options.to?i.buf2binstring(h.shrinkBuf(e.output,e.next_out)):h.shrinkBuf(e.output,e.next_out))}while((e.avail_in>0||0===e.avail_out)&&c!==o);return d===m?(c=g.deflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===n):!0},s.prototype.onData=function(a){this.chunks.push(a)},s.prototype.onEnd=function(a){a===n&&(this.result="string"===this.options.to?this.chunks.join(""):h.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Deflate=s,c.deflate=d,c.deflateRaw=e,c.gzip=f},{"./utils/common":27,"./utils/strings":28,"./zlib/deflate.js":32,"./zlib/messages":37,"./zlib/zstream":39}],26:[function(a,b,c){"use strict";function d(a,b){var c=new m(b);if(c.push(a,!0),c.err)throw c.msg;return c.result}function e(a,b){return b=b||{},b.raw=!0,d(a,b)}var f=a("./zlib/inflate.js"),g=a("./utils/common"),h=a("./utils/strings"),i=a("./zlib/constants"),j=a("./zlib/messages"),k=a("./zlib/zstream"),l=a("./zlib/gzheader"),m=function(a){this.options=g.assign({chunkSize:16384,windowBits:0,to:""},a||{});var b=this.options;b.raw&&b.windowBits>=0&&b.windowBits<16&&(b.windowBits=-b.windowBits,0===b.windowBits&&(b.windowBits=-15)),!(b.windowBits>=0&&b.windowBits<16)||a&&a.windowBits||(b.windowBits+=32),b.windowBits>15&&b.windowBits<48&&0===(15&b.windowBits)&&(b.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new k,this.strm.avail_out=0;var c=f.inflateInit2(this.strm,b.windowBits);if(c!==i.Z_OK)throw new Error(j[c]);this.header=new l,f.inflateGetHeader(this.strm,this.header)};m.prototype.push=function(a,b){var c,d,e,j,k,l=this.strm,m=this.options.chunkSize;if(this.ended)return!1;d=b===~~b?b:b===!0?i.Z_FINISH:i.Z_NO_FLUSH,l.input="string"==typeof a?h.binstring2buf(a):a,l.next_in=0,l.avail_in=l.input.length;do{if(0===l.avail_out&&(l.output=new g.Buf8(m),l.next_out=0,l.avail_out=m),c=f.inflate(l,i.Z_NO_FLUSH),c!==i.Z_STREAM_END&&c!==i.Z_OK)return this.onEnd(c),this.ended=!0,!1;l.next_out&&(0===l.avail_out||c===i.Z_STREAM_END||0===l.avail_in&&d===i.Z_FINISH)&&("string"===this.options.to?(e=h.utf8border(l.output,l.next_out),j=l.next_out-e,k=h.buf2string(l.output,e),l.next_out=j,l.avail_out=m-j,j&&g.arraySet(l.output,l.output,e,j,0),this.onData(k)):this.onData(g.shrinkBuf(l.output,l.next_out)))}while(l.avail_in>0&&c!==i.Z_STREAM_END);return c===i.Z_STREAM_END&&(d=i.Z_FINISH),d===i.Z_FINISH?(c=f.inflateEnd(this.strm),this.onEnd(c),this.ended=!0,c===i.Z_OK):!0},m.prototype.onData=function(a){this.chunks.push(a)},m.prototype.onEnd=function(a){a===i.Z_OK&&(this.result="string"===this.options.to?this.chunks.join(""):g.flattenChunks(this.chunks)),this.chunks=[],this.err=a,this.msg=this.strm.msg},c.Inflate=m,c.inflate=d,c.inflateRaw=e,c.ungzip=d},{"./utils/common":27,"./utils/strings":28,"./zlib/constants":30,"./zlib/gzheader":33,"./zlib/inflate.js":35,"./zlib/messages":37,"./zlib/zstream":39}],27:[function(a,b,c){"use strict";var d="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;c.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!=typeof c)throw new TypeError(c+"must be non-object");for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])}}return a},c.shrinkBuf=function(a,b){return a.length===b?a:a.subarray?a.subarray(0,b):(a.length=b,a)};var e={arraySet:function(a,b,c,d,e){if(b.subarray&&a.subarray)return void a.set(b.subarray(c,c+d),e);for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){var b,c,d,e,f,g;for(d=0,b=0,c=a.length;c>b;b++)d+=a[b].length;for(g=new Uint8Array(d),e=0,b=0,c=a.length;c>b;b++)f=a[b],g.set(f,e),e+=f.length;return g}},f={arraySet:function(a,b,c,d,e){for(var f=0;d>f;f++)a[e+f]=b[c+f]},flattenChunks:function(a){return[].concat.apply([],a)}};c.setTyped=function(a){a?(c.Buf8=Uint8Array,c.Buf16=Uint16Array,c.Buf32=Int32Array,c.assign(c,e)):(c.Buf8=Array,c.Buf16=Array,c.Buf32=Array,c.assign(c,f))},c.setTyped(d)},{}],28:[function(a,b,c){"use strict";function d(a,b){if(65537>b&&(a.subarray&&g||!a.subarray&&f))return String.fromCharCode.apply(null,e.shrinkBuf(a,b));for(var c="",d=0;b>d;d++)c+=String.fromCharCode(a[d]);return c}var e=a("./common"),f=!0,g=!0;try{String.fromCharCode.apply(null,[0])}catch(h){f=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(h){g=!1}for(var i=new e.Buf8(256),j=0;256>j;j++)i[j]=j>=252?6:j>=248?5:j>=240?4:j>=224?3:j>=192?2:1;i[254]=i[254]=1,c.string2buf=function(a){var b,c,d,f,g,h=a.length,i=0;for(f=0;h>f;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),i+=128>c?1:2048>c?2:65536>c?3:4;for(b=new e.Buf8(i),g=0,f=0;i>g;f++)c=a.charCodeAt(f),55296===(64512&c)&&h>f+1&&(d=a.charCodeAt(f+1),56320===(64512&d)&&(c=65536+(c-55296<<10)+(d-56320),f++)),128>c?b[g++]=c:2048>c?(b[g++]=192|c>>>6,b[g++]=128|63&c):65536>c?(b[g++]=224|c>>>12,b[g++]=128|c>>>6&63,b[g++]=128|63&c):(b[g++]=240|c>>>18,b[g++]=128|c>>>12&63,b[g++]=128|c>>>6&63,b[g++]=128|63&c);return b},c.buf2binstring=function(a){return d(a,a.length)},c.binstring2buf=function(a){for(var b=new e.Buf8(a.length),c=0,d=b.length;d>c;c++)b[c]=a.charCodeAt(c);return b},c.buf2string=function(a,b){var c,e,f,g,h=b||a.length,j=new Array(2*h);for(e=0,c=0;h>c;)if(f=a[c++],128>f)j[e++]=f;else if(g=i[f],g>4)j[e++]=65533,c+=g-1;else{for(f&=2===g?31:3===g?15:7;g>1&&h>c;)f=f<<6|63&a[c++],g--;g>1?j[e++]=65533:65536>f?j[e++]=f:(f-=65536,j[e++]=55296|f>>10&1023,j[e++]=56320|1023&f)}return d(j,e)},c.utf8border=function(a,b){var c;for(b=b||a.length,b>a.length&&(b=a.length),c=b-1;c>=0&&128===(192&a[c]);)c--;return 0>c?b:0===c?b:c+i[a[c]]>b?c:b}},{"./common":27}],29:[function(a,b){"use strict";function c(a,b,c,d){for(var e=65535&a|0,f=a>>>16&65535|0,g=0;0!==c;){g=c>2e3?2e3:c,c-=g;do e=e+b[d++]|0,f=f+e|0;while(--g);e%=65521,f%=65521}return e|f<<16|0}b.exports=c},{}],30:[function(a,b){b.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],31:[function(a,b){"use strict";function c(){for(var a,b=[],c=0;256>c;c++){a=c;for(var d=0;8>d;d++)a=1&a?3988292384^a>>>1:a>>>1;b[c]=a}return b}function d(a,b,c,d){var f=e,g=d+c;a=-1^a;for(var h=d;g>h;h++)a=a>>>8^f[255&(a^b[h])];return-1^a}var e=c();b.exports=d},{}],32:[function(a,b,c){"use strict";function d(a,b){return a.msg=G[b],b}function e(a){return(a<<1)-(a>4?9:0)}function f(a){for(var b=a.length;--b>=0;)a[b]=0}function g(a){var b=a.state,c=b.pending;c>a.avail_out&&(c=a.avail_out),0!==c&&(C.arraySet(a.output,b.pending_buf,b.pending_out,c,a.next_out),a.next_out+=c,b.pending_out+=c,a.total_out+=c,a.avail_out-=c,b.pending-=c,0===b.pending&&(b.pending_out=0))}function h(a,b){D._tr_flush_block(a,a.block_start>=0?a.block_start:-1,a.strstart-a.block_start,b),a.block_start=a.strstart,g(a.strm)}function i(a,b){a.pending_buf[a.pending++]=b}function j(a,b){a.pending_buf[a.pending++]=b>>>8&255,a.pending_buf[a.pending++]=255&b}function k(a,b,c,d){var e=a.avail_in;return e>d&&(e=d),0===e?0:(a.avail_in-=e,C.arraySet(b,a.input,a.next_in,e,c),1===a.state.wrap?a.adler=E(a.adler,b,e,c):2===a.state.wrap&&(a.adler=F(a.adler,b,e,c)),a.next_in+=e,a.total_in+=e,e)}function l(a,b){var c,d,e=a.max_chain_length,f=a.strstart,g=a.prev_length,h=a.nice_match,i=a.strstart>a.w_size-jb?a.strstart-(a.w_size-jb):0,j=a.window,k=a.w_mask,l=a.prev,m=a.strstart+ib,n=j[f+g-1],o=j[f+g];a.prev_length>=a.good_match&&(e>>=2),h>a.lookahead&&(h=a.lookahead);do if(c=b,j[c+g]===o&&j[c+g-1]===n&&j[c]===j[f]&&j[++c]===j[f+1]){f+=2,c++;do;while(j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&j[++f]===j[++c]&&m>f);if(d=ib-(m-f),f=m-ib,d>g){if(a.match_start=b,g=d,d>=h)break;n=j[f+g-1],o=j[f+g]}}while((b=l[b&k])>i&&0!==--e);return g<=a.lookahead?g:a.lookahead}function m(a){var b,c,d,e,f,g=a.w_size;do{if(e=a.window_size-a.lookahead-a.strstart,a.strstart>=g+(g-jb)){C.arraySet(a.window,a.window,g,g,0),a.match_start-=g,a.strstart-=g,a.block_start-=g,c=a.hash_size,b=c;do d=a.head[--b],a.head[b]=d>=g?d-g:0;while(--c);c=g,b=c;do d=a.prev[--b],a.prev[b]=d>=g?d-g:0;while(--c);e+=g}if(0===a.strm.avail_in)break;if(c=k(a.strm,a.window,a.strstart+a.lookahead,e),a.lookahead+=c,a.lookahead+a.insert>=hb)for(f=a.strstart-a.insert,a.ins_h=a.window[f],a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+1])&a.hash_mask;a.insert&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[f+hb-1])&a.hash_mask,a.prev[f&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=f,f++,a.insert--,!(a.lookahead+a.insert<hb)););}while(a.lookahead<jb&&0!==a.strm.avail_in)}function n(a,b){var c=65535;for(c>a.pending_buf_size-5&&(c=a.pending_buf_size-5);;){if(a.lookahead<=1){if(m(a),0===a.lookahead&&b===H)return sb;if(0===a.lookahead)break}a.strstart+=a.lookahead,a.lookahead=0;var d=a.block_start+c;if((0===a.strstart||a.strstart>=d)&&(a.lookahead=a.strstart-d,a.strstart=d,h(a,!1),0===a.strm.avail_out))return sb;if(a.strstart-a.block_start>=a.w_size-jb&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.strstart>a.block_start&&(h(a,!1),0===a.strm.avail_out)?sb:sb}function o(a,b){for(var c,d;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),0!==c&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c)),a.match_length>=hb)if(d=D._tr_tally(a,a.strstart-a.match_start,a.match_length-hb),a.lookahead-=a.match_length,a.match_length<=a.max_lazy_match&&a.lookahead>=hb){a.match_length--;do a.strstart++,a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart;while(0!==--a.match_length);a.strstart++}else a.strstart+=a.match_length,a.match_length=0,a.ins_h=a.window[a.strstart],a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+1])&a.hash_mask;else d=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++;if(d&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function p(a,b){for(var c,d,e;;){if(a.lookahead<jb){if(m(a),a.lookahead<jb&&b===H)return sb;if(0===a.lookahead)break}if(c=0,a.lookahead>=hb&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart),a.prev_length=a.match_length,a.prev_match=a.match_start,a.match_length=hb-1,0!==c&&a.prev_length<a.max_lazy_match&&a.strstart-c<=a.w_size-jb&&(a.match_length=l(a,c),a.match_length<=5&&(a.strategy===S||a.match_length===hb&&a.strstart-a.match_start>4096)&&(a.match_length=hb-1)),a.prev_length>=hb&&a.match_length<=a.prev_length){e=a.strstart+a.lookahead-hb,d=D._tr_tally(a,a.strstart-1-a.prev_match,a.prev_length-hb),a.lookahead-=a.prev_length-1,a.prev_length-=2;do++a.strstart<=e&&(a.ins_h=(a.ins_h<<a.hash_shift^a.window[a.strstart+hb-1])&a.hash_mask,c=a.prev[a.strstart&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=a.strstart);while(0!==--a.prev_length);if(a.match_available=0,a.match_length=hb-1,a.strstart++,d&&(h(a,!1),0===a.strm.avail_out))return sb}else if(a.match_available){if(d=D._tr_tally(a,0,a.window[a.strstart-1]),d&&h(a,!1),a.strstart++,a.lookahead--,0===a.strm.avail_out)return sb}else a.match_available=1,a.strstart++,a.lookahead--}return a.match_available&&(d=D._tr_tally(a,0,a.window[a.strstart-1]),a.match_available=0),a.insert=a.strstart<hb-1?a.strstart:hb-1,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function q(a,b){for(var c,d,e,f,g=a.window;;){if(a.lookahead<=ib){if(m(a),a.lookahead<=ib&&b===H)return sb;if(0===a.lookahead)break}if(a.match_length=0,a.lookahead>=hb&&a.strstart>0&&(e=a.strstart-1,d=g[e],d===g[++e]&&d===g[++e]&&d===g[++e])){f=a.strstart+ib;do;while(d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&d===g[++e]&&f>e);a.match_length=ib-(f-e),a.match_length>a.lookahead&&(a.match_length=a.lookahead)}if(a.match_length>=hb?(c=D._tr_tally(a,1,a.match_length-hb),a.lookahead-=a.match_length,a.strstart+=a.match_length,a.match_length=0):(c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++),c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function r(a,b){for(var c;;){if(0===a.lookahead&&(m(a),0===a.lookahead)){if(b===H)return sb;break}if(a.match_length=0,c=D._tr_tally(a,0,a.window[a.strstart]),a.lookahead--,a.strstart++,c&&(h(a,!1),0===a.strm.avail_out))return sb}return a.insert=0,b===K?(h(a,!0),0===a.strm.avail_out?ub:vb):a.last_lit&&(h(a,!1),0===a.strm.avail_out)?sb:tb}function s(a){a.window_size=2*a.w_size,f(a.head),a.max_lazy_match=B[a.level].max_lazy,a.good_match=B[a.level].good_length,a.nice_match=B[a.level].nice_length,a.max_chain_length=B[a.level].max_chain,a.strstart=0,a.block_start=0,a.lookahead=0,a.insert=0,a.match_length=a.prev_length=hb-1,a.match_available=0,a.ins_h=0}function t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=Y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new C.Buf16(2*fb),this.dyn_dtree=new C.Buf16(2*(2*db+1)),this.bl_tree=new C.Buf16(2*(2*eb+1)),f(this.dyn_ltree),f(this.dyn_dtree),f(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new C.Buf16(gb+1),this.heap=new C.Buf16(2*cb+1),f(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new C.Buf16(2*cb+1),f(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function u(a){var b;return a&&a.state?(a.total_in=a.total_out=0,a.data_type=X,b=a.state,b.pending=0,b.pending_out=0,b.wrap<0&&(b.wrap=-b.wrap),b.status=b.wrap?lb:qb,a.adler=2===b.wrap?0:1,b.last_flush=H,D._tr_init(b),M):d(a,O)}function v(a){var b=u(a);return b===M&&s(a.state),b}function w(a,b){return a&&a.state?2!==a.state.wrap?O:(a.state.gzhead=b,M):O}function x(a,b,c,e,f,g){if(!a)return O;var h=1;if(b===R&&(b=6),0>e?(h=0,e=-e):e>15&&(h=2,e-=16),1>f||f>Z||c!==Y||8>e||e>15||0>b||b>9||0>g||g>V)return d(a,O);8===e&&(e=9);var i=new t;return a.state=i,i.strm=a,i.wrap=h,i.gzhead=null,i.w_bits=e,i.w_size=1<<i.w_bits,i.w_mask=i.w_size-1,i.hash_bits=f+7,i.hash_size=1<<i.hash_bits,i.hash_mask=i.hash_size-1,i.hash_shift=~~((i.hash_bits+hb-1)/hb),i.window=new C.Buf8(2*i.w_size),i.head=new C.Buf16(i.hash_size),i.prev=new C.Buf16(i.w_size),i.lit_bufsize=1<<f+6,i.pending_buf_size=4*i.lit_bufsize,i.pending_buf=new C.Buf8(i.pending_buf_size),i.d_buf=i.lit_bufsize>>1,i.l_buf=3*i.lit_bufsize,i.level=b,i.strategy=g,i.method=c,v(a)}function y(a,b){return x(a,b,Y,$,_,W)}function z(a,b){var c,h,k,l;if(!a||!a.state||b>L||0>b)return a?d(a,O):O;if(h=a.state,!a.output||!a.input&&0!==a.avail_in||h.status===rb&&b!==K)return d(a,0===a.avail_out?Q:O);if(h.strm=a,c=h.last_flush,h.last_flush=b,h.status===lb)if(2===h.wrap)a.adler=0,i(h,31),i(h,139),i(h,8),h.gzhead?(i(h,(h.gzhead.text?1:0)+(h.gzhead.hcrc?2:0)+(h.gzhead.extra?4:0)+(h.gzhead.name?8:0)+(h.gzhead.comment?16:0)),i(h,255&h.gzhead.time),i(h,h.gzhead.time>>8&255),i(h,h.gzhead.time>>16&255),i(h,h.gzhead.time>>24&255),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,255&h.gzhead.os),h.gzhead.extra&&h.gzhead.extra.length&&(i(h,255&h.gzhead.extra.length),i(h,h.gzhead.extra.length>>8&255)),h.gzhead.hcrc&&(a.adler=F(a.adler,h.pending_buf,h.pending,0)),h.gzindex=0,h.status=mb):(i(h,0),i(h,0),i(h,0),i(h,0),i(h,0),i(h,9===h.level?2:h.strategy>=T||h.level<2?4:0),i(h,wb),h.status=qb);else{var m=Y+(h.w_bits-8<<4)<<8,n=-1;n=h.strategy>=T||h.level<2?0:h.level<6?1:6===h.level?2:3,m|=n<<6,0!==h.strstart&&(m|=kb),m+=31-m%31,h.status=qb,j(h,m),0!==h.strstart&&(j(h,a.adler>>>16),j(h,65535&a.adler)),a.adler=1}if(h.status===mb)if(h.gzhead.extra){for(k=h.pending;h.gzindex<(65535&h.gzhead.extra.length)&&(h.pending!==h.pending_buf_size||(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending!==h.pending_buf_size));)i(h,255&h.gzhead.extra[h.gzindex]),h.gzindex++;h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),h.gzindex===h.gzhead.extra.length&&(h.gzindex=0,h.status=nb)}else h.status=nb;if(h.status===nb)if(h.gzhead.name){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.name.length?255&h.gzhead.name.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.gzindex=0,h.status=ob)}else h.status=ob;if(h.status===ob)if(h.gzhead.comment){k=h.pending;do{if(h.pending===h.pending_buf_size&&(h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),g(a),k=h.pending,h.pending===h.pending_buf_size)){l=1;break}l=h.gzindex<h.gzhead.comment.length?255&h.gzhead.comment.charCodeAt(h.gzindex++):0,i(h,l)}while(0!==l);h.gzhead.hcrc&&h.pending>k&&(a.adler=F(a.adler,h.pending_buf,h.pending-k,k)),0===l&&(h.status=pb)}else h.status=pb;if(h.status===pb&&(h.gzhead.hcrc?(h.pending+2>h.pending_buf_size&&g(a),h.pending+2<=h.pending_buf_size&&(i(h,255&a.adler),i(h,a.adler>>8&255),a.adler=0,h.status=qb)):h.status=qb),0!==h.pending){if(g(a),0===a.avail_out)return h.last_flush=-1,M}else if(0===a.avail_in&&e(b)<=e(c)&&b!==K)return d(a,Q);if(h.status===rb&&0!==a.avail_in)return d(a,Q);if(0!==a.avail_in||0!==h.lookahead||b!==H&&h.status!==rb){var o=h.strategy===T?r(h,b):h.strategy===U?q(h,b):B[h.level].func(h,b);if((o===ub||o===vb)&&(h.status=rb),o===sb||o===ub)return 0===a.avail_out&&(h.last_flush=-1),M;if(o===tb&&(b===I?D._tr_align(h):b!==L&&(D._tr_stored_block(h,0,0,!1),b===J&&(f(h.head),0===h.lookahead&&(h.strstart=0,h.block_start=0,h.insert=0))),g(a),0===a.avail_out))return h.last_flush=-1,M}return b!==K?M:h.wrap<=0?N:(2===h.wrap?(i(h,255&a.adler),i(h,a.adler>>8&255),i(h,a.adler>>16&255),i(h,a.adler>>24&255),i(h,255&a.total_in),i(h,a.total_in>>8&255),i(h,a.total_in>>16&255),i(h,a.total_in>>24&255)):(j(h,a.adler>>>16),j(h,65535&a.adler)),g(a),h.wrap>0&&(h.wrap=-h.wrap),0!==h.pending?M:N)}function A(a){var b;return a&&a.state?(b=a.state.status,b!==lb&&b!==mb&&b!==nb&&b!==ob&&b!==pb&&b!==qb&&b!==rb?d(a,O):(a.state=null,b===qb?d(a,P):M)):O}var B,C=a("../utils/common"),D=a("./trees"),E=a("./adler32"),F=a("./crc32"),G=a("./messages"),H=0,I=1,J=3,K=4,L=5,M=0,N=1,O=-2,P=-3,Q=-5,R=-1,S=1,T=2,U=3,V=4,W=0,X=2,Y=8,Z=9,$=15,_=8,ab=29,bb=256,cb=bb+1+ab,db=30,eb=19,fb=2*cb+1,gb=15,hb=3,ib=258,jb=ib+hb+1,kb=32,lb=42,mb=69,nb=73,ob=91,pb=103,qb=113,rb=666,sb=1,tb=2,ub=3,vb=4,wb=3,xb=function(a,b,c,d,e){this.good_length=a,this.max_lazy=b,this.nice_length=c,this.max_chain=d,this.func=e};B=[new xb(0,0,0,0,n),new xb(4,4,8,4,o),new xb(4,5,16,8,o),new xb(4,6,32,32,o),new xb(4,4,16,16,p),new xb(8,16,32,32,p),new xb(8,16,128,128,p),new xb(8,32,128,256,p),new xb(32,128,258,1024,p),new xb(32,258,258,4096,p)],c.deflateInit=y,c.deflateInit2=x,c.deflateReset=v,c.deflateResetKeep=u,c.deflateSetHeader=w,c.deflate=z,c.deflateEnd=A,c.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./messages":37,"./trees":38}],33:[function(a,b){"use strict";function c(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}b.exports=c},{}],34:[function(a,b){"use strict";var c=30,d=12;b.exports=function(a,b){var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C;e=a.state,f=a.next_in,B=a.input,g=f+(a.avail_in-5),h=a.next_out,C=a.output,i=h-(b-a.avail_out),j=h+(a.avail_out-257),k=e.dmax,l=e.wsize,m=e.whave,n=e.wnext,o=e.window,p=e.hold,q=e.bits,r=e.lencode,s=e.distcode,t=(1<<e.lenbits)-1,u=(1<<e.distbits)-1;a:do{15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=r[p&t];b:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,0===w)C[h++]=65535&v;else{if(!(16&w)){if(0===(64&w)){v=r[(65535&v)+(p&(1<<w)-1)];continue b}if(32&w){e.mode=d;break a}a.msg="invalid literal/length code",e.mode=c;break a}x=65535&v,w&=15,w&&(w>q&&(p+=B[f++]<<q,q+=8),x+=p&(1<<w)-1,p>>>=w,q-=w),15>q&&(p+=B[f++]<<q,q+=8,p+=B[f++]<<q,q+=8),v=s[p&u];c:for(;;){if(w=v>>>24,p>>>=w,q-=w,w=v>>>16&255,!(16&w)){if(0===(64&w)){v=s[(65535&v)+(p&(1<<w)-1)];continue c}a.msg="invalid distance code",e.mode=c;break a}if(y=65535&v,w&=15,w>q&&(p+=B[f++]<<q,q+=8,w>q&&(p+=B[f++]<<q,q+=8)),y+=p&(1<<w)-1,y>k){a.msg="invalid distance too far back",e.mode=c;break a}if(p>>>=w,q-=w,w=h-i,y>w){if(w=y-w,w>m&&e.sane){a.msg="invalid distance too far back",e.mode=c;break a}if(z=0,A=o,0===n){if(z+=l-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}else if(w>n){if(z+=l+n-w,w-=n,x>w){x-=w;do C[h++]=o[z++];while(--w);if(z=0,x>n){w=n,x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}}}else if(z+=n-w,x>w){x-=w;do C[h++]=o[z++];while(--w);z=h-y,A=C}for(;x>2;)C[h++]=A[z++],C[h++]=A[z++],C[h++]=A[z++],x-=3;x&&(C[h++]=A[z++],x>1&&(C[h++]=A[z++]))}else{z=h-y;do C[h++]=C[z++],C[h++]=C[z++],C[h++]=C[z++],x-=3;while(x>2);x&&(C[h++]=C[z++],x>1&&(C[h++]=C[z++]))}break}}break}}while(g>f&&j>h);x=q>>3,f-=x,q-=x<<3,p&=(1<<q)-1,a.next_in=f,a.next_out=h,a.avail_in=g>f?5+(g-f):5-(f-g),a.avail_out=j>h?257+(j-h):257-(h-j),e.hold=p,e.bits=q}},{}],35:[function(a,b,c){"use strict";function d(a){return(a>>>24&255)+(a>>>8&65280)+((65280&a)<<8)+((255&a)<<24)}function e(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function f(a){var b;return a&&a.state?(b=a.state,a.total_in=a.total_out=b.total=0,a.msg="",b.wrap&&(a.adler=1&b.wrap),b.mode=K,b.last=0,b.havedict=0,b.dmax=32768,b.head=null,b.hold=0,b.bits=0,b.lencode=b.lendyn=new r.Buf32(ob),b.distcode=b.distdyn=new r.Buf32(pb),b.sane=1,b.back=-1,C):F}function g(a){var b;return a&&a.state?(b=a.state,b.wsize=0,b.whave=0,b.wnext=0,f(a)):F}function h(a,b){var c,d;return a&&a.state?(d=a.state,0>b?(c=0,b=-b):(c=(b>>4)+1,48>b&&(b&=15)),b&&(8>b||b>15)?F:(null!==d.window&&d.wbits!==b&&(d.window=null),d.wrap=c,d.wbits=b,g(a))):F}function i(a,b){var c,d;return a?(d=new e,a.state=d,d.window=null,c=h(a,b),c!==C&&(a.state=null),c):F}function j(a){return i(a,rb)}function k(a){if(sb){var b;for(p=new r.Buf32(512),q=new r.Buf32(32),b=0;144>b;)a.lens[b++]=8;for(;256>b;)a.lens[b++]=9;for(;280>b;)a.lens[b++]=7;for(;288>b;)a.lens[b++]=8;for(v(x,a.lens,0,288,p,0,a.work,{bits:9}),b=0;32>b;)a.lens[b++]=5;v(y,a.lens,0,32,q,0,a.work,{bits:5}),sb=!1}a.lencode=p,a.lenbits=9,a.distcode=q,a.distbits=5}function l(a,b,c,d){var e,f=a.state;return null===f.window&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0,f.window=new r.Buf8(f.wsize)),d>=f.wsize?(r.arraySet(f.window,b,c-f.wsize,f.wsize,0),f.wnext=0,f.whave=f.wsize):(e=f.wsize-f.wnext,e>d&&(e=d),r.arraySet(f.window,b,c-d,e,f.wnext),d-=e,d?(r.arraySet(f.window,b,c-d,d,0),f.wnext=d,f.whave=f.wsize):(f.wnext+=e,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=e))),0}function m(a,b){var c,e,f,g,h,i,j,m,n,o,p,q,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab=0,Bb=new r.Buf8(4),Cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!a||!a.state||!a.output||!a.input&&0!==a.avail_in)return F;c=a.state,c.mode===V&&(c.mode=W),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,o=i,p=j,xb=C;a:for(;;)switch(c.mode){case K:if(0===c.wrap){c.mode=W;break}for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(2&c.wrap&&35615===m){c.check=0,Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0),m=0,n=0,c.mode=L;break}if(c.flags=0,c.head&&(c.head.done=!1),!(1&c.wrap)||(((255&m)<<8)+(m>>8))%31){a.msg="incorrect header check",c.mode=lb;break}if((15&m)!==J){a.msg="unknown compression method",c.mode=lb;break}if(m>>>=4,n-=4,wb=(15&m)+8,0===c.wbits)c.wbits=wb;else if(wb>c.wbits){a.msg="invalid window size",c.mode=lb;break}c.dmax=1<<wb,a.adler=c.check=1,c.mode=512&m?T:V,m=0,n=0;break;case L:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.flags=m,(255&c.flags)!==J){a.msg="unknown compression method",c.mode=lb;break}if(57344&c.flags){a.msg="unknown header flags set",c.mode=lb;break}c.head&&(c.head.text=m>>8&1),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=M;case M:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.time=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,Bb[2]=m>>>16&255,Bb[3]=m>>>24&255,c.check=t(c.check,Bb,4,0)),m=0,n=0,c.mode=N;case N:for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.head&&(c.head.xflags=255&m,c.head.os=m>>8),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0,c.mode=O;case O:if(1024&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length=m,c.head&&(c.head.extra_len=m),512&c.flags&&(Bb[0]=255&m,Bb[1]=m>>>8&255,c.check=t(c.check,Bb,2,0)),m=0,n=0}else c.head&&(c.head.extra=null);c.mode=P;case P:if(1024&c.flags&&(q=c.length,q>i&&(q=i),q&&(c.head&&(wb=c.head.extra_len-c.length,c.head.extra||(c.head.extra=new Array(c.head.extra_len)),r.arraySet(c.head.extra,e,g,q,wb)),512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,c.length-=q),c.length))break a;c.length=0,c.mode=Q;case Q:if(2048&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.name+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.name=null);c.length=0,c.mode=R;case R:if(4096&c.flags){if(0===i)break a;q=0;do wb=e[g+q++],c.head&&wb&&c.length<65536&&(c.head.comment+=String.fromCharCode(wb));while(wb&&i>q);if(512&c.flags&&(c.check=t(c.check,e,q,g)),i-=q,g+=q,wb)break a}else c.head&&(c.head.comment=null);c.mode=S;case S:if(512&c.flags){for(;16>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(65535&c.check)){a.msg="header crc mismatch",c.mode=lb;break}m=0,n=0}c.head&&(c.head.hcrc=c.flags>>9&1,c.head.done=!0),a.adler=c.check=0,c.mode=V;break;case T:for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}a.adler=c.check=d(m),m=0,n=0,c.mode=U;case U:if(0===c.havedict)return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,E;a.adler=c.check=1,c.mode=V;case V:if(b===A||b===B)break a;case W:if(c.last){m>>>=7&n,n-=7&n,c.mode=ib;break}for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}switch(c.last=1&m,m>>>=1,n-=1,3&m){case 0:c.mode=X;break;case 1:if(k(c),c.mode=bb,b===B){m>>>=2,n-=2;break a}break;case 2:c.mode=$;break;case 3:a.msg="invalid block type",c.mode=lb}m>>>=2,n-=2;break;case X:for(m>>>=7&n,n-=7&n;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if((65535&m)!==(m>>>16^65535)){a.msg="invalid stored block lengths",c.mode=lb;break}if(c.length=65535&m,m=0,n=0,c.mode=Y,b===B)break a;case Y:c.mode=Z;case Z:if(q=c.length){if(q>i&&(q=i),q>j&&(q=j),0===q)break a;r.arraySet(f,e,g,q,h),i-=q,g+=q,j-=q,h+=q,c.length-=q;break}c.mode=V;break;case $:for(;14>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(c.nlen=(31&m)+257,m>>>=5,n-=5,c.ndist=(31&m)+1,m>>>=5,n-=5,c.ncode=(15&m)+4,m>>>=4,n-=4,c.nlen>286||c.ndist>30){a.msg="too many length or distance symbols",c.mode=lb;break}c.have=0,c.mode=_;case _:for(;c.have<c.ncode;){for(;3>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.lens[Cb[c.have++]]=7&m,m>>>=3,n-=3}for(;c.have<19;)c.lens[Cb[c.have++]]=0;if(c.lencode=c.lendyn,c.lenbits=7,yb={bits:c.lenbits},xb=v(w,c.lens,0,19,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid code lengths set",c.mode=lb;break}c.have=0,c.mode=ab;case ab:for(;c.have<c.nlen+c.ndist;){for(;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(16>sb)m>>>=qb,n-=qb,c.lens[c.have++]=sb;else{if(16===sb){for(zb=qb+2;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m>>>=qb,n-=qb,0===c.have){a.msg="invalid bit length repeat",c.mode=lb;break}wb=c.lens[c.have-1],q=3+(3&m),m>>>=2,n-=2}else if(17===sb){for(zb=qb+3;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=3+(7&m),m>>>=3,n-=3}else{for(zb=qb+7;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=qb,n-=qb,wb=0,q=11+(127&m),m>>>=7,n-=7}if(c.have+q>c.nlen+c.ndist){a.msg="invalid bit length repeat",c.mode=lb;break}for(;q--;)c.lens[c.have++]=wb}}if(c.mode===lb)break;if(0===c.lens[256]){a.msg="invalid code -- missing end-of-block",c.mode=lb;break}if(c.lenbits=9,yb={bits:c.lenbits},xb=v(x,c.lens,0,c.nlen,c.lencode,0,c.work,yb),c.lenbits=yb.bits,xb){a.msg="invalid literal/lengths set",c.mode=lb;break}if(c.distbits=6,c.distcode=c.distdyn,yb={bits:c.distbits},xb=v(y,c.lens,c.nlen,c.ndist,c.distcode,0,c.work,yb),c.distbits=yb.bits,xb){a.msg="invalid distances set",c.mode=lb;break}if(c.mode=bb,b===B)break a;case bb:c.mode=cb;case cb:if(i>=6&&j>=258){a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,u(a,p),h=a.next_out,f=a.output,j=a.avail_out,g=a.next_in,e=a.input,i=a.avail_in,m=c.hold,n=c.bits,c.mode===V&&(c.back=-1);break}for(c.back=0;Ab=c.lencode[m&(1<<c.lenbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(rb&&0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.lencode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,c.length=sb,0===rb){c.mode=hb;break}if(32&rb){c.back=-1,c.mode=V;break}if(64&rb){a.msg="invalid literal/length code",c.mode=lb;break}c.extra=15&rb,c.mode=db;case db:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.length+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}c.was=c.length,c.mode=eb;case eb:for(;Ab=c.distcode[m&(1<<c.distbits)-1],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(0===(240&rb)){for(tb=qb,ub=rb,vb=sb;Ab=c.distcode[vb+((m&(1<<tb+ub)-1)>>tb)],qb=Ab>>>24,rb=Ab>>>16&255,sb=65535&Ab,!(n>=tb+qb);){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}m>>>=tb,n-=tb,c.back+=tb}if(m>>>=qb,n-=qb,c.back+=qb,64&rb){a.msg="invalid distance code",c.mode=lb;break}c.offset=sb,c.extra=15&rb,c.mode=fb;case fb:if(c.extra){for(zb=c.extra;zb>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}c.offset+=m&(1<<c.extra)-1,m>>>=c.extra,n-=c.extra,c.back+=c.extra}if(c.offset>c.dmax){a.msg="invalid distance too far back",c.mode=lb;break}c.mode=gb;case gb:if(0===j)break a;
if(q=p-j,c.offset>q){if(q=c.offset-q,q>c.whave&&c.sane){a.msg="invalid distance too far back",c.mode=lb;break}q>c.wnext?(q-=c.wnext,ob=c.wsize-q):ob=c.wnext-q,q>c.length&&(q=c.length),pb=c.window}else pb=f,ob=h-c.offset,q=c.length;q>j&&(q=j),j-=q,c.length-=q;do f[h++]=pb[ob++];while(--q);0===c.length&&(c.mode=cb);break;case hb:if(0===j)break a;f[h++]=c.length,j--,c.mode=cb;break;case ib:if(c.wrap){for(;32>n;){if(0===i)break a;i--,m|=e[g++]<<n,n+=8}if(p-=j,a.total_out+=p,c.total+=p,p&&(a.adler=c.check=c.flags?t(c.check,f,p,h-p):s(c.check,f,p,h-p)),p=j,(c.flags?m:d(m))!==c.check){a.msg="incorrect data check",c.mode=lb;break}m=0,n=0}c.mode=jb;case jb:if(c.wrap&&c.flags){for(;32>n;){if(0===i)break a;i--,m+=e[g++]<<n,n+=8}if(m!==(4294967295&c.total)){a.msg="incorrect length check",c.mode=lb;break}m=0,n=0}c.mode=kb;case kb:xb=D;break a;case lb:xb=G;break a;case mb:return H;case nb:default:return F}return a.next_out=h,a.avail_out=j,a.next_in=g,a.avail_in=i,c.hold=m,c.bits=n,(c.wsize||p!==a.avail_out&&c.mode<lb&&(c.mode<ib||b!==z))&&l(a,a.output,a.next_out,p-a.avail_out)?(c.mode=mb,H):(o-=a.avail_in,p-=a.avail_out,a.total_in+=o,a.total_out+=p,c.total+=p,c.wrap&&p&&(a.adler=c.check=c.flags?t(c.check,f,p,a.next_out-p):s(c.check,f,p,a.next_out-p)),a.data_type=c.bits+(c.last?64:0)+(c.mode===V?128:0)+(c.mode===bb||c.mode===Y?256:0),(0===o&&0===p||b===z)&&xb===C&&(xb=I),xb)}function n(a){if(!a||!a.state)return F;var b=a.state;return b.window&&(b.window=null),a.state=null,C}function o(a,b){var c;return a&&a.state?(c=a.state,0===(2&c.wrap)?F:(c.head=b,b.done=!1,C)):F}var p,q,r=a("../utils/common"),s=a("./adler32"),t=a("./crc32"),u=a("./inffast"),v=a("./inftrees"),w=0,x=1,y=2,z=4,A=5,B=6,C=0,D=1,E=2,F=-2,G=-3,H=-4,I=-5,J=8,K=1,L=2,M=3,N=4,O=5,P=6,Q=7,R=8,S=9,T=10,U=11,V=12,W=13,X=14,Y=15,Z=16,$=17,_=18,ab=19,bb=20,cb=21,db=22,eb=23,fb=24,gb=25,hb=26,ib=27,jb=28,kb=29,lb=30,mb=31,nb=32,ob=852,pb=592,qb=15,rb=qb,sb=!0;c.inflateReset=g,c.inflateReset2=h,c.inflateResetKeep=f,c.inflateInit=j,c.inflateInit2=i,c.inflate=m,c.inflateEnd=n,c.inflateGetHeader=o,c.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":27,"./adler32":29,"./crc32":31,"./inffast":34,"./inftrees":36}],36:[function(a,b){"use strict";var c=a("../utils/common"),d=15,e=852,f=592,g=0,h=1,i=2,j=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],k=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],l=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];b.exports=function(a,b,n,o,p,q,r,s){var t,u,v,w,x,y,z,A,B,C=s.bits,D=0,E=0,F=0,G=0,H=0,I=0,J=0,K=0,L=0,M=0,N=null,O=0,P=new c.Buf16(d+1),Q=new c.Buf16(d+1),R=null,S=0;for(D=0;d>=D;D++)P[D]=0;for(E=0;o>E;E++)P[b[n+E]]++;for(H=C,G=d;G>=1&&0===P[G];G--);if(H>G&&(H=G),0===G)return p[q++]=20971520,p[q++]=20971520,s.bits=1,0;for(F=1;G>F&&0===P[F];F++);for(F>H&&(H=F),K=1,D=1;d>=D;D++)if(K<<=1,K-=P[D],0>K)return-1;if(K>0&&(a===g||1!==G))return-1;for(Q[1]=0,D=1;d>D;D++)Q[D+1]=Q[D]+P[D];for(E=0;o>E;E++)0!==b[n+E]&&(r[Q[b[n+E]]++]=E);if(a===g?(N=R=r,y=19):a===h?(N=j,O-=257,R=k,S-=257,y=256):(N=l,R=m,y=-1),M=0,E=0,D=F,x=q,I=H,J=0,v=-1,L=1<<H,w=L-1,a===h&&L>e||a===i&&L>f)return 1;for(var T=0;;){T++,z=D-J,r[E]<y?(A=0,B=r[E]):r[E]>y?(A=R[S+r[E]],B=N[O+r[E]]):(A=96,B=0),t=1<<D-J,u=1<<I,F=u;do u-=t,p[x+(M>>J)+u]=z<<24|A<<16|B|0;while(0!==u);for(t=1<<D-1;M&t;)t>>=1;if(0!==t?(M&=t-1,M+=t):M=0,E++,0===--P[D]){if(D===G)break;D=b[n+r[E]]}if(D>H&&(M&w)!==v){for(0===J&&(J=H),x+=F,I=D-J,K=1<<I;G>I+J&&(K-=P[I+J],!(0>=K));)I++,K<<=1;if(L+=1<<I,a===h&&L>e||a===i&&L>f)return 1;v=M&w,p[v]=H<<24|I<<16|x-q|0}}return 0!==M&&(p[x+M]=D-J<<24|64<<16|0),s.bits=H,0}},{"../utils/common":27}],37:[function(a,b){"use strict";b.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],38:[function(a,b,c){"use strict";function d(a){for(var b=a.length;--b>=0;)a[b]=0}function e(a){return 256>a?gb[a]:gb[256+(a>>>7)]}function f(a,b){a.pending_buf[a.pending++]=255&b,a.pending_buf[a.pending++]=b>>>8&255}function g(a,b,c){a.bi_valid>V-c?(a.bi_buf|=b<<a.bi_valid&65535,f(a,a.bi_buf),a.bi_buf=b>>V-a.bi_valid,a.bi_valid+=c-V):(a.bi_buf|=b<<a.bi_valid&65535,a.bi_valid+=c)}function h(a,b,c){g(a,c[2*b],c[2*b+1])}function i(a,b){var c=0;do c|=1&a,a>>>=1,c<<=1;while(--b>0);return c>>>1}function j(a){16===a.bi_valid?(f(a,a.bi_buf),a.bi_buf=0,a.bi_valid=0):a.bi_valid>=8&&(a.pending_buf[a.pending++]=255&a.bi_buf,a.bi_buf>>=8,a.bi_valid-=8)}function k(a,b){var c,d,e,f,g,h,i=b.dyn_tree,j=b.max_code,k=b.stat_desc.static_tree,l=b.stat_desc.has_stree,m=b.stat_desc.extra_bits,n=b.stat_desc.extra_base,o=b.stat_desc.max_length,p=0;for(f=0;U>=f;f++)a.bl_count[f]=0;for(i[2*a.heap[a.heap_max]+1]=0,c=a.heap_max+1;T>c;c++)d=a.heap[c],f=i[2*i[2*d+1]+1]+1,f>o&&(f=o,p++),i[2*d+1]=f,d>j||(a.bl_count[f]++,g=0,d>=n&&(g=m[d-n]),h=i[2*d],a.opt_len+=h*(f+g),l&&(a.static_len+=h*(k[2*d+1]+g)));if(0!==p){do{for(f=o-1;0===a.bl_count[f];)f--;a.bl_count[f]--,a.bl_count[f+1]+=2,a.bl_count[o]--,p-=2}while(p>0);for(f=o;0!==f;f--)for(d=a.bl_count[f];0!==d;)e=a.heap[--c],e>j||(i[2*e+1]!==f&&(a.opt_len+=(f-i[2*e+1])*i[2*e],i[2*e+1]=f),d--)}}function l(a,b,c){var d,e,f=new Array(U+1),g=0;for(d=1;U>=d;d++)f[d]=g=g+c[d-1]<<1;for(e=0;b>=e;e++){var h=a[2*e+1];0!==h&&(a[2*e]=i(f[h]++,h))}}function m(){var a,b,c,d,e,f=new Array(U+1);for(c=0,d=0;O-1>d;d++)for(ib[d]=c,a=0;a<1<<_[d];a++)hb[c++]=d;for(hb[c-1]=d,e=0,d=0;16>d;d++)for(jb[d]=e,a=0;a<1<<ab[d];a++)gb[e++]=d;for(e>>=7;R>d;d++)for(jb[d]=e<<7,a=0;a<1<<ab[d]-7;a++)gb[256+e++]=d;for(b=0;U>=b;b++)f[b]=0;for(a=0;143>=a;)eb[2*a+1]=8,a++,f[8]++;for(;255>=a;)eb[2*a+1]=9,a++,f[9]++;for(;279>=a;)eb[2*a+1]=7,a++,f[7]++;for(;287>=a;)eb[2*a+1]=8,a++,f[8]++;for(l(eb,Q+1,f),a=0;R>a;a++)fb[2*a+1]=5,fb[2*a]=i(a,5);kb=new nb(eb,_,P+1,Q,U),lb=new nb(fb,ab,0,R,U),mb=new nb(new Array(0),bb,0,S,W)}function n(a){var b;for(b=0;Q>b;b++)a.dyn_ltree[2*b]=0;for(b=0;R>b;b++)a.dyn_dtree[2*b]=0;for(b=0;S>b;b++)a.bl_tree[2*b]=0;a.dyn_ltree[2*X]=1,a.opt_len=a.static_len=0,a.last_lit=a.matches=0}function o(a){a.bi_valid>8?f(a,a.bi_buf):a.bi_valid>0&&(a.pending_buf[a.pending++]=a.bi_buf),a.bi_buf=0,a.bi_valid=0}function p(a,b,c,d){o(a),d&&(f(a,c),f(a,~c)),E.arraySet(a.pending_buf,a.window,b,c,a.pending),a.pending+=c}function q(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}function r(a,b,c){for(var d=a.heap[c],e=c<<1;e<=a.heap_len&&(e<a.heap_len&&q(b,a.heap[e+1],a.heap[e],a.depth)&&e++,!q(b,d,a.heap[e],a.depth));)a.heap[c]=a.heap[e],c=e,e<<=1;a.heap[c]=d}function s(a,b,c){var d,f,i,j,k=0;if(0!==a.last_lit)do d=a.pending_buf[a.d_buf+2*k]<<8|a.pending_buf[a.d_buf+2*k+1],f=a.pending_buf[a.l_buf+k],k++,0===d?h(a,f,b):(i=hb[f],h(a,i+P+1,b),j=_[i],0!==j&&(f-=ib[i],g(a,f,j)),d--,i=e(d),h(a,i,c),j=ab[i],0!==j&&(d-=jb[i],g(a,d,j)));while(k<a.last_lit);h(a,X,b)}function t(a,b){var c,d,e,f=b.dyn_tree,g=b.stat_desc.static_tree,h=b.stat_desc.has_stree,i=b.stat_desc.elems,j=-1;for(a.heap_len=0,a.heap_max=T,c=0;i>c;c++)0!==f[2*c]?(a.heap[++a.heap_len]=j=c,a.depth[c]=0):f[2*c+1]=0;for(;a.heap_len<2;)e=a.heap[++a.heap_len]=2>j?++j:0,f[2*e]=1,a.depth[e]=0,a.opt_len--,h&&(a.static_len-=g[2*e+1]);for(b.max_code=j,c=a.heap_len>>1;c>=1;c--)r(a,f,c);e=i;do c=a.heap[1],a.heap[1]=a.heap[a.heap_len--],r(a,f,1),d=a.heap[1],a.heap[--a.heap_max]=c,a.heap[--a.heap_max]=d,f[2*e]=f[2*c]+f[2*d],a.depth[e]=(a.depth[c]>=a.depth[d]?a.depth[c]:a.depth[d])+1,f[2*c+1]=f[2*d+1]=e,a.heap[1]=e++,r(a,f,1);while(a.heap_len>=2);a.heap[--a.heap_max]=a.heap[1],k(a,b),l(f,j,a.bl_count)}function u(a,b,c){var d,e,f=-1,g=b[1],h=0,i=7,j=4;for(0===g&&(i=138,j=3),b[2*(c+1)+1]=65535,d=0;c>=d;d++)e=g,g=b[2*(d+1)+1],++h<i&&e===g||(j>h?a.bl_tree[2*e]+=h:0!==e?(e!==f&&a.bl_tree[2*e]++,a.bl_tree[2*Y]++):10>=h?a.bl_tree[2*Z]++:a.bl_tree[2*$]++,h=0,f=e,0===g?(i=138,j=3):e===g?(i=6,j=3):(i=7,j=4))}function v(a,b,c){var d,e,f=-1,i=b[1],j=0,k=7,l=4;for(0===i&&(k=138,l=3),d=0;c>=d;d++)if(e=i,i=b[2*(d+1)+1],!(++j<k&&e===i)){if(l>j){do h(a,e,a.bl_tree);while(0!==--j)}else 0!==e?(e!==f&&(h(a,e,a.bl_tree),j--),h(a,Y,a.bl_tree),g(a,j-3,2)):10>=j?(h(a,Z,a.bl_tree),g(a,j-3,3)):(h(a,$,a.bl_tree),g(a,j-11,7));j=0,f=e,0===i?(k=138,l=3):e===i?(k=6,l=3):(k=7,l=4)}}function w(a){var b;for(u(a,a.dyn_ltree,a.l_desc.max_code),u(a,a.dyn_dtree,a.d_desc.max_code),t(a,a.bl_desc),b=S-1;b>=3&&0===a.bl_tree[2*cb[b]+1];b--);return a.opt_len+=3*(b+1)+5+5+4,b}function x(a,b,c,d){var e;for(g(a,b-257,5),g(a,c-1,5),g(a,d-4,4),e=0;d>e;e++)g(a,a.bl_tree[2*cb[e]+1],3);v(a,a.dyn_ltree,b-1),v(a,a.dyn_dtree,c-1)}function y(a){var b,c=4093624447;for(b=0;31>=b;b++,c>>>=1)if(1&c&&0!==a.dyn_ltree[2*b])return G;if(0!==a.dyn_ltree[18]||0!==a.dyn_ltree[20]||0!==a.dyn_ltree[26])return H;for(b=32;P>b;b++)if(0!==a.dyn_ltree[2*b])return H;return G}function z(a){pb||(m(),pb=!0),a.l_desc=new ob(a.dyn_ltree,kb),a.d_desc=new ob(a.dyn_dtree,lb),a.bl_desc=new ob(a.bl_tree,mb),a.bi_buf=0,a.bi_valid=0,n(a)}function A(a,b,c,d){g(a,(J<<1)+(d?1:0),3),p(a,b,c,!0)}function B(a){g(a,K<<1,3),h(a,X,eb),j(a)}function C(a,b,c,d){var e,f,h=0;a.level>0?(a.strm.data_type===I&&(a.strm.data_type=y(a)),t(a,a.l_desc),t(a,a.d_desc),h=w(a),e=a.opt_len+3+7>>>3,f=a.static_len+3+7>>>3,e>=f&&(e=f)):e=f=c+5,e>=c+4&&-1!==b?A(a,b,c,d):a.strategy===F||f===e?(g(a,(K<<1)+(d?1:0),3),s(a,eb,fb)):(g(a,(L<<1)+(d?1:0),3),x(a,a.l_desc.max_code+1,a.d_desc.max_code+1,h+1),s(a,a.dyn_ltree,a.dyn_dtree)),n(a),d&&o(a)}function D(a,b,c){return a.pending_buf[a.d_buf+2*a.last_lit]=b>>>8&255,a.pending_buf[a.d_buf+2*a.last_lit+1]=255&b,a.pending_buf[a.l_buf+a.last_lit]=255&c,a.last_lit++,0===b?a.dyn_ltree[2*c]++:(a.matches++,b--,a.dyn_ltree[2*(hb[c]+P+1)]++,a.dyn_dtree[2*e(b)]++),a.last_lit===a.lit_bufsize-1}var E=a("../utils/common"),F=4,G=0,H=1,I=2,J=0,K=1,L=2,M=3,N=258,O=29,P=256,Q=P+1+O,R=30,S=19,T=2*Q+1,U=15,V=16,W=7,X=256,Y=16,Z=17,$=18,_=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],ab=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],bb=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],cb=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],db=512,eb=new Array(2*(Q+2));d(eb);var fb=new Array(2*R);d(fb);var gb=new Array(db);d(gb);var hb=new Array(N-M+1);d(hb);var ib=new Array(O);d(ib);var jb=new Array(R);d(jb);var kb,lb,mb,nb=function(a,b,c,d,e){this.static_tree=a,this.extra_bits=b,this.extra_base=c,this.elems=d,this.max_length=e,this.has_stree=a&&a.length},ob=function(a,b){this.dyn_tree=a,this.max_code=0,this.stat_desc=b},pb=!1;c._tr_init=z,c._tr_stored_block=A,c._tr_flush_block=C,c._tr_tally=D,c._tr_align=B},{"../utils/common":27}],39:[function(a,b){"use strict";function c(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}b.exports=c},{}]},{},[9])(9)});
/**browser.js*/
Browser = {
    isCompatible: function() {
        return this._supportsAudioApi() && this._supportsCanvas();
    },

    _supportsAudioApi: function() {
        return !!(window.AudioContext || window.webkitAudioContext);
    },
    _supportsCanvas: function() {
        return !!document.createElement('canvas').getContext;
    }
};
/**file.js**/
// Custom object representing a file
// `File` is already a builtin, so we use `MyFile`
MyFile = function(){
    this.reader = new FileReader();
    this.name = '';
    this.url = null;
    this.fileReference = null;
    this.setUrl = function(url){
        this.url = url;
    };
    this.setFileReference = function(fileReference){
        this.name = fileReference.name;
        this.fileReference = fileReference;
    };
    this.processBuffer = function(bufferHandler) {
        if(this.url) {
            var oReq = new XMLHttpRequest();
            oReq.open("GET", this.url, true);
            oReq.responseType = "arraybuffer";

            oReq.onload = function (oEvent) {
                var arrayBuffer = oReq.response; // Note: not oReq.responseText
                bufferHandler(arrayBuffer);
            };

            oReq.send(null);
            return;

        } else if(this.fileReference) {
            this.reader.onload = function (e) {
                var arrayBuffer = e.target.result;
                bufferHandler(arrayBuffer);
            };
            this.reader.onerror = function (e) {
                console.error(e);
            };

            this.reader.readAsArrayBuffer(this.fileReference);
            return;
        }

        console.error('Tried to process an unpopulated file object');
        return false;
    };
};

/**visualizer.js**/
/* Use Canvas to recreate the simple Winamp visualizer */
Visualizer = {
    init: function(canvasNode, analyser) {
        this.canvas = canvasNode;
        this.analyser = analyser;
        this.canvasCtx = this.canvas.getContext("2d");
        this.canvasCtx.imageSmoothingEnabled= false;
        this.width = this.canvas.width * 1; // Cast to int
        this.height = this.canvas.height * 1; // Cast to int
        this.colors = []; // skin.js fills this from viscolors.txt
        this.NONE = 0;
        this.OSCILLOSCOPE = 1;
        this.BAR = 2;
        this.bufferLength = null;
        this.dataArray = null;
        this.setStyle(this.BAR);

        // Off-screen canvas for pre-rendering the background
        this.bgCanvas = document.createElement('canvas');
        this.bgCanvas.width = this.width;
        this.bgCanvas.height = this.height;
        this.bgCanvasCtx = this.bgCanvas.getContext("2d");

        // Off-screen canvas for pre-rendering a single bar gradient
        this.barCanvas = document.createElement('canvas');
        this.barCanvas.width = 6;
        this.barCanvas.height = 32;
        this.barCanvasCtx = this.barCanvas.getContext("2d");
        return this;
    },

    clear: function() {
        this.canvasCtx.drawImage(this.bgCanvas, 0, 0);
    },

    setColors: function(colors) {
        this.colors = colors;
        this.preRenderBg();
        this.preRenderBar();
    },

    // Pre-render the background grid
    preRenderBg: function() {
        this.bgCanvasCtx.fillStyle = this.colors[0];
        this.bgCanvasCtx.fillRect(0,0,this.width, this.height);
        this.bgCanvasCtx.fillStyle = this.colors[1];
        for(x = 0; x < this.width; x += 4) {
            for(y = 2; y < this.height; y += 4) {
                this.bgCanvasCtx.fillRect(x,y,2,2);
            }
        }
    },

    // Pre-render the bar gradient
    preRenderBar: function() {
        this.barCanvasCtx.fillStyle = this.colors[23];
        this.barCanvasCtx.fillRect(0,0,6,2);
        for(var i = 0; i <= 15; i++) {
            var colorNumber = 17 - i;
            this.barCanvasCtx.fillStyle = this.colors[colorNumber];
            var y = 32 - (i*2);
            this.barCanvasCtx.fillRect(0,y,6,2);
        }
        // If we are paused when the skin changes, we will keep the vis colors
        // until we paint again. For now we can just clear the current frame so
        // we don't end up with a clashing visual.
        this.clear();
    },

    setStyle: function(style) {
        this.style = style;
        if(this.style == this.OSCILLOSCOPE) {
            this.analyser.fftSize = 2048;
            this.bufferLength = this.analyser.fftSize;
            this.dataArray = new Uint8Array(this.bufferLength);
        } else if(this.style == this.BAR) {
            this.analyser.fftSize = 64; // Must be a power of two
            // Number of bins/bars we get
            this.bufferLength = this.analyser.frequencyBinCount;
            this.dataArray = new Uint8Array(this.bufferLength);
        }
    },

    paintFrame: function() {
        this.clear();
        if(this.style == this.OSCILLOSCOPE) {
            return this._paintOscilloscopeFrame();
        } else if(this.style == this.BAR) {
            return this._paintBarFrame();
        }
    },

    _paintOscilloscopeFrame: function() {
        // Return the average value in a slice of dataArray
        function sliceAverage(dataArray, sliceWidth, sliceNumber) {
            var start = sliceWidth * sliceNumber;
            var end = start + sliceWidth;
            var sum = 0;
            for(var i = start; i < end; i++) {
                sum += dataArray[i];
            }
            return sum / sliceWidth;
        }

        this.analyser.getByteTimeDomainData(this.dataArray);

        // 2 because we're shrinking the canvas by 2
        this.canvasCtx.lineWidth = 2;

        // Just use one of the viscolors for now
        this.canvasCtx.strokeStyle = this.colors[18];

        // Since dataArray has more values than we have pixels to display, we
        // have to average several dataArray values per pixel. We call these
        // groups slices.
        //
        // We use the  2x scale here since we only want to plot values for
        // "real" pixels.
        var sliceWidth = Math.floor(this.bufferLength / this.width) * 2;

        // The max amplitude is half the height
        var h = this.height / 2;

        this.canvasCtx.beginPath();

        // Iterate over the width of the canvas in "real" pixels.
        for (var j = 0; j <= this.width/2; j++) {
            amplitude = sliceAverage(this.dataArray, sliceWidth, j);
            percentAmplitude = amplitude / 128; // dataArray gives us bytes
            y = percentAmplitude * h;
            x = j * 2;

            // Canvas coordinates are in the middle of the pixel by default.
            // When we want to draw pixel perfect lines, we will need to
            // account for that here
            if(x === 0) {
                this.canvasCtx.moveTo(x, y);
            } else {
                this.canvasCtx.lineTo(x, y);
            }
        }
        this.canvasCtx.stroke();
    },

    _paintBarFrame: function() {
        var printBar = function(x, height) {
            height = Math.round(height) * 2;
            if(height > 0) {
                y = 32 - height;
                // Draw the gray peak line
                this.canvasCtx.drawImage(this.barCanvas, 0, 0, 6, 2, x, y - 2, 6, 2);
                // Draw the gradient
                this.canvasCtx.drawImage(this.barCanvas, 0, y, 6, height, x, y, 6, height);
            }
        }.bind(this);

        this.analyser.getByteFrequencyData(this.dataArray);
        for(j = 0; j < this.bufferLength; j++) {
            height = this.dataArray[j] * (14/256);
            printBar(j*8, height);
        }
    }
};

/**media.js**/
/* Emulate the native <audio> element with Web Audio API */
Media = {
    _context: new(window.AudioContext || window.webkitAudioContext)(),
    _source: null,
    _buffer: null,
    _callbacks: {
        waiting: function(){},
        playing: function(){},
        timeupdate: function(){},
        visualizerupdate: function(){},
        ended: function(){}
    },
    _startTime: 0,
    _position: 0,
    _balance: 0,
    _playing: false,
    _loop: false,

    init: function() {
        // The _source node has to be recreated each time it's stopped or
        // paused, so we don't create it here.

        // Create the spliter node
        this._chanSplit = this._context.createChannelSplitter(2);

        // Create the gains for left and right
        this._leftGain = this._context.createGain();
        this._rightGain = this._context.createGain();

        // Create channel merge
        this._chanMerge = this._context.createChannelMerger(2);

        // Create the gain node for the volume control
        this._gainNode = this._context.createGain();

        // Create the analyser node for the visualizer
        this._analyser = this._context.createAnalyser();
        this._analyser.fftSize = 2048;

        // Connect all the nodes in the correct way
        // (Note, source is created and connected later)
        //
        //                 <source>
        //                    |\
        //                    | <analyser>
        //                    |
        //    (split using createChannelSplitter)
        //                    |
        //                   / \
        //                  /   \
        //             leftGain rightGain
        //                  \   /
        //                   \ /
        //                    |
        //     (merge using createChannelMerger)
        //                    |
        //                chanMerge
        //                    |
        //                   gain
        //                    |
        //               destination

        // Connect split channels to left / right gains
        this._chanSplit.connect(this._leftGain,0);
        this._chanSplit.connect(this._rightGain,1);

        // Reconnect the left / right gains to the merge node
        this._leftGain.connect(this._chanMerge, 0, 0);
        this._rightGain.connect(this._chanMerge, 0, 1);

        this._chanMerge.connect(this._gainNode);

        this._gainNode.connect(this._context.destination);

        // Kick off the animation loop
        this._draw(0);
        return this;
    },

    // Load from bufferArray
    loadBuffer: function(buffer, loadedCallback) {
        this.stop();
        this._callbacks.waiting();

        var loadAudioBuffer = function(buffer) {
            this._buffer = buffer;
            loadedCallback();
        };

        var error = function (error) {
            //console.error("failed to decode:", error);
        };
        // Decode the target file into an arrayBuffer and pass it to loadBuffer
        this._context.decodeAudioData(buffer, loadAudioBuffer.bind(this), error);
    },

    /* Properties */
    duration: function() {
        return this._buffer.duration;
    },
    timeElapsed: function() {
        return this._position;
    },
    timeRemaining: function() {
        return this.duration() - this.timeElapsed();
    },
    percentComplete: function() {
        return (this.timeElapsed() / this.duration()) * 100;
    },
    channels: function() {
        if(!this._buffer) {
            return 0;
        }
        return this._buffer.numberOfChannels;
    },
    sampleRate: function() {
        return this._buffer.sampleRate;
    },

    /* Actions */
    previous: function() {
        // Implement this when we support playlists
    },
    play: function(position) {
        if(this._playing) {
            // So we don't get a race condition with _position getting overwritten
            this.pause();
        }
        if(this._buffer) {
            this._source = this._context.createBufferSource();
            this._source.buffer = this._buffer;
            this._source.connect(this._analyser);
            this._source.connect(this._chanSplit);

            this._position = typeof position !== 'undefined' ? position : this._position;
            this._startTime = this._context.currentTime - this._position;
            this._source.start(0, this._position);
            this._playing = true;
            this._callbacks.playing();
        }
    },
    pause: function() {
        if(!this._playing) {
            return;
        }
        this._silence();
        this._updatePosition();
    },

    stop: function() {
        this._silence();
        this._position = 0;
    },

    isEmpty: function() {
        return !!this._buffer;
    },

    _silence: function() {
        if(this._source) {
            this._source.stop(0);
            this._source = null;
        }
        this._playing = false;
    },

    /* Actions with arguments */
    seekToPercentComplete: function(percent) {
        var seekTime = this.duration() * (percent / 100);
        this.seekToTime(seekTime);
    },

    // From 0-1
    setVolume: function(volume) {
        this._gainNode.gain.value = volume;
    },

    getVolume: function() {
        return this._gainNode.gain.value;
    },

    // From -100 to 100
    setBalance: function(balance) {
        var changeVal = Math.abs(balance) / 100;

        // Hack for Firefox. Having either channel set to 0 seems to revert us
        // to equal balance.
        changeVal = changeVal - 0.00000001;

        if(balance > 0) { // Right
            this._leftGain.gain.value = 1 - changeVal;
            this._rightGain.gain.value = 1;
        }
        else if(balance < 0) // Left
        {
            this._leftGain.gain.value = 1;
            this._rightGain.gain.value = 1 - changeVal;
        }
        else // Center
        {
            this._leftGain.gain.value = 1;
            this._rightGain.gain.value = 1;
        }
        this._balance = balance;
    },

    getBalance: function() {
        return this._balance;
    },

    toggleRepeat: function() {
        this._loop = !this._loop;
    },

    toggleShuffle: function() {
        // Implement this when we support playlists
    },

    /* Listeners */
    addEventListener: function(event, callback) {
        this._callbacks[event] = callback;
    },

    seekToTime: function(time) {
        // Make sure we are within range
        time = Math.min(time, this.duration());
        time = Math.max(time, 0);
        this.play(time);
    },

    repeatEnabled: function() {
        return this._loop;
    },

    // There is probably a more reasonable way to do this, rather than having
    // it always running.
    _draw: function() {
        if(this._playing) {
            this._updatePosition();
            this._callbacks.timeupdate();

            // _updatePosition might have stoped the playing
            if(this._playing) {
                this._callbacks.visualizerupdate(this._analyser);
            }
        }
        window.requestAnimationFrame(this._draw.bind(this));
    },

    _updatePosition: function() {
        this._position = this._context.currentTime - this._startTime;
        if(this._position >= this._buffer.duration && this._playing) {
            this.stop();
            this._callbacks.ended();
        }
        return this._position;
    }
};

/**font.js**/
// Manage rendering text from this skin's text.bmp file
Font = {

    // Fill a node with a <div> containing character <div>s
    setNodeToString: function(node, string) {
        stringElement = this._stringNode(string);
        node.innerHTML = '';
        node.appendChild(stringElement);
    },

    // Get a <div> containing char
    characterNode: function(char) {
        return this.displayCharacterInNode(char, document.createElement('div'));
    },

    // Style/populate a <div> to display a character
    displayCharacterInNode: function(character, node) {
        position = this._getCharPosition(character);
        row = position[0];
        column = position[1];
        verticalOffset = row * 6;
        horizontalOffset = column * 5;

        x = '-' + horizontalOffset + 'px';
        y = '-' + verticalOffset + 'px';
        node.style.backgroundPosition =  x + ' ' + y;
        node.classList.add('character');

        node.innerHTML = character;
        return node;
    },

    // Get a <div> containing a digit
    digitNode: function(digit) {
        var div = document.createElement('div');
        div.classList.add('digit');
        div.classList.add('digit-' + digit);
        return div;
    },


    // Get a <div> containing character <div>s
    _stringNode: function(string) {
        parentDiv = document.createElement('div');
        for (var i = 0, len = string.length; i < len; i++) {
            char = string[i].toLowerCase();
            parentDiv.appendChild(this.characterNode(char));
        }
        return parentDiv;
    },

    // Find the background offsets for a given character
    _getCharPosition: function(char) {
        position = this._fontLookup[char];
        if(!position) {
            return this._fontLookup[' '];
        }
        return position;
    },

    /* TODO: There are too many " " and "_" characters */
    _fontLookup: {
        "a": [0,0], "b": [0,1], "c": [0,2], "d": [0,3], "e": [0,4], "f": [0,5],
        "g": [0,6], "h": [0,7], "i": [0,8], "j": [0,9], "k": [0,10],
        "l": [0,11], "m": [0,12], "n": [0,13], "o": [0,14], "p": [0,15],
        "q": [0,16], "r": [0,17], "s": [0,18], "t": [0,19], "u": [0,20],
        "v": [0,21], "w": [0,22], "x": [0,23], "y": [0,24], "z": [0,25],
        "\"": [0,26], "@": [0,27], " ": [0,29], "0": [1,0], "1": [1,1],
        "2": [1,2], "3": [1,3], "4": [1,4], "5": [1,5], "6": [1,6], "7": [1,7],
        "8": [1,8], "9": [1,9], " ": [1,10], "_": [1,11], ":": [1,12],
        "(": [1,13], ")": [1,14], "-": [1,15], "'": [1,16], "!": [1,17],
        "_": [1,18], "+": [1,19], "\\": [1,20], "/": [1,21], "[": [1,22],
        "]": [1,23], "^": [1,24], "&": [1,25], "%": [1,26], ".": [1,27],
        "=": [1,28], "$": [1,29], "#": [1,30], "Å": [2,0], "Ö": [2,1],
        "Ä": [2,2], "?": [2,3], "*": [2,4], " ": [2,5], "<": [1,22],
        ">": [1,23], "{": [1,22], "}": [1,23]
    }
};

/**skin-sprites.js**/
var SKIN_SPRITES = [
    {
        img: "BALANCE",
        sprites: [
            { selectors: ["#balance"], x: 9, y: 0, width: 38, height: 420},
            { selectors: ["#balance::-webkit-slider-thumb", "#balance::-moz-range-thumb"], x: 15, y: 422, width: 14, height: 11},
            { selectors: ["#balance::-webkit-slider-thumb:active", "#balance::-moz-range-thumb:active"], x: 0, y: 422, width: 14, height: 11},
        ]
    },
    {
        img: "CBUTTONS",
        sprites: [
            { selectors: [".actions #previous"], x: 0, y: 0, width: 23, height: 18},
            { selectors: [".actions #previous:active"], x: 0, y: 18, width: 23, height: 18},
            { selectors: [".actions #play"], x: 23, y: 0, width: 23, height: 18},
            { selectors: [".actions #play:active"], x: 23, y: 18, width: 23, height: 18},
            { selectors: [".actions #pause"], x: 46, y: 0, width: 23, height: 18},
            { selectors: [".actions #pause:active"], x: 46, y: 18, width: 23, height: 18},
            { selectors: [".actions #stop"], x: 69, y: 0, width: 23, height: 18},
            { selectors: [".actions #stop:active"], x: 69, y: 18, width: 23, height: 18},
            { selectors: [".actions #next"], x: 92, y: 0, width: 23, height: 18},
            { selectors: [".actions #next:active"], x: 92, y: 18, width: 22, height: 18},
            { selectors: ["#eject"], x: 114, y: 0, width: 22, height: 16},
            { selectors: ["#eject:active"], x: 114, y: 16, width: 22, height: 16},
        ]
    },
    {
        img: "MAIN",
        sprites: [
            { selectors: ["#main-window"], x: 0, y: 0, width: 275, height: 116}
        ]
    },
    {
        img: "MONOSTER",
        sprites: [
            { selectors: [".media-info #stereo", ".stop .media-info #stereo.selected"], x: 0, y: 12, width: 29, height: 12},
            { selectors: [".media-info #stereo.selected"], x: 0, y: 0, width: 29, height: 12},
            { selectors: [".media-info #mono", ".stop .media-info #mono.selected"], x: 29, y: 12, width: 29, height: 12},
            { selectors: [".media-info #mono.selected"], x: 29, y: 0, width: 29, height: 12},
        ]
    },
    {
        img: "NUMBERS",
        sprites: [
            { selectors: ["#time #minus-sign"], x: 9, y: 6, width: 5, height: 1},
            { selectors: ["#time.countdown #minus-sign"], x: 20, y: 6, width: 5, height: 1},
            { selectors: [".digit-0"], x: 0, y: 0, width: 9, height: 13},
            { selectors: [".digit-1"], x: 9, y: 0, width: 9, height: 13},
            { selectors: [".digit-2"], x: 18, y: 0, width: 9, height: 13},
            { selectors: [".digit-3"], x: 27, y: 0, width: 9, height: 13},
            { selectors: [".digit-4"], x: 36, y: 0, width: 9, height: 13},
            { selectors: [".digit-5"], x: 45, y: 0, width: 9, height: 13},
            { selectors: [".digit-6"], x: 54, y: 0, width: 9, height: 13},
            { selectors: [".digit-7"], x: 63, y: 0, width: 9, height: 13},
            { selectors: [".digit-8"], x: 72, y: 0, width: 9, height: 13},
            { selectors: [".digit-9"], x: 81, y: 0, width: 9, height: 13},
        ]
    },
    {
        img: "NUMS_EX",
        sprites: [
            { selectors: ["#time.ex #minus-sign"], x: 90, y: 0, width: 9, height: 13},
            { selectors: ["#time.ex.countdown #minus-sign"], x: 99, y: 0, width: 9, height: 13},
            { selectors: [".digit-0"], x: 0, y: 0, width: 9, height: 13},
            { selectors: [".digit-1"], x: 9, y: 0, width: 9, height: 13},
            { selectors: [".digit-2"], x: 18, y: 0, width: 9, height: 13},
            { selectors: [".digit-3"], x: 27, y: 0, width: 9, height: 13},
            { selectors: [".digit-4"], x: 36, y: 0, width: 9, height: 13},
            { selectors: [".digit-5"], x: 45, y: 0, width: 9, height: 13},
            { selectors: [".digit-6"], x: 54, y: 0, width: 9, height: 13},
            { selectors: [".digit-7"], x: 63, y: 0, width: 9, height: 13},
            { selectors: [".digit-8"], x: 72, y: 0, width: 9, height: 13},
            { selectors: [".digit-9"], x: 81, y: 0, width: 9, height: 13},
        ]
    },
    {
        img: "PLAYPAUS",
        sprites: [
            { selectors: [".play #play-pause"], x: 0, y: 0, width: 9, height: 9},
            { selectors: [".pause #play-pause"], x: 9, y: 0, width: 9, height: 9},
            { selectors: [".stop #play-pause"], x: 18, y: 0, width: 9, height: 9},
            { selectors: [".play #work-indicator"], x: 36, y: 0, width: 9, height: 9},
            { selectors: [".play #work-indicator.selected"], x: 39, y: 0, width: 9, height: 9}
        ]
    },
    {
        img: "PLEDIT",
        sprites: [
            { selectors: ["#playlist .top-left"], x: 0, y: 21, width: 25, height: 20},
            { selectors: ["#playlist.selected .top-left"], x: 0, y: 0, width: 25, height: 20},
            { selectors: ["#playlist .title"], x: 26, y: 21, width: 100, height: 20},
            { selectors: ["#playlist.selected .title"], x: 26, y: 0, width: 100, height: 20},
            { selectors: ["#playlist .top-right"], x: 153, y: 21, width: 25, height: 20},
            { selectors: ["#playlist.selected .top-right"], x: 153, y: 0, width: 25, height: 20},
            { selectors: [".playlist-top-tile"], x: 127, y: 21, width: 25, height: 20},
            { selectors: [".selected .playlist-top-tile"], x: 127, y: 0, width: 25, height: 20},
            { selectors: ["#playlist-shade"], x: 156, y: 3, width: 9, height: 9},
            { selectors: ["#playlist-shade:active"], x: 62, y: 42, width: 9, height: 9},
            { selectors: ["#playlist-shade.selected"], x: 150, y: 42, width: 9, height: 9},
            { selectors: ["#playlist.shade #playlist-shade"], x: 128, y: 45, width: 9, height: 9},
            { selectors: ["#playlist.shade #playlist-shade:active"], x: 150, y: 42, width: 9, height: 9},
            { selectors: ["#playlist-close"], x: 167, y: 3, width: 9, height: 9},
            { selectors: ["#playlist-close:active"], x: 52, y: 42, width: 9, height: 9},
            { selectors: ["#playlist.shade #playlist-close"], x: 138, y: 45, width: 9, height: 9},
            { selectors: ["#playlist.shade #playlist-close:active"], x: 52, y: 42, width: 9, height: 9},
            { selectors: [".playlist-left-tile"], x: 0, y: 42, width: 25, height: 29},
            { selectors: [".playlist-right-tile"], x: 27, y: 42, width: 25, height: 29},
            { selectors: [".playlist-bottom-tile"], x: 179, y: 0, width: 25, height: 38},
            { selectors: ["#playlist .bottom-right"], x: 126, y: 72, width: 150, height: 38},
            { selectors: ["#playlist .bottom-left"], x: 0, y: 72, width: 150, height: 38},
            { selectors: ["#playlist.shade"], x: 72, y: 57, width: 25, height: 14},
            { selectors: ["#playlist.shade .top-left"], x: 72, y: 42, width: 25, height: 14},
            { selectors: ["#playlist.shade .top-right"], x: 99, y: 42, width: 50, height: 14}
        ]
    },
    {
        img: "POSBAR",
        sprites: [
            { selectors: ["#position"], x: 0, y: 0, width: 248, height: 10},
            { selectors: ["#position::-webkit-slider-thumb", "#position::-moz-range-thumb"], x: 248, y: 0, width: 29, height: 10},
            { selectors: ["#position:active::-webkit-slider-thumb", "#position:active::-moz-range-thumb"], x: 278, y: 0, width: 29, height: 10},
        ]
    },
    {
        img: "SHUFREP",
        sprites: [
            { selectors: ["#shuffle"], x: 28, y: 0, width: 47, height: 15},
            { selectors: ["#shuffle:active"], x: 28, y: 15, width: 47, height: 15},
            { selectors: ["#shuffle.selected"], x: 28, y: 30, width: 47, height: 15},
            { selectors: ["#shuffle.selected:active"], x: 28, y: 45, width: 47, height: 15},
            { selectors: ["#repeat"], x: 0, y: 0, width: 28, height: 15},
            { selectors: ["#repeat:active"], x: 0, y: 15, width: 28, height: 15},
            { selectors: ["#repeat.selected"], x: 0, y: 30, width: 28, height: 15},
            { selectors: ["#repeat.selected:active"], x: 0, y: 45, width: 28, height: 15},
            { selectors: ["#equalizer-button"], x: 0, y: 61, width: 23, height: 12},
            { selectors: ["#equalizer-button:active"], x: 46, y: 61, width: 23, height: 12},
            { selectors: ["#playlist-button"], x: 23, y: 61, width: 23, height: 12},
            { selectors: ["#playlist-button:active"], x: 69, y: 61, width: 23, height: 12},
            { selectors: ["#playlist-button.selected"], x: 23, y: 73, width: 23, height: 12},
            { selectors: ["#playlist-button.selected:active"], x: 69, y: 73, width: 23, height: 12},
        ]
    },
    {
        img: "TEXT",
        sprites: [
            { selectors: [".character"], x: 0, y: 0, width: 155, height: 74},
        ]
    },
    {
        img: "TITLEBAR",
        sprites: [
            { selectors: ["#title-bar"], x: 27, y: 15, width: 275, height: 14},
            { selectors: [".selected #title-bar"], x: 27, y: 0, width: 275, height: 14},
            { selectors: [".lllama #title-bar"], x: 27, y: 61, width: 275, height: 14},
            { selectors: [".lllama #title-bar.selected"], x: 27, y: 57, width: 275, height: 14},
            { selectors: ["#title-bar #option"], x: 0, y: 0, width: 9, height: 9},
            { selectors: ["#title-bar #option"], x: 0, y: 0, width: 9, height: 9},
            { selectors: ["#title-bar #option:active", "#title-bar #option:selected"], x: 0, y: 9, width: 9, height: 9},
            { selectors: ["#title-bar #minimize"], x: 9, y: 0, width: 9, height: 9},
            { selectors: ["#title-bar #minimize:active"], x: 9, y: 9, width: 9, height: 9},
            { selectors: ["#title-bar #shade"], x: 0, y: 18, width: 9, height: 9},
            { selectors: ["#title-bar #shade:active"], x: 9, y: 18, width: 9, height: 9},
            { selectors: ["#title-bar #close"], x: 18, y: 0, width: 9, height: 9},
            { selectors: ["#title-bar #close:active"], x: 18, y: 9, width: 9, height: 9},
            { selectors: ["#clutter-bar"], x: 304, y: 0, width: 8, height: 43},
            { selectors: ["#clutter-bar.disabled"], x: 312, y: 0, width: 8, height: 43},
            { selectors: ["#button-o:active", "#button-0:selected"], x: 304, y: 47, width: 8, height: 8},
            { selectors: ["#button-a:active", "#button-a.selected"], x: 312, y: 55, width: 8, height: 7},
            { selectors: ["#button-i:active", "#button-i.selected"], x: 320, y: 62, width: 8, height: 7},
            { selectors: ["#button-d:active", "#button-d.selected"], x: 328, y: 69, width: 8, height: 8},
            { selectors: ["#button-v:active", "#button-v.selected"], x: 336, y: 77, width: 8, height: 7},
            { selectors: [".shade #title-bar"], x: 27, y: 42, width: 275, height: 14},
            { selectors: [".shade #title-bar.selected"], x: 27, y: 29, width: 275, height: 14},
            { selectors: [".shade #title-bar #shade"], x: 0, y: 27, width: 9, height: 9},
            { selectors: [".shade #title-bar #shade:active"], x: 9, y: 27, width: 9, height: 9},
            { selectors: [".shade #position"], x: 0, y: 36, width: 17, height: 7},
            { selectors: [".shade #position::-moz-range-thumb", ".shade #position::-webkit-slider-thumb"], x: 20, y: 36, width: 3, height: 7},
            { selectors: [".shade #position.left::-moz-range-thumb", ".shade #position.left::-webkit-slider-thumb"], x: 17, y: 36, width: 3, height: 7},
            { selectors: [".shade #position.right::-moz-range-thumb", ".shade #position.right::-webkit-slider-thumb"], x: 23, y: 36, width: 3, height: 7}
        ]
    },
    {
        img: "VOLUME",
        sprites: [
            { selectors: ["#volume"], x: 0, y: 0, width: 68, height: 420},
            { selectors: ["#volume::-webkit-slider-thumb", "#volume::-moz-range-thumb"], x: 15, y: 422, width: 14, height: 11},
            { selectors: ["#volume::-webkit-slider-thumb:active", "#volume::-moz-range-thumb:active"], x: 0, y: 422, width: 14, height: 11},
        ]
    },
];

/**skin.js**/
// Dynamically set the css background images for all the sprites
SkinManager = {
    font: Font,
    init: function(visualizerNode, analyser) {
        this._createNewStyleNode();
        this.visualizer = Visualizer.init(visualizerNode, analyser);
        return this;
    },

    // For sprites that tile, we need to use just the sprite, not the whole image
    _skinSprites: SKIN_SPRITES,

    // PLEDIT.txt values
    _plRules: {
        "Normal": { selector:'#tracks li', attribute:'color' },
        "Current": { selector:'#tracks li.current', attribute:'color' },
        "Font": { selector:'#tracks li', attribute:'font-family' },
        "NormalBG": { selector:'#tracks, #tracks li', attribute:'background-color' },
        "SelectedBG": { selector:'#tracks li.selected', attribute:'background-color' }
    },

    // Given a file of an original Winamp WSZ file, set the current skin
    setSkinByFile: function(file, completedCallback) {
        this.completedCallback = completedCallback;
        file.processBuffer(this._setSkinByBuffer.bind(this));
    },

    // Given a bufferArray containing a Winamp WSZ file, set the current skin
    // Gets passed as a callback, so don't have access to `this`
    _setSkinByBuffer: function(buffer) {
        var zip = new JSZip(buffer);
        document.getElementById('time').classList.remove('ex');

        var promisedCssRules = this._skinSprites.map(function(spriteObj) {

            // CSS has to change if this file is present
            if(spriteObj.img == 'NUMS_EX') {
                document.getElementById('time').classList.add('ex');
            }

            var file = this._findFileInZip(spriteObj.img, zip);
            if (file) {
                var src = "data:image/bmp;base64," + btoa(file.asBinary());
                return this._spriteCssRule(src, spriteObj);
            }
        }, this);

        // Extract PLEDIT.txt values
        var plRules = {
            "Normal": { selector:'#tracks li', attribute:'color' },
            "Current": { selector:'#tracks li.current', attribute:'color' },
            "Current": { selector:'#tracks li.current', attribute:'color' },
            "Font": { selector:'#tracks li', attribute:'font-family' },
            "NormalBG": { selector:'#tracks, #tracks li', attribute:'background-color' },
            "SelectedBG": { selector:'#tracks li.selected', attribute:'background-color' }
        };

        var plValues = this._parsePlEdit(zip);
        for(var key in this._plRules) {
            var rule = this._plRules[key];
            if(plValues[key]) {
                promisedCssRules.push(rule.selector + "{" + rule.attribute + ":" + plValues[key] + "}");
            }
        }

        Array.prototype.push.apply(promisedCssRules, this._skinSprites.map(function(spriteObj) {
            var file = this._findFileInZip(spriteObj.img, zip);
            if (file) {
                var src = "data:image/bmp;base64," + btoa(file.asBinary());
                return this._spriteCssRule(src, spriteObj);
            }
        }, this));


        // Extract sprite images
        Promise.all(promisedCssRules).then(function(newCssRules) {
            this._createNewStyleNode();
            cssRules = newCssRules.join('\n');
            this.styleNode.appendChild(document.createTextNode(cssRules));
            this._parseVisColors(zip);
            this.completedCallback();
        }.bind(this));
    },

    _parseVisColors: function(zip) {
        var entries = this._findFileInZip("VISCOLOR.TXT", zip).asText().split("\n");
        var regex = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/;
        var colors = [];
        // changed to a hard number to deal with empty lines at the end...
        // plus its only meant to be an exact amount of numbers anywayz
        // - @PAEz
        for(var i = 0; i < 24; i++) {
            var matches = regex.exec(entries[i]);
            if(matches) {
                colors[i] = 'rgb(' + matches.slice(1,4).join(',') + ')';
            } else {
                console.error('Error in VISCOLOR.TXT on line', i);
            }
        }
        this.visualizer.setColors(colors);
    },

    _parsePlEdit: function(zip) {
        var entries = this._findFileInZip("PLEDIT.TXT", zip).asText().split("\n");
        var regex = /^([^=]*)=([^=\r]*)\r?$/;
        var results = {};
        for(var i = 0; i < entries.length; i++) {
            var matches = regex.exec(entries[i]);
            if(matches) {
                results[matches[1]] = matches[2];
            }
        }
        return results;
    },

    _findFileInZip: function(name, zip) {
        return zip.filter(function (relativePath, file){
            return new RegExp("(^|/)" + name, 'i').test(relativePath);
        })[0];
    },

    _createNewStyleNode: function() {
        if(this.styleNode) {
            document.head.removeChild(this.styleNode);
        }
        this.styleNode = document.createElement('style');
        document.head.appendChild(this.styleNode);
    },

    // Given an image URL and coordinates, returns a data url for a sub-section
    // of that image
    _spriteCssRule: function(src, spriteObj) {
        return new Promise(function(resolve, reject) {
            var imageObj = new Image();
            imageObj.src = src;

            imageObj.onload = function() {
                var skinImage = this;
                var cssRules = '';
                var canvas = document.createElement('canvas');
                spriteObj.sprites.forEach(function(sprite) {
                    canvas.height = sprite.height;
                    canvas.width = sprite.width;

                    var context = canvas.getContext('2d');
                    context.drawImage(skinImage, -sprite.x, -sprite.y);
                    var value = "background-image: url(" + canvas.toDataURL() + ")";
                    sprite.selectors.forEach(function(selector) {
                        cssRules += selector + "{" + value + "}\n";
                    });
                });
                resolve(cssRules);
            };
        });
    }
};

/**multi-display.js**/
// Single line text display that can animate and hold multiple registers
MultiDisplay = {
    node: null, // The DOM node of the display
    registers: {},
    init: function(font, node) {
        this.font = font;
        this.node = node;
        this._marqueeLoop();
        return this;
    },
    addRegister: function(key) {
        // Create element node
        var register = document.createElement("div");
        register.style.display = 'none';

        this.node.appendChild(register);
        this.registers[key] = {
            node: register,
            text: '',
            marquee: false
        };
    },
    setRegisterText: function(register, text) {
        // Set text of register
        this.font.setNodeToString(this.registers[register].node, text);
    },
    hideAllRegisters: function() {
        for(var key in this.registers) {
            this.registers[key].node.style.display = 'none';
        }
    },
    showRegister: function(key) {
        this.hideAllRegisters();
        // Show the one register
        this.registers[key].node.style.display = 'block';
    },
    startRegisterMarquee: function(key) {
        this.registers[key].marquee = true;
    },
    pauseRegisterMarquee: function(key) { 
        this.registers[key].marquee = false;
    },
    _marqueeLoop: function() {
        var self = this;
        setTimeout(function () {
            for(var key in self.registers) {
                // Check every register to see if it needs to be marqueed
                if(self.registers[key].marquee) {
                    var text = self.registers[key].node.firstChild;
                    // Only scroll if the text is too long
                    if(text && text.childNodes.length > 30) {
                        var characterNode = text.firstChild;
                        text.removeChild(characterNode);
                        text.appendChild(characterNode);
                    }
                }
            }
            self._marqueeLoop();
        }, 220);
    }
};

/**hotkeys.js**/
Hotkeys = {
    init: function(winamp) {
        keylog = [];
        trigger = [78,85,76,27,76,27,83,79,70,84];
        document.onkeyup = function(e){
            if(e.ctrlKey) { // Is CTRL depressed?
                switch(e.keyCode) {
                    case 68: winamp.toggleDoubledMode(); break;   // CTRL+D
                    // XXX FIXME
                    case 76: winamp.openOptionMenu(); break;      // CTRL+L
                    case 84: winamp.toggleTimeMode(); break;      // CTRL+T
                }
            } else {
                switch(e.keyCode) {
                    case 37: winamp.seekForwardBy(-5); break;     // left arrow
                    case 38: winamp.incrementVolumeBy(1); break;  // up arrow
                    case 39: winamp.seekForwardBy(5); break;      // right arrow
                    case 40: winamp.incrementVolumeBy(-1); break; // down arrow
                    case 66: winamp.next(); break;                // B
                    case 67: winamp.pause(); break;               // C
                    case 76: winamp.openFileDialog(); break;      // L
                    case 82: winamp.toggleRepeat(); break;        // R
                    case 83: winamp.toggleShuffle(); break;       // S
                    case 86: winamp.stop(); break;                // V
                    case 88: winamp.play(); break;                // X
                    case 90: winamp.previous(); break;            // Z
                    case 96: winamp.openFileDialog(); break;      // numpad 0
                    case 97: winamp.previous(10); break;          // numpad 1
                    case 98: winamp.incrementVolumeBy(-1); break; // numpad 2
                    case 99: winamp.next(10); break;              // numpad 3
                    case 100: winamp.previous(); break;           // numpad 4
                    case 101: winamp.play(); break;               // numpad 5
                    case 102: winamp.next(); break;               // numpad 6
                    case 103: winamp.seekForwardBy(-5); break;    // numpad 7
                    case 104: winamp.incrementVolumeBy(1); break; // numpad 8
                    case 105: winamp.seekForwardBy(5); break;     // numpad 9
                }
            }

            // Easter Egg
            keylog.push(e.keyCode);
            keylog = keylog.slice(-10);
            if(keylog.toString() == trigger.toString()) {
                winamp.toggleLlama();
            }
        };
    }
};

/**context.js**/
Context = {
    // The Option button
    option: document.getElementById('option'),

    init: function(winamp) {
        this.winamp = winamp;
        var self = this;

        document.onclick = function() {
            self.option.classList.remove('selected');
        };

        this.option.onclick = function(event) {
            self.option.classList.toggle('selected');
            event.stopPropagation();
        };

        var skinSelectNodes = document.getElementsByClassName('skin-select');
        for(var i = 0; i < skinSelectNodes.length; i++) {
            skinSelectNodes[i].onclick = this._loadSkin;
        }

        document.getElementById('context-play-file').onclick = function(event) {
            self.option.classList.remove('selected');
            self.winamp.openFileDialog();
        };
        document.getElementById('context-load-skin').onclick = function(event) {
            self.option.classList.remove('selected');
            self.winamp.openFileDialog();
        };
        document.getElementById('context-exit').onclick = function() {
            self.winamp.close();
        };
    },

    _loadSkin: function() {
        var skinFile = new MyFile();
        skinFile.setUrl(this.dataset.skinUrl);
        self.winamp.setSkin(skinFile);
    }

};

/**window-manager.js**/
WindowManager = {
    windows: {},
    registerWindow: function(name, win) {
        var self = this;
        var body = win.body;
        var handle = win.handle;
        var resizeHandle = win.resizeHandle;

        this.windows[name] = body;

        body.addEventListener('mousedown',function(e){
            for (var name in self.windows) {
                self.windows[name].classList.remove('selected');
            }
            this.classList.add('selected');
        });

        // Make window dragable
        handle.addEventListener('mousedown',function(e){
            if(e.target.classList.contains('ui')) {
                // Prevent going into drag mode when clicking any of the title
                // bar's icons by making sure the click was made directly on the
                // titlebar
                return true; }

            // If the element was 'absolutely' positioned we could simply use
            // offsetLeft / offsetTop however the element is 'relatively'
            // positioned so we're using style.left. parseInt is used to remove the
            // 'px' postfix from the value
            var winStartLeft = parseInt(body.offsetLeft || 0,10),
                winStartTop  = parseInt(body.offsetTop || 0,10);

            // Get starting mouse position
            var mouseStartLeft = e.clientX,
                mouseStartTop = e.clientY;

            // Mouse move handler function while mouse is down
            function handleMove(e) {
                // Get current mouse position
                var mouseLeft = e.clientX,
                    mouseTop = e.clientY;

                // Calculate difference offsets
                var diffLeft = mouseLeft-mouseStartLeft,
                    diffTop = mouseTop-mouseStartTop;

                // These margins were only useful for centering the div, now we
                // don't need them
                body.style.marginLeft = "0px";
                body.style.marginTop = "0px";
                // Move window to new position
                body.style.left = (winStartLeft+diffLeft)+"px";
                body.style.top = (winStartTop+diffTop)+"px";
            }

            // Mouse button up
            function handleUp() {
                removeListeners();
            }

            function removeListeners() {
                window.removeEventListener('mousemove',handleMove);
                window.removeEventListener('mouseup',handleUp);
            }

            window.addEventListener('mousemove',handleMove);
            window.addEventListener('mouseup',handleUp);
        });

        if (typeof resizeHandle == 'undefined') return;

        // Make window resizeable
        resizeHandle.addEventListener('mousedown',function(e){
            var winStartHeight = body.offsetHeight,
                winStartWidth  = body.offsetWidth;

            // Get starting mouse position
            var mouseStartLeft = e.clientX,
                mouseStartTop = e.clientY;

            // Mouse move handler function while mouse is down
            function handleResize(e) {
                // Get current mouse position
                var mouseLeft = e.clientX,
                    mouseTop = e.clientY;

                // Calculate difference offsets
                var diffLeft = mouseLeft-mouseStartLeft,
                    diffTop = mouseTop-mouseStartTop;

                var newWidth = (winStartWidth+diffLeft),
                    newHeight = (winStartHeight+diffTop);

                // Enforce resizing by 25px
                newWidth = Math.ceil(newWidth / 25.0) * 25;
                newHeight = Math.ceil(newHeight / 29.0) * 29;

                // Enforce minimum size
                newWidth = Math.max(newWidth, 275);
                newHeight = Math.max(newHeight, 116);

                // Resize window
                body.style.width = newWidth +"px";
                body.style.height = newHeight +"px";
            }

            // Mouse button up
            function handleUp() {
                removeListeners();
            }

            function removeListeners() {
                window.removeEventListener('mousemove',handleResize);
                window.removeEventListener('mouseup',handleUp);
            }

            window.addEventListener('mousemove',handleResize);
            window.addEventListener('mouseup',handleUp);
        });
    }
};

/**main-window.js**/
MainWindow = {
    init: function(winamp) {
        this.winamp = winamp;
        this.nodes = {
            'close': document.getElementById('close'),
            'shade': document.getElementById('shade'),
            'buttonD': document.getElementById('button-d'),
            'position': document.getElementById('position'),
            'volumeMessage': document.getElementById('volume-message'),
            'balanceMessage': document.getElementById('balance-message'),
            'positionMessage': document.getElementById('position-message'),
            'songTitle': document.getElementById('song-title'),
            'time': document.getElementById('time'),
            'shadeTime': document.getElementById('shade-time'),
            'shadeMinusSign': document.getElementById('shade-minus-sign'),
            'visualizer': document.getElementById('visualizer'),
            'previous': document.getElementById('previous'),
            'play': document.getElementById('play'),
            'pause': document.getElementById('pause'),
            'stop': document.getElementById('stop'),
            'next': document.getElementById('next'),
            'eject': document.getElementById('eject'),
            'repeat': document.getElementById('repeat'),
            'shuffle': document.getElementById('shuffle'),
            'volume': document.getElementById('volume'),
            'kbps': document.getElementById('kbps'),
            'khz': document.getElementById('khz'),
            'mono': document.getElementById('mono'),
            'stereo': document.getElementById('stereo'),
            'balance': document.getElementById('balance'),
            'workIndicator': document.getElementById('work-indicator'),
            'titleBar': document.getElementById('title-bar'),
            'playlistButton': document.getElementById('playlist-button'),
            'window': document.getElementById('main-window'),
        };

        this.handle = document.getElementById('title-bar');
        this.body = this.nodes.window;

        this.textDisplay = MultiDisplay.init(Font, this.nodes.songTitle);
        this.textDisplay.addRegister('songTitle');
        this.textDisplay.addRegister('position');
        this.textDisplay.addRegister('volume');
        this.textDisplay.addRegister('balance');
        this.textDisplay.addRegister('message'); // General purpose

        this.textDisplay.showRegister('songTitle');

        this.textDisplay.startRegisterMarquee('songTitle');

        this._registerListeners();
        return this;
    },

    _registerListeners: function() {
        var self = this;

        this.nodes.close.onclick = function() {
            self.close();
        };

        this.nodes.shade.onclick = function() {
            self.nodes.window.classList.toggle('shade');
        };

        this.nodes.buttonD.onmousedown = function() {
            if(self.nodes.window.classList.contains('doubled')) {
                self.textDisplay.setRegisterText('message', 'Disable doublesize mode');
            } else {
                self.textDisplay.setRegisterText('message', 'Enable doublesize mode');
            }
            self.textDisplay.showRegister('message');
        };

        this.nodes.buttonD.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.buttonD.onclick = function() {
            self.winamp.toggleDoubledMode();
        };

        this.nodes.play.onclick = function() {
            self.winamp.play();
        };

        this.nodes.songTitle.onmousedown = function() {
            self.textDisplay.pauseRegisterMarquee('songTitle');
        };

        this.nodes.songTitle.onmouseup = function() {
            setTimeout(function () {
                self.textDisplay.startRegisterMarquee('songTitle');
            }, 1000);
        };

        this.nodes.position.onmousedown = function() {
            if(!self.nodes.window.classList.contains('stop')){
                self.textDisplay.showRegister('position');
                self.nodes.window.classList.add('setting-position');
            }
        };

        this.nodes.position.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
            self.nodes.window.classList.remove('setting-position');
        };

        this.nodes.position.oninput = function() {
            var newPercentComplete = self.nodes.position.value;
            var newFractionComplete = newPercentComplete/100;
            var newElapsed = self._timeString(self.winamp.getDuration() * newFractionComplete);
            var duration = self._timeString(self.winamp.getDuration());
            var message = "Seek to: " + newElapsed + "/" + duration + " (" + newPercentComplete + "%)";
            self.textDisplay.setRegisterText('position', message);
        };

        this.nodes.position.onchange = function() {
            if(self.winamp.getState() != 'stop'){
                self.winamp.seekToPercentComplete(this.value);
            }
        };

        this.nodes.previous.onclick = function() {
            self.winamp.previous();
        };

        this.nodes.next.onclick = function() {
            self.winamp.next();
        };

        this.nodes.pause.onclick = function() {
            self.winamp.pause();
        };

        this.nodes.stop.onclick = function() {
            self.winamp.stop();
        };

        this.nodes.eject.onclick = function() {
            self.winamp.openFileDialog();
        };

        this.nodes.repeat.onclick = function() {
            self.winamp.toggleRepeat();
        };

        this.nodes.shuffle.onclick = function() {
            self.winamp.toggleShuffle();
        };

        this.nodes.shadeTime.onclick = function() {
            self.winamp.toggleTimeMode();
        };

        this.nodes.volume.onmousedown = function() {
            self.textDisplay.showRegister('volume');
        };

        this.nodes.volume.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.volume.oninput = function() {
            self.winamp.setVolume(this.value);
        };

        this.nodes.time.onclick = function() {
            self.winamp.toggleTimeMode();
        };

        this.nodes.balance.onmousedown = function() {
            self.textDisplay.showRegister('balance');
        };

        this.nodes.balance.onmouseup = function() {
            self.textDisplay.showRegister('songTitle');
        };

        this.nodes.balance.oninput = function() {
            if(Math.abs(this.value) < 25) {
                this.value = 0;
            }
            self.winamp.setBalance(this.value);
        };

        this.nodes.visualizer.onclick = function() {
            self.winamp.toggleVisualizer();
        };

        this.nodes.playlistButton.onclick = function() {
            self.togglePlaylist();
        },

        window.addEventListener('timeUpdated', function() { self.updateTime(); });
        window.addEventListener('startWaiting', function() { self.setWorkingIndicator(); });
        window.addEventListener('stopWaiting', function() { self.unsetWorkingIndicator(); });
        window.addEventListener('startLoading', function() { self.setLoadingState(); });
        window.addEventListener('stopLoading', function() { self.unsetLoadingState(); });
        window.addEventListener('toggleTimeMode', function() { self.toggleTimeMode(); });
        window.addEventListener('changeState', function() { self.changeState(); });
        window.addEventListener('titleUpdated', function() { self.updateTitle(); });
        window.addEventListener('channelCountUpdated', function() { self.updateChannelCount(); });
        window.addEventListener('volumeChanged', function() { self.updateVolume(); });
        window.addEventListener('balanceChanged', function() { self.setBalance(); });
        window.addEventListener('doubledModeToggled', function() { self.toggleDoubledMode(); });
        window.addEventListener('repeatToggled', function() { self.toggleRepeat(); });
        window.addEventListener('llamaToggled', function() { self.toggleLlama(); });
        window.addEventListener('openPlaylist', function() { self.nodes.playlistButton.classList.add('selected'); });
        window.addEventListener('closePlaylist', function() { self.nodes.playlistButton.classList.remove('selected'); });

        this.nodes.window.addEventListener('dragenter', this.dragenter.bind(this));
        this.nodes.window.addEventListener('dragover', this.dragover.bind(this));
        this.nodes.window.addEventListener('drop', this.drop.bind(this));
    },

    toggleDoubledMode: function() {
        this.nodes.buttonD.classList.toggle('selected');
        this.nodes.window.classList.toggle('doubled');
    },

    close: function() {
        // Probably not the right thing once we have more windows
        this.winamp.close();
        this.nodes.window.classList.add('closed');
    },

    updatePosition: function() {
        if(!this.nodes.window.classList.contains('setting-position')) {
            this.nodes.position.value = this.winamp.getPercentComplete();
        }
    },

    // In shade mode, the position slider shows up differently depending on if
    // it's near the start, middle or end of its progress
    updateShadePositionClass: function() {
        var position = this.nodes.position;

        position.removeAttribute("class");
        if(position.value <= 33) {
            position.classList.add('left');
        } else if(position.value >= 66) {
            position.classList.add('right');
        }
    },

    updateTime: function() {
        this.updateShadePositionClass();
        this.updatePosition();

        var shadeMinusCharacter = ' ';
        var digits = null;
        if(this.nodes.time.classList.contains('countdown')) {
            digits = this.winamp._timeObject(this.winamp.getTimeRemaining());
            shadeMinusCharacter = '-';
        } else {
            digits = this.winamp._timeObject(this.winamp.getTimeElapsed());
        }
        this.winamp.skin.font.displayCharacterInNode(shadeMinusCharacter, this.nodes.shadeMinusSign);

        var digitNodes = [
            document.getElementById('minute-first-digit'),
            document.getElementById('minute-second-digit'),
            document.getElementById('second-first-digit'),
            document.getElementById('second-second-digit')
        ];
        var shadeDigitNodes = [
            document.getElementById('shade-minute-first-digit'),
            document.getElementById('shade-minute-second-digit'),
            document.getElementById('shade-second-first-digit'),
            document.getElementById('shade-second-second-digit')
        ];

        // For each digit/node
        for(var i = 0; i < 4; i++) {
            var digit = digits[i];
            var digitNode = digitNodes[i];
            var shadeNode = shadeDigitNodes[i];
            digitNode.innerHTML = '';
            digitNode.appendChild(this.winamp.skin.font.digitNode(digit));
            this.winamp.skin.font.displayCharacterInNode(digit, shadeNode);
        }
    },

    setWorkingIndicator: function() {
        this.nodes.workIndicator.classList.add('selected');
    },

    unsetWorkingIndicator: function() {
        this.nodes.workIndicator.classList.remove('selected');
    },

    setLoadingState: function() {
        this.nodes.window.classList.add('loading');
    },

    unsetLoadingState: function() {
        this.nodes.window.classList.remove('loading');
    },

    toggleTimeMode: function() {
        this.nodes.time.classList.toggle('countdown');
        this.updateTime();
    },

    updateVolume: function() {
        var volume = this.winamp.getVolume();
        var percent = volume / 100;
        var sprite = Math.round(percent * 28);
        var offset = (sprite - 1) * 15;
        this.nodes.volume.style.backgroundPosition = '0 -' + offset + 'px';

        var message = 'Volume: ' + volume + '%';
        this.textDisplay.setRegisterText('volume', message);

        // This shouldn't trigger an infinite loop with volume.onchange(),
        // since the value will be the same
        this.nodes.volume.value = volume;
    },

    setBalance: function() {
        var balance = this.winamp.getBalance();
        var string = '';
        if(balance === 0) {
            string = 'Balance: Center';
        } else if(balance > 0) {
            string = 'Balance: ' + balance + '% Right';
        } else {
            string = 'Balance: ' + Math.abs(balance) + '% Left';
        }
        this.textDisplay.setRegisterText('balance', string);
        balance = Math.abs(balance) / 100;
        var sprite = Math.round(balance * 28);
        var offset = (sprite - 1) * 15;
        this.nodes.balance.style.backgroundPosition = '0px -' + offset + 'px';
    },

    changeState: function() {
        var state = this.winamp.getState();
        var stateOptions = ['play', 'stop', 'pause'];
        for(var i = 0; i < stateOptions.length; i++) {
            this.nodes.window.classList.remove(stateOptions[i]);
        }
        this.nodes.window.classList.add(state);
    },

    toggleLlama: function() {
        this.nodes.window.classList.toggle('llama');
    },

    updateTitle: function() {
        var duration = this._timeString(this.winamp.getDuration());
        var name = this.winamp.fileName + ' (' + duration + ')  ***  ';
        this.textDisplay.setRegisterText('songTitle', name);
        /////////////////////////////////
        //////////////////////////////////
        //document.title=name;
        //Title.change(name);
        //Title.animation('marquee');
        scrl=name;
        scrlsts();
        
        //msg=name;
        //titlebar(10);
        /////////////////////////////////
        //////////////////////////////////
    },

    updateChannelCount: function() {
        var channels = this.winamp.getChannelCount();
        this.nodes.mono.classList.remove('selected');
        this.nodes.stereo.classList.remove('selected');
        if(channels == 1) {
            this.nodes.mono.classList.add('selected');
        } else if(channels == 2) {
           this.nodes.stereo.classList.add('selected');
        }
    },

    toggleRepeat: function() {
        this.nodes.repeat.classList.toggle('selected');
    },

    toggleShuffle: function() {
        this.nodes.shuffle.classList.toggle('selected');
    },

    togglePlaylist: function() {
        this.winamp.togglePlaylist();
    },

    dragenter: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    dragover: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    drop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.winamp.emptyPlaylist();
        var files = e.dataTransfer.files;
        for(var i = 0; i < files.length; i++) {
            var file = new MyFile();
            file.setFileReference(files[i]);
            this.winamp.enqueue(file);
        }
        this.winamp.playTrack(0);
    },

    _timeString: function(time) {
        var timeObject = this.winamp._timeObject(time);
        return timeObject[0] + timeObject[1] + ':' + timeObject[2] + timeObject[3];
    }
};


var scrl;
function scrlsts() {
 scrl = scrl.substring(1, scrl.length) + scrl.substring(0, 1);
 document.title = scrl;
 setTimeout("scrlsts()", 300);
 };
 


/**playlist-window.js**/
PlaylistWindow = {
    init: function(winamp) {
        this.winamp = winamp;
        this.nodes = {
            'window': document.getElementById('playlist'),
            'top': document.querySelector('#playlist .top'),
            'shade': document.getElementById('playlist-shade'),
            'close': document.getElementById('playlist-close'),
            'tracks': document.getElementById('tracks'),
            'resizeHandle': document.getElementById('playlist-resize-handle'),
            'previous': document.getElementById('playlist-previous'),
            'play': document.getElementById('playlist-play'),
            'pause': document.getElementById('playlist-pause'),
            'stop': document.getElementById('playlist-stop'),
            'next': document.getElementById('playlist-next'),
            'eject': document.getElementById('playlist-eject')
        };

        this.closed = this.nodes.window.classList.contains('closed');

        this.handle = this.nodes.top;
        this.body = this.nodes.window;
        this.resizeHandle = this.nodes.resizeHandle;


        this._registerListeners();
        return this;
    },

    _registerListeners: function() {
        var self = this;

        window.addEventListener('openPlaylist', function() { self.open(); });
        window.addEventListener('closePlaylist', function() { self.close(); });
        window.addEventListener('tracksUpdated', function() { self.updateTracks(); });
        window.addEventListener('currentTrackChanged', function() { self.updateCurrentTrack(); });

        this.nodes.close.onclick = function() {
            self.winamp.closePlaylist();
        }

        this.nodes.shade.onclick = function() {
            self.nodes.window.classList.toggle('shade');
        }

        this.nodes.previous.onclick = function() {
            self.winamp.previous();
        }

        this.nodes.play.onclick = function() {
            self.winamp.play();
        }

        this.nodes.pause.onclick = function() {
            self.winamp.pause();
        }

        this.nodes.stop.onclick = function() {
            self.winamp.stop();
        }

        this.nodes.next.onclick = function() {
            self.winamp.next();
        }

        this.nodes.eject.onclick = function() {
            self.winamp.openFileDialog();
        }
        

        this.nodes.window.addEventListener('dragenter', this.dragenter.bind(this));
        this.nodes.window.addEventListener('dragover', this.dragover.bind(this));
        this.nodes.window.addEventListener('drop', this.drop.bind(this));
    },

    close: function() {
        this.nodes.window.classList.add('closed');
    },

    open: function() {
        this.nodes.window.classList.remove('closed');
    },

    isClosed: function() {
        return this.nodes.window.classList.contains('closed');
    },

    toggle: function() {
        if(this.isClosed()) {
            this.open();
        } else {
            this.close();
        }
    },

    updateTracks: function() {
        var tracks = this.nodes.tracks;
        while (tracks.firstChild) {
            tracks.removeChild(tracks.firstChild);
        }

        var self = this;
        for(var i = 0; i < this.winamp.playlist.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = (i+1) + ". " + this.winamp.playlist[i].name;
            li.onclick = (function(trackNumber) {
                return function() { self.winamp.playTrack(trackNumber); };
            })(i);
            tracks.appendChild(li);
        }

        this.updateCurrentTrack();
    },

    updateCurrentTrack: function() {
        var tracks = this.nodes.tracks.children;
        for(var i = 0; i < tracks.length; i++) {
            if(i == this.winamp.currentTrack) {
                tracks[i].classList.add('current');
            } else {
                tracks[i].classList.remove('current');
            }
        }
    },

    dragenter: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    dragover: function(e) {
        e.stopPropagation();
        e.preventDefault();
    },

    drop: function(e) {
        e.stopPropagation();
        e.preventDefault();
        var files = e.dataTransfer.files;
        for(var i = 0; i < files.length; i++) {
            var file = new MyFile();
            file.setFileReference(files[i]);
            this.winamp.enqueue(file);
        }
    }

};

//winamp=Winamp();
var pullfiles=function(){ 
    // love the query selector
    var fileInput = document.querySelector("#myfiles");
    var files = fileInput.files;
    // cache files.length 
    var fl=files.length;
    var i=0;

    while ( i < fl) {
        // localize file var in the loop
        var file =  new MyFile();
        file.setFileReference(files[i]);
        Winamp.enqueue(file);
        i++;
    }    
}

// set the input element onchange to call pullfiles
document.querySelector("#myfiles").onchange=pullfiles;

//a.t


var pullDirs=function(){ 
    // love the query selector
    var fileInput = document.querySelector("#myDirs");
    var files = fileInput.files;
    // cache files.length 
    var fl=files.length;
    var i=0;

    while ( i < fl) {
        // localize file var in the loop
        var file =  new MyFile();
        file.setFileReference(files[i]);
        Winamp.enqueue(file);
        i++;
    }    
}

// set the input element onchange to call pullfiles
document.querySelector("#myDirs").onchange=pullDirs;

//a.t

/**winamp.js**/
// UI and App logic
Winamp = {
    init: function(options) {
        this.fileInput = document.createElement('input');
        this.fileInput.type = 'file';

        ////////////////////////////////////////////////
        this.fileInput.setAttribute("multiple", "true");
        ////////////////////////////////////////////////        
        this.fileInput.style.display = 'none';

        this.windowManager = WindowManager;
        this.media = Media.init();
        this.skin = SkinManager.init(document.getElementById('visualizer'), this.media._analyser);
        this.state = '';

        this.mainWindow = MainWindow.init(this);
        this.playlistWindow = PlaylistWindow.init(this);

        this.playlist = [];
        this.currentTrack = null;
        this.loadedTrack = null;
        this.autoPlay = false;

        this.events = {
            timeUpdated: new Event('timeUpdated'),
            startWaiting: new Event('startWaiting'),
            stopWaiting: new Event('stopWaiting'),
            startLoading: new Event('startLoading'),
            stopLoading: new Event('stopLoading'),
            toggleTimeMode: new Event('toggleTimeMode'),
            changeState: new Event('changeState'),
            titleUpdated: new Event('titleUpdated'),
            channelCountUpdated: new Event('channelCountUpdated'),
            volumeChanged: new Event('volumeChanged'),
            balanceChanged: new Event('balanceChanged'),
            doubledModeToggled: new Event('doubledModeToggled'),
            repeatToggled: new Event('repeatToggled'),
            llamaToggled: new Event('llamaToggled'),
            openPlaylist: new Event('openPlaylist'),
            closePlaylist: new Event('closePlaylist'),
            tracksUpdated: new Event('tracksUpdated'),
            currentTrackChanged: new Event('currentTrackChanged')
        };

        this.setVolume(options.volume);
        this.setBalance(options.balance);
        this.enqueueFromUrl(options.mediaFile.url, options.mediaFile.name);
        var skinFile = new MyFile();
        skinFile.setUrl(options.skinUrl);
        this.setSkin(skinFile);

        this._registerListeners();
        return this;
    },

    _registerListeners: function() {
        var self = this;

        this.windowManager.registerWindow('main', this.mainWindow);
        this.windowManager.registerWindow('playlist', this.playlistWindow);

        this.media.addEventListener('timeupdate', function() {
            window.dispatchEvent(self.events.timeUpdated);
        });

        this.media.addEventListener('visualizerupdate', function(analyser) {
            self.skin.visualizer.paintFrame(self.visualizerStyle, analyser);
        });

        this.media.addEventListener('ended', function() {
            self.skin.visualizer.clear();
            var lastTrack = (self.currentTrack + 1 == self.playlist.length);
            if(lastTrack && !self.media.repeatEnabled()) {
                self.setState('stop');
            } else {
                self.next();
            }
        });

        this.media.addEventListener('waiting', function() {
            window.dispatchEvent(self.events.startWaiting);
        });

        this.media.addEventListener('playing', function() {
            self.setState('play');
            window.dispatchEvent(self.events.stopWaiting);
        });

        this.fileInput.onchange = function(e){
            self.emptyPlaylist();
            var files = e.dataTransfer.files;
            for(var i = 0; i < files.length; i++) {
                var file = new MyFile();
                file.setFileReference(files[i]);
                this.enqueue(file);
                console.log(file)
            }
            this.next();
        };
    },

    /* Functions */
    setState: function(state) {
        this.state = state;
        window.dispatchEvent(this.events.changeState);
    },

    getState: function() {
        return this.state;
    },

    getDuration: function() {
        return this.media.duration();
    },

    getTimeRemaining: function() {
        return this.media.timeRemaining();
    },

    getTimeElapsed: function() {
        return this.media.timeElapsed();
    },

    getPercentComplete: function() {
        return this.media.percentComplete();
    },

    getChannelCount: function() {
        return this.media.channels();
    },

    getVolume: function() {
        return Math.round(this.media.getVolume() * 100);
    },

    seekToPercentComplete: function(percent) {
        this.media.seekToPercentComplete(percent);
    },

    toggleTimeMode: function() {
        window.dispatchEvent(this.events.toggleTimeMode);
    },

    previous: function(num) {
        if(this.currentTrack > 0) {
            this.playTrack(this.currentTrack - 1);
            window.dispatchEvent(this.events.currentTrackChanged);
        } else  {
            this.playTrack(0);
        }
    },

    play: function() {
        if(this.getState() === 'play'){
            this.media.stop();
        }
        this.media.play();
        this.setState('play');
    },

    pause: function() {
        if(this.getState() === 'pause'){
            this.media.play();
        }
        else if(this.getState() === 'play')
        {
            this.media.pause();
            this.setState('pause');
        }
    },

    stop: function() {
        this.media.stop();
        this.setState('stop');
    },

    next: function(num) {
        var nextTrack = this.currentTrack + 1;
        if(nextTrack < this.playlist.length) {
            this.playTrack(this.currentTrack + 1);
        } else  {
            this.playTrack(0);
        }
        window.dispatchEvent(this.events.currentTrackChanged);
    },

    // From 0-100
    setVolume: function(volume) {
        // Ensure volume does not go out of bounds
        volume = Math.max(volume, 0);
        volume = Math.min(volume, 100);

        var percent = volume / 100;

        this.media.setVolume(percent);
        window.dispatchEvent(this.events.volumeChanged);
    },

    incrementVolumeBy: function(ammount) {
        this.setVolume((this.media.getVolume() * 100) + ammount);
    },

    toggleDoubledMode: function() {
        window.dispatchEvent(this.events.doubledModeToggled);
    },

    // From -100 to 100
    setBalance: function(balance) {
        this.media.setBalance(balance);
        window.dispatchEvent(this.events.balanceChanged);
    },

    getBalance: function() {
        return this.media.getBalance();
    },

    seekForwardBy: function(seconds) {
        this.media.seekToTime(this.media.timeElapsed() + seconds);
        window.dispatchEvent(self.events.timeUpdated);
    },

    toggleRepeat: function() {
        this.media.toggleRepeat();
        window.dispatchEvent(this.events.repeatToggled);
    },

    toggleShuffle: function() {
        this.media.toggleShuffle();
        this.mainWindow.toggleShuffle();
    },

    toggleLlama: function() {
        window.dispatchEvent(this.events.llamaToggled);
    },

    close: function() {
        this.media.stop();
        this.setState('stop'); // Currently unneeded
    },

    openPlaylist: function() {
        window.dispatchEvent(this.events.openPlaylist);
    },

    closePlaylist: function() {
        window.dispatchEvent(this.events.closePlaylist);
    },

    togglePlaylist: function() {
        if(this.playlistWindow.isClosed()) {
            this.openPlaylist();
        } else {
            this.closePlaylist();
        }
    },

    openFileDialog: function() {
        this.fileInput.click();
    },

    enqueueFromFileReference: function(fileReference) {
        var file = new MyFile();
        file.setFileReference(fileReference);
        if(new RegExp("(wsz|zip)$", 'i').test(fileReference.name)) {
            this.skin.setSkinByFile(file);
        } else {
            this.enqueue(file);
        }
    },

    loadFile: function(file) {
        this.fileName = file.name;
        file.processBuffer(this._loadBuffer.bind(this));
    },

    playTrack: function(track) {
        if(this.loadedTrack != track) {
            this.currentTrack = track;
            var file = this.playlist[this.currentTrack];
            this.autoPlay = true;
            this.loadFile(file);
            
        } else {
            this.play();
        }
    },

    enqueue: function(file) {
        this.playlist.push(file);
        var trackNumber = this.playlist.length - 1;
        if(this.currentTrack == null) {
            this.currentTrack = trackNumber;
            this.loadFile(file);
            window.dispatchEvent(this.events.currentTrackChanged);
        }
        window.dispatchEvent(this.events.tracksUpdated);
        return trackNumber;
    },

    emptyPlaylist: function() {
        this.playlist = [];
        this.currentTrack = null;
        window.dispatchEvent(this.events.tracksUpdated);
    },

    // Used only for the initial load, since it must have a CORS header
    enqueueFromUrl: function(url, fileName) {
        var file = new MyFile();
        file.setUrl(url);
        file.name = fileName;
        var trackNumber = this.enqueue(file);
    },

    setSkin: function(file) {
        this.setLoadingState();
        this.skin.setSkinByFile(file, this.unsetLoadingState.bind(this));
    },

    setLoadingState: function() {
        window.dispatchEvent(this.events.startLoading);
    },

    unsetLoadingState: function() {
        window.dispatchEvent(this.events.stopLoading);
    },

    toggleVisualizer: function() {
        if(this.skin.visualizer.style === this.skin.visualizer.NONE) {
            this.skin.visualizer.setStyle(this.skin.visualizer.BAR);
        } else if(this.skin.visualizer.style === this.skin.visualizer.BAR) {
            this.skin.visualizer.setStyle(this.skin.visualizer.OSCILLOSCOPE);
        } else if(this.skin.visualizer.style === this.skin.visualizer.OSCILLOSCOPE) {
            this.skin.visualizer.setStyle(this.skin.visualizer.NONE);
        }
        this.skin.visualizer.clear();
    },

    /* Listeners */
    _loadBuffer: function(buffer) {
        function setMetaData() {
            this.loadedTrack = this.currentTrack;
            if(this.autoPlay) {
                this.play();
                this.autoPlay = false;
            }
            var kbps = "128";
            var khz = Math.round(this.media.sampleRate() / 1000).toString();
            this.skin.font.setNodeToString(document.getElementById('kbps'), kbps);
            this.skin.font.setNodeToString(document.getElementById('khz'), khz);
            window.dispatchEvent(this.events.channelCountUpdated);
            window.dispatchEvent(this.events.titleUpdated);
            window.dispatchEvent(this.events.timeUpdated);
        }

        // Note, this will not happen right away
        this.media.loadBuffer(buffer, setMetaData.bind(this));
    },

    /* Helpers */
    _timeObject: function(time) {
        var minutes = Math.floor(time / 60);
        var seconds = time - (minutes * 60);

        return [
            Math.floor(minutes / 10),
            Math.floor(minutes % 10),
            Math.floor(seconds / 10),
            Math.floor(seconds % 10)
        ];
    },
};

/**title.js**/
/**********************
titleJs v1.0 | (c) 2014 | Author: Arkaprava Majumder | Author Uri: http://arkapravamajumder.com 
**********************/
var Title = {
   vars: {
   	sourceTitle: document.title,
   	counter: 0
   },
   typeWriter: function(){
	document.title=this.vars.sourceTitle.substring(0,this.vars.counter);
	if(this.vars.counter==this.vars.sourceTitle.length)
	{
		this.vars.counter=0;
		setTimeout("Title.typeWriter()",200);
	} else {
		this.vars.counter++;
		setTimeout("Title.typeWriter()",400);
	}
   },
   marquee: function(){
   	document.title = this.vars.sourceTitle.substring(this.vars.counter, this.vars.sourceTitle.length)+" "+this.vars.sourceTitle.substring(0,this.vars.counter);
	this.vars.counter++;
	    if (this.vars.counter > this.vars.sourceTitle.length)
	    {
		this.vars.counter = 0;
	    }
	setTimeout("Title.marquee()", 200);
   },
   pref: function(param){
   	if(param.trim()!=""){
	   this.vars.sourceTitle=document.title=param+" "+this.vars.sourceTitle;
	}
   },
   suf: function(param){
  	if(param.trim()!=""){
	   this.vars.sourceTitle=document.title=this.vars.sourceTitle+" "+param;
	}
	   
   },
   change: function(param){
   	if(param.trim()!=""){
	   	this.vars.sourceTitle=document.title=param;
	}
   },
   animation: function(param){
   	switch(param){
   	case "typeWriter":
   	this.typeWriter();
   	break;
   	case "marquee":
   	this.marquee();
   	break;	
   	}
   }

};

/****/
/****/
