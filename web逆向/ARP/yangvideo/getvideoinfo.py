import requests
import json


headers = {
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
cookies = {
    "guid": "lpphn05f_dn7818hlfhq",
    "versionName": "99.99.99",
    "vplatform": "109",
    "platformVersion": "Chrome",
    "deviceModel": "119",
    "updateProtocol": "1",
    # "videoHistory_nouser": "%5B%7B%22vid%22%3A%22o000009tjvb%22%2C%22cid%22%3A%22%22%2C%22recordTime%22%3A69.913428%7D%5D",
    # "versionCode": "999999K1JzdJnwOu1701526602572",
    # "seqId": "1000011",
    # "request-id": "999999JS9dVCTO5o1701527233019"
}

url = "https://player-api.yangshipin.cn/v1/player/get_video_info"
data = {
    "vid": "r000022ea9l",
    "platform": "5910204",
    "guid": "lpnzlx6o_allg33wcwbt",
    "cKey": "--0199E965348A66D1FEF178CB7BF741BA9A796E8AABCB620F84EF853B023AB71DB6FE9778B040B49CD6C8C3FE8DEA2A72464232EDA42ADB601A4EB9DD5BA184ED3720E9EEE580D0F26D4188D44CCE2A3C9CBF1681BB0D1BC48EBCB8B1C7BC8A69E3AC83223ED1A0DC7D406A0E033355CB958C0EF50A35D3E8E106EF95579C5888AD9828289C45C868B01324D489947802C83D2C8C117713DC0D25A1B297196C08AD",

    "adjust": 1,
    "encryptVer": "8.1",
    "dtype": "1",
    "sphttps": "1",
    "otype": "ojson",
    "appVer": "V1.0.0",
    "app_version": "V1.0.0",
    "rand_str": "TFiAVkKQE7",
    "channel": "ysp_tx",
    "defn": "fhd",
    "signature": "fb0a6e1daddb31d5802617d75c58dced"
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, cookies=cookies, data=data)

print(response.text)
print(response)