function parseCsv(fname) {
   var io = java.io;
	var ret = [];
	var is = new io.BufferedReader(
			new io.FileReader(new io.File(scriptBase, 'test.csv')));
	var line;
	while ((line = is.readLine()) != null) {
		ret.push(line.split(","));
	}
	return ret;
}

function Range(low, high) { 
   this.low = low; this.high = high; this.current = new java.util.concurrent.atomic.AtomicInteger();
}
Range.prototype.next = function() {
   var cur = this.current.getAndIncrement();
   return (this.low + cur % (this.high-this.low)).toFixed();
};
