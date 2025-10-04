import { Poppins } from 'next/font/google'
import { Zain } from 'next/font/google' 


export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const zain = Zain({
  weight: ['300', '400', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-zain',
})