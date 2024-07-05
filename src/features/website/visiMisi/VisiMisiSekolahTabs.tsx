import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'

export function VisiMisiSekolahTab({
  setMenu,
  menu,
}: {
  setMenu: Dispatch<SetStateAction<string>>
  menu: string
}) {
  return (
    <div className="flex gap-32 text-[2.4rem]">
      {['Visi', 'Misi'].map((item, idx) => (
        <div
          onClick={() => {
            localStorage.setItem('tentangSekolahID', item)
            setMenu(item)
          }}
          className={clsx(
            'pb-12 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-b-2 hover:border-warna-dark hover:text-warna-dark',
            {
              'border-b-2 border-warna-dark text-warna-dark': menu === item,
              'border-b-2 border-transparent text-warna-grey': menu !== item,
            },
          )}
          key={idx}
        >
          {item ?? '-'}
        </div>
      ))}
    </div>
  )
}
