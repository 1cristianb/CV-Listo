import { useState } from 'react';
const DatosAts = ({ formData, setFormData}) => {
    const [profileDescriptionLength, setProfileDescriptionLength] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'profileDescription') {
            setProfileDescriptionLength(value.length);
        }
        setFormData({ ...formData, [name]: value });
    };
    return (<>
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
                className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-gray-700' maxLength={400}
            ></textarea>
            <div className='text-right text-gray-700'>
                {profileDescriptionLength}/400
            </div>
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
    </>)
}
export default DatosAts;