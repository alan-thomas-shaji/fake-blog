const Navbar = () => {
  return (
    <div className="navbar text-xl bg-blue-500 py-4 px-2">
      <div className="navbar-container flex justify-between">
        <a href="/">
            <h1 className="text-3xl font-bold">My Blog</h1>
        </a>
        <ul className="navbar-menu flex ">
          <li className="m-1 p-1">
            <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
          </li>
          <li className="m-1 p-1">
            <a href="/" className="text-gray-600 hover:text-gray-800">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;