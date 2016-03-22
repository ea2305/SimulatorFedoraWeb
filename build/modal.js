function iconForm(element) {
    return "<article class='app-box'>" + "<figure onclick='" + element.action + "'>" + "<img src='" + element.img + "'>" + "</figure>" + "</article>";
}

function iconForm_title(element) {
    //Add name of application
    return "<article class='app-box'>" + "<figure onclick='" + element.action + "'>" + "<img src='" + element.img + "'>" + "<p>" + element.name + "</p>" + "</figure>" + "</article>";
}

function resizeBox(elements) {
    //Re-size box with elements of applications
    var limit = 14; //Limit of elements in lateral bar
    //Get value of length
    var sizeY_item = elements * 100 / limit;
    var marginY_item = (60 - sizeY_item) / 2;
    $('.items-box').css('height', sizeY_item + "%");
    $('.items-box').css('margin-top', marginY_item + "%");
}

function callModal() {
    var Modal = React.createClass({
        displayName: "Modal",


        clickOut: function () {
            $('#main-box').removeClass('box');
            $('#main-box').addClass('main-desktop');
        },

        componentDidMount: function () {
            $.ajax({ //Remover usuarios
                type: "GET",
                url: "../models/consult/isAdmin.php",
                success: function (data) {
                    //alert(result);
                    var json = JSON.parse(data);
                    console.log(json);

                    $('.items-box').empty();
                    $('.applications-box').empty(); //clean box

                    resizeBox(json.length);

                    json.forEach((element, index) => {
                        $('.items-box').append(iconForm(element));
                    });

                    json.forEach(element => {
                        $('.applications-box').append(iconForm_title(element));
                    });
                }
            });
            $('#main-box').removeClass('main-desktop');
            $('#main-box').addClass('box');
        },

        render: function () {
            return React.createElement(
                "div",
                { className: "modal-window", onClick: this.clickOut },
                React.createElement(
                    "div",
                    { className: "efect-corner" },
                    React.createElement("div", { className: "left-corn" }),
                    React.createElement("div", { className: "center-corn" }),
                    React.createElement("div", { "class": "right-corn" })
                ),
                React.createElement(
                    "div",
                    { className: "header-box" },
                    React.createElement(
                        "div",
                        { className: "info-box" },
                        "Fedora 23"
                    ),
                    React.createElement(
                        "div",
                        { className: "search-box" },
                        React.createElement("input", { id: "search-box", type: "text", placeholder: " Type to search..." }),
                        React.createElement(
                            "div",
                            { className: "right-search" },
                            React.createElement("span", { className: "glyphicon glyphicon-search" })
                        )
                    )
                ),
                React.createElement(
                    "nav",
                    { className: "body-box" },
                    React.createElement("div", { className: "items-box" }),
                    React.createElement("div", { className: "applications-box" }),
                    React.createElement("div", { className: "windows-box" })
                ),
                React.createElement(
                    "footer",
                    { className: "footer-box" },
                    React.createElement("div", { className: "select-box" })
                )
            );
        }

    });

    ReactDOM.render(React.createElement(Modal, null), document.getElementById('main-box'));
}

function callDesktop() {
    var Desktop = React.createClass({
        displayName: "Desktop",

        componentDidMount: function () {
            $('#main-box').removeClass('box');
            $('#main-box').addClass('main-desktop');
        },
        render: function () {
            return React.createElement(
                "div",
                { className: "efect-corner" },
                React.createElement("div", { className: "left-corn" }),
                React.createElement("div", { className: "center-corn" }),
                React.createElement("div", { className: "right-corn" })
            );
        }

    });

    ReactDOM.render(React.createElement(Desktop, null), document.getElementById('main-box'));
}