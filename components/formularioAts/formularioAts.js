"use client"
import { useState } from 'react';
import jsPDF from 'jspdf';
import ExperienciaAts from './experienciaAts';
import EducacionAts from './educacionAts';

const FormularioAts = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        profileDescription: '',
        email: '',
        phone: '',
        city: '',
        experiences: [],
        education: [],
        skills: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedFormData = { ...formData, title: formData.title.toUpperCase() };
        generatePDF(updatedFormData);
    };

    const generatePDF = (formData) => {
        const doc = new jsPDF();
        const lineStart = 20; // Inicio de la línea
        const lineEnd = doc.internal.pageSize.getWidth() - 20; // Final de la línea
        const lineLength = lineEnd - lineStart; // Longitud de la línea

        // Agregar el título
        let yPos = 20;
        doc.setFontSize(40);
        doc.setFont("georgia", "bold");
        doc.text(formData.name, lineStart, yPos);
        yPos += 10;
        doc.setFont("georgia", "semi-bold");
        doc.setFontSize(18);
        doc.text(formData.title.toUpperCase(), lineStart, yPos);
        yPos += 10;

        // Agregar la descripción de perfil
        doc.setFontSize(10);
        const lineasPerfil = doc.splitTextToSize(formData.profileDescription, 170);
        doc.text(lineasPerfil, lineStart, yPos);
        yPos += lineasPerfil.length * 5 + 2; // Ajustar la posición vertical después de la descripción de perfil

        doc.line(lineStart, yPos, lineEnd, yPos);
        yPos += 5;
        doc.text(formData.email, lineStart, yPos);
        doc.text(formData.phone, (lineStart + lineLength / 2) - 15, yPos); // Teléfono centrado
        doc.text(formData.city, lineEnd, yPos, null, null, 'right'); // Ciudad alineada a la derecha
        yPos += 3; // Ajustar la posición vertical después del correo electrónico, teléfono y ciudad
        doc.line(lineStart, yPos, lineEnd, yPos);
        yPos += 11; // Ajustar la posición vertical para la sección de experiencia

        // Agregar la sección de experiencia
        doc.setFontSize(16);
        doc.text('EXPERIENCIA', lineStart, yPos);
        yPos += 8;
        doc.setFontSize(12);
        formData.experiences.forEach((experience, index) => {
            doc.setFontSize(12);
            doc.setFont("georgia", "bold");
            doc.text(`${experience.position} - ${experience.company}`, lineStart, yPos);
            doc.setFont("georgia", "normal");
            doc.text(`${experience.dateStart} / ${experience.dateFinish}`, lineStart, yPos + 5);
            doc.setFontSize(10);
            const lineas = doc.splitTextToSize(experience.description, 170);
            doc.text(lineas, lineStart, yPos + 10);
            yPos += 8 + lineas.length * 8;
        });

        // Agregar la sección de educación
        doc.setFontSize(16);
        doc.text('EDUCACIÓN', lineStart, yPos + 7);
        yPos += 16;
        doc.setFontSize(12);
        formData.education.forEach((education, index) => {
            doc.setFont("georgia", "normal");
            doc.text(`${education.dateStart} / ${education.dateFinish}`, lineStart, yPos);
            yPos += 5;
            doc.setFont("georgia", "bold");
            doc.text(`${education.title} - ${education.area} - ${education.university}`, lineStart, yPos);
            yPos += 7;
        });

        // Agregar la sección de aptitudes
        doc.setFont("georgia", "normal");
        doc.setFontSize(16);
        doc.text('APTITUDES', lineStart, yPos + 10);
        yPos += 18;
        doc.setFontSize(10);
        const lineasAptitudes = doc.splitTextToSize(formData.skills, 170);
        doc.text(lineasAptitudes, lineStart, yPos);
        yPos += lineasAptitudes.length * 8;

        // Guardar el PDF
        doc.save('curriculum.pdf');
    };

    return (
        <form onSubmit={handleSubmit} className="md:max-w-md min-w-32 mx-auto p-4">
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
                <label htmlFor="profileDescription" className="block text-gray-700 font-bold mb-2">
                    Descripción del perfil
                </label>
                <textarea
                    name="profileDescription"
                    value={formData.profileDescription}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
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

            <ExperienciaAts formData={formData} setFormData={setFormData} />

            <EducacionAts formData={formData} setFormData={setFormData} />

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