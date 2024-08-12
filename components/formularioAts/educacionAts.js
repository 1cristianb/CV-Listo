import React, { useState } from 'react';

const EducacionAts = ({ formData, setFormData }) => {
    const [newEducation, setNewEducation] = useState({
        title: '',
        dateStart: '',
        dateFinish: '',
        area: '',
        university: '',
    });
    const [showModal, setShowModal] = useState(false);

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
        } else {
            setShowModal(true);
        }
    };

    const removeEducation = (index) => {
        const updatedEducation = [...formData.education];
        updatedEducation.splice(index, 1);
        setFormData({ ...formData, education: updatedEducation });
    };

    const closeModal = () => {
        setShowModal(false);
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
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
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
                <div className="fixed z-10 inset-0 overflow-y-auto block">
                    <div className=" items-center justify-center min-h-screen text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
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
        </div >
    );
};
export default EducacionAts;