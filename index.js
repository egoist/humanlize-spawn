'use strict'

var child = require('child_process')
var split = require('split-space')

module.exports.sync = function (command) {
	command = split(command)
	return child.spawnSync(command[0], command.slice(1), {stdio: 'inherit'})
}
