import { LabelComponent } from '@/components/LabelComponent'
import { capitalizeFirstLetterFromLowercase } from '@/libs/helpers/formatText'
import { ProfilSekolahType } from '@/libs/type'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function ProfilSekolah({
  data,
  jenis,
}: {
  data: ProfilSekolahType[]
  jenis: string
}) {
  const tujuanSekolah = data?.find((item) => item?.jenis === 'Tujuan')
  const hasilSekolah = data?.find((item) => item?.jenis === 'Hasil')
  const sasaranSekolah = data?.find((item) => item?.jenis === 'Sasaran')

  const item =
    jenis === 'tujuan'
      ? tujuanSekolah
      : jenis === 'hasil'
        ? hasilSekolah
        : jenis === 'sasaran'
          ? sasaranSekolah
          : tujuanSekolah

  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      {/* --- Header --- */}
      <div className="flex w-full items-center justify-between gap-32">
        <p className="font-roboto text-[3.2rem]">
          {capitalizeFirstLetterFromLowercase(jenis)} Sekolah
        </p>
        <div className="flex gap-12">
          <button
            type="button"
            className="flex items-center gap-12 rounded-2xl bg-warna-dark px-24 py-12 text-white hover:bg-opacity-80"
          >
            <FontAwesomeIcon icon={faPencil} />
            <p className="font-sf-pro">Edit</p>
          </button>
          <button
            type="button"
            className="flex items-center gap-12 rounded-2xl bg-warna-red px-24 py-12 text-white hover:bg-opacity-80"
          >
            <FontAwesomeIcon icon={faTrash} />
            <p className="font-sf-pro">Hapus</p>
          </button>
        </div>
      </div>
      {/* --- Konten --- */}
      <div className="flex flex-col gap-32">
        {/* --- Keterangan --- */}
        <div className="bg-warna-grey flex gap-32 rounded-2x p-32 text-white">
          <div className="flex flex-1 flex-col gap-24">
            <LabelComponent
              label="Keterangan"
              value={item?.keterangan ?? '-'}
              isColumn
            />
            <LabelComponent
              label="Sub Keterangan"
              value={item?.sub_keterangan ?? '-'}
              isColumn
            />
          </div>
          {item?.gambar_url && (
            <img
              src={item?.gambar_url}
              alt={item?.keterangan}
              className="h-[10rem] w-[25rem] rounded-2xl filter"
              loading="lazy"
            />
          )}
        </div>
        {/* --- List --- */}
        {item?.list?.length > 0 && (
          <div className="flex flex-col gap-12 rounded-2xl border bg-warna-pale-blue p-32 text-warna-dark">
            <p className="font-roboto">
              List {capitalizeFirstLetterFromLowercase(jenis)} Sekolah
            </p>
            <ul className="ml-32 list-disc" style={{ lineHeight: '130%' }}>
              {item?.list?.map((list, idx) => (
                <li key={idx} style={{ lineHeight: '130%' }}>
                  {list?.keterangan}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
