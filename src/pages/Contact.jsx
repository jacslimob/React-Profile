
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

    const [touchedFields, setTouchedFields] = useState({
        user_name: false,
        user_email: false,
        message: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleBlur = (field) => {
        setTouchedFields({
            ...touchedFields,
            [field]: true,
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

        setTouchedFields({
            user_name: false,
            user_email: false,
            message: false,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if required fields are not empty
        if (!form.user_name || !form.user_email || !form.message) {
            setForm({
                ...form,
                buttonText: 'Try again',
                sent: false,
                err: 'Please fill in all required fields'
            });
            return;
        }

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
                <form ref={form} className="md:w-1/4 w-1/2 text-left">
                    <label className="block">Name: </label>
                    <input
                        required
                        onChange={handleChange}
                        onBlur={() => handleBlur('user_name')}
                        value={form.user_name}
                        name="user_name"
                        type="text"
                        className="rounded px-2 w-full" />

                    <div className='mb-4'>{touchedFields.user_name && !form.user_name && (
                        <span className="text-red-500">*Name cannot be blank</span>
                    )}</div>

                    <label className="block">Email: </label>
                    <input
                        required
                        onChange={handleChange}
                        onBlur={() => handleBlur('user_email')}
                        value={form.user_email}
                        name="user_email"
                        type="email"
                        className="rounded px-2 w-full" />

                    <div className='mb-4'>{touchedFields.user_email && !form.user_email && (
                        <span className="text-red-500">*Email cannot be blank</span>
                    )}</div>

                    <label className="block">Message: </label>
                    <textarea
                        required
                        onChange={handleChange}
                        onBlur={() => handleBlur('message')}
                        value={form.message}
                        name="message"
                        rows={4}
                        className="rounded px-2 w-full" />

                    <div className='mb-4'>{touchedFields.message && !form.message && (
                        <span className="text-red-500">*Message cannot be blank</span>
                    )}</div>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 rounded">
                        {form.buttonText}
                    </button>
                    <span className='text-red-500 ml-2'>{form.err}</span>
                </form>


            </div>

        </section>
    )
}