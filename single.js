/**
 * Created by binyoyo on 15/11/9.
 */
var single = (function () {
	var ret;
	function init() {
		//private
		function privateMethod() {
			console.log("private method");
		}
		var privateVar = "private value";
		return {
			//public
			public: function () {
				console.log("public method");
			},
			publicVar: "public value",
			getPrivateVar: function () {
				return privateVar;
			},
			getPrivateMethod: privateMethod
		};
	}
	return {
		getRet: function () {
			if (!ret) {
				ret = init();
			}
			return ret;
		}
	}
})();

var singleTon = single.getRet();
var publicMethod = singleTon.public();
var publicVal = singleTon.publicVar;
var privateVar = singleTon.getPrivateVar();

console.log('public', publicMethod);
console.log('public value', publicVal);
console.log('private value', privateVar);
