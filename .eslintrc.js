module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "es6": true,
        "jquery": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "ecmaVersion": 2017,
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "rules": {
        "indent": [
            "error",
            2,
            {
                "SwitchCase": 1
            }
        ],
        "keyword-spacing": "error",
        "linebreak-style": [
            "error",
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "no-undef": "off",
        "no-unused-vars": "off"
    }
};