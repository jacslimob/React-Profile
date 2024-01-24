import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
        sent: false,
        buttonText: 'Submit',
        err: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value,
        });
    };

    function clearForm() {
        setData({
            name: '',
            email: '',
            message: '',
            sent: false,
            buttonText: 'Submit',
            err: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data),
            setData({
                ...data,

                buttonText: 'Sending...'
            })

        axios.post('api/sendmail', data)
            .then(res => {
                if (res.data.result !== 'success') {
                    setData({
                        ...data,
                        buttonText: 'Tried but failed',
                        sent: false,
                        err: 'fail'
                    })
                    setTimeout(() => {
                        clearForm()
                    }, 6000)
                } else {
                    setData({
                        ...data,
                        sent: true,
                        buttonText: 'Sent',
                        err: 'success'
                    })
                    setTimeout(() => {
                        clearForm();
                    }, 6000)
                }
            }).catch((err) => {
                console.log('Reason: ' + err)
                setData({
                    ...data,
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
                            value={data.name}
                            name="name"
                            type="text"
                            className="rounded px-2 w-full" />
                    </label>

                    <label className="block mb-4">
                        Email: <input
                            onChange={handleChange}
                            value={data.email}
                            name="email"
                            type="email"
                            className="rounded px-2 w-full" />
                    </label>

                    <label className="block mb-4">
                        Message: <textarea
                            onChange={handleChange}
                            value={data.message}
                            name="message"
                            rows={4}
                            className="rounded px-2 w-full" />
                    </label>

                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 p-2 text-white hover:text-blue-600 hover:bg-sky-400 ml-4 rounded">
                        {data.buttonText}
                    </button>
                </form>
            </div>

        </section>
    )
}