import Nav from '../components/Nav';
import pic from '../images/WIN_20230630_18_43_54_Pro.jpg'

export default function Header() {
    return (
    <header className='bg-blue-800'>
      <div className='p-4 flex items-center justify-between'>
        
        <h1 className='text-8xl font-bold p-4'>Jacob Maughan</h1>
        <img src={pic} className='m-4 h-36 w-36 rounded-full border-2 border-black' />  
          
       
      </div>
        <Nav />
      
    </header> 
    )
}