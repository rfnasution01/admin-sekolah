import { usePathname } from '@/libs/hooks/usePathname'
import { GetMenuWebsiteResponseType } from '@/libs/type/RootWebsite'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'

export function LinkParent({
  item,
  setActiveIndex,
  setIsShow,
  isActivePage,
  idx,
  activeIndex,
  isShow,
}: {
  item: GetMenuWebsiteResponseType
  activeIndex: number
  setIsShow: Dispatch<SetStateAction<boolean>>
  setActiveIndex: Dispatch<SetStateAction<number>>
  isActivePage: (item: string) => boolean
  idx: number
  isShow: boolean
}) {
  const { firstPathname } = usePathname()

  return (
    <Link
      to={
        item?.children?.length > 0
          ? ''
          : item?.nama_menu === 'Dashboard'
            ? `/${firstPathname}`
            : `/${firstPathname}/${item?.link}`
      }
      className={clsx(
        'flex items-center gap-12 rounded-2xl px-24 py-16 hover:bg-warna-pale-blue hover:text-warna-primary',
        {
          'bg-warna-pale-blue text-warna-primary': isActivePage(item?.link),
          'text-warna-grey': !isActivePage(item?.link),
        },
      )}
      onClick={(e) => {
        if (item?.children?.length > 0) {
          e.preventDefault()
          e.stopPropagation()
          setIsShow(!isShow)
        }
        setActiveIndex(activeIndex === idx ? null : idx)
      }}
    >
      {item?.icon && <FontAwesomeIcon icon={['fas', item?.icon]} />}
      <div className="flex flex-1 items-center justify-between gap-80">
        <p>{item?.nama_menu}</p>
        {item?.children?.length > 0 && (
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        )}
      </div>
    </Link>
  )
}
