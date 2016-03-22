function callSceneEditor(target_id) {
    var Editor = React.createClass({
        displayName: "Editor",


        render: function () {
            return React.createElement(
                "h1",
                null,
                "Hola :v"
            );
        }

    });

    ReactDOM.render(React.createElement(Editor, null), document.getElementById(target_id));
    closeWindow(); //End component
}