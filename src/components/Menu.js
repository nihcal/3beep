import icons from '../icons';
function Menu() {
    return <aside class="menu">
    <ul>
      <a class="icon logo" href=""><img src={icons.Logo} alt=""/></a>
      <a class="icon" href=""><img src="assets/img/Frame 1160.svg" alt=""/></a>
      <a class="icon" href=""><img src="img/comment.svg" alt=""/></a>
      <a class="icon" href=""><img src="img/contact.svg" alt=""/></a>
      <a class="icon" href=""><img src="img/Frame 427319650.svg" alt=""/></a>
      <div class="menu_bottom">
        <a class="icon b" href=""><img src="img/fi_settings.svg" alt=""/></a>
        <a class="icon b" href=""><img src="img/Rectangle 2085.png" alt=""/></a>
      </div>
    </ul>
  </aside>
} 
export default Menu