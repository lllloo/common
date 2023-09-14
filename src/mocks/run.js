import { server } from './server.js'
import  { baseAPI }  from '../common/baseAPI.js';



server.listen()

const x = async () => {
    try {
        const res = await baseAPI.get('/user2')
        console.log(res.data)
    } catch (error) {
        console.log(error);
    }
}
x();

server.close()