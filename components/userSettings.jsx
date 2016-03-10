function callUserSettings(target_id){

    var UserSettings = React.createClass({
        changeToForm :function(index,element){
            renderForm(index);
        },

        render : function(){
            return (

                <section>
                    <button type="button" name="add" onClick={this.changeToForm.bind(this,1)}>Add user</button>
                    <button type="button" name="remove" onClick={this.changeToForm.bind(this,2)}>Remove user</button>
                    <button type="button" name="edit" onClick={this.changeToForm.bind(this,3)}>Edit user</button>
                </section>

            );
        }
    });


    var SetUsers = React.createClass({
        switcher : function(){//Selector of functions
            var option = this.props.mode.toString();
            switch (option) {
                case '1':
                    this.addUser();
                    break;
                case '2':
                    this.removeUser();
                    break;
                case '3':
                    this.editUser();
                    break;
                default: console.log('error?'); break;
            }

        },

        getData :function (){
            return {
                name : $('#name').val(),
                password : $('#password').val(),
                email : $('#email').val(),
                state : (
                    $("input[type='radio'][name='radios']:checked").val() == "Administrador"
                )? 1 : 0
            }
        },

        addUser : function(){
            console.log("agregar usuario");
            var data = this.getData();
            var dataString = 'name='+ data.name + '&password='+ data.password +
                '&email=' + data.email + "&state=" + data.state;

            $.ajax({
                type: "POST",
                url: "../models/addUsers.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert(result);
                }
            });

        },

        editUser : function(){
            console.log("agregar usuario");
            var data = this.getData();
            var dataString = 'name='+ data.name + '&password='+ data.password +
                '&email=' + data.email + "&state=" + data.state;

            $.ajax({
                type: "POST",
                url: "../models/editUsers.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert(result);
                }
            });
        },

        renderOptions : function(){
            renderOptions();
        },
        handleChange: function(index,event) {
            var option = index.toString();
            var current = new Array;
            var name = $('#name').val();
            var pass = $('#password').val()
            var email = $('#email').val()
            switch (option) {
                case '1':
                    current = [event.target.value,pass,email]
                    break;
                case '2':
                    current = [name,event.target.value,email]
                    break;
                case '3':
                    current = [name,pass,event.target.value]
                    break;
                default: break;
            }
            this.setState({
                name : current[0],
                password : current[1],
                email : current[2]
            });
        },

        getInitialState: function() {
          console.log(this.props.data);
          var state = this.props.mode;

          if(state == 1){
              return {
                  name : '',
                  password : '',
                  email : '',
                  state_a : 1,
                  state_b : 0
              };
          }else{

              var dataString = 'name='+ this.props.data.name + '&img='+ this.props.data.img;
              var resultData = null;
              $.ajax({
                  type: "GET",
                  url: "../models/getAllData.php",
                  data: dataString,
                  async: false,
                  success: function(result){
                      alert(result);
                      resultData = JSON.parse(result);
                  }
              });

              console.log(resultData);

              var state = (resultData.state == 1)? ["checked",0]:[0,"checked"];
              console.log(state);
              return {
                  name : resultData.name,
                  password : resultData.password,
                  email : resultData.email,
                  state_a : state[0],
                  state_b : state[1]
              };
          }
        },

        render : function(){
            return (

                <section>
                    <h3>{this.props.mode}</h3>
                    <p>Name</p>
                    <input id="name" type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this,1)}/><br/>
                    <p>Password</p>
                    <input id="password" type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this,2)}/><br/>
                    <p>email</p>
                    <input id="email" type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this,3)}/><br/>
                    <input id="admin-c" type="radio" name="radios" value="Administrador" checked={this.state.state_a}/>
                    <input id="user-c" type="radio" name="radios" value="Usuario" checked={this.state.state_b}/>
                    <button type="button" name="action" onClick={this.switcher}>Ok!</button>
                    <button type="button" name="Return" onClick={this.renderOptions}>Return</button>
                </section>

            );
        }
    });

    var SelectedUser = React.createClass({

        renderOptions : function(){
            renderOptions();
        },

        removeUser : function(){
            console.log("Preparado a eliminar");
            var dataString = 'name='+ this.props.data.name + '&img='+ this.props.data.img;

            $.ajax({
                type: "GET",
                url: "../models/removeUser.php",
                data: dataString,
                cache: false,
                success: function(result){
                    alert(result);
                }
            });
        },
        handleChange: function(index,event) {
            var option = index.toString();
            var current = new Array;
            var name = $('#name').val();
            var pass = $('#password').val()
            var email = $('#email').val()
            switch (option) {
                case '1':
                    current = [event.target.value,pass,email]
                    break;
                case '2':
                    current = [name,event.target.value,email]
                    break;
                case '3':
                    current = [name,pass,event.target.value]
                    break;
                default: break;
            }
            this.setState({
                name : current[0],
                password : current[1],
                email : current[2]
            });
        },

        getInitialState: function() {
          console.log(this.props.mode);
          var state = this.props.mode;

          return {
              name : this.props.data.name,
              img : this.props.data.img
          };

        },

        render : function(){
            return (

                <div>
                    <div className="card-user">
                        <img className="user-img" src={this.props.data.img} alt="" />
                        <p>{this.props.data.name}</p>
                    </div>
                    <button type="button" name="Return" onClick={this.renderOptions}>Cancel</button>
                    <button type="button" name="ReturnOptions" onClick={this.removeUser}>Borrar</button>
                </div>


            );
        }
    });


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
            console.log(a);
            if(a == 2){
                ReactDOM.render(<SelectedUser mode={2} data={i}/>,document.getElementById(target_id));
            }else{
                ReactDOM.render(<SetUsers mode={a} data={i}/>,document.getElementById(target_id));
                //ReactDOM.render(<SelectedUser mode={3} data={i}/>,document.getElementById("react"));
            }
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

    function renderForm(mode){
        console.log(mode);
        if(mode == 1){
            ReactDOM.render(<SetUsers mode={mode} data={""}/>,document.getElementById(target_id));
        }else if (mode == 2) {
            ReactDOM.render(<UserSelector mode={mode}/>,document.getElementById(target_id));
        }else{
    //        ReactDOM.render(<SetUsers mode={mode} data={""}/>,document.getElementById("react"));
            ReactDOM.render(<UserSelector mode={mode}/>,document.getElementById(target_id));
        }
    }

    function renderOptions(){
        ReactDOM.render(<UserSettings />,document.getElementById(target_id));
    }

    ReactDOM.render(<UserSettings />,document.getElementById(target_id));

}
