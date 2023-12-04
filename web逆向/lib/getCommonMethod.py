from time import time

def getTimestamp13():
    '''
    返回13位时间戳
    :return: str
    '''
    return str(int(time() * 1000))

def getTimestamp10():
    return str(int(time()))



if __name__ == '__main__':
    s = getTimestamp10()
    print(s)