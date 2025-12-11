import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";
import { Card } from "./Card";

//create your first component
const Home = () => {
	const perros = [
  {
    raza: "Labrador Retriever",
    img: "https://media.istockphoto.com/id/122286715/es/foto/labrador-blanco-sobre-un-fondo-blanco.jpg?s=2048x2048&w=is&k=20&c=lqzjhPrzZo0Eaxc0uFNWyHYTAIMm10VgmkCKerUv4dM=",
    descripcion: "Perro amable, inteligente y muy sociable. Ideal para familias y trabajos de asistencia."
  },
  {
    raza: "Pastor Alemán",
    img: "https://images.unsplash.com/photo-1621951714491-3cde56a9cadf?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVycm8lMjBwYXN0b3IlMjBhbGVtJUMzJUExbnxlbnwwfHwwfHx8MA%3D%3D",
    descripcion: "Raza fuerte, obediente y protectora. Conocida por su papel en trabajos policiales y de rescate."
  },
  {
    raza: "Golden Retriever",
    img: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww",
    descripcion: "Muy cariñoso y paciente, excelente compañero para familias y actividades al aire libre."
  },
  {
    raza: "Bulldog Francés",
    img: "https://www.purina.es/sites/default/files/2021-02/BREED%20Hero_0051_french_bulldog.jpg",
    descripcion: "Pequeño, simpático y tranquilo. Perfecto para espacios reducidos y vida urbana."
  },
  {
    raza: "Husky Siberiano",
    img: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg",
    descripcion: "Energético, independiente y muy resistente. Destaca por su bello pelaje y ojos llamativos."
  },
  {
    raza: "Beagle",
    img: "https://images.dog.ceo/breeds/beagle/n02088364_11136.jpg",
    descripcion: "Curioso, amigable y con un gran olfato. Excelente perro de compañía y rastreo."
  }
];
	return (
		<div>
			<Navbar/>
		<Jumbotron/>
		<div className="row d-flex flex-wrap">
		{perros.map((perro)=>(
			<Card 
			raza={perro.raza} 
			img={perro.img} 
			descripcion={perro.descripcion}  
			/> 
			
		))}
		</div>

		<Footer/>
		
		</div>
		
		
	);
};

export default Home;



