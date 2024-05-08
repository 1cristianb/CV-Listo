import FormularioAts from "@/components/formularios/formularioAts"

const Formulario = () => {
    return (
        <>
             <section className="my-32 flex justify-center items-center h-screen">
                    <div className="container px-0 md:px-12">
                        <div className="block rounded-lg bg-[#fffff] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                            <div className="flex flex-wrap justify-center">
                                <div className="mb-12 w-full md:w-5/12 lg:mb-0 lg:w-5/12 lg:px-6">
                                    <FormularioAts />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
export default Formulario