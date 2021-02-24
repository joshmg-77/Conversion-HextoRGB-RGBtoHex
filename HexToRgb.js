/*Conversion Hex to RGB*/
const HextoRgb = hex =>{
  let r = 0, g= 0 ,b = 0;   
  if(hex.length === 7){
     r = parseInt("0x" + hex[1] + hex[2]).toString(10);
     g = parseInt("0x" + hex[3] + hex[4]).toString(10);
     b = parseInt("0x" + hex[5] + hex[6]).toString(10);
  }else if(hex.length === 4){
      r = parseInt("0x"+hex[1]).toString(10);
      g = parseInt("0x"+hex[2]).toString(10);
      b = parseInt("0x"+hex[3]).toString(10);
  }          
   return `rgb(${r},${g},${b})`;
}   


