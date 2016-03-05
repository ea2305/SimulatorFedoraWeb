var Users = {//Data of users
    "users":[
        {
            "name" : "Elihu Cruz",
            "img" : "./public/img/icon/pokemon.png"
        },{
            "name" : "Invited",
            "img" : ""
        }
    ]
}
var Formulary = React.createClass({
    render : function(){
        var data = this.props.data.users
        console.log(data);
        return (
            <div>
                <article className="picture-login">
                    <img src={data[0].img} alt="" />
                    <p>{data[0].name}</p>
                </article>
                <form class="" action="index.html" method="post">
                    Password:<br/>
                    <input type="password" name="password" value=""/><br/>
                </form>
            </div>
        )
    }
});

ReactDOM.render(<Formulary data={Users} />,document.getElementById("menu"));
