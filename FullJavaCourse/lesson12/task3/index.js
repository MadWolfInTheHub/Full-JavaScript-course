const cleanTransactionsList = arr => arr.filter(tr => isFinite(tr)).map(el => '$' + Number(String(el).trim()).toFixed(2));

console.log(cleanTransactionsList(['  1.9', '16.4', 17, ' 1 dollar ']));