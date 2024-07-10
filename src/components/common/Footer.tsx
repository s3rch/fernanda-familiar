import Image from "next/image"
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialPinterest, TiSocialYoutube } from "react-icons/ti"

export const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="container mx-auto px-3">
        <div className="py-6">
          <Image
            src="https://fernandafamiliar.soy/wp-content/uploads/2019/01/logo-ff-blanco.png"
            width={380}
            height={80}
            alt="Fernanda Familiar"
          />
          <div className="lg:flex lg:justify-between text-white">
            <div className="pb-5 lg:basis-1/5">
              <h3 className="text-2xl mb-3">Redes Sociales</h3>
              <ul className="flex items-center">
                <li className="text-3xl"><TiSocialInstagram /></li>
                <li className="text-3xl"><TiSocialPinterest /></li>
                <li className="text-3xl"><TiSocialLinkedin /></li>
                <li className="text-3xl"><TiSocialFacebook /></li>
                <li className="text-3xl"><TiSocialYoutube /></li>
              </ul>
            </div>

            <div className="pb-5 lg:basis-3/5 pr-10">
              <h3 className="text-2xl mb-3">Acerca de nosotros</h3>
              <p>Fernanda Familiar es un sitio web de noticias, entretenimiento, música y moda. Te damos las noticias más importantes de México y el mundo, además de videos acerca de estrategias digitales.</p>
            </div>

            <div className="pb-5 lg:basis-1/5">
              <h3 className="text-2xl mb-3">Ultimas noticias</h3>
              <ul>
                <li>
                  <a href="#">Ana Guevara...</a>
                </li>
                <li>
                  <a href="#">Rishi Sunak...</a>
                </li>
                <li>
                  <a href="#">Homenajes a...</a>
                </li>
                <li>
                  <a href="#">Pie grande en Lousiana...</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
