/*
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/

var Users = { //Data of users
    "users": []
};

function loadForm(users) {
    alert(users);
    Users = { "users": users };
    //Call the principal view login.
    viewLogin();
}

var Formulary = React.createClass({
    displayName: "Formulary",

    returnSelect: function () {
        viewLogin(); //Return to selector
    },
    getInitialState: function () {
        return {
            password: '',
            data: this.props.data
        };
    },
    handleChange: function (event) {
        this.setState({
            password: event.target.value,
            data: this.props.data
        });
    },
    render: function () {
        //Render component
        return React.createElement(
            "article",
            null,
            React.createElement(
                "div",
                { className: "picture-login" },
                React.createElement("img", { className: "user-img", src: this.state.data.img, alt: "" }),
                React.createElement(
                    "p",
                    { className: "text-login" },
                    this.state.data.user
                )
            ),
            React.createElement(
                "form",
                { className: "login-form", action: "index.html", method: "post" },
                "Password:",
                React.createElement("br", null),
                React.createElement("input", { className: "hide", id: "text", type: "name", name: "name", value: this.state.data.user }),
                React.createElement("br", null),
                React.createElement("input", { id: "password", type: "password", name: "password", value: this.state.Password, onChange: this.handleChange }),
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
                        { key: index, onClick: this.selectUser.bind(this, element) },
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