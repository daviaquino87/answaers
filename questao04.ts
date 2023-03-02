function AddMaskToDocument(document:string):string{
  const documentFormate = document.replace(/\D/g, '');
  const lengthDocument = documentFormate.length;

  if(lengthDocument == 11){
    return documentFormate.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  if(lengthDocument == 14){
    return documentFormate.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  return 'informed invalid document'
}

console.log(AddMaskToDocument("081132653"))