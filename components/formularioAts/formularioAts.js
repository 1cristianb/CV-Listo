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

    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarDatosAts()) {
            const updatedFormData = { ...formData, title: formData.title.toUpperCase() };
            generatePDF(updatedFormData);
        } else {
            setShowWarning(true);
        }
    };

    const validarDatosAts = () => {
        if (
            formData.name.trim() === '' ||
            formData.title.trim() === '' ||
            formData.profileDescription.trim() === '' ||
            formData.email.trim() === '' ||
            formData.phone.trim() === '' ||
            formData.city.trim() === ''
        ) {
            setWarningMessage('Por favor, completa todos los campos.');
            return false;
        }

        if (!/^\d+$/.test(formData.phone)) {
            setWarningMessage('El teléfono solo puede contener números.');
            return false;
        }

        if (formData.profileDescription.length > 400) {
            setWarningMessage('La descripción del perfil no puede tener más de 400 caracteres.');
            return false;
        }

        setWarningMessage('');
        return true;
    };

    const generatePDF = (formData) => {
        const doc = new jsPDF();
        const lineStart = 20;
        const lineEnd = doc.internal.pageSize.getWidth() - 20;
        const maxLineWidth = 170;
        const lineHeight = 10;
        const sectionSpacing = 15;
        const topMargin = 20;
        const bottomMargin = 20;
        const contentHeight = doc.internal.pageSize.getHeight() - topMargin - bottomMargin;
        let yPos = topMargin;
    
        // Add Title
        doc.setFontSize(40);
        doc.setFont("georgia", "bold");
        doc.text(formData.name, lineStart, yPos);
        yPos += lineHeight;
    
        doc.setFontSize(18);
        doc.setFont("georgia", "semi-bold");
        doc.text(formData.title.toUpperCase(), lineStart, yPos);
        yPos += lineHeight;
    
        // Sección perfil
        doc.setFontSize(10);
        const profileLines = doc.splitTextToSize(formData.profileDescription, maxLineWidth);
        doc.text(profileLines, lineStart, yPos);
        yPos += profileLines.length * 5 + 2;
    
        doc.line(lineStart, yPos, lineEnd, yPos);
        yPos += lineHeight/2;
    
        // Sección contacto
        doc.text(formData.email, lineStart, yPos+1.25);
        doc.text(formData.phone, lineStart + maxLineWidth / 2-15, yPos+1.25, null, null, 'center');
        doc.text(formData.city, lineEnd, yPos+1.25, null, null, 'right');
        yPos += lineHeight/2;
    
        doc.line(lineStart, yPos, lineEnd, yPos);
        yPos += sectionSpacing;
    
        // Sección experiencia
        doc.setFontSize(16);
        doc.text('EXPERIENCIA LABORAL', lineStart, yPos);
        yPos += lineHeight;
    
        formData.experiences.forEach((experience) => {
            doc.setFontSize(12);
            doc.setFont("georgia", "bold");
            doc.text(`${experience.position} - ${experience.company}`, lineStart, yPos);
            yPos += lineHeight / 2;
    
            doc.setFont("georgia", "normal");
            doc.text(`${experience.dateStart} / ${experience.dateFinish}`, lineStart, yPos);
            yPos += lineHeight / 2;
    
            doc.setFontSize(10);
            const experienceLines = doc.splitTextToSize(experience.description, maxLineWidth);
            doc.text(experienceLines, lineStart, yPos);
            yPos += experienceLines.length * 5 + sectionSpacing/2;
        });
    
        // Sección educación
        doc.setFontSize(16);
        doc.text('EDUCACIÓN', lineStart, yPos);
        yPos += lineHeight;
    
        formData.education.forEach((education) => {
            doc.setFontSize(12);
            doc.setFont("georgia", "normal");
            doc.text(`${education.dateStart} / ${education.dateFinish}`, lineStart, yPos);
            yPos += lineHeight / 2;
    
            doc.setFont("georgia", "bold");
            doc.text(education.title, lineStart, yPos);
            yPos += lineHeight / 2;
    
            doc.setFont("georgia", "normal");
            doc.text(education.university, lineStart, yPos);
            yPos += lineHeight + sectionSpacing/2;
        });
    
        // Sección habilidades
        doc.setFontSize(16);
        doc.setFont("georgia", "normal");
        doc.text('HABILIDADES', lineStart, yPos);
        yPos += lineHeight;
    
        doc.setFontSize(10);
        const truncatedSkills = formData.skills.slice(0, 200).replace(/\n/g, ' ');
        const skillsWords = truncatedSkills.split(' ');
        let currentLine = '';
        let spaceLeft = maxLineWidth;
        skillsWords.forEach((word) => {
            const wordWidth = doc.getTextWidth(word + ' ');
            if (wordWidth > spaceLeft) {
                doc.text(currentLine.trim(), lineStart, yPos);
                yPos += lineHeight;
                currentLine = word + ' ';
                spaceLeft = maxLineWidth - wordWidth;
            } else {
                currentLine += word + ' ';
                spaceLeft -= wordWidth;
            }
        });
        if (currentLine) {
            doc.text(currentLine.trim(), lineStart, yPos);
        }
    
        // Margen final
        yPos += bottomMargin;
    
        // Guardar el PDF
        doc.save('curriculum.pdf');
    };
    





    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center md:block mx-auto p-4">
            <DatosAts formData={formData} setFormData={setFormData} />

            <ExperienciaAts formData={formData} setFormData={setFormData} />

            <EducacionAts formData={formData} setFormData={setFormData} />

            <SkillsAts formData={formData} setFormData={setFormData} />
            {showWarning && (
                <div className="text-red-500 font-semibold mt-4">
                    {warningMessage}
                </div>
            )}

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