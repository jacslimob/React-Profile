import Nav from '../components/Nav';
import pic from '../images/WIN_20230630_18_43_54_Pro.jpg'

export default function Header() {
  return (
    <header className='bg-blue-800'>
      <div className='p-4 flex items-center'>
        <img src={pic} className='m-4 h-44 w-44 rounded-full border-2 border-white' />
        <h1 className='text-3xl text-white'>Hello my name is
          <inline className='text-4xl text-white font-semibold p-4'>Jacob Maughan</inline></h1>



      </div>
      <Nav />

    </header>
  )
}