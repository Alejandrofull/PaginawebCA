const products = [
    {
        "id": 1,
        "name": "Mandil de tela azul",
        "price": 15,
        "image": "./imagem/mandil1.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    {
        "id": 2,
        "name": "Mandil rayado negro",
        "price": 20,
        "image": "./imagem/mandil2.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    {
        "id": 3,
        "name": "Mandil cuero",
        "price": 50,
        "image": "./imagem/mandil3.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    {
        "id": 4,
        "name": "Mandil delantal celeste",
        "price": 25,
        "image": "./imagem/mandil4.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    {
        "id": 5,
        "name": "Mandil de tela azul",
        "price": 15,
        "image": "./imagem/mandil5.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    { 
        "id": 6, 
        "name": "Mandil delantal rosa", 
        "price": 25, 
        "image": "./imagem/mandil6.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    { 
        "id": 7, 
        "name": "Mandil camuflado",
        "price": 15, 
        "image": "./imagem/mandil7.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    {
        "id": 8, 
        "name": "Mandil cocina azul", 
        "price": 15, 
        "image": "./imagem/mandil8.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    { 
        "id": 9, 
        "name": "Mandil rayado v2", 
        "price": 20, 
        "image": "./imagem/mandil9.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    },
    { 
        "id": 10, 
        "name": "Mandil camuflado v2", 
        "price": 15, 
        "image": "./imagem/mandil10.jpg",
        "description": "Nuestros mandiles de cocina combinan estilo, comodidad y durabilidad para ofrecerte una experiencia de cocina sin preocupaciones. Confeccionados con materiales resistentes como algodón o poliéster, son perfectos para proteger tu ropa mientras cocinas, con un diseño funcional que incluye bolsillos prácticos para tener a mano tus utensilios. Disponibles en una variedad de colores y patrones, son ideales tanto para el hogar como para el entorno profesional. Fáciles de lavar y mantener, nuestros mandiles aseguran que te veas bien y trabajes cómodamente mientras preparas tus platillos favoritos. ¡Haz que tu tiempo en la cocina sea aún más agradable y con estilo!"
    }
];
export default products;