pais = ['USA', 'Canada', 'UK', 'Australia']
ciudad = ['Washington', 'Ottawa', 'London', 'Canberra']

for x, y in zip(pais,ciudad):
    print("la capital de {} es {}.".format(x, y))