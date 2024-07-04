import { IconList } from '@/assets'
import { convertToSlug } from '@/libs/helpers/formatText'
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
          to={`/${firstPathname}/${convertToSlug(list?.link)}`}
          className={clsx(
            'flex items-center gap-12 py-4 hover:cursor-pointer hover:text-warna-primary',
            {
              'bg-warna-pale-blue text-warna-primary': isActivePage(
                list?.nama_menu,
              ),
              'text-warna-grey': !isActivePage(list?.nama_menu),
            },
          )}
          key={id}
        >
          <span>
            <IconList />
          </span>
          <p>{list.nama_menu}</p>
        </Link>
      ))}
    </div>
  )
}
