# Git fork

# A criação de fork nos permite utilizar, modificar, trabalhar sobre o repositório "garfado".
# O fork copia um repositório presente no Github para sua conta no github. Daí, podemos fazer o clone para nosso repositorio local, onde poderemos trabalhar sobre o repositório.

# A diferença entre git fork e git clone no GitHub está no contexto e no comportamento que cada comando ou ação realiza:

# 1. git fork:
# Onde acontece: A ação de "fork" acontece na interface do GitHub (no site).
# O que faz: O fork cria uma cópia completa de um repositório na sua conta do GitHub. Essa cópia está separada do repositório original, o que significa que você pode modificar, adicionar e remover arquivos sem afetar o repositório original.
# Objetivo principal: Usado principalmente para contribuir para projetos open-source ou para ter uma cópia pessoal de um repositório sem alterar diretamente o repositório principal.
# Relação com o original: Mesmo após o fork, o repositório forkado mantém uma conexão com o repositório original, permitindo que você sincronize mudanças feitas no repositório original com o seu fork (usando pull requests, por exemplo).
# Exemplo de uso: Se você quiser contribuir para um projeto open-source, você geralmente faz um fork, trabalha no seu fork, e depois faz um pull request para que suas mudanças sejam integradas ao projeto original.
# 2. git clone:
# Onde acontece: O comando clone é usado no terminal ou no Git Bash.
# O que faz: O git clone faz uma cópia completa de um repositório (ou fork) para a sua máquina local (computador). Isso permite que você trabalhe no projeto localmente.
# Objetivo principal: É usado para obter uma cópia de qualquer repositório hospedado no GitHub (ou outro servidor Git), permitindo que você modifique os arquivos localmente, crie branches, commits, etc.
# Relação com o original: Diferente do fork, o clone não cria uma nova cópia no GitHub. Ele simplesmente copia o repositório para sua máquina, mas você ainda está conectado diretamente ao repositório original.
# Exemplo de uso: Quando você quer trabalhar em um projeto no seu computador, você executa git clone <URL do repositório>.
# Resumo:
# Fork: Cria uma cópia do repositório na sua conta GitHub, sem modificar o repositório original.
# Clone: Cria uma cópia do repositório no seu computador, permitindo trabalhar localmente.
# Eles são frequentemente usados em conjunto: você faz um fork no GitHub e depois clona o repositório forkado para o seu computador para fazer modificações.