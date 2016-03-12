/*
================================================================================
    FOMRULARY COMPENENT
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.5
================================================================================
*/

function callSceneInformation(target_id) {
    var dataSystem = { //Temporal definition
        "tag": [{ "info": "University" }, { "info": "Engineering" }, { "info": "Class" }, { "info": "Professor" }, { "info": "Developer" }, { "info": "Id" }],
        "information": [{ "info": "Universidad Politécnica de Chiapas" }, { "info": "Software Development Engineering" }, { "info": "5th A" }, { "info": "Dr. Juan Carlos López Pimentel" }, { "info": "Elihu Alejandro Cruz Albores" }, { "info": "143405" }]

    };

    var Scene = React.createClass({
        displayName: "Scene",


        render: function () {
            return React.createElement(
                "div",
                { className: "infoSystem-content" },
                React.createElement(
                    "div",
                    { className: "options-infoSystem" },
                    React.createElement(
                        "div",
                        { className: "elements-info" },
                        React.createElement(
                            "div",
                            { className: "item-info" },
                            "Identity"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "infoSystem-info" },
                    React.createElement(
                        "div",
                        { className: "info-system" },
                        React.createElement(
                            "figure",
                            null,
                            React.createElement("img", { src: "../public/img/icon/fedora.png", alt: "fedora" }),
                            React.createElement("img", { src: "../public/img/icon/upchiapas.png", alt: "fedora" })
                        ),
                        React.createElement(
                            "p",
                            { className: "title-system" },
                            "Fedora 23"
                        ),
                        React.createElement(
                            "div",
                            { className: "position-info" },
                            React.createElement(LineData, { data: this.props.data })
                        )
                    ),
                    React.createElement(
                        "p",
                        null,
                        "11 / Marzo / 2016"
                    )
                )
            );
        }

    });

    var LineData = React.createClass({
        displayName: "LineData",

        render: function () {
            var temp = this.props.data;
            return React.createElement(
                "div",
                { className: "position-info" },
                React.createElement(
                    "div",
                    { className: "left-info" },
                    temp.tag.map(e => {
                        return React.createElement(
                            "p",
                            null,
                            e.info
                        );
                    })
                ),
                React.createElement(
                    "div",
                    { className: "right-info" },
                    temp.information.map(e => {
                        return React.createElement(
                            "p",
                            null,
                            e.info
                        );
                    })
                )
            );
        }
    });

    ReactDOM.render(React.createElement(Scene, { data: dataSystem }), document.getElementById(target_id));

    closeWindow(); //End component
}