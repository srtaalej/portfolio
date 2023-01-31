import React from "react";

interface MessProps {
    id: string;

    placeholder: string;
    
}



const Message = ({id, placeholder, ...props}: MessProps) => {
    return (
        <div className="flex flex-col w-full m-2">
         <textarea 
            className="mx-3 h-[170px] ease-in-out duration-300
              placeholder-gray-500 placeholder-opacity-50
              rounded-md outline-none bg-[#ffe5fa]

              focus:ring-2 focus:ring-[#ffe5fa]

              disabled:bg-opacity-50 disabled:cursors-not-allowed
              "
            rows={5}
            style={{resize: 'none'}}
            autoComplete="off" 
            id={id} 
            placeholder={placeholder} 
            {...props}></textarea>
        </div>
    );
    };
    export default Message;


