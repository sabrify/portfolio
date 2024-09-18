import MainMenu from './main-menu'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <MainMenu />
    </header>
  )
}
