function f(t) {
        var r, e = [];
        for (e[(t.length >> 2) - 1] = undefined,
        r = 0; r < e.length; r += 1)
            e[r] = 0;
        for (r = 0; r < 8 * t.length; r += 8)
            e[r >> 5] |= (255 & t.charCodeAt(r / 8)) << r % 32;
        return e
    }
function h(t) {
        var r, e = "";
        for (r = 0; r < 32 * t.length; r += 8)
            e += String.fromCharCode(t[r >> 5] >>> r % 32 & 255);
        return e
    }
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
function a(t) {
        return function r(t) {
            return h(c(f(t), 8 * t.length))
        }(e(t))
    }
function w(t, r) {
        var e = (65535 & t) + (65535 & r);
        return (t >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e
    }
function B(t, r) {
        return t << r | t >>> 32 - r
    }
function y(t, r, e, n) {
    return t < 20 ? r & e | ~r & n : t < 40 ? r ^ e ^ n : t < 60 ? r & e | r & n | e & n : r ^ e ^ n
}
function e(t) {
        return function i(t) {
            for (var r = a ? "0123456789ABCDEF" : "0123456789abcdef", e = "", n = 0; n < 4 * t.length; n++)
                e += r.charAt(t[n >> 2] >> 8 * (3 - n % 4) + 4 & 15) + r.charAt(t[n >> 2] >> 8 * (3 - n % 4) & 15);
            return e
        }(function g(t) {
            for (var r = t, e = Array(80), n = 1732584193, i = -271733879, o = -1732584194, a = 271733878, s = -1009589776, c = 0; c < r.length; c += 16) {
                for (var h = n, f = i, u = o, l = a, d = s, p = 0; p < 80; p++) {
                    e[p] = p < 16 ? r[c + p] : B(e[p - 3] ^ e[p - 8] ^ e[p - 14] ^ e[p - 16], 1);
                    var v = w(w(B(n, 5), y(p, i, o, a)), w(w(s, e[p]), (_ = p) < 20 ? 1518500249 : _ < 40 ? 1859775393 : _ < 60 ? -1894007588 : -899497514));
                    s = a,
                    a = o,
                    o = B(i, 30),
                    i = n,
                    n = v
                }
                n = w(n, h),
                i = w(i, f),
                o = w(o, u),
                a = w(a, l),
                s = w(s, d)
            }
            var _;
            return new Array(n,i,o,a,s)
        }(function o(t) {
            for (var r = 1 + (t.length + 8 >> 6), e = new Array(16 * r), n = 0; n < 16 * r; n++)
                e[n] = 0;
            for (n = 0; n < t.length; n++)
                e[n >> 2] |= t.charCodeAt(n) << 24 - 8 * (3 & n);
            return e[n >> 2] |= 128 << 24 - 8 * (3 & n),
            e[16 * r - 1] = 8 * t.length,
            e
        }(t)))
    }
function o(t) {
        var r, e, n = "0123456789abcdef", i = "";
        for (e = 0; e < t.length; e += 1)
            r = t.charCodeAt(e),
            i += n.charAt(r >>> 4 & 15) + n.charAt(15 & r);
        return i
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


function shaOne() {
    for (oo = sha = (new Date).getTime(); "00" !== (sha = e(g(sha))).toString().substr(0, 2); );
    return sha
}

console.log(shaOne());