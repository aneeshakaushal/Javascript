//Underscore Loopsies

arr = [1,2,3,4,5];
_.each(arr,function(n){console.log(n)});

console.log("using filter function");
var grt = _.filter(arr,function (n) { return n > 3;});
_.each(grt,function(n){console.log(n)});

console.log("using map function");
var mul = _.map(arr,function (n) { return n * 5;});
_.each(mul,function(n){console.log(n)});

//Reduce and reduceRight
var arr2 = ["you","to","birthhday","happy"];

//reduce from the left
var reduce = _.reduce(arr2,function(a,b){return a+"hello"+b;});
console.log(reduce);

//reduce from the right
var reduceRight = _.reduceRight(arr2,function(a,b){return a+"hello"+b;});
console.log(reduceRight);

//all and any

var arr3=[1,3,5,7,9];

//check whether all value are odd 
var all = _.all(arr3,function (x) {return x % 2 != 0;});
console.log(all);

//check whether any value is more than 6
var any = _.any(arr3,function (x) {return x > 6;});
console.log(any);

//pluck and invoke
var albums = [
	{'name':'Dark Side of the Moon','artist' : 'Pink Floyd', 'year' : 1973},
	{'name':'Abbey Road','artist' : 'Beatles', 'year' : 1994},
	{'name' : 'Master of puppets', 'artist':'Metallica','year':1969},
	{'name':'But i do','artist' : 'Pink Floyd', 'year' : 1972},
];

var artists = _.map(albums,function (a) {return a.artist;});
console.log(artists);

var upperArtists = _.map(albums,function (a) {return a.artist.toUpperCase();});
console.log(upperArtists);

//Using pluck
var artists_plucked = _.pluck(albums,'artist');
console.log(artists_plucked);

//Using invoke : to rum a function on all the elements of the array
var upperArtistsInvoked = _.invoke(artists_plucked,'toUpperCase');
console.log(upperArtistsInvoked);

//WHERE, MAX, MIN
var where = _.where(albums,{'artist' : 'Pink Floyd'});
console.log(_.pluck(where,'name'));

var max = _.max(albums,function(a){return a.year;});
console.log(max);

var min = _.min(albums,function(a){return a.year;});
console.log(min);

//SORTBY, GROUPBY, COUNTBY
var sortby = _.sortBy(albums,function(a){return a.year;});
console.log(_.map(sortby, function(a){return a.name + " "+a.year}));

var groupby = _.groupBy(albums,function(a){return a.artist;});
console.log(groupby);

var countby = _.countBy(albums,function(a){return a.artist;});
console.log(countby);

//ARRAY
console.log(_.first(arr));
console.log(_.last(arr));
console.log(_.initial(arr,2));
console.log(_.rest(arr,2));

//Compact, flatten and uniq
var arr4 = [1,null,3,null,5];
console.log(_.compact(arr4));
var arr5 = [1,[2,3],[4,[5,6]]];
console.log(_.flatten(arr5));
var arr6 = [1,2,2,1,3,2,4,3,5];
console.log(_.uniq(arr6));

//Zip(Take two arrays and zip together as array of array : in first array all elements at zero position
	//in the second array at 1 position and so on)
var zip = _.zip(arr,arr2);
console.log(zip.toString());

//Makes object with key value grouping similar to zip
var obj = _.object(arr,arr2);
console.log(obj);

//range : range 1 to 10
console.log(_.range(10));
//first argument till second argument minus one and difference of third argument betweent the terms
console.log(_.range(0,13,3));



//OBJECT

//keys, value, pair
//keys : prints all the keys of object
var obj = {'name':'But i do','artist' : 'Pink Floyd', 'year' : 1972};
console.log(_.keys(obj));
//value : prints all the value of object
console.log(_.values(obj));
//pairs : makes key value pair as arrays of array
console.log(_.pairs(obj).toString());

//pick and omit

//pick only certain keys of an object and returns an OBJECT
console.log(_.pick(obj,"name","artist"));
//omits certain keys of an object and returns an OBJECT
console.log(_.pick(obj,"name"));


