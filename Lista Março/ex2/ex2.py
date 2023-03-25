def eliminacao_de_gauss(A, b):
    n = len(A)
    # Eliminação gaussiana
    for k in range(n - 1):
        for i in range(k + 1, n):
            fator = A[i][k] / A[k][k]
            for j in range(k + 1, n):
                A[i][j] -= fator * A[k][j]
            b[i] -= fator * b[k]

    # Retrosubstituição
    x = [0] * n
    for i in range(n - 1, -1, -1):
        soma = sum(A[i][j] * x[j] for j in range(i + 1, n))
        x[i] = (b[i] - soma) / A[i][i]

    return x

def eliminacao_de_gauss_com_pivotamento(A, b):
    n = len(A)
    # Eliminação gaussiana com pivotamento parcial
    for k in range(n - 1):
        # Encontra o pivô máximo na coluna k
        max_index = max(range(k, n), key=lambda i: abs(A[i][k]))
        if max_index != k:
            # Troca as linhas k e max_index
            A[k], A[max_index] = A[max_index], A[k]
            b[k], b[max_index] = b[max_index], b[k]
        for i in range(k + 1, n):
            fator = A[i][k] / A[k][k]
            for j in range(k + 1, n):
                A[i][j] -= fator * A[k][j]
            b[i] -= fator * b[k]

    # Retrosubstituição
    x = [0] * n
    for i in range(n - 1, -1, -1):
        soma = sum(A[i][j] * x[j] for j in range(i + 1, n))
        x[i] = (b[i] - soma) / A[i][i]

    return x


# Exemplo de sistema
A = [[0.4096, 0.1234, 0.3678,0.2943],
     [0.2246, 0.3872, 0.4015,0.1129],
     [0.3645, 0.1920, 0.3781,0.0643],
     [0.1784,0.4002,0.2786,0.3927]]

b = [0.4043, 0.1550, 0.4240,0.2557]

# Resolve o sistema utilizando a eliminação de Gauss
x = eliminacao_de_gauss(A, b)

# Imprime a solução
print("Solução do sistema:")
for i, xi in enumerate(x):
    print("x{} = {}".format(i+1, xi))


y = eliminacao_de_gauss_com_pivotamento(A, b)

# Imprime a solução
print("Solução do sistema:")
for i, yi in enumerate(y):
    print("x{} = {}".format(i+1, yi))