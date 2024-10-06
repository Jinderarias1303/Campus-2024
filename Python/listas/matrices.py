#matrices

def ingresardatosmat(mat):
    for f in range(len(mat)):
        print(f"ingrese datos de la fila {f+1}")
        for c in range(len(mat[f])):
            mat[f][c] = int(input(f"mat[{f+1}][{c+1}]? "))

def imprimatriz(m):
    for f in range(len(m)):
        for c in range(len(m[f])):
            print(m[f][c], end="\t")
        print("")

def crearmatriz(fil, col):
    m = []
    for f in range(fil):
        m.append([None] * col)
    return m

m = [[1,2,3],
     [4,5,6]
     ]

print(m[0])
print(m[1][1])


mat = []
mat = crearmatriz(3, 5)

#imprimatriz(mat)

# mat[2][2] = 15
# imprimatriz(mat)

ingresardatosmat(mat)
imprimatriz(mat)
