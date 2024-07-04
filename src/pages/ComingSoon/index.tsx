import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

export default function ComingSoon({ isLayout }: { isLayout?: boolean }) {
  return (
    <div
      className={clsx('flex h-screen items-center justify-center', {
        '': isLayout,
        'bg-gradient-to-tr from-sky-900 to-blue-900  text-white': !isLayout,
      })}
    >
      <div
        className={clsx(
          'flex flex-col items-center justify-center gap-64 p-64 phones:h-full phones:p-32 ',
          {
            'w-full text-warna-dark': isLayout,
            'bg-opacity-20shadow-md w-[40%] rounded-3x bg-blue-100  text-white  phones:w-full phones:bg-opacity-0 phones:text-center  ':
              !isLayout,
          },
        )}
      >
        <p className="font-serif text-[30rem]">404</p>
        <p
          className="text-center font-sf-pro text-[5rem]"
          style={{ lineHeight: '130%' }}
        >
          Halaman Tidak Ditemukan
        </p>
        <p className="text-center text-[2.6rem]" style={{ lineHeight: '130%' }}>
          Halaman yang Anda cari tidak ditemukan. Mungkin halaman tersebut telah
          dipindahkan atau namanya telah diubah.
        </p>
        <Link
          to={'/'}
          className={clsx(
            'flex transform items-center gap-12  rounded-2xl  px-32 py-12 text-[2rem] transition-transform duration-300 ease-in-out hover:scale-105',
            {
              'bg-warna-dark text-white': isLayout,
              'bg-gradient-to-tr from-sky-900 to-blue-900': !isLayout,
            },
          )}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali Ke Home
        </Link>
      </div>
    </div>
  )
}
