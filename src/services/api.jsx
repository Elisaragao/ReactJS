import axios from 'axios'


//Base da URL:  https://api.themoviedb.org/3/
//URL DA API:/movie/now_playing?api_key=065858db3c7e841780efab798be05357

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api