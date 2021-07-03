import { useState, useEffect } from 'react';
import Notification from '../../ui/notifications'
import ContactCard from './contactCard'

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



function NewForm() {
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
    <section class='w-full  flex-grow-0 flex-shrink-0
    
     sm:justify-items-center sm:flex sm:w-auto  sm:flex-grow-0  sm:border-2 sm:flex-shrink-0 sm:font-bold     
 '>
    <div class='flex flex-col mx-0 py-0 w-auto
        
        
        sm:flex sm:mx-0  sm:flex-col sm:justify-items-center sm:flex-shrink-0 '>
            <div class='lg:w-2/6 p-10 text-white bg-indigo-700  
    
            sm:w-full    '>
                <div class='sm:w-auto'>
                  <p class=' text-xl antialiased'>Contact information</p>
                  <p class='pt-4  sm:text-left sm:flex sm:flex-shrink '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore nemo, enim accusantium vero eius.</p>
                </div>
                 <div>
                  <ContactCard/>
                </div>
            </div>
            <div class=' p-10 lg:w-4/6 text-black bg-white  sm:w-auto'>
                <form onSubmit={sendMessageHandler}>
                    <div class=''>
                        <p class='font-bold text-xl'>Send us a message</p>
                    </div>
                 
                 {/* //first part// */}

                <div class=' lg:flex lg:justify-evenly pt-4  sm:flex-col sm:w-full '>
                 <div class=' lg:w-3/6 h-full sm:w-full  '>
                  <label htmlFor="name">First name</label>
                    <br />
                    <input 
                    type="text" 
                    required
                    value={enteredName}
                    onChange={(event) => setEnteredName(event.target.value)}
                    class=' w-full h-10 rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent'
                           />
                  </div>

                 
                 <div class='lg:w-3/6 h-full lg:ml-6 md:w-full md:ml-0  sm:w-full sm:ml-0'>
                 <label htmlFor="email">Last name</label>
                  <br />
                    <input 
                    type="text" 
                    required
                    class='w-full h-10  rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent'
                    value={enteredLastName}
                    onChange={(event) => setEnteredLastName(event.target.value)}
                    />
                  </div>
                </div>
               
                {/* //second part// */}
              <div class=' lg:justify-items-stretch  lg:justify-center pt-4 md:flex md:flex-col md:w-full sm:flex sm:flex-col'>
                   <div class=' lg:w-4/6  h-full md:w-full sm:w-full'>
                     <label htmlFor="email">Email address </label> <br />
                    <input 
                     type="text" 
                     required 
                     value={enteredEmail}
                     onChange={(event) => setEnteredEmail(event.target.value)}
                     class=' w-full h-10 rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent '  />
                  </div>

                
                    <div class=' lg:w-4/6  h-full lg:ml-6 md:w-full md:ml-0 md:pt-2 sm:ml-0 sm:w-full'>
                     <label htmlFor="number">Phone number</label> <br />
                     <input 
                     type="text" 
                     required 
                     value={enteredPhoneNumber}
                     onChange={(event) => setEnteredPhoneNumber(event.target.value)}
                    class=' w-full h-10  rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent'  />
                    </div>
                </div>

                
              <div class='  h-full w-6/6 py-2 pt-4 '>
                <div class=''>
                  <p>Message</p>
                </div>
                <textarea 
                 id='messages'
                required
                value={enteredMessage}
                onChange={(event) => setEnteredMessage(event.target.value)}
                class=' rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent w-full h-32'  name=""></textarea>
             </div>
             <div class=' w-auto h-12 lg:w-2/6 py-2 md:w-4/5'>
                 <button class=' h-full rounded-sm text-white w-3/5 justify-center  mb-4  transition duration-500 ease-in-out bg-indigo-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110
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
    </section>
    )}



export default NewForm