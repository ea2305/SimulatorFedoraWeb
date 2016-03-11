/*
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/

var Users = { //Data of users
    "users": []
};

function loadForm(users) {
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
        console.log($('.text-login').val());
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
    sendForm: function () {
        if (data.password.length > 0) {
            return true;
        } else {
            alert("Datos vacios");
            return false;
        }
    },
    render: function () {
        //Render component
        return React.createElement(
            "article",
            { className: "formulary-so" },
            React.createElement(
                "div",
                { className: "picture-login" },
                React.createElement("img", { className: "user-img", src: this.state.data.img, alt: "" }),
                React.createElement(
                    "p",
                    { className: "text-login" },
                    this.state.data.name
                )
            ),
            React.createElement(
                "form",
                { className: "login-form", action: "./models/login.php", method: "post" },
                "Password:",
                React.createElement("br", null),
                React.createElement("input", { className: "hide", id: "text", type: "text", name: "name", value: this.state.data.name }),
                React.createElement("br", null),
                React.createElement("input", { className: "text-login", id: "password", type: "password", name: "password", value: this.state.password, onChange: this.handleChange }),
                React.createElement("br", null),
                React.createElement("input", { className: "btn-form", type: "button", name: "cancel", value: "Cancel", onClick: this.returnSelect }),
                React.createElement("input", { className: "btn-form pull-right", type: "submit", name: "send", value: "Sing in", onSubmit: this.sendForm })
            )
        );
    }
});

var UserSelector = React.createClass({
    displayName: "UserSelector",


    componentDidMount: function () {

        data = null;
        $.ajax({
            type: "POST",
            url: "./models/getUsers.php",
            async: false,
            data: "",
            success: function (result) {
                console.log(result);
                data = JSON.parse(result);
            }
        });

        this.setData(data); //Load data form ajax
        console.log(data);
    },

    setData: function (data) {
        //Damos los valores
        this.setState({
            users: data
        });
    },

    // set values of initial state component
    getInitialState: function () {
        return { users: [{ "name": "none" }, { "name": "none" }] };
    },
    //Call login for user
    selectUser: function (i, a, x) {
        console.log(i);
        viewForm(i);
    },

    renderOptions: function () {
        renderOptions();
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
                        { key: index, className: "card-user", onClick: this.selectUser.bind(this, element) },
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

(function () {
    ReactDOM.render(React.createElement(UserSelector, null), document.getElementById("menu"));
})();