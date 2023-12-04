from lib.base import ARPBase
from lib.getCommonMethod import getTimestamp13, getTimestamp10


class BaiDuRegister(ARPBase):
    def __init__(self, tel, *args, **kwargs):
        super(BaiDuRegister, self).__init__(*args, **kwargs)
        self.url = "https://passport.baidu.com/v2/"
        self.token = '645233852e01bc7c2b1d52efc9b68fe3'
        self.rinfo = '12992286a7ff2b2e6a22615b4069740f'
        self.tel = tel
        self.base_url = 'https://passport.baidu.com/v2/'

    def main(self):
        self.get_index()
        self.isregister()

    def get_index(self):
        url = "https://www.baidu.com/"
        self.session.get(url, headers=self.headers)
        register_url = "https://passport.baidu.com/v2/?reg&fr=old&reg"
        self.headers["Referer"] = "https://www.baidu.com"
        self.session.get(register_url, headers=self.headers)
        return True


    def isregister(self):
        timestamps = getTimestamp13()
        timestamps10 = getTimestamp10()
        shaOne = self.getARPBack('shaOne.js', 'shaOne', ())
        shadargument = f'{self.tel}Moonshadow'
        moonshad = self.getARPBack('hex_md5.js', 'hex_md5', (shadargument, ))
        gid = self.getARPBack('gid.js', 'guideRandom', ())
        userInfo = {
            "token": self.token,
            "tpl": "mn",
            "subpro": "",
            "apiver": "v3",
            "tt": timestamps,
            "phone": self.tel,
            "moonshad": moonshad,
            "countrycode": "",
            "gid": gid,
            "exchange": "0",
            "isexchangeable": 1,
            "action": "reg",
            "alg": "v3",
            "time": timestamps10
        }
        encrypt1 = self.getARPBack('sig.js', 'encrypt', (userInfo, ))
        encrypt2 = self.getARPBack('sig.js', 'encryptaes', (encrypt1, ))
        sig = self.getARPBack('sig.js', 'sig', (encrypt2, ))
        params = {
            "regphonecheck": "",
            "token": self.token,
            "tpl": "mn",
            "subpro": "",
            "apiver": "v3",
            "tt": timestamps,
            "phone": self.tel,
            "moonshad": moonshad,
            "countrycode": "",
            "gid": gid,
            "exchange": "0",
            "isexchangeable": "1",
            "action": "reg",
            "traceid": "",
            "time": timestamps10,
            "alg": "v3",
            "sig": sig,
            "elapsed": "7",
            "shaOne": shaOne,
            "rinfo": '{"fuid":"{"'+self.rinfo+'"}"}',
            "callback": "bd__cbs__3xzro4"
        }
        splice_url = self.url_splice_get(params)
        url = f'{self.base_url}?{splice_url}'
        resp = self.session.get(url, headers=self.headers)
        print(resp)
        print(resp.text)



if __name__ == '__main__':
    baidu = BaiDuRegister(tel='17625101111', code='baidu')
    baidu.main()