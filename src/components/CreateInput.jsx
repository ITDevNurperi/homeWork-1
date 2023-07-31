import React, { useState } from 'react';
import Card from './Ui/Card';
import Button from './Ui/Button';
import "./CreateInput.css"

const CreateInput = () => {

    // 1-Вариант
    // const [surname, setSurname] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")


    // const surnameHandler = (e) => {
    //     setSurname(e.target.value)
    // }

    // const emilHandler = (e) => {
    //     setEmail(e.target.value)
    // }

    // const passwordHendler = (e) => {
    //     setPassword(e.target.value)
    // }



    // 2-Вариант
    // const [userInput, setUserInput] = useState({
    //     surname: "",
    //     email: "",
    //     password: ""
    // })

    // const inputHandler = (e) => {
    //   const  inputName = e.target.name 
    //     setUserInput({
    //         ...userInput,
    //          [inputName]: e.target.value
    //     })
    // }


    // 3-Вариант
     const [userInput, setUserInput] = useState({
        surname: "",
        email: "",
        password: ""
    })

    const surnameHandler = (e) => {
        setUserInput((prevState) => {
           return {
            ...prevState,
            surname: e.target.value
           }
        })
    }

    const emilHandler = (e) => {
        setUserInput((prevState) => {
            return {
             ...prevState,
             email: e.target.value
            }
         })
    }

    const passwordHendler = (e) => {
        setUserInput((prevState) => {
            return {
             ...prevState,
             password: e.target.value
            }
         })
    }


    const addInput = (e) => {
        e.preventDefault()

        console.log(userInput);
        // console.log(surname);
        // console.log(email);
        // console.log(password);
    }

    return (
        <Card className="input">
            <form onSubmit={addInput}>
                <input onChange={surnameHandler} name='surname' type="text" placeholder='ФИО' />
                
                <input onChange={emilHandler} name='email' type="text" placeholder='email' />

                <input onChange={passwordHendler} name='password' type="text" placeholder='password' />

                <Button type='submit'>Add</Button>
            </form>
        </Card>
    );
};

export default CreateInput;