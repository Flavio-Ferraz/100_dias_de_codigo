#criação de uma calculadora básica em que o usuário fornece dois números e escolhe a operação a ser realizada:

def calculadora():
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))
    
    print("Escolha a operação:")
    print("1 - Soma (+)")
    print("2 - Subtração (-)")
    print("3 - Multiplicação (*)")
    print("4 - Divisão (/)")
    operacao = input("Digite o número da operação (1/2/3/4): ")