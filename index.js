'use strict'

var child = require('child_process')

module.exports.sync = function (command) {
	if (typeof command !== 'string') {
		throw new TypeErroe('Expected a string')
	}
	command = command.split(' ')
	child.spawnSync(command[0], command.slice(1), {stdio: 'inherit'})
}
