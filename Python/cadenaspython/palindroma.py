


def es_palindroma(s):
    palindroma = s[::-1]
    if(s==palindroma):
        return True
    return False
print("racecar es palindroma{}".format(es_palindroma("racecar")))