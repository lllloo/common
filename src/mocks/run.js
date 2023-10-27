import { server } from './server.js'
import { baseGet } from '@/common/baseAPI.js'

server.listen()

const runFormData = async () => {
  try {
    const res = await baseGet('http://localhost/user')
    console.log(res)
  } catch (error) {
    console.log(error)
  }

  server.close()
}
runFormData()
