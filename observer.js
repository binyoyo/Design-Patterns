/**
 * Created by binyoyo on 15/11/9.
 */
function ObserverList() {
	this.observerList = [];
}

ObserverList.prototype.add = function(obj) {
	this.observerList.push(obj);
}

ObserverList.prototype.empty = function() {
	this.observerList = [];
}

ObserverList.prototype.count = function(){
	return this.observerList.length;
}

ObserverList.prototype.get = function(index){
	if (index > -1 && index < this.count()) {
		return this.observerList[index];
	} else {
		return this.observerList[0];
	}
}

ObserverList.prototype.indexOf = function(obj) {
	var pointer = -1;
	for(var i = 0; i < this.count(); i++){
		if (this.observerList[i] === obj) {
			pointer = i;
			break;
		}
	}
	return pointer;
}

ObserverList.prototype.remove = function(index){
	if (index > -1 && index < this.count()) {
		this.observerList.splice(index, 1);
	}
}

function Subject() {
	this.observers = new ObserverList();
}

Subject.prototype.add = function(observer){
	this.observers.add(observer);
}

Subject.prototype.remove = function(observer){
	var index = this.observers.indexOf(observer);
	this.observers.remove(index);
}

Subject.prototype.notify = function(context){
	var length = this.observers.count();
	for (var i = 0; i < length; i++) {
		this.observers.get(i).Update(context);
	}
}






