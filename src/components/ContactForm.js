import React from 'react';

const ContactForm = () => {
    return (
        <section className="bg-white" id='contact'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-main-color ">Contact Me</h2>
            
            <form action="https://formspree.io/f/mpzgvkoq" className="space-y-8" method='POST'>
                <div>
                    <label for="email" className="block mb-2 text-sm font-bold text-main-color ">Your email</label>
                    <input type="email" id="email" className="shadow-sm bg-main-color border  text-main-color text-sm rounded-lg focus:ring-primary-500 focus:border-main-color block w-full p-2.5 dark:bg-gray-700" placeholder="name@flowbite.com" name='email' required/>
                </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-bold text-main-color ">Subject</label>
                    <input type="text" id="subject" className="block p-3 w-full text-sm text-main-color bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-main-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-main-color dark:shadow-sm-light" placeholder="Let us know how we can help you" name='subject' required/>
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-bold text-main-color ">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-main-color bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-main-color dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-main-color" placeholder="Leave a comment..." name='message'></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-main-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
        </div>
      </section>
    );
};

export default ContactForm;