export function add(){
	return Array.prototype.reduce.call(arguments,function(result, item) {
		return result+item
	})
}

export function multiply() {
	Array.prototype.reduce.call(arguments,function(result, item) {
		return result*item
	})
}
