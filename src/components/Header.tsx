import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>


        

        <div className='nav'>

        <div className='logo'>
            <Image src="/Images/usama1-removebg-preview.png"alt='logo'width={100}height={50} />
        </div>


            <ul>

                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/Shop'}>Shop</Link></li>
                <li><Link href={'/Blog'}>Blog</Link></li>
                <li><Link href={'/Priceing'}>Priceing</Link></li>
                <li><Link href={'/Contact'}>Contact</Link></li>

                
            </ul>

            <div className='btn'>
            <button>
                Contact Me
            </button>
        </div>

        </div>

        <div>


            
        </div>

       
      
    </div>
  )
}

export default Header
