
function guid(){
    var e = (new Date).getTime().toString(36)
      , r = Math.random().toString(36).replace(/^0./, "");
    t = "".concat(e, "_").concat(r)
    return t
}
// s  = guid()
// console.log(s)
