/*
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/

var Users = { //Data of users
    "users": [{
        "name": "Elihu",
        "img": "./public/img/icon/pokemon.png"
    }, {
        "name": "Invited",
        "img": ""
    }]
};

var Formulary = React.createClass({
    displayName: "Formulary",

    returnSelect: function () {
        viewLogin(); //Return to selector
    },

    render: function () {
        data = this.props.data;
        //console.log(data);
        //Render component
        return React.createElement(
            "article",
            null,
            React.createElement(
                "div",
                { className: "picture-login" },
                React.createElement("img", { className: "user-img", src: data.img, alt: "" }),
                React.createElement(
                    "p",
                    { className: "text-login" },
                    data.name
                )
            ),
            React.createElement(
                "form",
                { className: "login-form", action: "index.html", method: "post" },
                "Password:",
                React.createElement("br", null),
                React.createElement("input", { id: "password", type: "password", name: "password", value: "" }),
                React.createElement("br", null),
                React.createElement("input", { type: "button", name: "cancel", value: "Cancel", onClick: this.returnSelect }),
                React.createElement("input", { type: "submit", name: "send", value: "Sing in" })
            )
        );
    }
});

var UserSelector = React.createClass({
    displayName: "UserSelector",

    // set values of initial state component
    getInitialState: function () {
        return Users;
    },
    //Call login for user
    selectUser: function (i) {
        console.log(i);
        viewForm(i);
    },

    //Render component
    render: function () {
        return React.createElement(
            "div",
            { id: "selector", className: "select-user" },
            this.state.users.map(function (element, index) {
                return(
                    //Set event to call login, send json
                    React.createElement(
                        "div",
                        { onClick: this.selectUser.bind(this, element) },
                        React.createElement("img", { className: "user-img", src: element.img, alt: "" }),
                        React.createElement(
                            "p",
                            null,
                            element.name
                        )
                    )
                );
            }, this)
        );
    }
});

//Inginter of login
function viewLogin() {
    ReactDOM.render(React.createElement(UserSelector, null), document.getElementById("menu"));
}
//Inginter of login
function viewForm(user) {
    ReactDOM.render(React.createElement(Formulary, { data: user }), document.getElementById("menu"));
}
//Call the principal view login.
viewLogin();