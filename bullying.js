/**
 * Created by namom on 9/17/2017.
 */

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var frases = ['Imagine uma nova história para sua vida e acredite nela',
    'Se for pra desistir, desista de ser fraco',
    'Corra o risco. Se der certo, felicidade. Se não, sabedoria',
    'Toda conquista começa com a decisão de tentar',
    'Não importa o que você decidiu. O que importa é que isso te faça feliz',
    'Se você não está feliz com algo, mexa-se. Você não é uma árvore',
    'Seja a mudança que você quer ver no mundo',
    'Deixe que seus sonhos sejam maiores que seus medos',
    'Lutar sempre, vencer às vezes, desistir nunca',
    'É chique ser do bem'];

function escreverInspiracao() {
    document.write(frases[getRandomInt(0, frases.length)]);
}