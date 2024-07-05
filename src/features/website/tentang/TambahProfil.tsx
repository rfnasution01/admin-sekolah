import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { usePathname } from '@/libs/hooks/usePathname'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import {
  useCreateTentangSekolahMutation,
  useGetTentangSekolahQuery,
} from '@/store/slices/WebsiteProfilAPI'
import { GetTentangSekolahResponse, PostTentangProfilParams } from '@/libs/type'
import { useEffect, useState } from 'react'
import { FormTambahProfil } from '@/components/FormComponent'
import { TentangSekolahSchema } from '@/libs/schema/website/TentangSekolahSchema'
import Cookies from 'js-cookie'

export default function TambahProfil() {
  const navigate = useNavigate()

  const id = localStorage.getItem('editID') ?? ''
  const jenisId = localStorage.getItem('jenisID') ?? ''

  const { lastPathname, secondPathname } = usePathname()

  const [urls, setUrls] = useState<string>()

  const form = useForm<zod.infer<typeof TentangSekolahSchema>>({
    resolver: zodResolver(TentangSekolahSchema),
    defaultValues: {},
  })

  // --- Data Tentang ---
  const [dataTentang, setDataTentang] = useState<GetTentangSekolahResponse>()

  const {
    data: dataTentangSekolah,
    isError: isErrorTentangSekolah,
    error: errorTentangSekolah,
  } = useGetTentangSekolahQuery()

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

  const tujuanSekolah = dataTentang?.profil?.find(
    (item) => item?.jenis === 'Tujuan',
  )
  const hasilSekolah = dataTentang?.profil?.find(
    (item) => item?.jenis === 'Hasil',
  )
  const sasaranSekolah = dataTentang?.profil?.find(
    (item) => item?.jenis === 'Sasaran',
  )

  const item =
    jenisId === 'Tujuan'
      ? tujuanSekolah
      : jenisId === 'Hasil'
        ? hasilSekolah
        : jenisId === 'Sasaran'
          ? sasaranSekolah
          : tujuanSekolah

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
      id: lastPathname === 'edit' ? id : null,
      jenis: values?.jenis ?? '',
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
      toast.success(
        `${lastPathname === 'edit' ? 'Edit' : 'Tambah'} profil berhasil`,
        {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        },
      )
      setTimeout(() => {
        navigate(-1)
      }, 3000)
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

  useEffect(() => {
    if (lastPathname === 'edit' && item) {
      form.setValue('keterangan', item?.keterangan)
      form.setValue('sub_keterangan', item?.sub_keterangan)
      form.setValue('jenis', item?.jenis)
      form.setValue('gambar_url', item?.gambar_url)
      setUrls(item?.gambar_url)
      form.setValue('list', item?.list)
    }
  }, [dataTentang, id])

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-3x bg-white p-48">
      <div className="flex">
        <div
          onClick={() => navigate(-1)}
          className="items-centere flex gap-12 rounded-2xl bg-warna-dark px-24 py-12 text-white hover:cursor-pointer hover:bg-opacity-80"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali
        </div>
      </div>
      <div className="scrollbar flex flex-1 flex-col gap-32 overflow-y-auto">
        <p className="font-roboto text-[2.4rem]">
          Form {capitalizeFirstLetterFromLowercase(lastPathname)}{' '}
          {capitalizeFirstLetterFromLowercase(secondPathname)}
        </p>
        <FormTambahProfil
          form={form}
          isLoading={isLoadingTambahProfil}
          handleSubmit={handleSubmit}
          setUrls={setUrls}
          urls={urls}
        />
      </div>
      <ToastContainer />
    </div>
  )
}
