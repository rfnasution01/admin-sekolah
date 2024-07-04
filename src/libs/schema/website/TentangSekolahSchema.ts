import zod from 'zod'

const ListSchema = zod.object({
  keterangan: zod
    .string({
      required_error: 'Keterangan harus di isi',
      invalid_type_error: 'Format keterangan tidak valid',
    })
    .optional()
    .nullable(),
  urutan: zod
    .string({
      required_error: 'Urutan harus di isi',
      invalid_type_error: 'Format urutan tidak valid',
    })
    .optional()
    .nullable(),
})

export const TentangSekolahSchema = zod.object({
  jenis: zod
    .string({
      required_error: 'Jenis harus di isi',
      invalid_type_error: 'Format jenis tidak valid',
    })
    .optional()
    .nullable(),
  keterangan: zod
    .string({
      required_error: 'Keterangan harus di isi',
      invalid_type_error: 'Format keterangan tidak valid',
    })
    .optional()
    .nullable(),
  sub_keterangan: zod
    .string({
      required_error: 'Sub keterangan harus di isi',
      invalid_type_error: 'Format sub keterangan tidak valid',
    })
    .optional()
    .nullable(),
  gambar_url: zod
    .string({
      required_error: 'Gambar URL harus di isi',
      invalid_type_error: 'Format gambar URL tidak valid',
    })
    .optional()
    .nullable(),
  list: zod.array(ListSchema).optional().nullable(),
})
