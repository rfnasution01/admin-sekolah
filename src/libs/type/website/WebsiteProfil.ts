export type GetTentangSekolahResponse = {
  identitas: IdentitasSekolahType
  profil: ProfilSekolahType[]
}

export type IdentitasSekolahType = {
  kode: string
  nama: string
  sk_pendirian: string
  tgl_sk_pendirian: string
  sk_operasional: string
  tgl_sk_operasional: string
  akreditasi: string
  id_akreditasi: string
  tgl_mulai_akreditasi: string
  tgl_akhir_akreditasi: string
  penyelenggaraan: string
  nis: string
  nss: string
  alamat: string
  email: string
  telepon: string
  nama_pimpinan: string
  nip_pimpinan: string
  photo_pimpinan: string
}

export type ProfilSekolahType = {
  jenis: string
  keterangan: string
  sub_keterangan: string
  gambar_url: string
  list: List[]
}

export type GetVisiMisiResponse = {
  jenis: string
  keterangan: string
  sub_keterangan: string
  gambar_url: string
  list: List[]
}

export type List = {
  id: string
  keterangan: string
  urutan: string
}

export type PostTentangProfilParams = {
  id?: string
  jenis?: string
  keterangan?: string
  sub_keterangan?: string
  gambar_url?: string
  list: ListParams[]
}

export type ListParams = {
  keterangan: string
  urutan: string
}
