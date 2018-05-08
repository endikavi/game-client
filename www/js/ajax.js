function ajaxcall(method){
    
    /*Data to be sent to the server. It is converted to a query string, if not already a string. It's appended to the url for GET-requests. See processData option to prevent this automatic processing. For POST requests could be FormData instance*/
    
    url = "https://gserver.herokuapp.com/user";
    
    if(method == "get"){
        
        url = url + "/" + UserConf[1].multiplayerid;
        data = "";
        
    }else if(method == "post"){
        
        data = { "UserConf" : JSON.stringify(UserConf),"Check":"true","uid":UserConf[1].multiplayerid}
        
    }else if(method == "put"){
        
        data = { "UserConf" : JSON.stringify(UserConf),"Check":"true","uid":UserConf[1].multiplayerid}
        
    }else if(method == "delete"){
        
        data = { "UserConf" : JSON.stringify(UserConf),"Check":"true","uid":UserConf[1].multiplayerid}
        
    }
    
    seven.request({
        
        url: url,

        data: data,
        
        processData: true,
        
        method: method,
        
        success: function(res){

            if(method == "get"){
                
                console.log('partida recogida de la nube');
                Use = JSON.parse(res);
                UserConf = JSON.parse(Use.users[0].UserConf[0]);
        
            }else if(method == "post"){
        
                console.log('partida guardada en la nube');
        
            }else if(method == "put"){
        
                console.log('partida recogida y actualizado movil');
        
            }  
            
        },
        error: function(res){
        
            console.log(res);
            
        },
        complete: function(res){
        
            console.log(res);
        
        },
        statusCode: {

            404: function (xhr) {

                alert('sin conexion');

            }

        }
        
    })
    
}