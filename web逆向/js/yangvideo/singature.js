

function l(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(r), !0).forEach((function(e) {
                                c(t, e, r[e])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }
                            ))
                        }
                        return t

}
Mc = function(t) {
                        return t.sort()
                    }
var wc = '0f$IVHi9Qno?G'
var Dc = function(t) {
                        var e = ""
                          , r = [];
                        for (var n in t)
                            r.push(n);
                        return r = Mc(r),
                        r.forEach((function(r, n) {
                            0 != n && (e += "&"),
                            t[r]instanceof Array && (t[r] = t[r].join()),
                            e += r + "=" + decodeURI(t[r])
                        }
                        )),

                        e += wc

                        //     console.log(e)
                        // xc.a.hex_md5(e)
                        return e
                    }



function signature(userinfo){
    return Dc(l(userinfo))
}


signature()