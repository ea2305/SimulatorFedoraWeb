var Users = { //Data of users
    "users": [{
        "name": "Elihu Cruz",
        "img": "./public/img/icon/pokemon.png"
    }, {
        "name": "Invited",
        "img": ""
    }]
};
var Formulary = React.createClass({
    displayName: "Formulary",

    render: function () {
        var data = this.props.data.users;
        console.log(data);
        return React.createElement(
            "div",
            null,
            React.createElement(
                "article",
                { className: "picture-login" },
                React.createElement("img", { src: data[0].img, alt: "" }),
                React.createElement(
                    "p",
                    null,
                    data[0].name
                )
            ),
            React.createElement(
                "form",
                { "class": "", action: "index.html", method: "post" },
                "Password:",
                React.createElement("br", null),
                React.createElement("input", { type: "password", name: "password", value: "" }),
                React.createElement("br", null)
            )
        );
    }
});

ReactDOM.render(React.createElement(Formulary, { data: Users }), document.getElementById("menu"));