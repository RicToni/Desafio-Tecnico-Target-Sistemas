const faturamento = [
    22174.16, 24537.66, 26139.61, 0, 0,
    26742.66, 0, 42889.22, 46251.17, 11191.47,
    0, 0, 3847.4, 373.78, 2659,
    48924.28, 18419.2614, 0, 0, 35240.18,
    43829.17, 18235.6852, 4355.0662, 13327.10, 0,
    0, 25681.8, 1718.21, 13220.49, 8414.61
  ];
  
const faturamentosValidos = faturamento.filter(v => v > 0);

const menorFaturamento = Math.min(...faturamentosValidos);
const maiorFaturamento = Math.max(...faturamentosValidos);


const somaFaturamento = faturamentosValidos.reduce((acc, val) => acc + val, 0);
const mediaFaturamento = somaFaturamento/faturamentosValidos.length;

const diasAcimaMedia = faturamentosValidos.filter(v => v > mediaFaturamento).length;

console.log(`Menor faturamento (dias úteis): R$ ${menorFaturamento.toFixed(2)}`);
console.log(`Maior faturamento (dias úteis): R$ ${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaMedia}`);