import { Link } from "react-router-dom";

export const Footer = () => {
  return (
      <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">CineInfo</Link>. All Rights Reserved.</span>
          <ul className="flex flex-wrap items-center justify-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://www.instagram.com/md_rsk_?igsh=NGVhN2U2NjQ0Yg==" rel="noreferrer" target="_blank" className="mr-4 hover:underline md:mr-6 ">Instagram</a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/mohamed-rashik-a-a64734221/" rel="noreferrer" target="_blank" className="mr-4 hover:underline md:mr-6">LinkedIn</a>
              </li>
              <li>
                  <a href="https://twitter.com/_md_rsk_" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Twitter</a>
              </li>
              <li>
                  <a href="https://github.com/Mohamed-Rashik" target="_blank" rel="noreferrer" className="mr-4 hover:underline md:mr-6">Github</a>
              </li>
          </ul>
      </footer>
  )
}