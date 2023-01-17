import logo from '../../assets/virtaLogo.svg'
import './header.css'

export default function Header() {
  return (
    <header>
      <img src={logo} alt='VIRTA' />
      <span>Virta platform compatible countries</span>
    </header>
  )
}
