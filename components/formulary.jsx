/*
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.1
*/

var Users = {//Data of users
    "users":[]
}

function loadForm(users){
    alert(users);
    Users = {"users" : users};
    //Call the principal view login.
    viewLogin();
}

var Formulary = React.createClass({
    returnSelect : function(){
        viewLogin();//Return to selector
    },
    getInitialState: function() {
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
    render : function(){
        //Render component
        return (
            <article >
                <div className="picture-login">
                    <img className="user-img" src={this.state.data.img} alt="" />
                    <p className="text-login">{this.state.data.user}</p>
                </div>
                <form className="login-form" action="index.html" method="post">
                    Password:<br/>
                <input className="hide" id="text" type="name" name="name" value={this.state.data.user}/><br/>
                    <input id="password" type="password" name="password" value={this.state.Password} onChange={this.handleChange}/><br/>
                    <input type="button" name="cancel" value="Cancel"onClick={this.returnSelect}/>
                    <input type="submit" name="send" value="Sing in"/>
                </form>
            </article>
        );
    }
})

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
                    <div key={index} onClick={this.selectUser.bind(this,element)}>
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

//Inginter of login
function viewLogin(){
    ReactDOM.render(<UserSelector />,document.getElementById("menu"));
}
//Inginter of login
function viewForm(user){
    ReactDOM.render(<Formulary data={user} />,document.getElementById("menu"));
}
