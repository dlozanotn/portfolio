import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'David Lozano | Personal Portfolio',
  description: 'David is a Wordpress Developer ande web designer  with 4 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className}
      bg-gray-50 text-gray-950`}>
          <div className='bg-[#ffb3b6] absolute top-[-6rem] right-[11rem] h-[31.25rem] w[31.25rem] rounded-full blur-[10rem] sm:w[68.75rem]'></div>
          <div className='bg-[#fffbc7] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w[31.25rem] rounded-full blur-[10rem] sm:w[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left[-15rem] 2x1:left-[5rem]'></div>
        {children}
      </body>
    </html>
  );
}
