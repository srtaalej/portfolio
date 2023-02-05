import React, {useState} from 'react';
import { Typewriter } from 'react-simple-typewriter'
import {FaLinkedin, FaGithub, FaTwitter} from 'react-icons/fa';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';

type Props = {};
type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact(props: Props)  {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mariaportfinbox@yahoo.com?subject=I checked out your website!&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const [errors, setErrors] = useState({});

  
  // // Setting success or failure messages states
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  // const [showFailureMessage, setShowFailureMessage] = useState(false);

  // // Validation check method
  // const handleValidation = (): boolean => {
  //   let tempErrors: { [key: string]: boolean; } = {};
  //   let isValid: boolean = true;


  //   if (name.length <= 0) {
  //     tempErrors["name"] = true;
  //     isValid = false;
  //   }
  //   if (email.indexOf("@") !== -1) {
  //     tempErrors["email"] = true;
  //     isValid = false;
  //   }
  //   if (message.length <= 0) {
  //     tempErrors["message"] = true;
  //     isValid = false;
  //   }

  //   setErrors({ ...tempErrors });
  //   console.log("errors", errors);
  //   return isValid;
  // };

  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   // let isValid = handleValidation();
  //   // if (!isValid) {
  //   //   return;
  //   // }
  //     const res = await fetch("/api/sendgrid", {
  //       body: JSON.stringify({
  //         email: email,
  //         name: name,
  //         message: message,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //     });

  //     const { error } = await res.json();
  //     if (error) {
  //       console.log(error);
  //       setShowSuccessMessage(false);
  //       setShowFailureMessage(true);
  //       return;
  //     }
  //     setShowSuccessMessage(true);
  //     setShowFailureMessage(false);
  //   console.log(name, email, message);
  // };



  return (
    <div className='flex flex-col items-center justify-between w-screen p-20 ease-in-out h-max lg:flex-row'>
  
  <div className='flex flex-col items-start mx-5 h3 w-max'>
        <h1 className="w-[380px] md:w-[500px] text-center lg:text-start text-6xl md:text-7xl font-extrabold
          text-transparent bg-clip-text
          from-[#f570f5] to-[#f570f5] via-[#ffe5fa]
          bg-gradient-to-l
          ">
            Connect With Me
        </h1>
      <div className='w-[380px] md:w-[500px] h-[100px] text-center 
        lg:text-start'>
          <span className='md:w-fit pt-5 lg:pt-0 text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#f570f5]
      to-[#fb8463]'>
        <Typewriter 
          words={[
            'Don’t be shy, say hi!',
            '(Unless you’re a telemarketer, then please don’t)']}
          loop={true}
          typeSpeed={70}
          deleteSpeed={100}
          delaySpeed={1000}
            />
        </span>
      </div>
{/*       
      useTypewriter({
    words: [
      'Hi, I am Filip',
      'I <Deploy />',
      'Hi, I am Filip',
      'I <Design />',
      'Hi, I am Filip',
      'I code.',
    ],
    loop: true,
    delaySpeed: 2000,
    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
  });
 */}

      <div className= 'items-center justify-between hidden space-x-5 lg:flex w-max'>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
          <Link href='https://www.linkedin.com/in/mariamerk/'>
            <FaLinkedin size={20} color='ffe5fa'/>
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
          <Link href='https://github.com/srtaalej'>
            <FaGithub size={20} color='ffe5fa'/>
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
          <Link href='https://twitter.com/srtaalej'>  
            <FaTwitter size={20} color='ffe5fa'/>
          </Link>
        </div>
      </div>
                
    
      </div> 
    
      <article
      // {...showSuccessMessage && <div>Form submitted successfully!</div>}
      // {...showFailureMessage && <div>Form submission failed. Please try again.</div>}
      className='items-center justify-center ease-in-out
        w-[360px] md:w-[550px] xl:w-[600px]
        h-[430px] 
        
        bg-[#1F1E1B]
        rounded-2xl shadow-lg shadow-[#f570f5]
        hover:shadow-[#f570f5] hover:shadow-2xl
        hover:opacity-200 duration-300'
        > 
          <form action="/api/sendgrid" method="post" onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center w-full mt-3'>
          <div className="flex flex-col w-full m-2">
              <input 
               {...register('name')}
              // value={name}
              // onChange={(e) => {
              //   setName(e.target.value);
              // }}
              className="mx-3 h-[40px] ease-in-out duration-300
              placeholder-gray-500 placeholder-opacity-50
              rounded-md outline-none bg-[#ffe5fa]
              focus:ring-2 focus:ring-[#ffe5fa]
              disabled:bg-opacity-50 disabled:cursors-not-allowed
              " id={'Name'} placeholder={'Your name'}/>
          </div>
          <div className="flex flex-col w-full m-2">
              <input 
               {...register('email')}
              // value={email}
              // onChange={(e) => {
              //   setEmail(e.target.value);
              // }}
              className="mx-3 h-[40px] ease-in-out duration-300
              placeholder-gray-500 placeholder-opacity-50
              rounded-md outline-none bg-[#ffe5fa]
              focus:ring-2 focus:ring-[#ffe5fa]
              disabled:bg-opacity-50 disabled:cursors-not-allowed
              " id={'Email'} placeholder={'Your email'}/>
          </div>
              
          <div className="flex flex-col w-full m-2">
              <textarea 
              {...register('message')}
              // value={message}
              // onChange={(e) => {
              //   setMessage(e.target.value);
              // }}
              className="mx-3 h-[170px] ease-in-out duration-300
              placeholder-gray-500 placeholder-opacity-50
              rounded-md outline-none bg-[#ffe5fa]
              focus:ring-2 focus:ring-[#ffe5fa]
              disabled:bg-opacity-50 disabled:cursors-not-allowed" 
              rows={5} style={{resize: 'none'}} autoComplete="off" 
              id={'Message'} placeholder={'Your message'}/>
          </div>

              <button type='submit' 
              // disabled={!handleValidation}
              className='w-1/3 m-10 ease-in-out duration-300
              text-lg font-semibold text-[#ffe5fa] 
              rounded-md outline-none bg-[#f570f5] active:bg-[#fd50fd] 
              focus:ring-2 focus:ring-[#f570f5]
              disabled:bg-opacity-50 disabled:cursors-not-allowed
              hover:bg-[#fd50fd]

              '>Submit</button>
          
          </form>
        </article>
        
        <div className= 'flex items-center justify-between space-x-10 mt-11 lg:hidden w-max'>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
        <Link href='https://www.linkedin.com/in/mariamerk/'>
            <FaLinkedin size={20} color='ffe5fa'/>
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
          <Link href='https://github.com/srtaalej'>
            <FaGithub size={20} color='ffe5fa'/>
          </Link>
        </div>
        <div className='rounded-full shadow-lg shadow-[#f570f5] p-3 ease-in duration-500'> 
          <Link href='https://twitter.com/srtaalej'>  
            <FaTwitter size={20} color='ffe5fa'/>
          </Link>
        </div>
      </div>

    </div>
    );
}

