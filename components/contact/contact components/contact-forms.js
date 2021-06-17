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
      <section>
        <div class=' ml-32 mr-32'>
          <form onSubmit={sendMessageHandler} class=''>
            <div class='flex justify-items-stretch  justify-center'>
                <div class=' w-2/5 pr-4 h-full '>
                  <label htmlFor="name">First Names*</label>
                    <br />
                    <input 
                    type="text" 
                    required
                    value={enteredName}
                    onChange={(event) => setEnteredName(event.target.value)}
                    class=' w-full h-10  border-2 border-black'
                           />
                </div>
                <div class='w-2/5 h-full '>
                <label htmlFor="email">Last Name*</label>
                  <br />
                    <input 
                    type="text" 
                    required
                    class='w-full h-10   border-2 border-black'
                    value={enteredLastName}
                    onChange={(event) => setEnteredLastName(event.target.value)}
                    />
                </div>
            </div>
            <div class='flex justify-items-stretch  justify-center mt-4'>
               <div class=' w-2/5 pr-4 h-full '>
                   <label htmlFor="email">Email Address*</label> <br />
                    <input 
                     type="text" 
                     required 
                     value={enteredEmail}
                     onChange={(event) => setEnteredEmail(event.target.value)}
                     class=' w-full h-10  '  />
                </div>
                <div class=' w-2/5  h-full '>
                     <label htmlFor="number">Phone number (optional)</label> <br />
                     <input 
                     type="text" 
                     required 
                     value={enteredPhoneNumber}
                     onChange={(event) => setEnteredPhoneNumber(event.target.value)}
                    class=' w-full h-10 '  />
                </div>
            </div>
               <div class=' ml-28  mr-28 mt-4  '>
                <p>Your Message*</p>
                </div>
                <div class='ml-28  mr-28 h-full'>
                <textarea 
                 id='messages'
                required
                value={enteredMessage}
                onChange={(event) => setEnteredMessage(event.target.value)}
                class='  border-2 border-black border-transparent focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent w-full h-32'  name=""></textarea>
             </div>
              <div class=' ml-28 mr-28 flex justify-center pt-4 '>
                <div class=' h-10 w-1/4  '>
                   <button class=' h-full text-white w-full justify-center  mb-4 border-2 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110
                         md:ml-0'>
                     Send Message
                  </button>
                  </div>
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
      </section>
    )}


    export default ContactForm