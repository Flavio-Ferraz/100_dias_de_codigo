import pandas as pd
import numpy as np

data = {'Vendas': [100, 200, 300, 400, 500, 600, 700, 800, 900, 100]}

df = pd.DataFrame(data)

# Operações
media = df['Vendas'].mean()
mediana = df['Vendas'].median()
desvio_padrao = df['Vendas'].std()
maximo = df['Vendas'].max()
minimo = df['Vendas'].min()

#Resultados
print("Média = ",media)
print("Mmediana = ",mediana)
print("Desvio padrão = ",desvio_padrao)
print("Valor máximo = ",maximo)
print("Valor mínimo = ",minimo)