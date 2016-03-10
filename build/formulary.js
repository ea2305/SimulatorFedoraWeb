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
    sendForm: function () {},
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
                React.createElement("input", { id: "password", type: "password", name: "password", value: this.state.password, onChange: this.handleChange }),
                React.createElement("br", null),
                React.createElement("input", { type: "button", name: "cancel", value: "Cancel", onClick: this.returnSelect }),
                React.createElement("input", { type: "submit", name: "send", value: "Sing in", onClick: this.sendForm })
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

/*

var Formulary = React.createClass({
    returnSelect : function(){
        viewLogin();//Return to selector
    },
    getInitialState: function() {
        console.log($('.text-login').val());
      return {
          password : '',
          data : this.props.data
      };
    },
    handleChange: function(event) {

        this.setState({
            password : event.target.value,
            data : this.props.data
        });
    },
    sendForm : function(){

    },
    render : function(){
        //Render component
        return (
            <article >
                <div className="picture-login">
                    <img className="user-img" src={this.state.data.img} alt="" />
                    <p className="text-login">{this.state.data.name}</p>
                </div>
                <form className="login-form" action="./models/login.php" method="post">
                    Password:<br/>
                    <input className="hide" id="text" type="text" name="name" value={this.state.data.name} /><br/>
                    <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br/>
                    <input type="button" name="cancel" value="Cancel" onClick={this.returnSelect}/>
                    <input type="submit" name="send" value="Sing in" onClick={this.sendForm}/>
                </form>
            </article>
        );
    }
})

var UserSelector = React.createClass({

    componentDidMount : function(){

        data = null;
        $.ajax({
            type: "POST",
            url: "../models/getUsers.php",
            async: false,
            data: "",
            success: function (result){
                console.log(result);
                data = JSON.parse(result);
                data.map(function(e){
                    x = e.img.split("");
                    x.unshift('.');
                    x = x.join('');
                    e.img = x;
                })
            }
        });

        this.setData(data);//Load data form ajax
        console.log(data);
    },

    setData : function(data){
        //Damos los valores
        this.setState({
            users : data
        })

    },

    // set values of initial state component
    getInitialState : function(){
        return { users : [{"name" : "none"},{"name" : "none"}]};
    },
    //Call login for user
    selectUser : function(i,a,x){
        console.log(i);
        viewForm(i);
    },

    renderOptions : function(){
        renderOptions();
    },

    //Render component
    render : function(){
        return(
        <div id="selector" className="select-user" >
        {
            this.state.users.map(function(element,index){
                return (
                    //Set event to call login, send json
                    <div key={index} className="card-user" onClick={this.selectUser.bind(this,element,this.props.mode)}>
                        <img className="user-img" src={element.img} alt="" />
                        <p>{element.name}</p>
                    </div>
                );
            },this)
        }
        <button type="button" name="Return" onClick={this.renderOptions}>Return</button>
        </div>
        );
    }
});

//Inginter of login
function viewLogin(){
    ReactDOM.render(<UserSelector />,document.getElementById("menu"));
}
//Inginter of login
function viewForm(user){
    ReactDOM.render(<Formulary data={user} />,document.getElementById("menu"));
}

(function(){ReactDOM.render(<UserSelector />,document.getElementById("menu"));})()

*/

/*

var UserSelector = React.createClass({
    // set values of initial state component
    getInitialState : function(){
        return Users;
    },
    //Call login for user
    selectUser : function(i){
        console.log(i);
        viewForm(i);
    },

    //Render component
    render : function(){
        return(
        <div id="selector" className="select-user" >
        {
            this.state.users.map(function(element,index){
                return (
                    //Set event to call login, send json
                    <div key={index} className="card-user" onClick={this.selectUser.bind(this,element)}>
                        <img className="user-img" src={element.img} alt="" />
                        <p>{element.name}</p>
                    </div>
                );
            },this)
        }
        </div>
        );
    }
});


*/