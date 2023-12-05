const Format_currency = new Intl.NumberFormat(undefined ,{
  currency:"USD",
  style:"currency",
});
 const FormatCurrency = (number)=>{
    return Format_currency.format(number);
 }

 export default FormatCurrency;