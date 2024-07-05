// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormMessage,
// } from '../../../Form'
// import { FormLabelInput, Input } from '../../../InputComponent'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faArrowLeft,
//   faSave,
//   faSpinner,
//   faTrash,
//   faUpload,
// } from '@fortawesome/free-solid-svg-icons'
// import { GetVisiMisiResponse, PostIdentitasSekolahParams } from '@/libs/type'
// import { useCreateFileMutation } from '@/store/slices/ReferensiAPI'
// import { useEffect, useState } from 'react'
// import { Bounce, toast } from 'react-toastify'
// import clsx from 'clsx'
// import { usePathname } from '@/libs/hooks/usePathname'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as zod from 'zod'
// import { useForm } from 'react-hook-form'
// import { IdentitasSekolahSchema } from '@/libs/schema/website/TentangSekolahSchema'
// import {
//   useGetTentangSekolahQuery,
//   useGetVisiMisiQuery,
//   useUpdateProfilSekolahMutation,
// } from '@/store/slices/WebsiteProfilAPI'
// import { useNavigate } from 'react-router-dom'
// import {
//   SelectListAkreditasi,
//   SelectListPenyelenggaraan,
// } from '@/components/SelectComponent'
// import Cookies from 'js-cookie'

export default function FormVisiMisi() {
  // const navigate = useNavigate()
  // const [urls, setUrls] = useState<string>()

  // const form = useForm<zod.infer<typeof IdentitasSekolahSchema>>({
  //   resolver: zodResolver(IdentitasSekolahSchema),
  //   defaultValues: {},
  // })

  // const { lastPathname } = usePathname()
  // --- Upload File ---
  // const [
  //   uploadFileMutation,
  //   {
  //     isSuccess: successFile,
  //     isError: isErrorFile,
  //     error: errorFile,
  //     isLoading: loadingFile,
  //   },
  // ] = useCreateFileMutation()

  // const handleUploadFoto = async (file: File) => {
  //   const formatData = new FormData()
  //   formatData.append('berkas', file)

  //   try {
  //     const res = await uploadFileMutation(formatData)
  //     setUrls(res?.data?.url)
  //   } catch (e) {
  //     console.error(e)
  //     toast.error(`Data gagal disimpan`, {
  //       position: 'bottom-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })
  //   }
  // }

  // useEffect(() => {
  //   if (successFile) {
  //     toast.success('Berhasil unggah photo!', {
  //       position: 'bottom-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })
  //   }
  // }, [successFile])

  // useEffect(() => {
  //   if (isErrorFile) {
  //     const errorMsg = errorFile as { data?: { message?: string } }

  //     toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
  //       position: 'bottom-right',
  //       autoClose: 5000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })
  //   }
  // }, [isErrorFile, errorFile])

  // // --- Create Update Profil ---
  // const [
  //   createUpdateProfil,
  //   {
  //     isError: isErrorUpdateProfil,
  //     error: errorUpdateProfil,
  //     isLoading: isLoadingUpdateProfil,
  //     isSuccess: isSuccessUpdateProfil,
  //   },
  // ] = useUpdateProfilSekolahMutation()

  // const handleSubmit = async (values: PostIdentitasSekolahParams) => {
  //   const body = {
  //     jenis: 'Identitas',
  //     sk_pendirian: values?.sk_pendirian ?? '',
  //     tgl_sk_pendirian: values?.tgl_sk_pendirian ?? '',
  //     sk_operasional: values?.sk_operasional ?? '',
  //     tgl_sk_opersioanal: values?.tgl_sk_opersioanal ?? '',
  //     id_akreditasi: values?.id_akreditasi ?? '',
  //     tgl_mulai_akreditasi: values?.tgl_mulai_akreditasi ?? '',
  //     tgl_akhir_akreditasi: values?.tgl_akhir_akreditasi ?? '',
  //     penyelenggaraan: values?.penyelenggaraan ?? '',
  //     nis: values?.nis ?? '',
  //     nss: values?.nss ?? '',
  //     alamat: values?.alamat ?? '',
  //     email: values?.email ?? '',
  //     telepon: values?.telepon ?? '',
  //     nama_pimpinan: values?.nama_pimpinan ?? '',
  //     nip_pimpinan: values?.nip_pimpinan ?? '',
  //     photo_pimpinan: urls,
  //   }

  //   try {
  //     await createUpdateProfil({ body: body })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   if (isSuccessUpdateProfil) {
  //     toast.success(`Update profil berhasil`, {
  //       position: 'bottom-right',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })
  //     setTimeout(() => {
  //       navigate(-1)
  //     }, 3000)
  //   }
  // }, [isSuccessUpdateProfil])

  // useEffect(() => {
  //   if (isErrorUpdateProfil) {
  //     const errorMsg = errorUpdateProfil as { data?: { message?: string } }

  //     toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
  //       position: 'bottom-right',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })
  //   }
  // }, [isErrorUpdateProfil, errorUpdateProfil])

  // --- Data VisiMisi ---
  // const [dataVisiMisi, setDataVisiMisi] = useState<GetVisiMisiResponse>()

  // const {
  //   data: dataVisiMisiSekolah,
  //   isError: isErrorVisiMisiSekolah,
  //   error: errorVisiMisiSekolah,
  // } = useGetVisiMisiQuery()

  // useEffect(() => {
  //   if (dataVisiMisiSekolah?.data) {
  //     setDataVisiMisi(dataVisiMisiSekolah?.data)
  //   }
  // }, [dataVisiMisiSekolah?.data])

  // useEffect(() => {
  //   if (isErrorVisiMisiSekolah) {
  //     const errorMsg = errorVisiMisiSekolah as { data?: { message?: string } }

  //     toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
  //       position: 'bottom-right',
  //       autoClose: 3000,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: 'light',
  //       transition: Bounce,
  //     })

  //     if (errorMsg?.data?.message?.includes('Token')) {
  //       setTimeout(() => {
  //         Cookies.remove('token')
  //         navigate(`/`)
  //       }, 5000)
  //     }
  //   }
  // }, [isErrorVisiMisiSekolah, errorVisiMisiSekolah])

  // useEffect(() => {
  //   if (dataVisiMisi?.identitas) {
  //     const identitas = dataVisiMisi?.identitas

  //     form.setValue('sk_pendirian', identitas?.sk_pendirian)
  //     const tglSKPendirian = identitas?.tgl_sk_pendirian
  //     const splitSKPendirian = tglSKPendirian?.split('-')
  //     form.setValue(
  //       'tgl_sk_pendirian',
  //       `${splitSKPendirian?.[0]}-${splitSKPendirian?.[1]}-${splitSKPendirian?.[2]}`,
  //     )

  //     form.setValue('sk_operasional', identitas?.sk_operasional)

  //     const tglSKOperasional = identitas?.tgl_sk_operasional
  //     const splitSKOperasional = tglSKOperasional?.split('-')
  //     form.setValue(
  //       'tgl_sk_operasional',
  //       `${splitSKOperasional?.[0]}-${splitSKOperasional?.[1]}-${splitSKOperasional?.[2]}`,
  //     )

  //     const tglMulai = identitas?.tgl_mulai_akreditasi
  //     const splitTglMulai = tglMulai?.split('-')
  //     form.setValue(
  //       'tgl_mulai_akreditasi',
  //       `${splitTglMulai?.[0]}-${splitTglMulai?.[1]}-${splitTglMulai?.[2]}`,
  //     )

  //     const tglAkhir = identitas?.tgl_akhir_akreditasi
  //     const splitTglAkhir = tglAkhir?.split('-')
  //     form.setValue(
  //       'tgl_akhir_akreditasi',
  //       `${splitTglAkhir?.[0]}-${splitTglAkhir?.[1]}-${splitTglAkhir?.[2]}`,
  //     )

  //     form.setValue('nis', identitas?.nis)
  //     form.setValue('nss', identitas?.nss)
  //     form.setValue('alamat', identitas?.alamat)
  //     form.setValue('email', identitas?.email)
  //     form.setValue('email', identitas?.email)
  //     form.setValue('telepon', identitas?.telepon)
  //     form.setValue('id_akreditasi', identitas?.akreditasi)
  //     form.setValue('penyelenggaraan', identitas?.penyelenggaraan)
  //     form.setValue('photo_pimpinan', identitas?.photo_pimpinan)
  //     setUrls(identitas?.photo_pimpinan)
  //     form.setValue('nama_pimpinan', identitas?.nama_pimpinan)
  //     form.setValue('nip_pimpinan', identitas?.nip_pimpinan)
  //   }
  // }, [dataVisiMisi?.identitas])

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto rounded-3x bg-white p-48">
      {/* <div className="flex">
        <div
          onClick={() => navigate(-1)}
          className="items-centere flex gap-12 rounded-2xl bg-warna-dark px-24 py-12 text-white hover:cursor-pointer hover:bg-opacity-80"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Kembali
        </div>
      </div> */}
      <p className="font-roboto text-[2.4rem]">Form Update Identitas</p>
      {/* <Form {...form}>
        <form
          className="scrollbar flex flex-1 flex-col gap-32 overflow-y-auto"
          onSubmit={form.handleSubmit(handleSubmit)}
        >
          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="sk_pendirian"
              form={form}
              label="SK Pendirian"
              placeholder="Masukkan SK Pendirian"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="tgl_sk_pendirian"
              form={form}
              label="Tanggal SK Pendirian"
              className="text-sim-dark"
              type="date"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="sk_operasional"
              form={form}
              label="SK Operasional"
              placeholder="Masukkan SK Operasional"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="tgl_sk_operasional"
              form={form}
              label="Tanggal SK Operasional"
              className="text-sim-dark"
              type="date"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <hr className="border" />

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <SelectListAkreditasi
              useFormReturn={form}
              headerLabel="Akreditasi"
              placeholder="Pilih Akreditasi"
              name="id_akreditasi"
              className="w-1/2 hover:cursor-not-allowed phones:w-full"
              isDisabled={isLoadingUpdateProfil}
            />
            <SelectListPenyelenggaraan
              useFormReturn={form}
              headerLabel="Penyelenggara"
              placeholder="Pilih Penyelenggara"
              name="penyelenggaraan"
              className="w-1/2 hover:cursor-not-allowed phones:w-full"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="tgl_mulai_akreditasi"
              form={form}
              label="Tanggal Mulai Akreditasi"
              placeholder="Masukkan Tanggal Mulai Akreditasi"
              className="text-sim-dark"
              type="date"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="tgl_akhir_akreditasi"
              form={form}
              label="Tanggal Akhir Akreditasi"
              placeholder="Masukkan Tanggal Akhir Akreditasi"
              className="text-sim-dark"
              type="date"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="nis"
              form={form}
              label="NIS"
              placeholder="NIS"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="nss"
              form={form}
              label="NSS"
              placeholder="NSS"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="alamat"
              form={form}
              label="Alamat"
              placeholder="Alamat"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="email"
              form={form}
              label="Email"
              placeholder="Email"
              className="text-sim-dark"
              type="email"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="telepon"
              form={form}
              label="Telepon"
              placeholder="Telepon"
              className="text-sim-dark w-1/2"
              type="text"
              isNumber
              isDisabled={isLoadingUpdateProfil}
            />

            <div className="w-1/2 phones:w-full" />
          </div>

          <hr className="border" />

          <div className="flex gap-64 phones:flex-col phones:gap-32">
            <FormLabelInput
              name="nama_pimpinan"
              form={form}
              label="Nama Pimpinan"
              placeholder="Nama Pimpinan"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />

            <FormLabelInput
              name="nip_pimpinan"
              form={form}
              label="NIP Pimpinan"
              placeholder="NIP Pimpinan"
              className="text-sim-dark"
              type="text"
              isDisabled={isLoadingUpdateProfil}
            />
          </div>

          <FormField
            name="photo_pimpinan"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex flex-col space-y-2">
                <FormControl>
                  <div>
                    <Input
                      className="-z-[1] h-[0.1px] w-[0.1px] overflow-hidden opacity-0"
                      {...field}
                      id="berkas"
                      type="file"
                      value={''}
                      // disabled={isLoadingUpload || loadingFile}
                      placeholder="Lampiran"
                      onChange={(e) => {
                        if (e.target.files[0].size > 5 * 1000000) {
                          return toast.error(
                            `File terlalu besar. Maksimal 5 MB`,
                            {
                              position: 'bottom-right',
                              autoClose: 5000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              progress: undefined,
                              theme: 'light',
                              transition: Bounce,
                            },
                          )
                        } else {
                          if (e.target.files[0] != null) {
                            handleUploadFoto(e.target.files[0])
                          }
                        }
                      }}
                    />
                    <div className="flex flex-col gap-32 phones:flex-col">
                      <label className="flex flex-col gap-12" htmlFor="berkas">
                        Berkas
                        <div className="flex">
                          <div
                            className={clsx(
                              'flex items-center gap-12 rounded-2xl p-12 hover:cursor-pointer hover:bg-opacity-80',
                              {
                                'bg-warna-dark text-white': urls,
                                'border border-warna-dark text-warna-dark':
                                  !urls,
                              },
                            )}
                          >
                            {loadingFile ? (
                              <span className="animate-spin duration-300">
                                <FontAwesomeIcon icon={faSpinner} />
                              </span>
                            ) : (
                              <FontAwesomeIcon icon={faUpload} />
                            )}
                            <p className="text-[1.6rem]">Unggah</p>
                          </div>
                        </div>
                      </label>

                      <div className="flex w-full flex-wrap items-start gap-32 whitespace-nowrap phones:w-full">
                        {urls ? (
                          <div className="relative flex w-1/4 flex-col items-center gap-4">
                            <div className="relative w-full">
                              <img
                                src={urls}
                                alt="Gambar"
                                className="h-[20rem] w-full rounded-2xl object-cover filter"
                                loading="lazy"
                              />
                              <span
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setUrls(null)
                                }}
                                className="absolute right-2 top-2 rounded-lg bg-danger-700 p-4 text-white hover:cursor-pointer hover:bg-danger"
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div>Belum ada file di upload</div>
                        )}
                      </div>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center gap-12 rounded-2xl bg-warna-primary px-32 py-12 text-white"
            >
              <p>{lastPathname === 'edit' ? 'Edit' : 'Tambah'}</p>
              {isLoadingUpdateProfil ? (
                <span className="animate-spin duration-300">
                  <FontAwesomeIcon icon={faSpinner} />
                </span>
              ) : (
                <FontAwesomeIcon icon={faSave} />
              )}
            </button>
          </div>
        </form>
      </Form> */}
    </div>
  )
}
