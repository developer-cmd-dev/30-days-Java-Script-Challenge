console.log("Axios Module");
import axios from 'axios'


async function networkRequeset(){
    try {
        const sendRequest = await axios({
            method:'get',
            url:'https://api.github.com/users/developer-cmd-dev',   
        })
        const response = await sendRequest.data;
        console.log(response);
    }catch(error){
        console.log(error)
    }

    }

networkRequeset()

 
