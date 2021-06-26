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
    <section class='w-full'>
        <div class='flex justify-center mx-36 py-28'>
            <div class='w-2/6 p-10 text-white bg-indigo-700'>
                <div>
                <p class=' text-xl antialiased'>Contact information</p>
                <p class='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore nemo, enim accusantium vero eius.</p>
                </div>
                <div>
                  <ContactCard/>
                </div>
            </div>
            <div class=' p-10 w-4/6 text-black bg-white'>
                <form onSubmit={sendMessageHandler}>
                    <div class=''>
                        <p class='font-bold text-xl'>Send us a message</p>
                    </div>
                 
                 {/* //first part// */}

                <div class='flex justify-evenly pt-4'>
                 <div class=' w-3/6 h-full '>
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

                 
                 <div class='w-3/6 h-full ml-6 '>
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
              <div class='flex justify-items-stretch  justify-center pt-4'>
                   <div class=' w-4/6  h-full  '>
                     <label htmlFor="email">Email address </label> <br />
                    <input 
                     type="text" 
                     required 
                     value={enteredEmail}
                     onChange={(event) => setEnteredEmail(event.target.value)}
                     class=' w-full h-10 rounded-lg border-2 border-gray-200 border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent '  />
                  </div>

                
                    <div class=' w-4/6  h-full ml-6 '>
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
             <div class=' h-12 w-2/6 py-2'>
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