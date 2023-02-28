section .data
    ; Definindo as matrizes A, B e C como vetores de 4 elementos
    A: dd 1.0, 2.0, 3.0, 4.0
    B: dd 5.0, 6.0, 7.0, 8.0
    C: dd 9.0, 10.0, 11.0, 12.0
    
    ; Definindo o número de elementos em cada matriz
    TAM: equ 4
    
section .text
    global _start
    
_start:
    ; Carregando os endereços das matrizes A, B e C nos registradores
    mov eax, A
    mov ebx, B
    mov ecx, C
    
    ; Calculando a operação A*B
    ; Multiplica a primeira linha de A pelos elementos da primeira coluna de B
    ; e adiciona o resultado na variável soma
    fld dword [eax]
    fmul dword [ebx]
    fld dword [eax+4]
    fmul dword [ebx+2]
    fadd st1, st0
    fld dword [eax]
    fmul dword [ebx+1]
    fld dword [eax+4]
    fmul dword [ebx+3]
    fadd st1, st0
    ; Multiplica a segunda linha de A pelos elementos da primeira coluna de B
    ; e adiciona o resultado na variável soma
    fld dword [eax+8]
    fmul dword [ebx]
    fld dword [eax+12]
    fmul dword [ebx+2]
    fadd st1, st0
    fld dword [eax+8]
    fmul dword [ebx+1]
    fld dword [eax+12]
    fmul dword [ebx+3]
    fadd st1, st0
    ; Armazena o resultado da operação A*B na variável resultado
    fstp dword [resultado]
    
    ; Calculando a operação A*B-C
    ; Carrega o endereço da variável resultado no registrador eax
    ; Carrega o endereço da matriz C no registrador ebx
    ; Subtrai o elemento correspondente de C do elemento correspondente de A*B
    ; e armazena o resultado na variável resultado
    mov eax, resultado
    mov ebx, C
    fsubr dword [eax]
    fld dword [eax+4]
    fsubr dword [ebx+2]
    fstp dword [eax+4]
    fsubr dword [eax]
    fld dword [eax+4]
    fsubr dword [ebx+3]
    fstp dword [eax]
    
    ; Encerrando o programa
    mov eax, 1
    xor ebx, ebx
    int 0x80
