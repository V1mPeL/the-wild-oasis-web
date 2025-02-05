import { Josefin_Sans } from 'next/font/google';
import Header from './_components/Header';
import '@/app/_styles/globals.css';
import { ReservationProvider } from './_components/ReservationContext';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: 'The Wild Oasis | %s',
    default: 'The Wild Oasis | Welcome',
  },
  description:
    'Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${josefin.className} bg-primary-950 text-gray-50 min-h-screen flex flex-col antialiased  relative`}
      >
        <Header />
        <div className='flex-1 px-8 py-12 '>
          <main className='max-w-7xl mx-auto'>
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
