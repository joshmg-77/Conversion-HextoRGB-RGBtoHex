const RgbtoHex = (rgb)=>{
  let getNumbers = rgb.replace(/(\brgb)?([()])/g,"");    
  let numbers = getNumbers.split(",");    
  let hexa0 = parseInt(numbers[0]).toString(16);
  let hexa1 = parseInt(numbers[1]).toString(16);
  let hexa2 = parseInt(numbers[2]).toString(16);
  
  return `#${hexa0+hexa1+hexa2}`;    
}
