num = int(input("Digite um número: "))

if num < 0:
    print("Não é possível o cálculo fatorial de número negativo.")
    
else:
    fatorial = 1
    for i in range (1, (num+1)):
        fatorial = fatorial*i
        
    print ("O fatorial de ", num, "é ", fatorial, ".")