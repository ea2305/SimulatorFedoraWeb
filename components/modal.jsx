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
    var limit = 14;//Limit of elements in lateral bar
    //Get value of length
    var sizeY_item = ((elements * 100) / limit);
    var marginY_item = (60 - sizeY_item) / 2;
    $('.items-box').css('height',sizeY_item + "%");
    $('.items-box').css('margin-top',marginY_item + "%");

}

function callModal(){
    var Modal = React.createClass({

        clickOut : function(){
            $('#main-box').removeClass('box');
            $('#main-box').addClass('main-desktop');
        },

        componentDidMount : function(){
            $.ajax({//Remover usuarios
                type: "GET",
                url: "../models/consult/isAdmin.php",
                success: function(data){
                    //alert(result);
                    var json = JSON.parse(data);
                    console.log(json);

                    $('.items-box').empty();
                    $('.applications-box').empty();//clean box

                    resizeBox(json.length);

                    json.forEach((element,index) => {
                        $('.items-box').append(iconForm(element));
                    });

                    json.forEach((element)=>{
                        $('.applications-box').append(iconForm_title(element));
                    })

                }
            });
            $('#main-box').removeClass('main-desktop');
            $('#main-box').addClass('box');
        },

        render : function(){
            return (
                <div className="modal-window" onClick={this.clickOut}>
                    <div className="efect-corner">
                        <div className="left-corn"></div>
                        <div className="center-corn"></div>
                        <div class="right-corn"></div>
                    </div>
                    <div className="header-box">
                        <div className="info-box">
                            Fedora 23
                        </div>
                        <div className="search-box">
                            <input id="search-box" type="text" placeholder=" Type to search..."/>
                            <div className="right-search"><span className="glyphicon glyphicon-search"></span></div>
                        </div>
                    </div>
                    <nav className="body-box">
                        <div className="items-box">
                        </div>
                        <div className="applications-box">
                        </div>
                        <div className="windows-box">
                        </div>
                    </nav>
                    <footer className="footer-box">
                        <div className="select-box"></div>
                    </footer>
                </div>
            );
        }

    });

    ReactDOM.render(<Modal />, document.getElementById('main-box'));

}

function callDesktop(){
    var Desktop = React.createClass({
        componentDidMount : function (){
            $('#main-box').removeClass('box');
            $('#main-box').addClass('main-desktop');
        },
        render : function(){
            return (
                <div className="efect-corner">
                    <div className="left-corn"></div>
                    <div className="center-corn"></div>
                    <div className="right-corn"></div>
                </div>
            );
        }

    });

    ReactDOM.render(<Desktop />, document.getElementById('main-box'));
}
