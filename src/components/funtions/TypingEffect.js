import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingEffect = () => {
  // Crear una referencia para el elemento donde se aplicará el efecto de Typed.js
  const el = useRef(null);

  useEffect(() => {
    // Configuración para Typed.js
    const typed = new Typed(el.current, {
      strings: ["Software Engineer","Frontend Developer", "Backend Developer", "IT Support"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });

    // Destruir la instancia de Typed.js al desmontar el componente para evitar problemas de memoria
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span className="typing-text" ref={el}></span>
    </div>
  );
};

export default TypingEffect;