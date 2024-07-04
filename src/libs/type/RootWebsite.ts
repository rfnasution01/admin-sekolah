import { IconName } from '@fortawesome/fontawesome-svg-core'

export type GetIdentitasWebsiteResponseType = {
  nama_aplikasi: string
  folder: string
  gambar: string
  urutan: string
  deskripsi: string
  logo: string
  favicon: string
  footer: string
}

export type GetMenuWebsiteResponseType = {
  id: string
  nama_menu: string
  icon: IconName
  link: string
  id_parent: string
  urutan: string
  baca: string
  tulis: string
  ubah: string
  hapus: string
  children: GetMenuWebsiteResponseType[]
}
