function callSceneNotes(target_id) {
    var element = 0;
    var select_note = "";

    var cleanArray = element => {
        for (var i = 0; i < stack_notes.length; i++) {
            if (stack_notes[i] == element) {
                stack_notes.splice(i, 1);
            }
        }
    };

    var Notes = React.createClass({
        displayName: "Notes",


        getInitialState: function () {
            return { notes: stack_notes };
        },

        addNote: function (event) {
            stack_notes.push("Escriba Aqui!");
            this.setState({ notes: stack_notes });
        },
        saveNotes: function () {
            var temp = document.getElementsByClassName('simple-note');
            for (var i = 0; i < temp.length; i++) {
                stack_notes[i] = temp[i].value;
            }
        },

        removeNote: function () {
            var element = $('#' + select_note);
            element.animate({
                opacity: 0,
                width: 0,
                height: 0
            }, 300, () => {
                cleanArray(element[0].value);
                $('#' + select_note).remove();
            });
        },

        render: function () {
            return React.createElement(
                "div",
                null,
                React.createElement(ItemNote, { items: this.state.notes }),
                React.createElement(
                    "div",
                    { className: "keep-settings" },
                    React.createElement(
                        "button",
                        { id: "remove-note", className: "note-btn", onClick: this.removeNote },
                        "Eliminar"
                    ),
                    React.createElement(
                        "button",
                        { id: "save-note", className: "note-btn", onClick: this.saveNotes },
                        "Guardar"
                    ),
                    React.createElement(
                        "button",
                        { id: "add-note", className: "note-btn", onClick: this.addNote },
                        "Añadir"
                    )
                )
            );
        }
    });

    var ItemNote = React.createClass({
        displayName: "ItemNote",


        selectNote: function (e) {
            //get value of id with react event
            //e.currentTarget.id
            select_note = e.currentTarget.id;
        },

        render: function () {
            var temp = this.props;
            return React.createElement(
                "div",
                { className: "keep-app" },
                temp.items.map(e => {
                    var content = "note_" + element++;
                    return React.createElement(
                        "textarea",
                        { id: content, name: "comment", className: "simple-note", onClick: this.selectNote },
                        e
                    );
                })
            );
        }

    });

    ReactDOM.render(React.createElement(Notes, null), document.getElementById(target_id));
    closeWindow(); //End component
}