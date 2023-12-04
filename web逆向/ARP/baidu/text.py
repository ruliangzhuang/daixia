from urllib.parse import urlencode
ll= []

params = {

    "apiver": "",
    "tt": "1701175852433",
    "phone": "17852620129",

}
encoded_params = urlencode(params)
print(encoded_params)


def url_splice_get(params: dict):
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
uu = url_splice_get(ll)
print(uu)







