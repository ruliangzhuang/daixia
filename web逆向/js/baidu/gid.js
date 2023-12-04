guideRandom = function() {
            return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                  , a = "x" === e ? t : 3 & t | 8;
                return a.toString(16)
            }).toUpperCase()
        }
console.log(guideRandom);