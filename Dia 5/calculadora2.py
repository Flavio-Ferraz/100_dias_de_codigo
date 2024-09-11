def calculadora():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    
    print("Escolha a operação:")
    print("1 - Soma (+)")
    print("2 - Subtração (-)")
    print("3 - Multiplicação (*)")
    print("4 - Divisão (/)")
    operacao = input("Digite o número da operação (1/2/3/4): ")
    
    if operacao == '1':
        resultado = num1 + num2
        print(f"O resultado de {num1} + {num2} é {resultado}")
    elif operacao == '2':
        resultado = num1 - num2
        print(f"O resultado de {num1} - {num2} é {resultado}")
    elif operacao == '3':
        resultado = num1 * num2
        print(f"O resultado de {num1} * {num2} é {resultado}")
    elif operacao == '4':
        if num2 != 0: #precisamos evitar a inclusão do 0 como divisor
            resultado = num1 / num2
            print(f"O resultado de {num1} / {num2} é {resultado}")
        else:
            print("Erro! Não é possível dividir por zero.")
    else:
        print("Operação inválida! Escolha uma opção entre 1 e 4.")
    
calculadora()