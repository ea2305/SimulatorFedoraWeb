function callSceneExplorer(target_id){
    var Explorer = React.createClass({

        render : function(){

            return (
                <h1>Explorer :v</h1>
            );

        }

    });

    ReactDOM.render(<Explorer />, document.getElementById(target_id));
}
