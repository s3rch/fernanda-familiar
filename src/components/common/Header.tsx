import Image from "next/image"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="bg-gray-800" style={{
      background: "transparent url(https://fernandafamiliar.soy/wp-content/uploads/2024/01/bg-periodista-de-vida-1.jpeg) no-repeat center center / cover"
    }}>
      <div className="container mx-auto px-3">
        <Link href="/">
          <h1 className="hidden">Fernanda Familiar</h1>
          <div className="py-10 md:py-20 lg:py-32">
            <Image
              src="https://fernandafamiliar.soy/wp-content/uploads/2019/01/logo-ff-blanco.png"
              width={380}
              height={80}
              alt="Fernanda Familiar"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}
