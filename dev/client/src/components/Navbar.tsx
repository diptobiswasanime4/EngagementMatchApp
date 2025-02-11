import * as React from "react";
import { NavigationMenu } from "radix-ui";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import "../index.css";
// import "/Users/tanyagautam/Documents/GitHub/EngagementMatchApp/dev/client/src/index.css";
import axios from "axios";
import API_ENDPOINT from "../api/config";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const { userInfo, setUserInfo } = React.useContext(UserContext);
  const [menuOpen, setMenuOpen] = React.useState(false);

  async function logout() {
    try {
      const resp = await axios.post(
        `${API_ENDPOINT}/logout`,
        { email: userInfo.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(resp);
      setUserInfo({});
    } catch (error) {
      console.error("Logout failed", error);
    }
  }
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.Link asChild>
        <a className="Callout" href="/">
          <img src="../src/assets/Group 945.png" />
        </a>
      </NavigationMenu.Link>
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="NavigationMenuTrigger">
            Services <CaretDownIcon className="CaretDown" aria-hidden />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="NavigationMenuContent">
            <ul className="List one">
              <ListItem href="https://stitches.dev/" title="ExecBridge">
                Unlock Confidential, High-Impact Opportunities.
              </ListItem>
              <ListItem href="/colors" title="Events">
                Join us in our inspiring discussions in our exciting events
              </ListItem>
              <ListItem
                href="https://icons.radix-ui.com/"
                title="How does it work?"
              >
                Get to know what we do, how we do!
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            href="/cxo-dashboard"
          >
            Dashboard
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="NavigationMenuLink"
            target="_blank"
            href="https://in.linkedin.com/company/cxo-india"
          >
            LinkedIn
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="NavigationMenuIndicator">
          <div className="Arrow" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="ViewportPosition">
        <NavigationMenu.Viewport className="NavigationMenuViewport" />
      </div>

      {userInfo.email ? (
        <button onClick={logout} className="Callout">
          Sign Out
        </button>
      ) : (
        <>
          <Link
            to="/login"
            className="text-white absolute right-25 px-5 py-2 mr-4 content-center border border-[#FFD700] rounded-md hover:bg-[#FFD700] hover:text-black transition"
          >
            Sign In
          </Link>
          <Link
            to="/register"
            className="bg-white absolute right-3 px-5 py-2 content-center rounded-md hover:bg-[#FFD700] transition"
          >
            Sign Up
          </Link>
        </>
      )}
    </NavigationMenu.Root>
  );
};
type ButtonProps = React.HTMLProps<HTMLButtonElement>;
const ListItem = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames("ListItemLink", className)}
          {...props}
          ref={forwardedRef}
        >
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default Navbar;
