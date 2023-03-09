import { useState, useEffect } from 'react'
import {BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs'

const Navbar = () => {
  const html = document.querySelector('html')
  const currTheme = localStorage.getItem('theme')
  const [theme, setTheme] = useState(currTheme || 'light')

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    html.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    html.classList.toggle('dark', theme === 'dark')
  }, [])
  return(
    <header className='bg-White py-5 shadow-sm dark:bg-DarkBlue'>
    <nav className='container mx-auto px-2 flex justify-between items-center'>
    <h1 className='text-base font-extrabold text-VeryDarkBlue dark:text-White'>Where in the world ?</h1>
    
    <div onClick={handleTheme} className='flex items-center gap-3'>
  {theme === 'light' ? (
    <BsFillSunFill className='fill-VeryDarkBlue' size='1.5rem' />
  ) : (
    <BsMoonStarsFill className='fill-White' size='1.5rem' />
  )}
  <span className='font-semibold text-sm text-VeryDarkBlue dark:text-White'>
    {theme === 'light' ? 'Light mode' : 'Dark mode'}
  </span>
</div>

    </nav>
    </header>
    )
}
export default Navbar;