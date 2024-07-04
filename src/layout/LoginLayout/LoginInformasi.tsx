import { Loading } from '@/components/Loading'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { GetLoginResponseType } from '@/libs/type'
import { useGetLoginQuery } from '@/store/slices/LoginAPI'
import { useEffect, useState } from 'react'

export function LoginInformasi() {
  const [login, setLogin] = useState<GetLoginResponseType>()
  const {
    data: dataLogin,
    isFetching: isFetchingLogin,
    isLoading: isLoadingLogin,
  } = useGetLoginQuery()

  const loadingLogin = isFetchingLogin || isLoadingLogin

  useEffect(() => {
    if (dataLogin?.data) {
      setLogin(dataLogin?.data)
    }
  }, [dataLogin])

  return (
    <div className="h-auto w-[70%] text-white phones:w-full">
      {loadingLogin ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-64  phones:p-32">
          {/* --- Logo --- */}
          <div className="flex flex-col gap-32 phones:flex-row">
            {login?.logo && (
              <img
                src={login?.logo}
                alt="IndoSistem"
                className="h-[12rem] w-[20rem] rounded-2xl object-cover filter"
                loading="lazy"
              />
            )}
            <div className="flex flex-col gap-8" style={{ lineHeight: '130%' }}>
              {login?.nama && (
                <p className="text-[2.4rem] text-warna-pale-blue">
                  {capitalizeFirstLetterFromLowercase(
                    login?.nama?.toLowerCase(),
                  )}
                </p>
              )}
              {login?.alamat && (
                <p className="font-roboto text-[2.8rem] uppercase">
                  {login?.alamat}
                </p>
              )}
            </div>
          </div>
          {/* --- Deskripsi --- */}
          <div className="flex flex-col gap-32">
            <p className="font-roboto text-[4rem]">Halaman Login</p>
            <p className="text-[2.4rem]" style={{ lineHeight: '130%' }}>
              Hai, selamat datang kembali di{' '}
              <span className="font-bold">Sistem Informasi Akademik</span>.
              Silahkan login dengan akun Anda
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
