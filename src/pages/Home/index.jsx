import { useEffect, useState } from "react"
import api from '../../services/api'
import { Link } from 'react-router-dom'
import './/home.css'

//URL da API: /movie/now_playing?api_key=065858db3c7e841780efab798be05357

function Home() {
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        async function loadFilme() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: 'ba18949e0c40f4037c6ec1e21c148c74',
                    language: 'pt-BR',
                    page: 1,
                }
            })

            setFilmes(response.data.results.slice(0, 10))
            setLoading(false)
        }

        loadFilme()

    }, [])

    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return (
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
                            <Link to={`filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>

        </div>
    )
}

export default Home