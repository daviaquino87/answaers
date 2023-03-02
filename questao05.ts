
function investimento() {
  let saldoAna = 0;
  let saldoPaula = 0;
  let meses = 0;

  function investir() {
    let jurosAna = saldoAna * (0.8 / 100)
    let jurosPaula = saldoPaula * (0.2 / 100)
    saldoAna += 500 + jurosAna;
    saldoPaula += 1000 + jurosPaula;
    meses++
  }

  do {
    investir()
  } while (saldoAna < saldoPaula)

  return meses;
}

console.log(investimento());
