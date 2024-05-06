const Footer = () => {
    return (
        <footer className="bg-[#EAEAEA] text-black py-6">
            <div className="container mx-auto flex justify-center items-center">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:text-[#6C9BD2]">Inicio</a></li>
                    <li><a href="/crear-cv" className="hover:text-[#6C9BD2]">Crear CV</a></li>
                    <li><a href="/contacto" className="hover:text-[#6C9BD2]">Contacto</a></li>
                </ul>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; 2024 Cristian Boschi. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};
export default Footer;
