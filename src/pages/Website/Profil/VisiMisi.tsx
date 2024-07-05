import { Loading } from '@/components/Loading'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import Helmet from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { PostTentangProfilParams, ProfilSekolahType } from '@/libs/type'
import {
  useCreateTentangSekolahMutation,
  useGetVisiMisiQuery,
} from '@/store/slices/WebsiteProfilAPI'
import Cookies from 'js-cookie'
import { VisiMisiSekolahTab } from '@/features/website/visiMisi'
import { FormVisiMisi } from '@/components/FormComponent'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { VisiMisiSchema } from '@/libs/schema/website/TentangSekolahSchema'

export default function VisiMisiSekolah() {
  const navigate = useNavigate()
  const sekolahParams = localStorage.getItem('sekolahID')
  const [urls, setUrls] = useState<string>()

  const form = useForm<zod.infer<typeof VisiMisiSchema>>({
    resolver: zodResolver(VisiMisiSchema),
    defaultValues: {},
  })

  const [dataVisiMisi, setDataVisiMisi] = useState<ProfilSekolahType[]>()

  const {
    data: dataVisiMisiSekolah,
    isFetching: isFetchingVisiMisiSekolah,
    isLoading: isLoadingVisiMisiSekolah,
    isError: isErrorVisiMisiSekolah,
    error: errorVisiMisiSekolah,
  } = useGetVisiMisiQuery()

  const loadingVisiMisiSekolah =
    isLoadingVisiMisiSekolah || isFetchingVisiMisiSekolah

  useEffect(() => {
    if (dataVisiMisiSekolah?.data) {
      setDataVisiMisi(dataVisiMisiSekolah?.data)
    }
  }, [dataVisiMisiSekolah?.data])

  useEffect(() => {
    if (isErrorVisiMisiSekolah) {
      const errorMsg = errorVisiMisiSekolah as { data?: { message?: string } }

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
  }, [isErrorVisiMisiSekolah, errorVisiMisiSekolah])

  const [menu, setMenu] = useState<string>(sekolahParams ?? 'Visi')
  const dataVisi = dataVisiMisi?.find((item) => item?.jenis === 'Visi')
  const dataMisi = dataVisiMisi?.find((item) => item?.jenis === 'Misi')

  const item =
    menu === 'Visi' ? dataVisi : menu === 'Misi' ? dataMisi : dataVisi

  // --- Create Tambah Profil ---
  const [
    createTambahProfil,
    {
      isError: isErrorTambahProfil,
      error: errorTambahProfil,
      isLoading: isLoadingTambahProfil,
      isSuccess: isSuccessTambahProfil,
    },
  ] = useCreateTentangSekolahMutation()

  const handleSubmit = async (values: PostTentangProfilParams) => {
    const body = {
      id: item?.id,
      jenis: menu === 'Misi' ? 'Misi' : 'Visi',
      keterangan: values?.keterangan ?? '',
      sub_keterangan: values?.sub_keterangan ?? '',
      gambar_url: urls ?? '',
      list: values?.list ?? [],
    }

    try {
      await createTambahProfil({ body: body })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isSuccessTambahProfil) {
      toast.success(`Update profil berhasil`, {
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
  }, [isSuccessTambahProfil])

  useEffect(() => {
    if (isErrorTambahProfil) {
      const errorMsg = errorTambahProfil as { data?: { message?: string } }

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
  }, [isErrorTambahProfil, errorTambahProfil])

  return (
    <div className="flex h-full flex-col gap-0 rounded-3x bg-white">
      {loadingVisiMisiSekolah ? (
        <Loading />
      ) : (
        <>
          {/* --- Tab --- */}
          <div className="flex items-center justify-between gap-32 px-48 pt-48">
            <VisiMisiSekolahTab setMenu={setMenu} menu={menu} />
          </div>
          <hr className="border" />
          {/* --- Konten --- */}
          <div className="scrollbar flex h-full flex-1 overflow-y-auto px-48 pb-48 pt-12">
            <FormVisiMisi
              jenis={menu}
              data={item}
              handleSubmit={handleSubmit}
              isLoading={isLoadingTambahProfil}
              form={form}
              setUrls={setUrls}
              urls={urls}
            />
          </div>
        </>
      )}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Visi Misi Sekolah</title>
        <link rel="canonical" href="https://demolaman1.avnet.id/" />
      </Helmet>
      <ToastContainer />
    </div>
  )
}
