import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Тестовое задание',
  description: 'Тестовое задание выполнено для органиизации "Фабрика Приложений"',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <div className='wrapper flex justify-center w-screen h-screen bg-[#F8F8FB] p-10 sm:p-4 overflow-scroll'>
          {children}
        </div>
        </body>
    </html>
  )
}
