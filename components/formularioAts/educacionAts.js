import React, { useState } from 'react';

const EducacionAts = ({ formData, setFormData }) => {
    const [newEducation, setNewEducation] = useState({
        title: '',
        dateStart: '',
        dateFinish: '',
        area: '',
        university: '',
    });
    const [showWarning, setShowWarning] = useState(false);

    const handleNewEducationChange = (e) => {
        setNewEducation({ ...newEducation, [e.target.name]: e.target.value });
    };

    const addEducation = (e) => {
        e.preventDefault();
        if (formData.education.length < 2) {
            setFormData({
                ...formData,
                education: [...formData.education, newEducation],
            });
            setNewEducation({ title: '', dateStart: '', dateFinish: '', area: '', university: '' });
            setShowWarning(false);
        } else {
            setShowWarning(true);
        }
    };

    const removeEducation = (index) => {
        const updatedEducation = [...formData.education];
        updatedEducation.splice(index, 1);
        setFormData({ ...formData, education: updatedEducation });
        setShowWarning(false);
    };

    return (
        <div className="space-y-6 flex flex-col items-center md:block">
            <div>
                <h2 className="mt-20 mb-4 text-2xl font-semibold leading-8 text-gray-900">Educación</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
                        Título
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={newEducation.title}
                        onChange={handleNewEducationChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="area" className="block text-gray-700 font-bold mb-2">
                        Área de estudio
                    </label>
                    <input
                        type="text"
                        name="area"
                        value={newEducation.area}
                        onChange={handleNewEducationChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="col-span-1 sm:col-span-2">
                    <label htmlFor="university" className="block text-gray-700 font-bold mb-2">
                        Universidad
                    </label>
                    <input
                        type="text"
                        name="university"
                        value={newEducation.university}
                        onChange={handleNewEducationChange}
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
                        value={newEducation.dateStart}
                        onChange={handleNewEducationChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="dateFinish" className="block text-gray-700 font-bold mb-2">
                        Fecha Finalización
                    </label>
                    <input
                        type="date"
                        name="dateFinish"
                        value={newEducation.dateFinish}
                        onChange={handleNewEducationChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <button
                type="button"
                onClick={addEducation}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  mt-4"
            >
                Agregar Educación
            </button>

            <div className="my-4 flex justify-center md:block">
                <div className="relative overflow-x-auto w-1/2 md:w-full">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs uppercase bg-gray-200">
                            <tr className="bg-gray-200 rounded-md">
                                <th className="px-4 py-2">Título</th>
                                <th className="px-4 py-2">Área de estudio</th>
                                <th className="px-4 py-2">Universidad</th>
                                <th className="px-4 py-2">Fecha Inicio</th>
                                <th className="px-4 py-2">Fecha Final</th>
                                <th className="px-4 py-2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.education.map((education, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">{education.title}</td>
                                    <td className="px-4 py-2">{education.area}</td>
                                    <td className="px-4 py-2">{education.university}</td>
                                    <td className="px-4 py-2">{education.dateStart}</td>
                                    <td className="px-4 py-2">{education.dateFinish}</td>
                                    <td className="px-4 py-2">
                                        <button
                                            type="button"
                                            onClick={() => removeEducation(index)}
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-1 rounded-sm"
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
                <div className="text-red-500 font-semibold mt-4 w-52 md:w-full">
                    Solo puedes agregar hasta dos educaciones.
                </div>
            )}
        </div>
    );
};
export default EducacionAts;
