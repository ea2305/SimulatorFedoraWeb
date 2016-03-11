/**
 *@author Elihu Alejandro Cruz Albores
 *@version 1.3
 */

var process = 0;//index of proces launched
var activity = [];//Process actives

var startApp = (app) => {
    switch(app){
        case 'calculator' :
            Launch(app,'Basic Mode');
            $('#scene_' + (process++)).append(app_1);
            startCalculator();
            break;
        case 'notes' :
            Launch(app,'Notes');
            //startNotes();
            callSceneNotes("scene_" + (process++));
            break;
        case 'information' :
            Launch(app,'Information');
            //startInfo();
            callSceneInformation("scene_" + (process++));
            break;
        case 'userSetting' :
        console.log('kffff');
            Launch(app,'UserSetting');
            //startInfo();
            callUserSettings("scene_" + (process++));
            break;
    }
}

var isRunning = (process) => {
    for(var i = 0; i < activity.length ; i++){
        if(activity[i] == process){return true;}
    }
    return false;
}

//Content scene
var stage = (title) => {
    var header = "<div class='stage-header'>" +
        "<button id='app_" + process + "' type='button' class='action-stage  pull-right glyphicon glyphicon-remove'></button>" +
        "<button id='app_search_" + process + "' type='button' class='action-stage  pull-left glyphicon glyphicon-edit'></button>" +
        "<h4>" + title + "</h4>"+
        "</div>";

    var app = "<div id='windows_" + process + "' class='stage-master '>" + header + "<div id='scene_" + process + "' class='stage'></div>" + "</div>";
    return app;

};

var hiddeModal = () =>{
    $('.modal-window').animate(
    //Get elements to changes
    //animation
    {opacity : 0},30,() => {
        //Exit function
        console.log('Animation finished');
        $('.modal-window').css('z-index','10');
        $('.left-corn').removeClass('white-corner');
        state = false;
    });
}

var Launch = (app,title) =>{
    if(!(isRunning(app))){
        $('body').append(stage(title));
        activity.push(app);
        $( ".stage-master").draggable({containment: "parent"});
        hiddeModal();
    }else{
        alert('Aplicacion en ejecucion');
    }
}
