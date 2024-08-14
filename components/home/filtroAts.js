import React from 'react';

const FiltroAts = () => {
  return (
    <section className="py-16 mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ¿Qué es el filtro ATS?
          </h2>
          <p className= "mt-6 text-xl leading-8 text-gray-700">
            Descubre cómo los sistemas de seguimiento de candidatos (ATS) están transformando el proceso de selección de personal.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Introducción al ATS</h3>
            <p className="text-gray-700 leading-relaxed">
              Un sistema de seguimiento de candidatos (ATS, por sus siglas en inglés) es un software que las empresas utilizan para gestionar el proceso de reclutamiento. Este sistema ayuda a filtrar, organizar y rastrear las solicitudes de empleo, haciendo que el proceso sea más eficiente y efectivo.
            </p>
          </div>
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">¿Cómo funciona el ATS?</h3>
            <p className="text-gray-700 leading-relaxed">
              El ATS utiliza algoritmos para escanear y analizar los currículums, buscando palabras clave y frases relevantes para la posición a la que se está aplicando. Este filtro inicial ayuda a los reclutadores a identificar rápidamente a los candidatos más adecuados.
            </p>
          </div>
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Beneficios del ATS</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>Ahorra tiempo al automatizar tareas repetitivas.</li>
              <li>Mejora la organización y gestión de los candidatos.</li>
              <li>Aumenta la precisión en la selección de candidatos.</li>
              <li>Facilita la colaboración entre los miembros del equipo de reclutamiento.</li>
            </ul>
          </div>
          <div className="bg-[#f6f6f6] p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Consejos para superar el filtro ATS</h3>
            <p className="text-gray-700 leading-relaxed">
              Para aumentar tus posibilidades de pasar el filtro ATS, asegúrate de personalizar tu currículum para cada aplicación, utilizando palabras clave específicas de la descripción del trabajo. Evita el uso de gráficos complejos y formatos no convencionales que el ATS podría no interpretar correctamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FiltroAts;
