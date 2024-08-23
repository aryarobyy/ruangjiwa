import logoLight from '@/assets/images/logo-light.png'
import AdminMenu from '@/components/adminComponent/AdminMenu'
import Image from 'next/image'
import Link from 'next/link'
import { LuSearch } from 'react-icons/lu'
import AppsDropdown from './AppsDropdown'
import EmailDropdown from './EmailDropdown'
import MaximizeScreen from './MaximizeScreen'
import ProfileDropdown from './ProfileDropdown'
import { Label } from '../ui/Label'
import NotifDropDown from './EmailDropdown'

const TopBar = () => {
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

      <AdminMenu />
    </header>
  )
}

export default TopBar
