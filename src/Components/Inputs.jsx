import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Dropdown } from 'primereact/dropdown';

const InputArea = ({ label, value, onchange, type }) =>  {
    return (
        <span className="p-float-label my-4">
            <InputText className='h-9 w-full' id={ label } value={value} type={type} onChange={onchange}/>
            <label className='text-xs' htmlFor={ label } >{label}</label>
        </span>
    )
}

const PasswordInput = ({ label, value, onchange }) => {
    return (
        <span className='p-float-label my-4' >
            <Password className='h-9 w-full' id='password' value={value} onChange={onchange}  toggleMask />
            <label className='text-xs' htmlFor='password'>{label}</label>
        </span>
    )
}

const DropdownBox = ({ properties: { label } }) => {
    const [selcetedLocation, setSelectedLocaction] = useState('')

    const locations = [
        {
            location: "Main"
        },
        {
            location: "Annex"
        }
        ]
    return (
        <span className="p-float-label my-4">
            <Dropdown value={selcetedLocation} onChange={(e) => setSelectedLocaction(e.value)} options={locations} optionLabel="location" 
            placeholder="Main/Annex" className="w-full h-9" />
            <label className='text-xs' htmlFor={ label } >{label}</label>
        </span>
    )
}




export {
    InputArea,
    PasswordInput,
    DropdownBox
}