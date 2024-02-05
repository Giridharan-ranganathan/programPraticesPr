var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function(){
 var res = JSON.parse(request.response);
 console.log(res);
 var result_asia = res.filter((ans)=>ans.region == 'Asia');
 console.log(result_asia);
 var asiaUnderName = result_asia.map((asiaName)=>asiaName.name);
 console.log(asiaUnderName);

var capital_length = res.filter((ans) => ans.population < 200000);
console.log(capital_length);

var asiaUnderName = capital_length.map((countryName)=>countryName.name);
 console.log(asiaUnderName);
}