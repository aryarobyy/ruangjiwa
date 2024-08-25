import AdminMenu from '@/components/adminComponent/AdminMenu'
import Image from 'next/image'
import Link from 'next/link'
import ProfileDropdown from './ProfileDropdown'
import NotifDropDown from './EmailDropdown'
import DokterMenu from '../dokterComponents/DokterMenu'

const TopBar = ({type}) => {
  return (
    <header className="sticky top-0 z-50">
      <div className="z-50 flex w-full flex-wrap border-b border-default-200 bg-slate-50 py-2.5 text-sm sm:flex-nowrap sm:justify-start sm:py-4">
        <nav className="px-8 flex w-full items-center justify-between gap-6">
          <div className='text-dark font-semibold text-xl'>
            <Link href="/" className="block">
              Sahabat Medis
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex text-dark">
              {/* <MaximizeScreen /> */}
            </div>

            <div className="hidden sm:flex text-dark">
              <NotifDropDown />
            </div>
            {/* <div className="hidden sm:flex">
              <AppsDropdown />
            </div> */}
            <div className="flex">
              <ProfileDropdown />
            </div>
          </div>
        </nav>
      </div>
      {
        type === 'admin' ? <AdminMenu /> : <DokterMenu />
      }
    </header>
  )
}

export default TopBar
