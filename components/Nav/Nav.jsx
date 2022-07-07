import Link from 'next/link';
import NavStyle from './Nav.module.css';

const Nav = () => {
    return (
        <div className="flex justify-evenly items-center w-1/2">
            <Link href='/create'>
                <a className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2">
                    CREATE
                </a>
            </Link>
            <Link href='/allworks'>
                <a className="inline-block bg-gray-200 rounded-full px-11 py-5 text-base font-semibold text-gray-700 mr-2 mb-2">
                    ALL WORKS
                </a>
            </Link>
      </div>
    )
};

export default Nav;