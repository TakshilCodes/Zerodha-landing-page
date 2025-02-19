import Logo from '../assets/logo.svg'
import menuopen from '../assets/Icon/menu.png'
import menuclose from '../assets/Icon/close.png'
import kiteLogo from '../assets/Menu/kite-logo.svg'
import consolelogo from '../assets/Menu/console.svg'
import kiteConnectLogo from '../assets/Menu/kite-connect.svg'
import coinLogo from '../assets/Menu/coin.svg'
import Varsitylogo from '../assets/Menu/varsity.png'
import TradingQAlogo from '../assets/Menu/tqna.png'

const Navbar = () => {

  function handlemenuclick() {

    const menutoggle = document.getElementById('menutoggle');
    const imagetaoggle = document.getElementById('imagetaoggle');
    const imagetaoggle2 = document.getElementById('imagetaoggle2');
    menutoggle.style.display = menutoggle.style.display === "flex" ? "none " : "flex";
    if (menutoggle.style.display === "flex") {
      menutoggle.style.display === "none";
      imagetaoggle.src = menuclose;
      imagetaoggle2.src = menuclose;
    }

    else if (menutoggle.style.display === "none") {
      menutoggle.style.display === "flex";
      imagetaoggle.src = menuopen;
      imagetaoggle2.src = menuopen;
    }
  }

  return (
    <>
      <div>
      <div className='flex justify-between md:justify-center items-center gap-[25%] py-6 text-[#666666] shadow-sm fixed top-0 left-0 w-full bg-white z-50'>
          <div><img src={Logo} alt="Logo" className='w-35' /></div>
          <div>
            <div className=" hidden md:flex items-center gap-10 text-nd">
              <a href="" className='hover:text-[#387ED1]'>Signup</a>
              <a href="" className='hover:text-[#387ED1]'>About</a>
              <a href="" className='hover:text-[#387ED1]'>Products</a>
              <a href="" className='hover:text-[#387ED1]'>Pricing</a>
              <a href="" className='hover:text-[#387ED1]'>Support</a>
              <button className='cursor-pointer' onClick={handlemenuclick}><img src={menuopen} alt="Menu" className='w-7' id="imagetaoggle" /></button>
            </div>
            <button className='cursor-pointer block md:hidden' onClick={handlemenuclick}><img src={menuopen} alt="Menu" className='w-7' id="imagetaoggle2" /></button>
            <div className='bg-white mt-5 shadow-md absolute hidden flex-col right-0 md:right-60' id='menutoggle'>

              <div className="flex items-center gap-5 text-nd p-5 justify-center md:hidden">
                <a href="" className='hover:text-[#387ED1]'>Signup</a>
                <a href="" className='hover:text-[#387ED1]'>About</a>
                <a href="" className='hover:text-[#387ED1]'>Products</a>
                <a href="" className='hover:text-[#387ED1]'>Pricing</a>
                <a href="" className='hover:text-[#387ED1]'>Support</a>
              </div>

              <div className='menu1 md:flex flex-row gap-1 md:gap-30 md:p-5 my-10 md:my-0'>

                <div className="platforms">
                  <img src={kiteLogo} alt="kiteLogo" className='w-15' />
                  <p className='text-md text-black'>Kite</p>
                  <p className='ToRemove text-[13px] text-gray-400 font-semibold'>Trading platform</p>
                </div>

                <div className="platforms">
                  <img src={consolelogo} alt="consolelogo" className='w-15' />
                  <p className='text-md text-black'>Console</p>
                  <p className='ToRemove text-[13px] text-gray-400 font-semibold'>Backoffice</p>
                </div>

                <div className="platforms">
                  <img src={kiteConnectLogo} alt="kiteConnectLogo" className='w-15' />
                  <p className='text-md text-black'>Kite Connect</p>
                  <p className='ToRemove text-[13px] text-gray-400 font-semibold'>Trading APIs</p>
                </div>

                <div className="platforms">
                  <img src={coinLogo} alt="coinLogo" className='w-15' />
                  <p className='text-md text-black'>Coin</p>
                  <p className='ToRemove text-[13px] text-gray-400 font-semibold'>Mutal funds</p>
                </div>

                <div className="platform flex justify-center items-center md:hidden mt-3">
                  <img src={Varsitylogo} alt="kiteLogo" className='w-10 mr-5' />
                  <p className='text-md text-black'>Varsity</p>
                </div>

                <div className="platform flex justify-center items-center md:hidden mt-4">
                  <img src={TradingQAlogo} alt="kiteLogo" className='w-15' />
                  <p className='text-md text-black'>Trading Q&A</p>
                </div>
              </div>

              <div className='menu2 bg-gray-50 flex flex-row justify-center gap-15'>
                <div className="lists">
                  <ul className='list-none text-md flex flex-col'>
                    <li className='text-black font-medium my-4'>Utilities</li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Brokerage calculator</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Margin calculator</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Holiday calculator</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Markets</a></li>
                  </ul>
                </div>

                <div className="lists">
                  <ul className='list-none text-md flex flex-col'>
                    <li className='text-black font-medium my-4'>Updates</li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Z-Connect blog</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Pluse News</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>Circulas/Bullentin</a></li>
                    <li className='mb-2'><a href="" className='hover:text-[#387ED1]'>IPOs</a></li>
                  </ul>
                </div>

                <div className="lists hidden md:flex flex-col items-center md:items-start">
                  <ul className='list-none text-md '>
                    <li className='text-black font-medium my-4'>Education</li>
                  </ul>
                  <div className='flex gap-10 justify-center p-5'>
                    <div className='flex flex-col items-center'>
                      <a href="" className='hover:text-[#387ED1]'><img src={Varsitylogo} alt="Varsitylogo" className='text-center' /></a>
                      <p className='cursor-pointer pt-3 hover:text-[#387ED1]'>Varsity</p>
                    </div>

                    <div className='flex flex-col items-center'>
                      <a href="" className='hover:text-[#387ED1]'><img src={TradingQAlogo} alt="TradingQAlogo" /></a>
                      <p className='cursor-pointer pt-3 hover:text-[#387ED1]'><a href="">Trading Q&A</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>)
}

export default Navbar