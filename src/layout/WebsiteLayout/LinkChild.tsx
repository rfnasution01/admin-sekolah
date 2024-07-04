import { IconList } from '@/assets'
import { usePathname } from '@/libs/hooks/usePathname'
import { GetMenuWebsiteResponseType } from '@/libs/type/RootWebsite'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

export function LinkChild({
  item,
  isActivePage,
}: {
  item: GetMenuWebsiteResponseType
  isActivePage: (item: string) => boolean
}) {
  const { firstPathname } = usePathname()

  return (
    <div className="flex flex-col gap-12 px-32">
      {item?.children?.map((list, id) => (
        <Link
          to={`/${firstPathname}/${list?.link}`}
          className={clsx(
            'flex items-center gap-12 py-4 hover:cursor-pointer hover:text-warna-primary',
            {
              'text-warna-primary': isActivePage(list?.link),
              'text-warna-grey': !isActivePage(list?.link),
            },
          )}
          key={id}
        >
          <span>
            <IconList
              fill2={isActivePage(list?.link) ? '#195EE5' : '#7D95A1'}
            />
          </span>
          <p>{list.nama_menu}</p>
        </Link>
      ))}
    </div>
  )
}
