>>> var answer =42; 
undefined
>>> var answer = 42;
undefined
>>> answer="thanks for all the fish"
"thanks for all the fish"
>>> x = "The answer is " + 42;
"The answer is 42"
>>> y=42+ "is the answer"
"42is the answer"
>>> "37" + 32
"3732"
>>> "43" - 4
39

>>> parseFloat("2.232");
2.232
>>> parseInt("2.232");
2
>>> "1.1" + "1.3"
"1.11.3"
>>> "+1.1" + "+1.3"
"+1.1+1.3"
>>> +"1.1" + +"1.3"
2.4000000000000004
>>> var a;
undefined
>>>  a+2
NaN
>>> var n=null
undefined
>>> console.log(n*32)
0
undefined
>>> if(true){
SyntaxError: Unexpected end of input
undefined
>>> if(true){ var x=5;} 
undefined
>>> console.log(x)
5
undefined
>>> var x; console.log(x === undefined); // logs "true" x = 3;   /**  * Example 2  */ var myvar = "my value";   (function() {   var myvar;   console.log(myvar); // undefined   myvar = "local value"; })();
SyntaxError: Unexpected end of input
undefined
>>> const prefix = 212;
undefined
>>> prefix="Hello"
"Hello"
>>> prefix
212
>>> function f(){}
undefined
>>> var f 
undefined
>>> function f() {}
undefined
>>> const f =3
TypeError: Identifier 'f' has already been declared
undefined
>>> const f=5
TypeError: Identifier 'f' has already been declared
undefined
>>> const r =3
undefined
>>> const r=23
TypeError: Identifier 'r' has already been declared
undefined

>>> var coffees = ["French Roast", "Colombian", "Kona"];
undefined
>>> var fish =["Loin", , "Angel"]
undefined
>>> fish[1]
undefined
>>> fish[0]
"Loin"
>>> var fish =["Loin","Angel",]
undefined
>>> fish[2]
undefined
>>> fish[4]
undefined
>>> fish.length
2
>>> var car = {myCar : "Saturn", getCar : CarType("Honda"),special : Sales}
ReferenceError: CarType is not defined
undefined
>>> function CarTypes(name) {   if (name == "Honda") {     return name;   } else {     return "Sorry, we don't sell " + name + ".";   } }
undefined
>>> var car = {myCar : "Saturn", getCar : CarType("Honda"),special : Sales}
ReferenceError: CarType is not defined
undefined
>>> var car = {myCar : "Saturn", getCar : CarTypes("Honda"),special : Sales}
ReferenceError: Sales is not defined
undefined
>>> Sales = "Toyota"
"Toyota"
>>> var car = {myCar : "Saturn", getCar : CarTypes("Honda"),special : Sales}
undefined
>>> car.myCar
"Saturn"
>>> car.getCar
"Honda"
>>> car.special
"Toyota"

>>> var unusualPropertyNames = {   "": "An empty string",   "!": "Bang!" }
undefined
>>> unusualPropertyNames.""
SyntaxError: Unexpected string
undefined
>>> unusualPropertyNames.[""]
SyntaxError: Unexpected token [
undefined
>>> unusualPropertyNames[""]
"An empty string"
>>> unusualPropertyNames["!"]
"Bang!"
>>> var foo = {a: "alpha", 2: "two"};
undefined
>>> foo.a
"alpha"
>>> foo[a]
undefined
>>> foo["a"]
"alpha"
>>> foo["2"]
"two"
>>> foo.2
SyntaxError: Unexpected number
undefined
>>> foo."2"
SyntaxError: Unexpected string
undefined
>>> foo["2"]
"two"

>>> x=7
7
>>> 2+3
5
>>> var1 = 3
3
>>> 3===var1
true
>>> var2=3
3
>>> var1===var2
true
>>> var3="3"
"3"
>>> var2=="3"
true
>>> var2==="3"
false
>>> var2=4
4
>>> var1!="3"
false
>>> var1!=="3"
true
>>> 3!="3"
false
>>> 4>2
true

>>> var n1=!true
undefined
>>> n1
false
>>> var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
undefined
>>> 0 in trees
true
>>> 9 in trees
false
>>> "bay" in trees
false
>>> "length" in trees
true
>>> "PI" in Math
true
>>> var theDay = new Date(1995, 12, 17);
undefined
>>> if(theDay instanceOf Date){}
SyntaxError: Unexpected identifier
undefined
>>> theDay instanceOf Date
SyntaxError: Unexpected identifier
undefined
>>> theDay instanceOf Date
SyntaxError: Unexpected identifier
undefined
>>> var theDay = new Date(1995, 12, 17);
undefined
>>> theDay instanceOf Date
SyntaxError: Unexpected identifier
undefined
>>> theDay instanceof Date
true

>>> console.log(square(5));
ReferenceError: square is not defined
undefined
>>> square = function (n) {   return n * n; }
function()
>>> console.log(square(5));
25
undefined
>>> console.log(square(5));
25
undefined
>>> function square(n){return n*n}
undefined
>>> var foo = function bar() {    foo(); console.log("hello"); };
undefined
>>> foo();
RangeError: Maximum call stack size exceeded
undefined
>>> function myConcat(separator) {    var result = "", // initialize list        i;    // iterate through arguments    for (i = 1; i < arguments.length; i++) {       result += arguments[i] + separator;    }    return result; }
SyntaxError: Unexpected end of input
undefined