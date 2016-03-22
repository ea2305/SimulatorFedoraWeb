(function () {

    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December'];
    // current day
    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    //Get time variables, month, current day, year
    var time = new Date();
    var actMonth = time.getMonth();
    var day = time.getDate();
    var act_day = time.getDay();
    var year = time.getFullYear();

    function formatTime() {
        return days[act_day] + " " + day + " " + month[actMonth] + " " + year;
    }

    var BarLogin = React.createClass({
        displayName: 'BarLogin',


        powerOff: function () {
            //Close session

            if ($('#disconect').hasClass('hidden')) {
                $('#disconect').removeClass('hidden');
            } else {
                $('#disconect').addClass('hidden');
            }

            //Btn close session
            $('#btn-logout').click(() => {
                $.ajax({
                    type: "POST",
                    url: "../models/require/logout.php",
                    cache: false,
                    success: function (result) {
                        alert(result);
                        window.location.href = "../index.php";
                    }
                });
            });
        },

        openModal: function () {
            //Load previusly modal jsx
            if ($('#main-box').hasClass('box')) {
                callDesktop();
            } else {
                callModal();
            }
        },

        getInitialState: function () {
            var option;
            $.ajax({
                type: "GET",
                url: "http://" + document.domain + "/Simulation/models/consult/isLogin.php",
                async: false,
                success: function (data) {
                    option = data == "true" ? "Activities" : "";
                }
            });

            return { data: option };
        },

        render: function () {
            return React.createElement(
                'nav',
                { className: 'bar' },
                React.createElement(
                    'div',
                    { className: 'activity-bar', onClick: this.openModal },
                    this.state.data
                ),
                React.createElement(
                    'div',
                    { className: 'action-bar' },
                    this.props.date
                ),
                React.createElement(
                    'div',
                    { className: 'utilities-bar' },
                    React.createElement('span', { className: 'glyphicon glyphicon-volume-up' }),
                    React.createElement('span', { className: 'glyphicon glyphicon-signal' }),
                    React.createElement('span', { className: 'glyphicon glyphicon-envelope' }),
                    React.createElement('span', { className: 'glyphicon glyphicon-user', onClick: this.powerOff })
                )
            );
        }
    });

    ReactDOM.render(React.createElement(BarLogin, { date: formatTime() }), document.getElementById('bar'));
})(this);