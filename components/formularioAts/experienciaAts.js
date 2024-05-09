import React, { useState } from 'react';

const ExperienciaAts = ({ formData, setFormData }) => {
    const [newExperience, setNewExperience] = useState({
        position: '',
        dateStart: '',
        dateFinish: '',
        company: '',
        description: '',
    });

    const handleNewExperienceChange = (e) => {
        setNewExperience({ ...newExperience, [e.target.name]: e.target.value });
    };

    const addExperience = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            experiences: [...formData.experiences, newExperience],
        });
        setNewExperience({ position: '', dateStart: '', dateFinish: '', company: '', description: '' });
    };

    const removeExperience = (index) => {
        const updatedExperiences = [...formData.experiences];
        updatedExperiences.splice(index, 1);
        setFormData({ ...formData, experiences: updatedExperiences });
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
            </div>
            <button
                type="button"
                onClick={addExperience}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
                Agregar Experiencia
            </button>

            <div className="my-4 ">
                <div class="relative overflow-x-auto md:overflow-visible">
                    <table class="w-full text-sm text-left rtl:text-right">
                        <thead class="text-xs  uppercase">
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
        </div>
    );
};

export default ExperienciaAts;