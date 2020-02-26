import Link from 'next/link'

const Header = () => (
  <header>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/first">
          <a>First Name</a>
        </Link>
      </li>
      <li>
        <Link href="/post/[id]" as="/post/second">
          <a>Second Name</a>
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
