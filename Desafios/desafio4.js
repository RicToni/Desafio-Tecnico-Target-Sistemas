const estados = {
    sp : 67836.43,
    rj : 36678.66,
    mg : 29229.88,
    es : 27165.48,
    outros : 19849.53
}

const valorTotal = Object.values(estados).reduce((acc, val) => acc + val, 0);

for (const estado in estados) {
    const percentual = (estados[estado] / valorTotal) * 100;
    console.log(`${estado.toUpperCase()} representa ${percentual.toFixed(2)}% do faturamento mensal.`);
  }