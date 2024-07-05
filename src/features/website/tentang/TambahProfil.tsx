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
import { useCreateTentangSekolahMutation } from '@/store/slices/WebsiteProfilAPI'
import { PostTentangProfilParams } from '@/libs/type'
import { useEffect, useState } from 'react'
import { FormTambahProfil } from '@/components/FormComponent'
import { TentangSekolahSchema } from '@/libs/schema/website/TentangSekolahSchema'

export default function TambahProfil() {
  const navigate = useNavigate()
  const { lastPathname, secondPathname } = usePathname()

  const [urls, setUrls] = useState<string>()

  const form = useForm<zod.infer<typeof TentangSekolahSchema>>({
    resolver: zodResolver(TentangSekolahSchema),
    defaultValues: {},
  })

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
      id: values?.id ?? null,
      jenis: values?.jenis,
      keterangan: values?.keterangan,
      sub_keterangan: values?.sub_keterangan,
      gambar_url: urls,
      list: values?.list,
    }

    try {
      await createTambahProfil({ body: body })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (isSuccessTambahProfil) {
      toast.success('Tambah profil berhasil', {
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
