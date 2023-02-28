import styles from './About.module.css';


export default function About () {
	return(
		<div className={styles.container}>
			<aside>
				<h1 className={styles.InfoTitle} >INFORMACION DE LA PAGINA</h1>
				<div className={styles.AsideText} ><p>
					La pagina se enfoca en ayudar a los fans de la popular 
					serie "Rick y Morty" a encontrar información
					sobre los personajes específicos de la serie
					mediante su ID. Al acceder a la página, los
					usuarios pueden ingresar el número de identificación 
					del personaje en un cuadro de búsqueda y obtener 
					información detallada sobre ese personaje en particular.</p>
				</div>
				<h1 className={styles.InfoTitle} >Guia de inicio</h1>
				<div className={styles.AsideText} >
					Para empezar vuelve a <span>Home</span> y en la <span>Barra de Busqueda</span> pon 
					un numero del 1 al 826 y presiona en <span>Agregar</span>.<br/><br/> Otra opcion
					es <span>Personaje Aleatorio</span>, te mostrara un personaje al azar.<br/><br/> 

					El boton <span>Borrar Todo</span> borrara todas las Tarjetas de Personaje.
				</div>
			</aside>		
			<article className={styles.article} >
				<section><p className={styles.sectionP} >
					Vicente de Blasi es una persona apasionada
					por el desarrollo web, con una sólida
					formación académica en esta área.
					Es conocido por su capacidad para diseñar
					y crear sitios web atractivos y funcionales,
					utilizando las últimas tecnologías y
					herramientas disponibles.</p>
				</section>
				<section><p className={styles.sectionP} >
					Como estudiante de desarrollo web, Vicente
					es conocido por su dedicación y compromiso
					con su trabajo. Es muy cuidadoso con los
					detalles y presta atención a cada aspecto
					del proceso de desarrollo, desde la
					planificación inicial hasta la implementación
					final del sitio web. Además, es un excelente
					solucionador de problemas y siempre está
					dispuesto a investigar y experimentar para
					encontrar la mejor solución a cualquier
					desafío que surja en su trabajo.</p>
				</section>
				<section><p className={styles.sectionP} >
					Vicente es un excelente comunicador y trabaja
					bien en equipo, lo que lo hace un gran colaborador
					en proyectos de desarrollo web. También es
					conocido por su ética laboral y su capacidad
					para trabajar bajo presión y cumplir con los
					plazos establecidos.</p>
				</section>
				<section><p className={styles.sectionP} >
					En resumen, Vicente de Blasi es una persona
					altamente capacitada y comprometida con el
					desarrollo web, con habilidades técnicas y
					blandas excepcionales, y un enfoque incansable
					en la excelencia en su trabajo.</p>
				</section>
			</article>
			</div>
			);
}