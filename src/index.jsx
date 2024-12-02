import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */
function page (){
  <ol>
    <li>
      It's a framework
    </li>
    <li>
      It's a library
    </li>
  </ol>
}

root.render(<page />);
