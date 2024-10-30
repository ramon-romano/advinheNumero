# Jogo de Adivinhação de Número em JavaScript

Este é um simples jogo de adivinhação de número feito em JavaScript para rodar no terminal. O objetivo do jogador é adivinhar um número aleatório entre 1 e 100 com um limite de tentativas.

## Funcionalidades

- **Tentativas Limitadas**: O jogador tem 5 chances de acertar o número.
- **Feedback ao Jogador**: Informa se o número correto é maior ou menor que o palpite.
- **Encerramento**: O jogo finaliza quando o número é acertado ou quando as tentativas acabam.

## Como Funciona

1. **Gera um número aleatório** entre 1 e 100.
2. **Solicita um palpite** do jogador a cada rodada.
3. **Informa se o número é maior ou menor** que o palpite.
4. **Finaliza** o jogo quando o jogador acerta ou esgotam-se as tentativas.

## Exemplo de Uso

```bash
Tentativa 1: Advinhe um número entre 1 e 100: 50
O número é menor que 50
Tentativa 2: Advinhe um número entre 1 e 100: 25
O número é maior que 25
Tentativa 3: Advinhe um número entre 1 e 100: 35
Parabéns, você acertou o número!
