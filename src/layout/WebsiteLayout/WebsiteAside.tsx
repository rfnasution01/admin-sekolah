import { Skeleton } from '@/components/Skeleton'
import { usePathname } from '@/libs/hooks/usePathname'
import {
  GetIdentitasWebsiteResponseType,
  GetMenuWebsiteResponseType,
} from '@/libs/type/RootWebsite'
import {
  useGetMenuWebsiteQuery,
  useGetWebsiteIdentitasQuery,
} from '@/store/slices/RootWebsiteAPI'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { LinkChild } from './LinkChild'
import { LinkParent } from './LinkParent'

library.add(fab, fas)

export function WebsiteHeader() {
  const navigate = useNavigate()
  const { secondPathname } = usePathname()
  const [isShow, setIsShow] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // --- Identitas Website ---
  const [identitasWebsite, setIdentitasWebsite] =
    useState<GetIdentitasWebsiteResponseType>()
  const {
    data: dataIdentitasWebsite,
    isFetching: isFetchingIdentitasWebsite,
    isLoading: isLoadingIdentitasWebsite,
    isError: isErrorIdentitasWebsite,
    error: errorIdentitasWebsite,
  } = useGetWebsiteIdentitasQuery()

  const loadingIdentitasWebsite =
    isFetchingIdentitasWebsite || isLoadingIdentitasWebsite

  useEffect(() => {
    if (dataIdentitasWebsite?.data) {
      setIdentitasWebsite(dataIdentitasWebsite?.data)
    }
  }, [dataIdentitasWebsite])

  useEffect(() => {
    if (isErrorIdentitasWebsite) {
      const errorMsg = errorIdentitasWebsite as { data?: { message?: string } }

      toast.error(`${errorMsg?.data?.message ?? 'Terjadi Kesalahan'}`, {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      })

      if (errorMsg?.data?.message?.includes('Token')) {
        setTimeout(() => {
          Cookies.remove('token')
          navigate(`/`)
        }, 5000)
      }
    }
  }, [isErrorIdentitasWebsite, errorIdentitasWebsite])

  // --- Menu Identitas ---
  const [menuWebsite, setMenuWebsite] = useState<GetMenuWebsiteResponseType[]>(
    [],
  )
  const {
    data: dataMenuWebsite,
    isFetching: isFetchingMenuWebsite,
    isLoading: isLoadingMenuWebsite,
  } = useGetMenuWebsiteQuery()

  const loadingMenuWebsite = isFetchingMenuWebsite || isLoadingMenuWebsite

  useEffect(() => {
    if (dataMenuWebsite?.data) {
      // Sorting the data
      const sortedData = [...dataMenuWebsite.data].sort((a, b) => {
        return parseInt(a.urutan) - parseInt(b.urutan)
      })

      // Creating a copy of the data to ensure it's extensible
      const menuMap = new Map<string, GetMenuWebsiteResponseType>()

      sortedData.forEach((item) => {
        // Create a new object for each item to ensure it's extensible
        const newItem = { ...item, children: [] }
        menuMap.set(newItem.id, newItem)
      })

      const finalMenu: GetMenuWebsiteResponseType[] = []

      menuMap.forEach((item) => {
        if (item.id_parent === '0') {
          finalMenu.push(item)
        } else {
          const parent = menuMap.get(item.id_parent)
          if (parent) {
            parent.children?.push(item)
          }
        }
      })

      setMenuWebsite(finalMenu)
    }
  }, [dataMenuWebsite])

  const isActivePage = (item: string) => {
    if (
      (item.toLowerCase() === 'dashboard' && secondPathname === undefined) ||
      item?.toLocaleLowerCase() === secondPathname
    ) {
      return true
    }
    return false
  }

  return (
    <div className="scrollbar flex h-full flex-col gap-32 overflow-y-auto bg-white py-32 text-[2.4rem]">
      {loadingIdentitasWebsite || loadingMenuWebsite ? (
        <Skeleton />
      ) : (
        <>
          {/* --- Logo --- */}
          <div className="flex items-center gap-12 px-32 font-bold">
            <img
              src={identitasWebsite?.gambar}
              alt={identitasWebsite?.nama_aplikasi}
              className="h-[6rem] w-[6rem]"
              loading="lazy"
            />
            <div className="flex flex-col text-[2.6rem] tracking-1.25 text-warna-dark">
              <p>Portal</p>
              <p className="text-warna-primary">
                Web<span className="text-warna-dark">site</span>
              </p>
            </div>
          </div>
          {/* --- Navigasi --- */}
          <div className="scrollbar flex h-full flex-col gap-12 overflow-y-auto px-32">
            {menuWebsite?.map((item, idx) => (
              <div className="flex flex-col gap-32" key={idx}>
                <LinkParent
                  setActiveIndex={setActiveIndex}
                  setIsShow={setIsShow}
                  isActivePage={isActivePage}
                  idx={idx}
                  isShow={isShow}
                  item={item}
                  activeIndex={activeIndex}
                />
                {item?.children?.length > 0 && activeIndex === idx && (
                  <LinkChild item={item} isActivePage={isActivePage} />
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
