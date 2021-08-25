import Nav from "../Header/Nav"
function Footer(props) {
  return (
    <footer>
      <h3>{props.data.site_title}</h3>
      <Nav data={props.data.nav}/>
    </footer>
  )
}

export default Footer;