export default function Nav({ links }) {
    return (
      <nav className="">
        <div className="">
          <div className="" id="navbarSupportedContent">
            <ul className="flex flex-wrap text-sm font-medium text-center">
              {links.map((link) => link)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
