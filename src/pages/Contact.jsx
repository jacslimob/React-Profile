import { useState } from "react";

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
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(formState);
            clearForm();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <section className="mb-24" id="Contact-me">
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
                        className="rounded px-2 bg-blue-500">
                        Submit
                    </button>
                </form>
            </div>

        </section>
    )
}