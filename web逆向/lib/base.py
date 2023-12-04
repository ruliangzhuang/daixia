import os
import execjs
import hashlib
import binascii
from config.config import *
from requests import session
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
from headers.headers import headers


class ARPBase(object):
    def __init__(self, *args, **kwargs):
        self.session = session()
        self.headers = headers
        self.code = kwargs.get('code', '')
        self.jsPath = jsPath

    def main(self):
        pass

    def getARPBack(self, fileName :str, funcName :str, argument: tuple):
        '''
        node执行本地js
        :param fileName: js文件名称
        :param funcName: 要执行函数名称
        :param agrument: 传递进来的参数元祖
        :return:
        '''
        # 判断传递的元组长度
        arg_length = len(argument)




        # 获取文件
        filepath = os.path.realpath(os.path.join(self.jsPath, self.code))
        # 判断是否是文件夹
        if not os.path.isdir(filepath):
            raise '传递的参数不是文件夹'
        file = os.path.join(filepath, fileName)
        if not os.path.exists(file):
            raise '不存在该js文件'
        if arg_length == 0:
            result = execjs.compile(open(file, 'r', encoding='utf-8').read()).call(funcName)
        if arg_length == 1:
            args1, = argument
            result = execjs.compile(open(file, 'r', encoding='utf-8').read()).call(funcName, args1)
        if arg_length == 5:
            arg1, arg2, arg3, arg4, arg5 = argument
            result = execjs.compile(open(file, 'r', encoding='utf-8').read()).call(funcName, arg1, arg2, arg3, arg4, arg5)

        return result

    def url_splice_get(self, params: dict):
        '''
        将params中的参数拼接成URL地址,空值后面不跟=
        :param params: 参数字典
        :return: URL字符串
        '''
        if isinstance(params, dict):
            splice_url = ''
            for key, value in params.items():
                if params.get(key, ''):
                    splice_url += f'{key}={value}&'
                else:
                    splice_url += f'{key}&'
            if splice_url[-1] == '&':
                splice_url = splice_url[:-1]
            return splice_url
        raise TypeError


    def get_aes_cbc_encrypt(self, iv=None, key=None, data_string=None):
        '''
        AES 加密 CBC模式
        :param iv: 偏移量
        :param key: 明文
        :param data: 加密字符串
        :return:
        '''
        key = binascii.a2b_hex(key)
        iv = binascii.a2b_hex(iv)
        aes = AES.new(
            key=key,
            mode=AES.MODE_CBC,
            iv=iv
        )
        raw = pad(data_string.encode('utf-8'), 16)
        aes_bytes = aes.encrypt(raw)
        return binascii.b2a_hex(aes_bytes).decode()

    def get_md5(self, data_string :str):
        '''
        md5 加密
        :param data_string: 加密字符串
        :return: 加密结果
        '''

        m = hashlib.md5()
        m.update(data_string.encode('utf-8'))
        result = m.hexdigest()
        return result



if __name__ == '__main__':
    arp = ARPBase(code='baidu')
    app = arp.get_md5('adjust=1&appVer=V1.0.0&app_version=V1.0.0&cKey=--0163B45C4AB0B881B4FC6AEC5A2B3DB752B219EB29B93FFDF653B37338929AA77D77C969EEF8D5D87C79EE86376C203437AAE359B98FF04B25267F1C14BA76D49679D05D059A3CD08412AA2776BB64AFECF0857AF1657B5BED4541047B730044F1FE68A53E3455D26FC0842A10C3BEEC42C4AB6334CC7F1D548702C6B6503600A7D4CEEC90CDF4635478E1D06F0EFF9E772FAB5C6BED62ED504F294F2A585EA7B3&channel=ysp_tx&defn=fhd&dtype=1&encryptVer=8.1&guid=lpnzlx6o_allg33wcwbt&otype=ojson&platform=5910204&rand_str=4NpIgwtFWX&sphttps=1&vid=o000009tjvb0f$IVHi9Qno?G')
    print(app)



