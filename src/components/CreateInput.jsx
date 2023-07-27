import React from 'react';
import Card from './Ui/Card';
import Button from './Ui/Button';
import "./CreateInput.css"

const CreateInput = () => {
    return (
        <Card className="input">
            <form>
                <input type="text" placeholder='ФИО' />
                
                <input type="text" placeholder='emil' />

                <input type="text" placeholder='password' />

                <Button type='submit'>Add</Button>
            </form>
        </Card>
    );
};

export default CreateInput;