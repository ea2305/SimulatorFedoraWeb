function callSceneExplorer(target_id) {
    var Explorer = React.createClass({
        displayName: "Explorer",


        render: function () {

            return React.createElement(
                "h1",
                null,
                "Explorer :v"
            );
        }

    });

    ReactDOM.render(React.createElement(Explorer, null), document.getElementById(target_id));
}