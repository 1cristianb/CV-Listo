"use client"
import { useState } from 'react';
import jsPDF from 'jspdf';

const FormularioAts = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        email: '',
        phone: '',
        city: '',
        experience: '',
        education: '',
        skills: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        generatePDF(formData);
    };

    const generatePDF = (formData) => {
        const doc = new jsPDF();

        // Agregar el título
        doc.setFontSize(40);
        doc.setFont("georgia", "bold");
        doc.text(formData.name, 20, 20);

        doc.setFont("georgia", "normal");
        doc.setFontSize(18);
        doc.text(formData.title.toUpperCase(), 20, 30);

        doc.line(20,36,190,36);

        doc.setFontSize(12);
        doc.text(formData.email, 20, 43);
        doc.text(formData.phone, 90, 43);
        doc.text(formData.city, 160, 43);

        doc.line(20,47,190,47);

        // Agregar la sección de experiencia
        doc.setFontSize(16);
        doc.text('EXPERIENCIA', 20, 56);
        doc.setFontSize(12);
        const lineas = doc.splitTextToSize(formData.experience, 180);
        doc.text(lineas, 20, 64);

        // Agregar la sección de educación
        doc.setFontSize(16);
        doc.text('EDUCACIÓN', 20, 100);
        doc.setFontSize(12);
        const lineasEducacion = doc.splitTextToSize(formData.education, 180);
        doc.text(lineasEducacion, 20, 108);

        // Agregar la sección de aptitudes
        doc.setFontSize(16);
        doc.text('APTITUDES', 20, 136);
        doc.setFontSize(12);
        const lineasAptitudes = doc.splitTextToSize(formData.skills, 180);
        doc.text(lineasAptitudes, 20, 144);

        // Guardar el PDF
        doc.save('curriculum.pdf');
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                    Título
                </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                    Teléfono
                </label>
                <input
                    type="text"
                    name="phone"
                    pattern="[0-9]*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
                    Ciudad
                </label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
                    Experiencia
                </label>
                <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="education" className="block text-gray-700 font-bold mb-2">
                    Educación
                </label>
                <textarea
                    name="education"
                    value={formData.education}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <div className="mb-4">
                <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">
                    Aptitudes
                </label>
                <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Crear
            </button>
        </form>
    );
};

export default FormularioAts;