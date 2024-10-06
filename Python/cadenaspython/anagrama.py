from collections import Counter

def es_un_anagrama(s1,s2):
    return Counter(s1) == Counter (s2)
print("listen es un anagrama de silent {}".format(es_un_anagrama("listen","silent")))