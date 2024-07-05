import { GetTentangSekolahResponse } from '@/libs/type/website/WebsiteProfil'
import { useGetJenisProfilQuery } from '@/store/slices/ReferensiAPI'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function TentangSekolahTab({
  setMenu,
  menu,
  dataTentang,
}: {
  setMenu: Dispatch<SetStateAction<string>>
  menu: string
  dataTentang: GetTentangSekolahResponse
}) {
  const [jenisProfil, setJenisProfil] = useState<string[]>([])
  const { data: dataJenisProfil } = useGetJenisProfilQuery()

  useEffect(() => {
    if (dataJenisProfil?.data) {
      setJenisProfil(dataJenisProfil?.data)
    }
  }, [dataJenisProfil?.data])

  return (
    <div className="flex gap-32 text-[2.4rem]">
      <div
        onClick={() => {
          localStorage.setItem('tentangSekolahID', 'identitas')
          setMenu('identitas')
        }}
        className={clsx(
          'pb-12 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-b-2 hover:border-warna-dark hover:text-warna-dark',
          {
            'border-b-2 border-warna-dark text-warna-dark':
              menu === 'identitas',
            'border-b-2 border-transparent text-warna-grey':
              menu !== 'identitas',
          },
        )}
      >
        Identitas
      </div>
      {dataTentang?.profil?.map((item, idx) => (
        <div
          onClick={() => {
            localStorage.setItem('tentangSekolahID', item?.jenis?.toLowerCase())
            setMenu(item?.jenis?.toLowerCase())
          }}
          className={clsx(
            'pb-12 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-b-2 hover:border-warna-dark hover:text-warna-dark',
            {
              'border-b-2 border-warna-dark text-warna-dark':
                menu === item?.jenis?.toLowerCase(),
              'border-b-2 border-transparent text-warna-grey':
                menu !== item?.jenis?.toLowerCase(),
            },
          )}
          key={idx}
        >
          {item?.jenis}
        </div>
      ))}
      {dataTentang?.profil?.length < jenisProfil?.length && (
        <Link
          to={`tambah`}
          className={clsx(
            'mb-12 flex items-center gap-12 rounded-lg border-transparent bg-warna-primary px-12 py-4 text-[1.8rem] text-white transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-opacity-80',
          )}
        >
          <FontAwesomeIcon icon={faPlus} />
          Add
        </Link>
      )}
    </div>
  )
}
