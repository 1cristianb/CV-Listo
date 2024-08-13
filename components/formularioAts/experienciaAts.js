import React, { useState } from 'react';

const ExperienciaAts = ({ formData, setFormData }) => {
    const [newExperience, setNewExperience] = useState({
        position: '',
        dateStart: '',
        dateFinish: '',
        company: '',
        description: '',
    });

    const [showWarning, setShowWarning] = useState(false);
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
            setShowWarning(false);
        } else {
            setShowWarning(true);
        }
    };

    const removeExperience = (index) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences.splice(index, 1);
        setFormData({ ...formData, experiences: updatedExperiences });
        setShowWarning(false);
    };

    return (
        <div className="space-y-6 flex flex-col items-center md:block">
            <div>
                <h2 className="mt-20 mb-4 text-2xl font-semibold leading-8 text-gray-900">Experiencia laboral</h2>
            </div>

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
                    <label htmlFor="dateStart" className="block text-gray-700 font-bold mb-2">
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
                    <label htmlFor="dateFinish" className="block text-gray-700 font-bold mb-2">
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
                <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                        Descripción
                    </label>
                    <textarea
                        name="description"
                        value={newExperience.description}
                        onChange={handleNewExperienceChange}
                        className="shadow appearance-none border rounded w-full h-40 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
                        maxLength={500}
                    ></textarea>
                    <div className="text-right text-gray-700">
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

            <div className="my-4 flex justify-center md:block">
                <div className="relative overflow-x-auto w-1/2 md:w-full">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-gray-200">
                            <tr>
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
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-1 rounded"
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

            {showWarning && (
                <div className="text-red-500 font-semibold mt-4">
                    Solo puedes agregar hasta dos experiencias laborales.
                </div>
            )}
        </div>
    );
};

export default ExperienciaAts;
