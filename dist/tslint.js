"use strict";
{
    "rules";
    {
        "class-name";
        true,
            "comment-format";
        [true, "check-space"],
            "indent";
        [true, "tabs"],
            "one-line";
        [true, "check-open-brace", "check-whitespace"],
            "no-var-keyword";
        true,
            "quotemark";
        [true, "single", "avoid-escape"],
            "semicolon";
        [true, "never", "ignore-bound-class-methods"],
            "typedef-whitespace";
        [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            },
            {
                "call-signature": "onespace",
                "index-signature": "onespace",
                "parameter": "onespace",
                "property-declaration": "onespace",
                "variable-declaration": "onespace"
            }
        ],
            "no-internal-module";
        true,
            "no-trailing-whitespace";
        true,
            "prefer-const";
        true,
            "jsdoc-format";
        true,
            "no-default-export";
        true,
            "no-namespace";
        false,
            "trailing-comma";
        false,
            "object-literal-sort-keys";
        false,
            "no-empty";
        false,
            "ordered-imports";
        false,
            "member-ordering";
        false,
            "no-console";
        false,
            "no-string-literal";
        false,
            "max-classes-per-file";
        false,
            "object-literal-key-quotes";
        false,
            "variable-name";
        false,
            "typedef";
        [true, "call-signature"],
            "whitespace";
        [
            true,
            "check-branch",
            "check-decl",
            "check-operator",
            "check-module",
            "check-separator",
            "check-rest-spread",
            "check-type",
            "check-typecast",
            "check-type-operator",
            "check-preblock"
        ],
            "interface-name";
        [true, "never-prefix"];
    }
}
//# sourceMappingURL=tslint.js.map