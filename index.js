let frases = ["No te rindas", "Motivate", "Sigue a delante", "Recuerda a Evelyn", "Ama a Evelyn", "Extraña a Evelyn", "Da el 101%", "Si te caes levantate"];

const generador = () => {
    return Math.floor(Math.random() * 8);
};



console.log(frases[generador()]);