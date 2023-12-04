import json
import requests
from lib.base import ARPBase
from lib.getCommonMethod import getTimestamp13, getTimestamp10

class YangVideo(ARPBase):
    def __init__(self, *args, **kwargs):
        super(YangVideo, self).__init__(*args, **kwargs)
        self.video_id = 'o000009tjvb'
        self.headers = {
            "authority": "player-api.yangshipin.cn",
            "accept": "application/json, text/plain, */*",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "content-type": "application/json;charset=UTF-8",
            "origin": "https://www.yangshipin.cn",
            "referer": "https://www.yangshipin.cn/",
            "sec-ch-ua": "\"Google Chrome\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36",
            "yspappid": "519748109"
        }
        self.iv = '9a7e7d23610266b1d9fbf98581384d92'
        self.key = '48e5918a74ae21c972b90cce8af6c8be'

    def main(self):
        self.get_download_video()

    def get_download_video(self):

        guid = self.getARPBack('guid.js', 'guid', ())
        ckey_tuple = (self.video_id, getTimestamp10(), 'V1.0.0', guid, '5910204')
        ckey_str = self.getARPBack('ckey.js', 'Wa', ckey_tuple)
        ckey = '--01' + self.get_aes_cbc_encrypt(iv=self.iv, key=self.key, data_string=ckey_str).upper()
        randstr = self.getARPBack('randstr.js', 'randstr', ())
        data = {
            "vid": self.video_id,
            "platform": "5910204",
            "guid": guid,
            "cKey": ckey,
            "adjust": 1,
            "encryptVer": "8.1",
            "dtype": "1",
            "sphttps": "1",
            "otype": "ojson",
            "appVer": "V1.0.0",
            "app_version": "V1.0.0",
            "rand_str": randstr,
            "channel": "ysp_tx",
            "defn": "fhd"
        }
        signaturestr = self.getARPBack('singature.js', 'signature', (data,))
        signature = self.get_md5(signaturestr)
        print(signature)
        data['signature'] = signature
        data = json.dumps(data, separators=(',', ':'))
        url = "https://player-api.yangshipin.cn/v1/player/get_video_info"
        cookies = {
            "guid": guid,
            "versionName": "99.99.99",
            "vplatform": "109",
            "platformVersion": "Chrome",
            "deviceModel": "119",
            "updateProtocol": "1"
        }
        response = requests.post(url, headers=self.headers, cookies=cookies, data=data)

        print(response.text)





if __name__ == '__main__':
    ys = YangVideo(code='yangvideo')
    ys.main()