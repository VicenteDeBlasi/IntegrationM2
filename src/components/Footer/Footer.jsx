import FutStyle from './Footer.module.css';

export default function Footer () {
	return(
		<div className={FutStyle.FutContainer} >
			<ul className={FutStyle.UList} id="CONTACTO">
				<li className={FutStyle.ListItem} >
					<a target="_blank" className={FutStyle.LIA} href="https://www.instagram.com/vicente.dblasi/">
						<img className={FutStyle.ImgLogoRs} src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png" alt="LogoIG" />
						<scan className={FutStyle.LIAscan} >Instagram</scan>
					</a>
				</li>
				<li className={FutStyle.ListItem} >
					<a target="_blank" className={FutStyle.LIA} href="https://github.com/VicenteDeBlasi">
						<img className={FutStyle.ImgLogoRs} src="https://cdn-icons-png.flaticon.com/128/3291/3291695.png" alt="LogoGH" />
						<scan className={FutStyle.LIAscan} >Github</scan>
					</a>
				</li>
				<li className={FutStyle.ListItem} >
					<a target="_blank" className={FutStyle.LIA} href="https://www.linkedin.com/in/vicente-de-blasi-sanguinetti-869585266/">
						<img className={FutStyle.ImgLogoLD} src="https://sguru.org/wp-content/uploads/2018/02/Logo-LinkedIn-Round.png" alt="LogoLD" />
						<scan className={FutStyle.LIAscan} >Linkedin</scan>
					</a>
				</li>
			</ul>
			</div>);}