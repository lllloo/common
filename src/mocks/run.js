import { server } from './server.js'
import  { baseAPI }  from '../common/baseAPI.js';


server.listen()

const runFormData = async () => {
    try {
        const res = await baseAPI.get('http://localhost/user')
        console.log(res)
    } catch (error) {
        console.log(error);
    }

    server.close()
}
runFormData();



