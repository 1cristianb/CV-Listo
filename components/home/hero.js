const Hero = () => {
    return (
        <section
            class="relative overflow-hidden bg-gradient-to-b mt-10 pb-12 sm:pb-16  lg:pb-24 xl:pb-32 xl:pt-20">
            <div class="relative z-20 mx-auto max-w-7xl lg:px-8">
                <div class="mx-auto max-w-2xl text-center p-2">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Crea el Currículum Perfecto en Minutos
                    </h2>
                    <p class="mt-6 text-xl leading-8 text-gray-700">
                        Con CVListo, destaca en tu búsqueda de empleo con un CV profesional y atractivo, optimizado para superar los filtros ATS y captar la atención de los reclutadores.
                    </p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="/crear"
                            className="inline-block w-48 text-center text-lg font-medium text-white bg-[#a47f48] py-4 px-10 hover:bg-[#5497b4] hover:shadow-md md:w-48">Crear</a>
                    </div>
                </div>
                <div class="relative mx-auto mt-10 max-w-lg">
                    <img class="w-full rounded-2xl border border-gray-100 shadow" src="img/curriculum.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};
export default Hero;