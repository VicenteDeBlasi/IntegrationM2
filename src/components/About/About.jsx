import styles from './About.module.css';


export default function About () {
	return(
		<div className={styles.container}>
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
			<aside>
				<img className={styles.Vicente} src="https://avatars.githubusercontent.com/u/103010932?s=400&u=2498f7e6dc33cc0004011e80cf75a422b24840fe&v=4" alt="fotovi2" />
				<img className={styles.Logos} alt="LogoJS" src="https://th.bing.com/th/id/OIP.utbBAOx_GBtJGgHPPwWiFAHaHa?pid=ImgDet&rs=1" />
				<img className={styles.Logos} alt="LogoCSS" src="https://i2.wp.com/www.worldeatingdisordersday.org/wp-content/uploads/2016/03/css-logo.png" />
				<img className={styles.Logos} alt="LogoHTML" src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" />
				<img className={styles.Logos} alt="LogoReact" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" />
				<img className={styles.Logos} alt="LogoREDUX" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" />
			</aside>		
			</div>
			);
}