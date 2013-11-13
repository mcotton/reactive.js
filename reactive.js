

Reactive = function() {

	// { val: '<value>', callback: '<callback>'}
	this.watchList = {}

	this.get = function(key) {
		return (this.watchList[key]) ? this.watchList[key] : undefined
	}

	this.getValue = function(key) {
		return (this.watchList[key]) ? this.watchList[key].val : undefined
	}

	this.set = function(key, val, cb) {
		if(this.watchList[key]) {
			this.watchList[key].val = val
			if(typeof this.watchList[key].callback === 'function') this.watchList[key].callback(key, val)
		} else {
			this.watchList[key] = { val: val, callback: cb }
		}
	}

	this.watch = function(key, cb) {
		if(this.watchList[key]) { 
			this.watchList[key].callback = cb
		} else {
			this.set(key, undefined, cb);
		}
	}

	this.unwatch = function(key) {
		return (this.watchList[key]) ? delete this.watchList[key] : underfined
	}

}