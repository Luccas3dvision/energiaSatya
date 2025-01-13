# Contador de Energia

Um contador de energia simples com histórico de ações e interface intuitiva.

## 📋 Descrição

Este é um contador de energia que permite adicionar e remover pontos de energia, mantendo um histórico das ações realizadas.

## ⚡ Funcionalidades

### Contador Principal
- Visualização do total atual em destaque
- Valor mínimo: 0 (não permite números negativos)

### Botões de Controle
- `+1`: Adiciona 1 ponto de energia
- `+2`: Adiciona 2 pontos de energia
- `-1`: Remove 1 ponto de energia
- `-2`: Remove 2 pontos de energia
- `Descarregar`: Zera o contador

### Histórico de Ações
- Registro cronológico das ações (mais recente no topo)
- Numeração sequencial das ações
- Indicadores visuais:
  - 🟢 Verde: Adições (+1, +2)
  - 🔴 Vermelho: Subtrações (-1, -2)
  - ⚫ Cinza: Reset
- Botão para limpar histórico

## 🎯 Como Usar

1. Use os botões `+1` ou `+2` para adicionar energia
2. Use os botões `-1` ou `-2` para remover energia
3. Clique em `Descarregar` para zerar o contador
4. Acompanhe as ações no histórico
5. Use `Limpar Histórico` para recomeçar o registro

## ⚠️ Observações

- O contador não aceita valores negativos
- O histórico persiste apenas durante a sessão atual
- Todas as ações são registradas automaticamente
- O valor total é sempre exibido em tempo real

## 🔧 Requisitos

- Navegador web moderno
- JavaScript habilitado
- Não necessita instalação

## 💻 Tecnologias

- HTML5
- CSS3
- JavaScript Vanilla 