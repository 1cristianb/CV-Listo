const SkillsAts = ({ formData, setFormData }) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (<>
        <div className="mb-4">
            <label htmlFor="skills" className="block text-gray-700 font-bold mb-2">
                Aptitudes
            </label>
            <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
        </div>
    </>);
}
export default SkillsAts;