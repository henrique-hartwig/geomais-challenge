import './Home.css'
import React, { useEffect, useState } from 'react';
import { Button, Input, Space, Table } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Column } = Table;


const Home = () => {
  const url = 'http://localhost:3001/persons';
  const [ persons, setPersons ] = useState([]);
  const [ personsFiltered, setPersonsFiltered ] = useState(persons);

  const handleSearchFilter = (e) => {
    if (e) {
      const aux = persons.filter(item => item.name.toLowerCase().includes(e.toLowerCase()));
      setPersonsFiltered(aux);
    }
    else {
      setPersonsFiltered(persons);
    }
  }

  useEffect(() => {
      async function fetchData() {
          const res = await fetch(url);
          const data = await res.json();
          setPersons(data);
          setPersonsFiltered(data);
      }
      fetchData();
    }, []);
    

  const handleOnDelete = async (id) => {
    const url = 'http://localhost:3001/persons/' + id;

    const res = await fetch(url, {
      method: 'DELETE'
    });
      const data = await res.json();

    if (data.id === id) {
      removePerson(id);
    }
  }

  const removePerson = (id) => {
    const newPersons = persons.filter(nome => nome.id !== id);
    setPersons(newPersons);
    setPersonsFiltered(newPersons);
  };


  return (
    <div>
      <h1 className="list-users">
        Listagem
      </h1>
      <div className='filter-and-create-person'>
            <Search className='search-input'
                placeholder="Buscar por..."
                allowClear
                onSearch={handleSearchFilter}
            />

        <Link to="/create">
            <Button type="primary" className='button-create'>
                + Criar usuário
            </Button>
        </Link>
      </div>
      <Table dataSource={personsFiltered}>
          <Column title="Nome" dataIndex="name" key="name"/>
          <Column title="CPF" dataIndex="cpf" key="cpf"/>
          <Column title="RG" dataIndex="rg" key="rg"/>
          <Column title="Nascimento" dataIndex="birthday" key="birthday"/>
          <Column title="Sexo" dataIndex="gender" key="gender"/>
          <Column title="Ação"
                  key="action"
                  render={(_, record) => (
                      <Space size="middle">
                          <Link to={`/persons/${record.id}`} state={{retrievePerson: record}} 
                                key={record.id}>
                            Editar
                          </Link>
                          <Button onClick={() => handleOnDelete(record.id)} 
                                  className='button-delete'>
                                  Excluir
                          </Button>
                      </Space>)}/>
      </Table>
      <span> 
          {`Total ${personsFiltered.length} items`}
      </span>

    </div>
  );
}

export default Home;
