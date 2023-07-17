import { Inter } from 'next/font/google'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="h-screen w-screen">

<Login/>
    </div>
  )
}
