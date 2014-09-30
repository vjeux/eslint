/**
 * @fileoverview Tests for settimeout-mixin rule.
 * @author Christopher Chedeau
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var eslint = require("../../../lib/eslint"),
    ESLintTester = require("eslint-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var eslintTester = new ESLintTester(eslint);
eslintTester.addRuleTest("lib/rules/settimeout-mixin", {
    valid: [
    	"setTimeout();",
        "var Component = React.createClass({ render: function() { this.setTimeout(); } });"
    ],
    invalid: [
        { code: "var Component = React.createClass({ render: function() { setTimeout(); } });", errors: [{ message: "You should use LifecycleTimersMixin", type: "CallExpression"}] },
    ]
});
