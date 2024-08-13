import { useState } from 'react';

const DatosAts = ({ formData, setFormData, setShowWarning, setWarningMessage }) => {
    const [profileDescriptionLength, setProfileDescriptionLength] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'profileDescription') {
            setProfileDescriptionLength(value.length);
        }
        setFormData({ ...formData, [name]: value });
    };

    const validarCampos = () => {
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

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold leading-8 text-gray-900">Datos personales</h2>
            </div>

            <div>
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

            <div>
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

            <div>
                <label htmlFor="profileDescription" className="block text-gray-700 font-bold mb-2">
                    Descripción del perfil
                </label>
                <textarea
                    name="profileDescription"
                    value={formData.profileDescription}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full h-40 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700"
                    maxLength={400}
                ></textarea>
                <div className="text-right text-gray-700">
                    {profileDescriptionLength}/400
                </div>
            </div>

            <div className="md:flex md:space-x-6">
                <div className="w-full md:w-1/2 mb-4">
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

                <div className="w-full md:w-1/2 mb-4">
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
            </div>

            <div>
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
        </div>
    );
};
export default DatosAts;
