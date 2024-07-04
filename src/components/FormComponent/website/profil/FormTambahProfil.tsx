import { UseFormReturn } from 'react-hook-form'
import { Form } from '../../../Form'
import { FormLabelInput } from '../../../InputComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconLogin } from '@/assets'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { PostTentangProfilParams } from '@/libs/type'

export function FormTambahProfil({
  form,
  isLoading,
  handleSubmit,
}: {
  form: UseFormReturn
  isLoading: boolean
  handleSubmit: (values: PostTentangProfilParams) => Promise<void>
}) {
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-32"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
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

        <hr className="border" />

        <button
          type="submit"
          className="flex items-center justify-center gap-12 rounded-2xl bg-warna-primary py-12 text-white"
        >
          <p>Login</p>
          {isLoading ? (
            <span className="animate-spin duration-300">
              <FontAwesomeIcon icon={faSpinner} />
            </span>
          ) : (
            <IconLogin />
          )}
        </button>
      </form>
    </Form>
  )
}
