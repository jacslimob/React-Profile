
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const [form, setForm] = useState({
        user_name: '',
        user_email: '',
        message: '',
        sent: false,
        buttonText: 'Submit',
        err: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    function clearForm() {
        setForm({
            user_name: '',
            user_email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setForm({
            ...form,

            buttonText: 'Sending...'
        })

        emailjs.sendForm('service_l5rrzib', 'template_jydqrkh', form.current, 'tTIbuRoI0TfwysV2H')
            .then((result) => {
                console.log(result.text);
                clearForm();
            }, (error) => {
                console.log(error.text);
                setForm({
                    ...form,
                    buttonText: 'Failed',
                    sent: false,
                    err: 'fail'
                })
                setTimeout(() => {
                    clearForm();
                }, 6000)
            });

    };


    return (
        <section className="mb-32" id="Contact-me">
            <h2>
                <center className="text-4xl mt-8 mb-2 font-semibold">-Contact Me-</center>
                <center className="font-light mb-8">Please leave me your information. Along with any comments.</center>
            </h2>
            <div className="flex justify-center items-center">
                <form ref={form} className="w-1/2 text-left">
                    <label className="block">Name: </label>
                    <input
                        onChange={handleChange}
                        value={form.user_name}
                        name="user_name"
                        type="text"
                        className="rounded px-2 w-full mb-4" />


                    <label className="block">Email: </label>
                    <input
                        onChange={handleChange}
                        value={form.user_email}
                        name="user_email"
                        type="email"
                        className="rounded px-2 w-full mb-4" />


                    <label className="block">Message: </label>
                    <textarea
                        onChange={handleChange}
                        value={form.message}
                        name="message"
                        rows={4}
                        className="rounded px-2 w-full mb-4" />


                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 ml-4 rounded">
                        Submit
                    </button>
                </form>
            </div>

        </section>
    )
}