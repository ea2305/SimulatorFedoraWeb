/**
 * author Elihu Cruz Albores
 * version 1.2
 */
var state = false;
var stack_notes = [];//Save content in notes

function closeWindow(){
    $('#app_' + (process - 1)).click((e) =>{//Close only this window
        var element = e.target.parentElement.parentElement.id;
        $('#' + element).animate({
            opacity : 0,
        },200,()=>{
            $('#' + element).remove();
        });
        process--;
        activity.pop();
    });
}
