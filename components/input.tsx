
import React from "react";

interface InputProps {
    id: string;

    placeholder: string;
}



const Input = ({id, placeholder,...props}: InputProps) => {
    return (
        <div className="flex flex-col w-full m-2">
         <input 
            className="mx-3 h-[40px] ease-in-out duration-300
              placeholder-gray-500 placeholder-opacity-50
              rounded-md outline-none bg-[#ffe5fa]

              focus:ring-2 focus:ring-[#ffe5fa]

              disabled:bg-opacity-50 disabled:cursors-not-allowed
              "
            type='text'
            autoComplete="off" 
            id={id} 
         
            placeholder={placeholder} 
            {...props}/>
        </div>
    );
    };
    export default Input;


