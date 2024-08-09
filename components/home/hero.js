const Hero = () => {
    return (
        <div className="relative flex flex-col  mt-28 md:mt-56 xl:items-center mx-auto lg:flex-col lg:mt-12 xl:flex-row-reverse ">
            <div className="w-full h-64 xl:w-1/2 lg:w-1/2 lg:h-auto mr-24">
                <img className="h-full w-full object-cover" src="img/curriculum.jpg" alt="curriculum" />
            </div>
            <div
                className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-40">
                <div className="flex flex-col p-12 md:px-16">
                    <h2 className="text-2xl font-medium uppercase text-[#a47f48] lg:text-4xl">Crea el Currículum Perfecto en Minutos</h2>
                    <p className="mt-4">
                        Con CVlisto, destaca en tu búsqueda de empleo con un CV profesional y atractivo, optimizado para superar los filtros ATS y captar la atención de los reclutadores.

                    </p>
                    <div className="mt-8">
                        <a href="/crear"
                            className="inline-block w-full text-center text-lg font-medium text-white bg-[#e7a187] py-4 px-10 hover:bg-[#a47f48] hover:shadow-md md:w-48">Crear</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;