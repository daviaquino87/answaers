let initialNumber: number = 18907;
let finalNumber: number = 33306;
let beautifulNumbers: number = 0;

for( initialNumber; initialNumber <= finalNumber; initialNumber++){
  let arrayNumber = initialNumber.toString().split("");
  if(arrayNumber.includes("8") && !arrayNumber.includes("3")){
    beautifulNumbers++;
  }  
}

console.log(beautifulNumbers)
