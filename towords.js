Number.prototype.toWords = function(language) {
 
var Supportedlanguages={"en":true, "fr":true};
language=language|| window.navigator.userLanguage || window.navigator.language || "en" ;



var language=language in Supportedlanguages ?
            language
            :language&&language.substr(0, language.indexOf('-')) in Supportedlanguages 
			? language.substr(0, language.indexOf('-'))
			: "en";
			

switch (language) {
case "fr":{

 var c = { 10 : "dix" , 1 : "un" , 11 : "onze" , 2 : "deux" , 12 : "douze" , 20 : "vingt" , 3 : "trois" , 13 : "treize" , 30 : "trente" , 4 : "quatre" , 14 : "quatorze" , 40 : "quarante" , 5 : "cinq" , 15 : "quinze" , 50 : "cinquante" , 6 : "six " , 16 : "seize" , 60 : "soixante" , 7 : "sept" , 17 : "dix-sept" , 70 : "soixante-dix" , 8 : "huit" , 18 : "dix-huit" , 80 : "quatre-vingt" , 9 : "neuf" , 19 : "dix-neuf" , 90 : "quatre-vingt-dix"}, f = [ "", " mille", " million", " milliard", " billion"," billiard"," trillion"," trilliard"] ;
  if (Math.pow(10,3*f.length) <= this) {
  console.log("le nombre est trop grand");
    return this;
  }
  if (c[this]) {
    return c[this];
  }
  if (0 == this) {
    return "zéro";
  }
  for (var d = f.length-1, e = this, b = "";0 < e;) {
    if (1 <= e / Math.pow(10, 3 * d)) {
      var a = e / Math.pow(10, 3 * d) ^ 0;
	  
      100 <= a && (b +=((a/100)^ 0)>1?c[a / 100 ^ 0]+" ":"",b+="cent", a %= 100,a==0 && (b += "s"),b+=" ");
	 
	if(20 <= a){
	a>=80 &&(b+=c[80],a-=80,a==0 && (b += "s"));
	a>=60 &&(b+=c[60],a-=60);
	20 <= a && (b += " "+c[10 * (a / 10 ^ 0)], a %= 10);
	b+=(a == 11 || a== 1)?" et ": 0 < a ? "-":"" ;
	}
	 
      0 < a && (b += c[a]);
      b += " " +f[d];
	  b+= e/Math.pow(10, 3 * d) >= 2 && d > 1 ?"s ":" ";
      e %= Math.pow(10, 3 * d);
    }
    --d;
  }
  return b;
  
  break;}


default:
case "en":{
  var c = {10:"ten", 1:"one", 11:"eleven", 2:"two", 12:"twelve", 20:"twenty", 3:"three", 13:"thirteen", 30:"thirty", 4:"four", 14:"fourteen", 40:"forty", 5:"five", 15:"fifteen", 50:"fifty", 6:"six", 16:"sixteen", 60:"sixty", 7:"seven", 17:"seventeen", 70:"seventy", 8:"eight", 18:"eighteen", 80:"eighty", 9:"nine", 19:"nineteen", 90:"ninety"}, f = ["", "thousand", "million", "billion", "trillion","quadrillion","quintillion","sextillion"];
  if (Math.pow(10,3*f.length) <= this) {
  console.log("the nubmber is too big");
    return this;
  }
  if (c[this]) {
    return c[this];
  }
  if (0 == this) {
    return "zero";
  }
  for (var d = f.length-1, e = this, b = "";0 < e;) {
    if (1 <= e / Math.pow(10, 3 * d)) {
      var a = e / Math.pow(10, 3 * d) ^ 0;
      100 <= a && (b += c[a / 100 ^ 0] + " hundred", a %= 100, 0 < a && (b += " and "));
      20 <= a && (b += c[10 * (a / 10 ^ 0)], a %= 10, 0 < a &&  (b += "-"));
     
	  0 < a && (b += c[a]);
      b += " " + f[d] + " ";
      e %= Math.pow(10, 3 * d);
    }
    --d;
  }
  return b;
  
  break;}}
  
};