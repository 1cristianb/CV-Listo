"use client"
import { useState } from 'react';
import jsPDF from 'jspdf';
import ExperienciaAts from './experienciaAts';
import EducacionAts from './educacionAts';
import SkillsAts from './skillsAts';
import DatosAts from './datosAts';

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
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center md:block mx-auto p-4">
            <DatosAts formData={formData} setFormData={setFormData} />

            <ExperienciaAts formData={formData} setFormData={setFormData} />

            <EducacionAts formData={formData} setFormData={setFormData} />

            <SkillsAts formData={formData} setFormData={setFormData} />

            <div className='flex justify-center mt-20'>
                <button
                    type="submit"
                    className="inline-block w-48 text-center text-lg font-medium text-white bg-[#5497b4] py-4 px-10 hover:bg-[#a47f48] hover:shadow-md md:w-48"
                >
                    Crear
                </button>
            </div>
        </form>
    );
};

export default FormularioAts;