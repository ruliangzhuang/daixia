const CrypyoJs = require('crypto-js')
function u(t, r) {
        var e = (65535 & t) + (65535 & r);
        return (t >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
    }
function s(t, r, e, n, i, o) {
        return u(function a(t, r) {
            return t << r | t >>> 32 - r
        }(u(u(r, t), u(n, o)), i), e)
    }
function l(t, r, e, n, i, o, a) {
        return s(r & e | ~r & n, t, r, i, o, a)
    }
function d(t, r, e, n, i, o, a) {
        return s(r & n | e & ~n, t, r, i, o, a)
    }
function p(t, r, e, n, i, o, a) {
        return s(r ^ e ^ n, t, r, i, o, a)
    }
function v(t, r, e, n, i, o, a) {
        return s(e ^ (r | ~n), t, r, i, o, a)
    }
function o(t) {
        var r, e, n = "0123456789abcdef", i = "";
        for (e = 0; e < t.length; e += 1)
            r = t.charCodeAt(e),
            i += n.charAt(r >>> 4 & 15) + n.charAt(15 & r);
        return i
    }
function e(t) {
        return unescape(encodeURIComponent(t))
    }
function h(t) {
        var r, e = "";
        for (r = 0; r < 32 * t.length; r += 8)
            e += String.fromCharCode(t[r >> 5] >>> r % 32 & 255);
        return e
    }
function c(t, r) {
        t[r >> 5] |= 128 << r % 32,
        t[14 + (r + 64 >>> 9 << 4)] = r;
        var e, n, i, o, a, s = 1732584193, c = -271733879, h = -1732584194, f = 271733878;
        for (e = 0; e < t.length; e += 16)
            c = v(c = v(c = v(c = v(c = p(c = p(c = p(c = p(c = d(c = d(c = d(c = d(c = l(c = l(c = l(c = l(i = c, h = l(o = h, f = l(a = f, s = l(n = s, c, h, f, t[e], 7, -680876936), c, h, t[e + 1], 12, -389564586), s, c, t[e + 2], 17, 606105819), f, s, t[e + 3], 22, -1044525330), h = l(h, f = l(f, s = l(s, c, h, f, t[e + 4], 7, -176418897), c, h, t[e + 5], 12, 1200080426), s, c, t[e + 6], 17, -1473231341), f, s, t[e + 7], 22, -45705983), h = l(h, f = l(f, s = l(s, c, h, f, t[e + 8], 7, 1770035416), c, h, t[e + 9], 12, -1958414417), s, c, t[e + 10], 17, -42063), f, s, t[e + 11], 22, -1990404162), h = l(h, f = l(f, s = l(s, c, h, f, t[e + 12], 7, 1804603682), c, h, t[e + 13], 12, -40341101), s, c, t[e + 14], 17, -1502002290), f, s, t[e + 15], 22, 1236535329), h = d(h, f = d(f, s = d(s, c, h, f, t[e + 1], 5, -165796510), c, h, t[e + 6], 9, -1069501632), s, c, t[e + 11], 14, 643717713), f, s, t[e], 20, -373897302), h = d(h, f = d(f, s = d(s, c, h, f, t[e + 5], 5, -701558691), c, h, t[e + 10], 9, 38016083), s, c, t[e + 15], 14, -660478335), f, s, t[e + 4], 20, -405537848), h = d(h, f = d(f, s = d(s, c, h, f, t[e + 9], 5, 568446438), c, h, t[e + 14], 9, -1019803690), s, c, t[e + 3], 14, -187363961), f, s, t[e + 8], 20, 1163531501), h = d(h, f = d(f, s = d(s, c, h, f, t[e + 13], 5, -1444681467), c, h, t[e + 2], 9, -51403784), s, c, t[e + 7], 14, 1735328473), f, s, t[e + 12], 20, -1926607734), h = p(h, f = p(f, s = p(s, c, h, f, t[e + 5], 4, -378558), c, h, t[e + 8], 11, -2022574463), s, c, t[e + 11], 16, 1839030562), f, s, t[e + 14], 23, -35309556), h = p(h, f = p(f, s = p(s, c, h, f, t[e + 1], 4, -1530992060), c, h, t[e + 4], 11, 1272893353), s, c, t[e + 7], 16, -155497632), f, s, t[e + 10], 23, -1094730640), h = p(h, f = p(f, s = p(s, c, h, f, t[e + 13], 4, 681279174), c, h, t[e], 11, -358537222), s, c, t[e + 3], 16, -722521979), f, s, t[e + 6], 23, 76029189), h = p(h, f = p(f, s = p(s, c, h, f, t[e + 9], 4, -640364487), c, h, t[e + 12], 11, -421815835), s, c, t[e + 15], 16, 530742520), f, s, t[e + 2], 23, -995338651), h = v(h, f = v(f, s = v(s, c, h, f, t[e], 6, -198630844), c, h, t[e + 7], 10, 1126891415), s, c, t[e + 14], 15, -1416354905), f, s, t[e + 5], 21, -57434055), h = v(h, f = v(f, s = v(s, c, h, f, t[e + 12], 6, 1700485571), c, h, t[e + 3], 10, -1894986606), s, c, t[e + 10], 15, -1051523), f, s, t[e + 1], 21, -2054922799), h = v(h, f = v(f, s = v(s, c, h, f, t[e + 8], 6, 1873313359), c, h, t[e + 15], 10, -30611744), s, c, t[e + 6], 15, -1560198380), f, s, t[e + 13], 21, 1309151649), h = v(h, f = v(f, s = v(s, c, h, f, t[e + 4], 6, -145523070), c, h, t[e + 11], 10, -1120210379), s, c, t[e + 2], 15, 718787259), f, s, t[e + 9], 21, -343485551),
            s = u(s, n),
            c = u(c, i),
            h = u(h, o),
            f = u(f, a);
        return [s, c, h, f]
    }
function f(t) {
        var r, e = [];
        for (e[(t.length >> 2) - 1] = undefined,
        r = 0; r < e.length; r += 1)
            e[r] = 0;
        for (r = 0; r < 8 * t.length; r += 8)
            e[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
        return e
    }
function a(t) {
        return function r(t) {
            return h(c(f(t), 8 * t.length))
        }(e(t))
    }
function g(t, r, e) {
        return r ? e ? _(r, t) : function n(t, r) {
            return o(_(t, r))
        }(r, t) : e ? a(t) : function i(t) {
            return o(a(t))
        }(t)
    }
var T, baiduInstance, baidu = T = function(a, b) {
        return baidu.dom ? baidu.dom(a, b) : null
    }

function encrypt(t) {
    var dobject = {
        a: "3",
        b: "4",
        c: "5",
        d: "9",
        e: "8",
        f: "7",
        g: "1",
        h: "2",
        i: "6",
        j: "0",
        k: "a",
        l: "b",
        m: "c",
        n: "d",
        o: "e",
        p: "f",
        q: "g",
        r: "z",
        s: "y",
        t: "x",
        u: "w",
        v: "v",
        w: "u",
        x: "o",
        y: "p",
        z: "q",
        0: "s",
        1: "t",
        2: "r",
        3: "h",
        4: "i",
        5: "j",
        6: "k",
        7: "l",
        8: "m",
        9: "n"
    }
        var r = T;
        var e = [];
        for (var n in t)
            t.hasOwnProperty(n) && e.push(n);
        e.sort();
        for (var i = [], o = 0, a = e.length; o < a; o++) {
            var s = e[o];
            i.push(s + "=" + t[s])
        }
        var c = g(i.join("&"))
          , h = ""
          , f = ['2', '5', '6', '0', '1', '4', '4', '0'];
        for (o = 0; o < f.length; o++)
            h += dobject[f[o]];
        return function u(t, r) {
            var e, n = "", i = t.split(""), o = r.split("");
            if (i.length >= o.length) {
                for (e = 0; e < o.length; e++)
                    n += i[e] + o[e];
                n += t.substring(e)
            } else {
                for (e = 0; e < i.length; e++)
                    n += i[e] + o[e];
                n += r.substring(e)
            }
            return n
        }(c, h)
    }






// userInfo = {
//     "token": "2e172c3107f6b85b7f41c2560c229c59",
//     "tpl": "mn",
//     "subpro": "",
//     "apiver": "v3",
//     "tt": 1700978449102,
//     "phone": "17852620129",
//     "moonshad": "b43911do8b39b1ad1c4b47ec88410c13e9",
//     "countrycode": "",
//     "gid": "1193AAF-F9A8-4310-827B-560E6409A44C",
//     "exchange": "0",
//     "isexchangeable": 1,
//     "action": "reg",
//     "alg": "v3",
//     "time": 1700978449
// }
// _encrypt = encrypt(userInfo)

function encryptaes (t) {
        var e = 'moonshad8moonsh6'
          , n = (r = CrypyoJs.enc.Utf8.parse(e),
        CrypyoJs.enc.Utf8.parse(t));
        return CrypyoJs.AES.encrypt(n, r, {
            mode: CrypyoJs.mode.ECB,
            padding: CrypyoJs.pad.Pkcs7
        }).toString()
    }
// var aes = encryptaes(_encrypt)
// console.log(aes)

function sig(t) {
        var r, e, n, i, o, a, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (n = t.length,
        e = 0,
        r = ""; e < n; ) {
            if (i = 255 & t.charCodeAt(e++),
            e === n) {
                r += s.charAt(i >> 2),
                r += s.charAt((3 & i) << 4),
                r += "==";
                break
            }
            if (o = t.charCodeAt(e++),
            e === n) {
                r += s.charAt(i >> 2),
                r += s.charAt((3 & i) << 4 | (240 & o) >> 4),
                r += s.charAt((15 & o) << 2),
                r += "=";
                break
            }
            a = t.charCodeAt(e++),
            r += s.charAt(i >> 2),
            r += s.charAt((3 & i) << 4 | (240 & o) >> 4),
            r += s.charAt((15 & o) << 2 | (192 & a) >> 6),
            r += s.charAt(63 & a)
        }
        return r
    }

var aesresult =  'r85HyX4nOaPctk+CMqsbfAxXWE8c8VGnJT1srEcvOLVJpJ8UA+WNFMoTgy9KIK4I'

console.log(sig(aesresult));


