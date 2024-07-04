export type GetIdentitasWebsiteResponse = {
  nama_aplikasi: string
  folder: string
  gambar: string
  urutan: string
  deskripsi: string
  logo: string
  favicon: string
  footer: string
}

export type GetMenuWebsite = {
  id: string
  nama_menu: string
  icon: string
  link: string
  id_parent: string
  urutan: string
  baca: string
  tulis: string
  ubah: string
  hapus: string
}
