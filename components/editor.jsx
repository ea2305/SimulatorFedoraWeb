function callSceneEditor(target_id){
    var Editor = React.createClass({

        render : function(){
            return (<h1>Hola :v</h1>)
        }

    });


    ReactDOM.render(<Editor />, document.getElementById(target_id));
    closeWindow();//End component
}
