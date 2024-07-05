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
  jenis: zod.string({
    required_error: 'Jenis harus di isi',
    invalid_type_error: 'Format jenis tidak valid',
  }),
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

export const IdentitasSekolahSchema = zod.object({
  keterangan: zod.string().optional().nullable().nullish(),
  sk_pendirian: zod.string().optional().nullable().nullish(),
  tgl_sk_pendirian: zod.string().optional().nullable().nullish(),
  sk_operasional: zod.string().optional().nullable().nullish(),
  tgl_sk_operasional: zod.string().optional().nullable().nullish(),
  id_akreditasi: zod.string().optional().nullable().nullish(),
  tgl_mulai_akreditasi: zod.string().optional().nullable().nullish(),
  tgl_akhir_akreditasi: zod.string().optional().nullable().nullish(),
  penyelenggaraan: zod.string().optional().nullable().nullish(),
  nis: zod.string().optional().nullable().nullish(),
  nss: zod.string().optional().nullable().nullish(),
  alamat: zod.string().optional().nullable().nullish(),
  email: zod.string().optional().nullable().nullish(),
  telepon: zod.string().optional().nullable().nullish(),
  nama_pimpinan: zod.string().optional().nullable().nullish(),
  nip_pimpinan: zod.string().optional().nullable().nullish(),
  photo_pimpinan: zod.string().optional().nullable().nullish(),
  penyelenggaraan_mulai: zod.string().optional().nullable().nullish(),
  penyelenggaraan_akhir: zod.string().optional().nullable().nullish(),
})

export const VisiMisiSchema = zod.object({
  jenis: zod.string().optional().nullable().nullish(),
  keterangan: zod.string().optional().nullable().nullish(),
  sub_keterangan: zod.string().optional().nullable().nullish(),
  gambar_url: zod.string().optional().nullable().nullish(),
  list: zod.array(ListSchema).optional().nullable(),
})
