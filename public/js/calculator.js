/**
 *@author Elihu Cruz Albores
 *@version 1.3
 */

function startCalculator(){

    //Control de sistema
    var opType = -1;
    var conditions = [false,false];

    var limit = 0;//Limita los caracteres de salida

    var Element_A = 0;
    var Element_B = 0;//Valor para operacion

    /*Funciiones de pormpt*/
    var addPrompt = (value) => {

        if(conditions[0]){//Condicion para reiniciar por operacion
            clearAll();
            conditions = [false,false];
        }

        if(value != '.'){
            $('#divPrompt').append(value)
        }

        if(value == '.' && !conditions[1]){
            conditions[1] = true;
            $('#divPrompt').append(value)
        }
        limit++;
    }

    var erase = () => {
        var prompt = $('#divPrompt').html();
        var size = prompt.length;
        if(size > 0){

            if(prompt.charAt(size - 1) === '.'){//Verificamos si el elemento a borrar es un punto
                conditions[1] = false;
            }
            var new_prompt = prompt.substring(0,size - 1);
            $('#divPrompt').text(new_prompt);
            limit--;
        }
    }

    var clearAll = () =>{
        $('#divPrompt').empty();
        limit = 0;
        conditions[1] = false;
        //dot = false;
    }

    var restart = () =>{
        $('#divPrompt').empty();
        conditions = [false,false];
        limit = 0;
        Element_A = 0;
        Element_B = 0;
        opType = -1;
    }

    var insert = (value) => { $('#divPrompt').text(value); }

    //Funciones arimeticas
    var actionFunction = (e) => {
        console.log(e + ' : ' + opType);

        if(opType != -1){//Regresamos si no se detecto una operacion previa
            resultado(false);
        }

        if(e > 4 && e < 7){//Acciones de una sola presion
            opType = e;
            resultado(false)//Metodo de conversion directa.
            return;//Salimos
        }

        var temp = $('#divPrompt').html();//Almacenar datos
        if(temp.length != 0){
            Element_A = temp;
            conditions[0] = true;
            opType = e;
        }
    };


    var resultado = (button_e) =>{

        if(opType == -1){return;}//Retornamos si no hay metodo.

        Element_B = $('#divPrompt').html();

        if(Element_B.trim() == ''){return;}//Verificamos que el prompt no este vacio

        Element_A = parseFloat(Element_A);//Otenemos parte numerica
        Element_B = parseFloat(Element_B);//Parse

        switch(opType){
            case 1:
                insert((Element_A + Element_B));
                opType = -1;
                break;
            case 2:
                insert((Element_A - Element_B));
                opType = -1;
                break;
            case 3:
                insert((Element_A * Element_B));
                opType = -1;
                break;
            case 4:
                if(Element_A != 0){
                    insert((Element_A / Element_B));
                }else{
                    insert('ERROR');
                }
                opType = -1;
                break;
            case 5:
                insert(Math.pow(Element_B,2));
                Element_B = 0;
                opType = -1;
                break;
            case 6:
                insert(Math.sqrt(Element_B,2));
                Element_B = 0;
                opType = -1;
                break;
            case 7:
                insert(Element_A % Element_B);
                opType = -1;
                break;
        }
    };

    $('#app_' + (process - 1)).click((e) =>{//Close only this window
        var element = e.target.parentElement.parentElement.id;
        $('#' + element).animate({
            opacity : 0
        },300,()=>{
            $('#' + element).remove();
        });
        process--;
        activity.pop();
    });

        //Handlers
    $('#btn0').mousedown(() => {addPrompt(0)});
    $('#btn1').click(() => {addPrompt(1)});
    $('#btn2').click(() => {addPrompt(2)});
    $('#btn3').click(() => {addPrompt(3)});
    $('#btn4').click(() => {addPrompt(4)});
    $('#btn5').click(() => {addPrompt(5)});
    $('#btn6').click(() => {addPrompt(6)});
    $('#btn7').click(() => {addPrompt(7)});
    $('#btn8').click(() => {addPrompt(8)});
    $('#btn9').click(() => {addPrompt(9)});
    $('#dot').click(() => {addPrompt('.')});
    $('#remove').click(() => {erase()});
    $('#removeAll').click(() => {clearAll()});
    $('#suma').click(() => {actionFunction(1)});
    $('#resta').click(() => {actionFunction(2)});
    $('#multiplicacion').click(() => {actionFunction(3)});
    $('#division').click(() => {actionFunction(4)});
    $('#potencia').click(() => {actionFunction(5)});
    $('#raiz').click(() => {actionFunction(6)});
    $('#module').click(() => {actionFunction(7)});
    $('#removeAll').click(() => {restart()});
    $('#igual').click(() => {resultado(true)});

    closeWindow();//End component
}
