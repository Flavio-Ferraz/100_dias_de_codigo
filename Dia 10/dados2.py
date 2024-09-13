import pandas as pd
import numpy as np

dados = {
    'nomes': ['Ana', 'Bruno', 'Carlos', 'Diana', 'Eduardo'],
    'departamento': ['TI', 'RH', 'TI', 'Financeiro', 'TI'],
    'salario': [5000, 4000, 6000, 4500, 5500]
}

df = pd.DataFrame(dados)

df_ti = df.loc[df['departamento'] == 'TI']

media_salarial_ti = np.mean(df_ti['salario'])


print("Funcionários do departamento de TI:", df_ti['nomes'].tolist())
print(f"Média salarial dos funcionários de TI: {media_salarial_ti}")