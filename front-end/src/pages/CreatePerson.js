import './CreatePerson.css'
import React from 'react'
import { Link } from 'react-router-dom';
import PersonForm from '../components/PersonForm';


const CreatePerson = () => {
    const url = 'http://localhost:3001/persons'

    const handleSubmit = async (user) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (res.status === 500) { 
            alert('Erro ao tentar criar usuário! Verifique se os campos CPF e RG são únicos.');
        }
    }


    return (
        <div className='create-user'>
            <h2>Criar Usuário</h2>
            <PersonForm onSubmit={handleSubmit}/>
            <Link to="/">Voltar</Link>
        </div>
    )
}

export default CreatePerson;