import { Skeleton } from '@/components/Skeleton'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { GetLoginResponseType } from '@/libs/type'
import { GetIdentiasAdminResponseType } from '@/libs/type/RootType'
import { useGetLoginQuery } from '@/store/slices/LoginAPI'
import { useGetAdminIdentitasQuery } from '@/store/slices/RootAPI'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { IconLogout, IconUser } from '@/assets'

export function RootHeader() {
  const navigate = useNavigate()

  // --- Identitas ---
  const [identitas, setIdentitas] = useState<GetLoginResponseType>()
  const {
    data: dataIdentitas,
    isFetching: isFetchingIdentitas,
    isLoading: isLoadingIdentitas,
  } = useGetLoginQuery()

  const loadingIdentitas = isFetchingIdentitas || isLoadingIdentitas

  useEffect(() => {
    if (dataIdentitas?.data) {
      setIdentitas(dataIdentitas?.data)
    }
  }, [dataIdentitas?.data])

  // --- Identitas Admin ---
  const [identitasAdmin, setIdentitasAdmin] =
    useState<GetIdentiasAdminResponseType>()
  const {
    data: dataIdentitasAdmin,
    isFetching: isFetchingIdentitasAdmin,
    isLoading: isLoadingIdentitasAdmin,
    isError: isErrorIdentitasAdmin,
    error: errorIdentitasAdmin,
  } = useGetAdminIdentitasQuery()

  const loadingIdentitasAdmin =
    isFetchingIdentitasAdmin || isLoadingIdentitasAdmin

  useEffect(() => {
    if (dataIdentitasAdmin?.data) {
      setIdentitasAdmin(dataIdentitasAdmin?.data)
    }
  }, [dataIdentitasAdmin?.data])

  useEffect(() => {
    if (isErrorIdentitasAdmin) {
      const errorMsg = errorIdentitasAdmin as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })

      if (errorMsg?.data?.message?.includes('Token')) {
        setTimeout(() => {
          Cookies.remove('token')
          navigate(`/`)
        }, 5000)
      }
    }
  }, [isErrorIdentitasAdmin, errorIdentitasAdmin])

  return (
    <div className="flex items-center gap-32 phones:flex-col">
      {loadingIdentitasAdmin || loadingIdentitas ? (
        <div className="flex gap-32">
          <Skeleton height="h-[10rem]" width="w-[10rem]" />
          <div className="flex flex-col gap-8">
            <Skeleton height="h-[2.4rem]" width="w-[30rem]" />
            <Skeleton height="h-[3.2rem]" width="w-[50rem]" />
            <Skeleton height="h-[3.2rem]" width="w-[50rem]" />
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-1 items-center gap-32">
            {/* --- Logo --- */}
            <img
              src={identitasAdmin?.logo ?? identitas?.logo}
              alt="Indo Sistem"
              className="h-[10rem] w-[10rem] rounded-2xl object-fill filter"
              loading="lazy"
            />
            {/* --- Title --- */}
            <div className="flex flex-1 flex-col gap-8">
              {identitas?.nama && (
                <p className="text-[2.4rem] text-warna-pale-blue">
                  {capitalizeFirstLetterFromLowercase(
                    identitas?.nama?.toLowerCase(),
                  )}
                </p>
              )}
              {identitasAdmin?.nama && (
                <p className="font-roboto text-[2.8rem] uppercase">
                  {identitasAdmin?.nama}
                </p>
              )}
              {identitasAdmin?.alamat && (
                <p className="font-roboto text-[2.8rem] uppercase">
                  {identitasAdmin?.alamat}
                </p>
              )}
            </div>
          </div>
          {/* --- Logout --- */}
          <div className="flex flex-col gap-12 phones:w-full phones:flex-row">
            <button
              type="button"
              className="flex items-center gap-12 rounded-2xl bg-white px-24 py-16 font-semibold text-warna-primary hover:bg-opacity-80 phones:w-full"
            >
              <IconUser />
              Halaman Profil
            </button>
            <button
              type="button"
              onClick={() => {
                Cookies.remove('token')
                navigate('/')
              }}
              className="bg-warna-red flex items-center gap-12 rounded-2xl px-24 py-16 font-semibold text-white hover:bg-opacity-80 phones:w-full"
            >
              <IconLogout />
              Keluar
            </button>
          </div>
        </>
      )}
    </div>
  )
}
