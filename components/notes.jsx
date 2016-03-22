/*
================================================================================
    NOTES COMPENENT
    Start all methods of login and change view
    author : Elihu A. Cruz Albores
    version : 1.0.6
================================================================================
*/

function callSceneNotes(target_id){

    var stack_notes = []//Container notes
    var element = 0;//Element note
    var select_note = "";// Current note

    var cleanArray = (element) =>{//CLear array of notes
        for(var i = 0; i < stack_notes.length ; i++){
            if(stack_notes[i] == element){
                stack_notes.splice(i,1);
            }
        }
    }

    var Notes = React.createClass({

        getInitialState : function(){
            var dataUser = this.getCurrentUser();
            var user = this.getAllDataUser(dataUser)[0];
            console.log(user);
            var dataString = 'id='+ user.id;
            console.log(dataString);
            var resultData = null;
            $.ajax({
                type: "GET",
                url: "../models/require/getAllNotes.php",
                data: dataString,
                async: false,
                success: function(result){
                    resultData = JSON.parse(result);
                }
            });

            resultData.map(function(e){
                stack_notes.push({id : e.id, text : e.text, key_note : e.key_note});
            });

            return {notes : stack_notes};
        },

        addNote : function(event){
            var user = this.getAllDataUser(this.getCurrentUser());
            console.log();
            var temp_key =
                (this.state.notes.length != 0)?
                    (parseInt(this.state.notes[this.state.notes.length - 1].key_note) + 1) : 1;
            stack_notes.push(
                {
                    id : user.id,
                    text : "Write here...",
                    key_note : temp_key
                }
            );
            this.setState({notes : stack_notes});
        },

        getCurrentUser : function(){
            data = null;
            $.ajax({
                type: "POST",
                url: "../models/consult/Im.php",
                async: false,
                data: "",
                success: function (result){
                    //alert(result);
                    data = result;
                }
            });
            return data;
        },

        getAllDataUser : function(id){
            var dataString = 'id='+ id;
            var resultData = null;
            $.ajax({
                type: "GET",
                url: "../models/require/getAllData.php",
                data: dataString,
                async: false,
                success: function(result){
                    resultData = JSON.parse(result);
                }
            });
            return resultData;
        },

        saveNotes : function(){
            //Save notes
            var user = this.getAllDataUser(this.getCurrentUser());
            var temp = document.getElementsByClassName('simple-note');

            var dataString = 'id='+ user.id;

            $.ajax({//Remover usuarios
                type: "POST",
                url: "../models/require/removeIdNote.php",
                data: dataString,
                cache: false,
                success: function(result){
                    //alert(result);
                }
            });

            var prev = new Array;
            for (var i = 0; i < temp.length ; i++){
                console.log(temp[i]);
                if(temp[i].value.length > 0){
                    var content = {
                        id : parseInt(user.id),
                        text : temp[i].value,
                        key_note : parseInt(temp[i].id)
                    };
                    var dataString = 'id='+ parseInt(content.id) + '&text='+ content.text + '&key_note='+ parseInt(content.key_note);
                    $.ajax({//Remover usuarios
                        type: "POST",
                        url: "../models/require/updateNotes.php",
                        data: dataString,
                        cache: false,
                        success: function(result){//alert(result);
                        }
                    });
                    prev.push(content)
                }
            }

            stack_notes = prev;
            console.log(prev);

        },

        removeNote : function(){

            var element = $('#' + select_note);
            var key_note = element.attr('id');
            var user = this.getAllDataUser(this.getCurrentUser());
            var dataString = 'id='+ parseInt(user.id) + '&key_note='+ parseInt(key_note);
            $.ajax({//Remover usuarios
                type: "POST",
                url: "../models/require/removeNote.php",
                data: dataString,
                cache: false,
                success: function(result){
                    //alert(result);
                }
            });
            element.animate({
                opacity : 0,
                width : 0,
                height : 0
            },300,() => {
                cleanArray(element[0].value);
                $('#' + select_note).remove();
            });
        },

        render : function(){
            return(
                    <div>
                        <ItemNote items={this.state.notes} />
                        <div className='keep-settings'>
                            <button id='remove-note' className='note-btn' onClick={this.removeNote}>Eliminar</button>
                            <button id='save-note' className='note-btn' onClick={this.saveNotes}>Guardar</button>
                            <button id='add-note' className='note-btn' onClick={this.addNote}>Añadir</button>
                        </div>
                    </div>
            );
        }
    });

    var ItemNote = React.createClass({

        selectNote : function(e){
            //get value of id with react event
            //e.currentTarget.id
            select_note = e.currentTarget.id;
        },

        render : function(){
            var temp = this.props;
            return(
                <div className='keep-app'>
                {

                    temp.items.map((e) =>{
                        return (
                            <textarea id={e.key_note} name='comment' className='simple-note' onClick={this.selectNote}>
                                {e.text}
                            </textarea>
                        )
                    })
                }
                </div>
            );
        }

    });

    ReactDOM.render(<Notes />,document.getElementById(target_id));
    closeWindow();//End component
}
