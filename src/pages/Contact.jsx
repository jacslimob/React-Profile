import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    function clearForm() {
        setFormState({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        setFormState({
            ...formState,
            buttonText: 'Sending...'
        })

        axios.post('api/sendmail', formState)
            .then(res => {
                if (res.data.result !== 'success') {
                    setFormState({
                        ...formState,
                        buttonText: 'Failed to send',
                        sent: false,
                        err: 'fail'
                    })
                    setTimeout(() => {
                        clearForm()
                    }, 6000)
                } else {
                    setFormState({
                        ...formState,
                        sent: true,
                        buttonText: 'Sent',
                        err: 'success'
                    })
                    setTimeout(() => {
                        clearForm();
                    }, 6000)
                }
            }).catch((err) => {
                setFormState({
                    ...formState,
                    buttonText: 'Failed to send',
                    err: 'fail'
                })
            })
    };


    return (
        <section className="mb-32" id="Contact-me">
            <h2>
                <center className="text-4xl mt-8 mb-2 font-semibold">-Contact Me-</center>
                <center className="font-light mb-8">Please leave me your information. Along with any comments.</center>
            </h2>
            <div className="flex justify-center items-center">
                <form className="w-1/2 text-left">
                    <label className="block mb-4">
                        Name: <input
                            onChange={handleChange}
                            value={formState.name}
                            name="name"
                            type="text"
                            className="rounded px-2 w-full" />
                    </label>

                    <label className="block mb-4">
                        Email: <input
                            onChange={handleChange}
                            value={formState.email}
                            name="email"
                            type="email"
                            className="rounded px-2 w-full" />
                    </label>

                    <label className="block mb-4">
                        Message: <textarea
                            onChange={handleChange}
                            value={formState.message}
                            name="message"
                            rows={4}
                            className="rounded px-2 w-full" />
                    </label>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 ml-4 rounded">
                        {formState.buttonText}
                    </button>
                </form>
            </div>

        </section>
    )
}