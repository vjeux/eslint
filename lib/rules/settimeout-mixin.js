/**
 * @fileoverview Rule to prompt people to use LifecycleTimersMixin
 * @author Christopher Chedeau
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    "use strict";

    return {
		"CallExpression": function(node) {
			if (node.callee.type === "Identifier" &&
				node.callee.name === "setTimeout") {

				var initialNode = node;
				while (node) {
					if (node.type === "CallExpression" &&
						node.callee.type === "MemberExpression" &&
						node.callee.object.type === "Identifier" &&
						node.callee.object.name === "React" &&
						node.callee.property.type === "Identifier" &&
						node.callee.property.name === "createClass") {
						context.report(initialNode, "You should use LifecycleTimersMixin");
						return;
					}
					node = node.parent;
				}

			}
		}
    };

};
