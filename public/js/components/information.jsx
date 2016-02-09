function callSceneInformation(target_id){
    var dataSystem = {//Temporal definition
        "tag":[
            {"info":"University"},
            {"info":"Engineering"},
            {"info":"Class"},
            {"info":"Professor"},
            {"info":"Developer"},
            {"info":"Id"}
        ],
        "information":[
            {"info":"Universidad Politécnica de Chiapas"},
            {"info":"Software Development Engineering"},
            {"info":"5th A"},
            {"info":"Dr. Juan Carlos López Pimentel"},
            {"info":"Elihu Alejandro Cruz Albores"},
            {"info":"143405"}
        ]
        
    }

    var Scene = React.createClass({
        
        render : function(){
            return (
            <div className='infoSystem-content'>   
                <div className='options-infoSystem'>   
                    <div className='elements-info'>   
                        <div className='item-info'>Identity</div>   
                    </div>   
                </div>   
                <div className='infoSystem-info'>   
                    <div className='info-system'>   
                        <figure>   
                            <img src='./public/img/icon/fedora.png' alt='fedora' />   
                            <img src='./public/img/icon/upchiapas.png' alt='fedora' />   
                        </figure>   
                        <p className='title-system'>Fedora 23</p>   
                        <div className='position-info'>   
                            <LineData data={this.props.data} />  
                        </div>   
                    </div>   
                </div>   
            </div>   
            );
        }
        
    });

    var LineData = React.createClass({
        render : function(){
            var temp = this.props.data;
            return (
                <div className='position-info'>   
                    <div className='left-info'>   
                            {
                                temp.tag.map((e) =>{
                                    return <p>{e.info}</p>;
                                })
                            }   
                    </div>
                    <div className='right-info'>
                        {
                            temp.information.map((e) =>{
                                return <p>{e.info}</p>;
                            })
                        }
                    </div>
                </div>            
            );
        }
    });

    ReactDOM.render(<Scene data={dataSystem} />,document.getElementById(target_id));
    
    closeWindow();//End component
}