// pages/index.js
import Link from 'next/link'

export default () => (
  <div className='list'>
    <ul>
    <li className="li">
        <Link href="/about"><a className="active">About</a>
        </Link>
    </li>
    </ul>
    <style jsx>{`
          .li {
          }
          .active {
            background-color: #4CAF50;
          }
          .li :hover {
            borderColor: blue;
          }
        `}</style>

  </div>
)