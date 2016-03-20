(function(){

    var month = ['January','February','March','April','May','June','July','August','September','Octuber','November','December'];
    // current day
    var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

    //Get time variables, month, current day, year
    var time = new Date();
    var actMonth = time.getMonth();
    var day =  time.getDate();
    var act_day = time.getDay();
    var year = time.getFullYear();

    function formatTime(){
        return (days[act_day] + " " + day + " " + month[actMonth] + " " + year);
    }

    var BarLogin = React.createClass({

        powerOff : function(){
            //Close session

            if($('#disconect').hasClass('hidden')){
                $('#disconect').removeClass('hidden');
            }else{
                $('#disconect').addClass('hidden');
            }


            //Btn close session
            $('#btn-logout').click(()=>{
                $.ajax({
                    type: "POST",
                    url: "../models/require/logout.php",
                    cache: false,
                    success: function(result){
                        alert(result);
                        window.location.href = "../index.php";
                    }
                });
            })

        },

        getInitialState: function() {
            var option;
            $.ajax({
                type: "GET",
                url: ("http://" + document.domain + "/Simulation/models/consult/isLogin.php"),
                async: false,
                success: function(data){
                    option = (data == "true")? "Activities" : "";
                }
            });

            return { data : option };
        },

        render : function(){
            return (

                <nav className="bar">
                    <div className="activity-bar">{this.state.data}</div>
                    <div className="action-bar">
                        {this.props.date}
                    </div>
                    <div className="utilities-bar">
                        <span className="glyphicon glyphicon-volume-up"></span>
                        <span className="glyphicon glyphicon-signal"></span>
                        <span className="glyphicon glyphicon-envelope"></span>
                        <span className="glyphicon glyphicon-user" onClick={this.powerOff}></span>
                    </div>
                </nav>


            );
        }
    });

    ReactDOM.render(<BarLogin date={formatTime()}/>,document.getElementById('bar'));
})(this)
