/**
 * author Elihu Cruz Albores
 * version 1.2
 */
var state = false;
var stack_notes = [];//Save content in notes

$(document).ready(() =>{

    //Initialize events
    $('.bar .activity-bar').click(function(){
        console.log(state);

        loadItems(menuItems,menuApps);

        if(state){
            $('.modal-window').animate(//Get elements to changes
                                        //animation
                {
                    opacity : 0,
                    'border-radius' : 0

                },30,() => { //Exit function
                    $('.modal-window').css('z-index','10');
                    $('.left-corn').removeClass('white-corner');
                    state = false;
                });
        }else{
            $('.modal-window').animate({//Get elements to changes
                //animation
                opacity: 1,

            },3,() => {//Exit function
                $('.modal-window').css('z-index','100000');
                $('.left-corn').addClass('white-corner');
                state = true;
            });
        }
    });

    function loadItems(List,Apps){//Load all icons for item list

        $('.items-box').empty();
        $('.applications-box').empty();//clean box

        resizeBox(List.length);

        List.forEach((element,index) => {
            $('.items-box').append(iconForm(element));
        });

        Apps.forEach((element)=>{
            $('.applications-box').append(iconForm_title(element));
        })
    }

    function iconForm(element){
        return  "<article class='app-box'>" +
                    "<figure onclick='" + element.action + "'>" +
                        "<img src='" + element.img + "'>" +
                    "</figure>" +
                "</article>";
    }

    function iconForm_title(element){//Add name of application
        return  "<article class='app-box'>" +
                    "<figure onclick='" + element.action + "'>" +
                        "<img src='" + element.img + "'>" +
                        "<p>" + element.name  + "</p>" +
                    "</figure>" +
                "</article>";
    }

    function resizeBox(elements){//Re-size box with elements of applications
        var limit = 14;
        //Get value of length
        var sizeY_item = ((elements * 100) / limit);
        var marginY_item = 35 - (elements * 2.5);
        $('.items-box').css('height',sizeY_item + "%");
        $('.items-box').css('margin-top',marginY_item + "%");

    }
});

function closeWindow(){
    $('#app_' + (process - 1)).click((e) =>{//Close only this window
        var element = e.target.parentElement.parentElement.id;
        $('#' + element).animate({
            opacity : 0,
            width : 0,
            height : 0
        },200,()=>{
            $('#' + element).remove();
        });
        process--;
        activity.pop();
    });
}
