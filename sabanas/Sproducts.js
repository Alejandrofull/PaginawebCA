const products = [
    { 
        "id": 1, 
        "name": "SABANA COLOR AZUL", 
        "price": 20, 
        "image": "images/sabana1.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 2, 
        "name": "SABANA ROSA", 
        "price": 20, 
        "image": "images/sabana2.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 3, 
        "name": "SABANA ROSA FLOREADA", 
        "price": 20, 
        "image": "images/sabana3.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 4, 
        "name": "SABANA VERDE FLOREADA", 
        "price": 20, 
        "image": "images/sabana4.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 5, 
        "name": "SABANA MULTICOLOR", 
        "price": 20, 
        "image": "images/sabana5.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 6, 
        "name": "SABANA FLOREADA",
        "price": 20, 
        "image": "images/sabana6.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 7, 
        "name": "SABANA MULTICOLOR V2", 
        "price": 20, 
        "image": "images/sabana7.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 8, 
        "name": "SABANA PARIS", 
        "price": 20, 
        "image": "images/sabana8.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 9, 
        "name": "SABANA UNISEC", 
        "price": 20, 
        "image": "images/sabana9.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    },
    { 
        "id": 10, 
        "name": "SABANA UNISEC V2", 
        "price": 20, 
        "image": "images/sabana10.jpg",
        "description": "Nuestra sábana premium está hecha de algodón 100% natural, ofreciendo suavidad, transpirabilidad y comodidad para un sueño reparador. Disponible en varios tamaños y colores elegantes, se adapta a cualquier estilo de decoración. Es resistente, fácil de cuidar y mantiene su suavidad después de múltiples lavados. Ideal para personas con piel sensible, es hipoalergénica y perfecta para cualquier ocasión especial. ¡Transforma tu cama en un espacio de confort y lujo con nuestra sábana de alta calidad!"
    }
];
export default products;