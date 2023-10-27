import icons from '../icons';
export default function Menu() {
    return <aside class="menu">
    <ul>
      <a class="icon logo" href=""><img src={icons.Logo} alt=""/></a>
      <a class="icon" href=""><img src={icons.Frame1160} alt=""/></a>
      <a class="icon" href=""><img src={icons.Comment} alt=""/></a>
      <a class="icon" href=""><img src={icons.Contact} alt=""/></a>
      <a class="icon" href=""><img src={icons.Frame42} alt=""/></a>
      <div class="menu_bottom">
        <a class="icon b" href=""><img src={icons.Fisetting} alt=""/></a>
        <a class="icon b" href=""><img src={icons.Rectangle} alt=""/></a>
      </div>
    </ul>
  </aside>
} 
