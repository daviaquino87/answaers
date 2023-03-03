
function investment() {
  let paulaBalance: number = 0;
  let anaBalance: number = 0;
  let months: number = 0;

  function invest() {
    let feesAna = paulaBalance * (0.8 / 100)
    let feesPaula = anaBalance * (0.2 / 100)
    paulaBalance += 500 + feesAna;
    anaBalance += 1000 + feesPaula;
    months++
  }

  do {
    invest()
  } while (paulaBalance < anaBalance)

  return months;
}

console.log(investment());
