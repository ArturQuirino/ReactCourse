"use strict";

console.log('App.js is running!');

var appHeader = {
    title: "Meu título",
    subtitle: "meu subtítulo",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        appHeader.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var onRemoveAllOptions = function onRemoveAllOptions() {
    appHeader.options = [];
    render();
};

var appRoot = document.getElementById("app");

var render = function render() {
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
            "p",
            null,
            appHeader.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAllOptions },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            appHeader.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

render();