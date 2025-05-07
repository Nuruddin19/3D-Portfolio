import Hand from '../../public/images/waving-hand.svg'

const Hero = () => {
    return(
        <section className='min-h-screen w-full flex flex-col relative'>

          <div className="flex flex-col w-full mx-auto sm:mt-36 mt-20 c-space gap-3 items-center">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-dm relative">Hi, I am Nuruddin <img src={Hand} className=" w-6.5 sm:w-7.5 sm:absolute sm:left-60 waving-hand absolute left-50  text-center" alt="Waving-hand"/></p>
            <p className='hero_tag text-gray_gradient'>Building Products & Brands</p>
          </div>

        </section>
    )
}
export default Hero