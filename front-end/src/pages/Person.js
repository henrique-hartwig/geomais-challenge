import './CreatePerson'
import { Button } from 'antd';
import { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import PersonForm from '../components/PersonForm';


const Person =  (  ) => {
    const { id } = useParams();
    const url = 'http://localhost:3001/persons/' + id;
    
    const location = useLocation().state;
    const [ person, setPerson ] = useState(location? location.retrievePerson : null);

    const retrivePerson = async () => {
        const res = await fetch(url);
        let data = await res.json();
        data.birthday = /^(\d{2})-(\d{2})-(\d{4})/.exec(data.birthday)[0];
        setPerson(data);
    }
    if (!person) {
        retrivePerson();
    }
    
    const handleOnDelete = async () => {
        const res = await fetch(url, {
            method: 'DELETE'
        });
        const data = await res.json();

        if (data.status === 200) {
            alert(`Pessoa excluída com sucesso!`);
        }
    }

    const handleSubmit = async (user) => {
        const personToEdit = {
            id: Number(id),
            name: user.name,
            cpf: Number(user.cpf),
            rg: Number(user.rg),
            birthday: user.birthday,
            gender: user.gender
        }

        const res = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(personToEdit)
        });
    }


    return (
    <div className='edit-user'>
        <h2>Editar Usuário</h2>
        <PersonForm onSubmit={handleSubmit} person={person}/>
        <Button type="primary" style={{background: "var(--red)"}} onClick={handleOnDelete}>
            Excluir
        </Button>
        <Link to="/" style={{padding: "20px"}}>Voltar</Link>
    </div>
  )
}

export default Person;