import React, { useState } from 'react';

const ExperienciaAts = ({ formData, setFormData }) => {
    const [newExperience, setNewExperience] = useState({
        position: '',
        dateStart: '',
        dateFinish: '',
        company: '',
        description: '',
    });

    const [showModal, setShowModal] = useState(false);
    const [descriptionLength, setDescriptionLength] = useState(0);

    const handleNewExperienceChange = (e) => {
        const { name, value } = e.target;
        if (name === 'description') {
            setDescriptionLength(value.length);
        }
        setNewExperience({ ...newExperience, [name]: value });
    };

    const addExperience = (e) => {
        e.preventDefault();
        if (formData.experiences.length < 2) {
            setFormData({
                ...formData,
                experiences: [...formData.experiences, newExperience],
            });
            setNewExperience({ position: '', dateStart: '', dateFinish: '', company: '', description: '' });
        } else {
            setShowModal(true);
        }
    };

    const removeExperience = (index) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences.splice(index, 1);
        setFormData({ ...formData, experiences: updatedExperiences });
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="mb-4">
            <label htmlFor="experience" className="block text-gray-700 font-bold mb-2">
                Experiencia
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="position" className="block text-gray-700 font-bold mb-2">
                        Puesto
                    </label>
                    <input
                        type="text"
                        name="position"
                        value={newExperience.position}
                        onChange={handleNewExperienceChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="company" className="block text-gray-700 font-bold mb-2">
                        Compañía
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={newExperience.company}
                        onChange={handleNewExperienceChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="dates" className="block text-gray-700 font-bold mb-2">
                        Fecha Inicio
                    </label>
                    <input
                        type="date"
                        name="dateStart"
                        value={newExperience.dateStart}
                        onChange={handleNewExperienceChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="dates" className="block text-gray-700 font-bold mb-2">
                        Fecha Final
                    </label>
                    <input
                        type="date"
                        name="dateFinish"
                        value={newExperience.dateFinish}
                        onChange={handleNewExperienceChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Descripción
                    </label>
                    <textarea
                        name="description"
                        value={newExperience.description}
                        onChange={handleNewExperienceChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700' maxLength={500}
                    ></textarea>
                    <div className='text-right text-gray-700'>
                        {descriptionLength}/500
                    </div>
                </div>
            </div>
            <button
                type="button"
                onClick={addExperience}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Agregar Experiencia
            </button>

            <div className="my-4">
                <div className="relative overflow-x-auto md:overflow-visible">
                    <table className="w-full text-sm text-left rtl:text-right">
                        <thead className="text-xs uppercase">
                            <tr className="bg-gray-200 rounded-md">
                                <th className="px-4 py-2">Puesto</th>
                                <th className="px-4 py-2">Fecha Inicio</th>
                                <th className="px-4 py-2">Fecha Final</th>
                                <th className="px-4 py-2">Compañía</th>
                                <th className="px-4 py-2">Descripción</th>
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.experiences.map((experience, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">{experience.position}</td>
                                    <td className="px-4 py-2">{experience.dateStart}</td>
                                    <td className="px-4 py-2">{experience.dateFinish}</td>
                                    <td className="px-4 py-2">{experience.company}</td>
                                    <td className="px-4 py-2">{experience.description}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            type="button"
                                            onClick={() => removeExperience(index)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Límite de Experiencias
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Solo puedes agregar hasta dos experiencias laborales.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                                    onClick={closeModal}
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExperienciaAts;
