import './PersonForm.css'
import { useState } from 'react'
import { Radio } from 'antd';

const PersonForm = ({ onSubmit, person }) => {
    const [name, setName] = useState(person? person.name : '');
    const [cpf, setCpf] = useState(person? person.cpf : '');
    const [rg, setRg] = useState(person? person.rg : '');
    const [birthday, setBirthday] = useState(person? person.birthday : '');
    const [gender, setGender] = useState(person? person.gender : '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {
            name,
            cpf,
            rg,
            birthday,
            gender
        }
        onSubmit(user);
    }

    const handleOnChangeName = (e) => {
        if (e.target.value.match(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s']+$/u) || e.target.value === '') {
            setName(e.target.value);
        }
    }

    const handleOnChangeCpf = (e) => {
        if (e.target.value.match(/^[0-9]+$/) || e.target.value === '') {                
            setCpf(e.target.value);
        }
    }

    const handleOnChangeRg = (e) => {
        if (e.target.value.match(/^[0-9]+$/) || e.target.value === '') {
            setRg(e.target.value);
        }
    }


  return (
    <div className='create-user'>
        <form onSubmit={handleSubmit}>
            <div className="form-name">
                <label htmlFor="name">Nome:</label>
                <input type="text" 
                    value={name}
                    name="name"
                    className="name" 
                    onChange={handleOnChangeName}/>
            </div>

            <div className="form-cpf">
            <label htmlFor="cpf">CPF:</label>
            <input type="text" 
                   value={cpf}
                   name="cpf" 
                   maxLength="11" 
                   onChange={handleOnChangeCpf}/>
            </div>

            <div className="form-rg">
            <label htmlFor="rg">RG:</label>
            <input type="text" 
                   value={rg}
                   name="rg"
                   maxLength="9" 
                   onChange={handleOnChangeRg}/>
            </div>

            <div className="form-gender">
            <label className="gender">Sexo:</label>
            <Radio.Group onChange={(e) => {setGender(e.target.value)}} value={gender}>
                <Radio value={'M'}>M</Radio>
                <Radio value={'F'}>F</Radio>
            </Radio.Group>
            </div>

            <div className="form-birthday">
            <label htmlFor="birthday">Data Nascimento:</label>
            <input type="date" 
                   value={birthday}
                   name="birthday" 
                   onChange={(e) => {setBirthday(e.target.value)}}/>
            </div>

            <input className='form-submit' type="submit" value="Salvar" onClick={handleSubmit} 
                disabled={!(name && cpf.length === 11 && rg.toString().length >= 7 && 
                    rg.toString().length <= 9 && birthday && gender)}/>
        </form>
    </div>
  )
}

export default PersonForm;