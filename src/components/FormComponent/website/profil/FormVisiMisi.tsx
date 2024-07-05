import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../../Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faSave,
  faSpinner,
  faTrash,
  faUpload,
} from '@fortawesome/free-solid-svg-icons'
import { PostTentangProfilParams, ProfilSekolahType } from '@/libs/type'
import { useCreateFileMutation } from '@/store/slices/ReferensiAPI'
import { Dispatch, SetStateAction, useEffect } from 'react'
import { Bounce, toast } from 'react-toastify'
import { usePathname } from '@/libs/hooks/usePathname'
import { useFieldArray, UseFormReturn } from 'react-hook-form'
import { FormLabelInput, Input } from '@/components/InputComponent'
import clsx from 'clsx'

export function FormVisiMisi({
  jenis,
  data,
  handleSubmit,
  isLoading,
  setUrls,
  urls,
  form,
}: {
  jenis: string
  data: ProfilSekolahType
  handleSubmit: (values: PostTentangProfilParams) => Promise<void>
  isLoading: boolean
  setUrls: Dispatch<SetStateAction<string>>
  urls: string
  form: UseFormReturn
}) {
  const { lastPathname } = usePathname()
  // --- Upload File ---
  const [
    uploadFileMutation,
    {
      isSuccess: successFile,
      isError: isErrorFile,
      error: errorFile,
      isLoading: loadingFile,
    },
  ] = useCreateFileMutation()

  const handleUploadFoto = async (file: File) => {
    const formatData = new FormData()
    formatData.append('berkas', file)

    try {
      const res = await uploadFileMutation(formatData)
      setUrls(res?.data?.url)
    } catch (e) {
      console.error(e)
      toast.error(`Data gagal disimpan`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }

  useEffect(() => {
    if (successFile) {
      toast.success('Berhasil unggah photo!', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [successFile])

  useEffect(() => {
    if (isErrorFile) {
      const errorMsg = errorFile as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })
    }
  }, [isErrorFile, errorFile])

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'list',
  })

  useEffect(() => {
    if (data) {
      form.setValue('keterangan', data?.keterangan)
      form.setValue('sub_keterangan', data?.sub_keterangan)
      form.setValue('jenis', data?.jenis)
      form.setValue('gambar_url', data?.gambar_url)
      setUrls(data?.gambar_url)
      form.setValue('list', data?.list)
    }
  }, [data])

  return (
    <Form {...form}>
      <form
        className="scrollbar flex w-full flex-col gap-32 overflow-y-auto pt-24"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="flex flex-col gap-32">
          <p className="font-roboto text-[3.2rem]">
            {jenis === 'Visi' ? 'Visi 🎯' : jenis === 'Misi' ? 'Misi 🚩' : ''}
          </p>
        </div>
        <div className="flex gap-64 phones:flex-col phones:gap-32">
          <FormLabelInput
            name="keterangan"
            form={form}
            label="Keterangan"
            placeholder="Masukkan keterangan"
            className="text-sim-dark"
            type="text"
            isDisabled={isLoading}
          />

          <FormLabelInput
            name="sub_keterangan"
            form={form}
            label="Sub Keterangan"
            placeholder="Masukkan sub keterangan"
            className="text-sim-dark"
            type="text"
            isDisabled={isLoading}
          />
        </div>

        {jenis === 'Misi' && (
          <div className="flex flex-col gap-y-16 text-warna-dark">
            <p className="text-[2rem]">List</p>
            {fields.map((item, index) => (
              <div key={item.id} className="flex gap-32">
                <div className="flex flex-1 items-center gap-32">
                  <FormLabelInput
                    name={`list.${index}.keterangan`}
                    form={form}
                    label="Keterangan"
                    placeholder="Masukkan keterangan"
                    className="w-4/6"
                    type="text"
                    isDisabled={isLoading}
                  />
                  <FormLabelInput
                    name={`list.${index}.urutan`}
                    form={form}
                    label="Urutan"
                    placeholder="Masukkan urutan"
                    className="w-1/6"
                    type="text"
                    isDisabled={isLoading}
                    isNumber
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="rounded rounded-lg bg-warna-red px-16 py-16 text-white hover:bg-opacity-80"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex">
              <button
                type="button"
                onClick={() => append({ nama: '', urutan: '' })}
                className="rounded flex items-center gap-12 rounded-lg bg-blue-500 px-24 py-12 text-white hover:bg-opacity-80"
              >
                <FontAwesomeIcon icon={faPlus} />
                <p>Tambah</p>
              </button>
            </div>
          </div>
        )}

        {jenis === 'Misi' && (
          <FormField
            name="berkas"
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
                      disabled={isLoading || loadingFile}
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
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-12 rounded-2xl bg-warna-primary px-32 py-12 text-white"
          >
            <p>{lastPathname === 'edit' ? 'Edit' : 'Simpan'}</p>
            {isLoading ? (
              <span className="animate-spin duration-300">
                <FontAwesomeIcon icon={faSpinner} />
              </span>
            ) : (
              <FontAwesomeIcon icon={faSave} />
            )}
          </button>
        </div>
      </form>
    </Form>
  )
}
