function Nav(props) {
  let dataNav = props.data;
  console.log(props);
  const listItem = dataNav.map( item => <li key={item.link} ><a href={item.link}>{item.text}</a></li>)
  return (
    <nav>
      <ul>
        {listItem}
      </ul>
    </nav>
  )
}

export default Nav;