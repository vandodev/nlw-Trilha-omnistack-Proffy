import React,{SelectHTMLAttributes} from 'react';

import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
    label:string;
    options:Array<{
        value: string;
        Label:string
    }>;

}

const Select:React.FC <SelectProps> = ({label, name, options, ...rest}) =>{
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select  id={name}{...rest}>

                <option value="" disabled selected hidden>Selecione uma opção</option>

                {options.map(option =>{
                    return <option key={option.value} value={option.value}>{option.Label}</option>
                })}
            </select>
        </div>
    );
}

export default Select;