import { Container } from "./styles";

export function Header({ logo }) {
    return (
<Container>
<div className='header-container'> 
  <div className="logo-container">
    <img src={logo} alt="Votz logo" className="logo" />
    <p>Vote online com segurança.</p> 
  </div>
</div>
</Container>

    )

}