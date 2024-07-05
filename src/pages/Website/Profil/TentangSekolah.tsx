import { Loading } from '@/components/Loading'
import {
  useDeleteTentangSekolahMutation,
  useGetTentangSekolahQuery,
} from '@/store/slices/WebsiteProfilAPI'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import {
  IdentitasSekolah,
  ProfilSekolah,
  TentangSekolahTab,
} from '@/features/website/tentang'
import 'react-toastify/dist/ReactToastify.css'
import Helmet from 'react-helmet'
import { ComingSoonPage } from '@/routes/loadables'
import { GetTentangSekolahResponse } from '@/libs/type'

export default function TentangSekolah() {
  const navigate = useNavigate()
  const sekolahParams = localStorage.getItem('sekolahID')

  const [dataTentang, setDataTentang] = useState<GetTentangSekolahResponse>()

  const {
    data: dataTentangSekolah,
    isFetching: isFetchingTentangSekolah,
    isLoading: isLoadingTentangSekolah,
    isError: isErrorTentangSekolah,
    error: errorTentangSekolah,
  } = useGetTentangSekolahQuery()

  const loadingTentangSekolah =
    isLoadingTentangSekolah || isFetchingTentangSekolah

  useEffect(() => {
    if (dataTentangSekolah?.data) {
      setDataTentang(dataTentangSekolah?.data)
    }
  }, [dataTentangSekolah?.data])

  useEffect(() => {
    if (isErrorTentangSekolah) {
      const errorMsg = errorTentangSekolah as { data?: { message?: string } }

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
  }, [isErrorTentangSekolah, errorTentangSekolah])

  const [menu, setMenu] = useState<string>(sekolahParams ?? 'identitas')

  // --- Delete ---
  const [
    deleteTentang,
    {
      isError: isErrorDeleteTentang,
      isLoading: isLoadingDeleteTentang,
      isSuccess: isSuccessDeleteTentang,
      error: errorDeleteTentang,
    },
  ] = useDeleteTentangSekolahMutation()

  const handleSubmitDelete = async (id: string) => {
    try {
      await deleteTentang({ id: id })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isSuccessDeleteTentang) {
      toast.success('Delete berhasil', {
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
      setMenu('identitas')
    }
  }, [isSuccessDeleteTentang])

  useEffect(() => {
    if (isErrorDeleteTentang) {
      const errorMsg = errorDeleteTentang as { data?: { message?: string } }

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
    }
  }, [isErrorDeleteTentang, errorDeleteTentang])

  return (
    <div className="flex h-full flex-col gap-0 rounded-3x bg-white">
      {loadingTentangSekolah ? (
        <Loading />
      ) : (
        <>
          {/* --- Tab --- */}
          <div className="flex items-center justify-between gap-32 px-48 pt-48">
            <TentangSekolahTab
              setMenu={setMenu}
              menu={menu}
              dataTentang={dataTentang}
            />
          </div>
          <hr className="border" />
          {/* --- Konten --- */}
          <div className="scrollbar flex h-full flex-1 overflow-y-auto px-48 pb-48 pt-12">
            {menu === 'identitas' ? (
              <IdentitasSekolah data={dataTentang?.identitas} />
            ) : menu === 'tujuan' || menu === 'hasil' || menu === 'sasaran' ? (
              <ProfilSekolah
                data={dataTentang?.profil}
                jenis={menu}
                handleSubmitDelete={handleSubmitDelete}
                isLoadingDelete={isLoadingDeleteTentang}
              />
            ) : (
              <ComingSoonPage />
            )}
          </div>
        </>
      )}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Profil Sekolah</title>
        <link rel="canonical" href="https://demolaman1.avnet.id/" />
      </Helmet>
      <ToastContainer />
    </div>
  )
}
