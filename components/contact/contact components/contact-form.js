import { useState, useEffect } from 'react';
import Notification from '../../ui/notifications';


 async function SendContactData(ContactDetails){
     const response = await fetch('/api/contactAPI', {
    method: 'POST',
    body: JSON.stringify(ContactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}

function ContactForm() {
  const [enteredLastName, setEnteredLastName] = useState('')
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();

    // optional: add client-side validation

    setRequestStatus('pending');

    try {
      await SendContactData({
        email: enteredEmail,
        name: enteredName,
        fullName: enteredLastName,
        phoneNumber: enteredPhoneNumber,
        message: enteredMessage,
      });
      setRequestStatus('success');
      setEnteredMessage('');
      setEnteredPhoneNumber('')
      setEnteredEmail('');
      setEnteredName('');
      setEnteredLastName('')
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  }

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

    return (
        <section class='font-bold text-gray-800 w-full flex justify-between  md:text-yellow-500
        md:justify-center' 
        >
        <div class=' w-full flex   
            md:ml-28 md:mr-28 md:flex md:flex-col '>
            <div class=' ml-28 w-1/2 
            md: border-2 border-red-500 md:w-full md:p-0 md:m-0 
            '>
             <div>
                 <div class=' md: border-2 border-blue-500 font-bold  font-serif  md:w-full '>Kindly contact us using the form below: </div>
                 
             </div>
             <div class='bg-indigo-100 mt-4 md:w-full 
             '>
                 <form  onSubmit={sendMessageHandler}
                 class=' ml-8  items center md:ml-0'>
                     <div class='w-full grid justify-items-stretch  '>
                       <div class=' w-full'>
                          <label htmlFor="name">First Names*</label>
                          <br />
                          <input 
                          type="text" 
                          required
                          value={enteredName}
                          onChange={(event) => setEnteredName(event.target.value)}
                          class=' w-full h-7  rounded-lg'
                           />
                       </div>
                       <div class=' mt-4 w-full '>
                         <label htmlFor="email">Last Name*</label>
                         <br />
                         <input 
                         type="text" 
                         required
                         class='w-full h-7  rounded-lg'
                         value={enteredLastName}
                         onChange={(event) => setEnteredLastName(event.target.value)}
                         />
                      </div>
                      <div class=' mt-4 w-full '>
                          <label htmlFor="email">Email Address*</label> <br />
                          <input 
                          type="text" 
                          required 
                          value={enteredEmail}
                          onChange={(event) => setEnteredEmail(event.target.value)}
                          class=' w-full h-7 rounded-lg ' 
                          />
                      </div>
                      <div class=' mt-4 w-full '>
                          <label htmlFor="number">Phone number*</label> <br />
                          <input 
                          type="text" 
                          required 
                          value={enteredPhoneNumber}
                          onChange={(event) => setEnteredPhoneNumber(event.target.value)}
                          class=' w-full h-7 rounded-lg ' 
                          />
                      </div>
                     </div>
                     <div class=' mt-4 '>
                        <div >
                            <div class='  w-full'>
                                <p>How can we assist you*</p>
                            </div>
                            <div>
                                <textarea 
                                id='messages'
                                required
                                value={enteredMessage}
                                onChange={(event) => setEnteredMessage(event.target.value)}
                                class='  rounded-lg border-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent w-full h-36'  name=""></textarea>
                            </div>
                        </div>
                     </div>
                     <div class=' mt-2    w-1/3 p-2 '>
                         <button class='rounded-lg mb-4 border-2 border-blue-300 p-1 ml-1 bg-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-puprle-600 focus:ring-opacity-50
                         md:ml-0'>
                             Send Message
                            </button>
                         </div>
                 </form>
                 {notification && (
                <Notification
                status={notification.status}
                title={notification.title}
               message={notification.message}
               />
            )}
             </div>
            </div>
            <div class=' ml-32  mt-10 
                  md:w-full 
                  md:pt-6 md:m-0 '>
                    <h1 class='md:pb-2'>CONTACT US</h1>
                <div class=' mt-12 bg-indigo-100 mb-8 
                 md:w-full  md:m-0 md:' >
                    <div class='ml-2 '>
                    <p class='pt-4'>Tel:27812801979</p>
                    <br />
                    <p>Cell:+27828962849</p>
                    <br />
                    <p>Fax: 0866780003</p>
                    <br />
                    <p>Email: Marobela@vululwaniconsulting.co.za</p> 
                    <br />
                    <p>Email:Musa@vululwaniconsulting.co.za</p>
                    <br />
                    <address class='pb-8'>Address: <br /> 3889 Okapi Close, Dawn Park EXT 7<br /> Boksburg 1459</address>
                    </div>
                </div>
             </div>
            
            </div>
        </section>
    )
}

export default ContactForm



