function calculateTax() {
  var subtotal = parseFloat(formulaire.montant.value);
  var taxRate = parseFloat(formulaire.interet.value);
  var tax = subtotal * (taxRate / 100);
  tax = parseFloat(tax.toFixed(2));
  alert(tax);
}
