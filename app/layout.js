import { Inter ,Roboto} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Roboto({ subsets: ['latin'],weight:"400" })

export const metadata = {
  title: 'CV Listo',
  description: 'Creador de CV',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
