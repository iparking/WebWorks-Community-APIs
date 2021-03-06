/*
* Copyright 2013 BlackBerry Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

var joypad = require("./joypadJNEXT").joypad,
	_event = require("../../lib/event"),
    _utils = require("../../lib/utils");

module.exports = {

	// Code can be declared and used outside the module.exports object,
	// but any functions to be called by client.js need to be declared
	// here in this object.

	// These methods call into joypadJNEXT.js which handles the
	// communication through the JNEXT plugin to joypad_js.cpp
	start: function (success, fail, args) {
		success(joypad.getInstance().start());
	},
	stop: function (success, fail, args) {
		success(joypad.getInstance().stop());
	},
	add: function (success, fail) {
		console.log('Listening for Joypad events');
	},
	remove: function (success, fail) {
		console.log('Finished listening to Joypad events');
	}
};