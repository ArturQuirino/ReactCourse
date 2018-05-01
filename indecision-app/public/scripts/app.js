"use strict";

console.log('App.js is running!');

var appHeader = {
    title: "Meu título",
    subtitle: "meu subtítulo",
    options: ['one', 'two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appHeader.title
    ),
    appHeader.subtitle && React.createElement(
        "p",
        null,
        appHeader.subtitle
    ),
    appHeader.options.length > 0 ? React.createElement(
        "p",
        null,
        "Here are your options"
    ) : React.createElement(
        "p",
        null,
        "No options"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            appHeader.options[0]
        ),
        React.createElement(
            "li",
            null,
            appHeader.options[1]
        )
    )
);

var count = 0;
var addOne = function addOne() {
    console.log("addOne");
};

var minusOne = function minusOne() {
    console.log("minusOne");
};

var reset = function reset() {
    console.log("reset");
};

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: minusOne },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset },
        "Reset"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
