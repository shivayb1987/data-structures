function forLoop(n, callback) {
	for (let i=0; i<n; i++) {
		callback(i);
	}
}

module.exports = forLoop;