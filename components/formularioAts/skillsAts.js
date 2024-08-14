import React from 'react';

const SkillsAts = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="mb-4 flex flex-col items-center">
                <div>
                    <h2 className="mt-20 mb-4 text-2xl font-semibold leading-8 text-gray-900">Habilidades</h2>
                </div>
                <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-52"
                    maxLength={200}
                ></textarea>
                <div className="mt-2 text-right text-gray-600">
                    {formData.skills.length}/200
                </div>
            </div>
        </>
    );
};

export default SkillsAts;
