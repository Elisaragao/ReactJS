import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import api from '../../services/api'

const [filme, setFilme] = useState({})

function Filme() {
    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id} `, {
                params: {
                    api_key: 'ba18949e0c40f4037c6ec1e21c148c74',
                    language: 'pt-BR'
                }
            })
            .then((response) => {
                console.log(response)
            })
            .catch(() => {
                console.log('FILME NÃO ENCONTRADO')
            })
        }

        loadFilme()

    }, [])



    return (
        <div>
            <h1> ACESSANDO O FILME {id} </h1>
        </div>
    )
}

export default Filme