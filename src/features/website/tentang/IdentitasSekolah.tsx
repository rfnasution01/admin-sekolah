import { LabelComponent } from '@/components/LabelComponent'
import { IdentitasSekolahType } from '@/libs/type'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

export function IdentitasSekolah({ data }: { data: IdentitasSekolahType }) {
  const navigate = useNavigate()
  return (
    <div className="scrollbar flex h-full w-full flex-col gap-32 overflow-y-auto">
      {/* --- Header --- */}
      <div className="flex w-full items-center gap-32">
        <p className="font-roboto text-[3.2rem]">Identitas Sekolah</p>
        <button
          type="button"
          onClick={() => {
            navigate('identitas')
          }}
          className="flex items-center gap-12 rounded-2xl bg-warna-dark px-24 py-12 text-white hover:bg-opacity-80"
        >
          <FontAwesomeIcon icon={faPencil} />
          <p className="font-sf-pro">Edit</p>
        </button>
      </div>
      {/* --- Konten --- */}
      <div className="scrollbar flex h-full gap-48 overflow-y-auto">
        <img
          src={data?.photo_pimpinan ?? '/logo.png'}
          alt={data?.nama_pimpinan}
          className="w-[50rem] rounded-2xl filter"
          loading="lazy"
        />
        <div className="flex flex-1 flex-col gap-16">
          <LabelComponent
            label="Nama"
            value={data?.nama}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="Kode"
            value={data?.kode}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="SK Pendirian"
            value={data?.sk_pendirian}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="Tanggal SK Pendirian"
            value={dayjs(data?.tgl_sk_pendirian)
              .locale('id')
              .format('DD MMMM YYYY')}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="SK Operasional"
            value={data?.sk_operasional}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="Tanggal SK Operasional"
            value={dayjs(data?.tgl_sk_operasional)
              .locale('id')
              .format('DD MMMM YYYY')}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          <LabelComponent
            label="Akreditasi"
            value={data?.akreditasi}
            widthLabel="w-1/4"
            widthValue="w-3/4"
          />
          {data?.tgl_mulai_akreditasi && (
            <LabelComponent
              label="Tanggal Mulai Akreditasi"
              value={dayjs(data?.tgl_mulai_akreditasi)
                .locale('id')
                .format('DD MMMM YYYY')}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.tgl_akhir_akreditasi && (
            <LabelComponent
              label="Tanggal Akhir Akreditasi"
              value={dayjs(data?.tgl_akhir_akreditasi)
                ?.locale('id')
                .format('DD MMMM YYYY')}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.penyelenggaraan && (
            <LabelComponent
              label="Penyelenggaraan"
              value={data?.penyelenggaraan}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.penyelenggaraan_mulai && (
            <LabelComponent
              label="Penyelenggaraan Mulai"
              value={data?.penyelenggaraan_mulai?.substring(0, 5)}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.penyelenggaraan_akhir && (
            <LabelComponent
              label="Penyelenggaraan Akhir"
              value={data?.penyelenggaraan_akhir?.substring(0, 5)}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.nis && (
            <LabelComponent
              label="NIS"
              value={data?.nis}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.nss && (
            <LabelComponent
              label="NSS"
              value={data?.nss}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.alamat && (
            <LabelComponent
              label="Alamat"
              value={data?.alamat}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.email && (
            <LabelComponent
              label="Email"
              value={data?.email}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.telepon && (
            <LabelComponent
              label="Telepon"
              value={data?.telepon}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.nama_pimpinan && (
            <LabelComponent
              label="Nama Pimpinan"
              value={data?.nama_pimpinan}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}

          {data?.nip_pimpinan && (
            <LabelComponent
              label="NIP Pimpinan"
              value={data?.nip_pimpinan}
              widthLabel="w-1/4"
              widthValue="w-3/4"
            />
          )}
        </div>
      </div>
    </div>
  )
}
