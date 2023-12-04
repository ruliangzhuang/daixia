function randstr() {
                        var t = undefined
                        t = t || 10;
                        for (var e = "ABCDEFGHIJKlMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = e.length, n = "", i = 0; i < t; i++)
                            n += e.charAt(Math.floor(Math.random() * r));
                        return n
                    }

