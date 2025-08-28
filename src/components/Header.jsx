

const Header = () => {
  return (
    <header>
        {/*left section*/}
        <div>
            <img className="md:w-16 w-12" src="public\images\logo.png" alt="logo-img" />

            <div>
                <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 
                rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                    PLAY NOW 
                </button>

                <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 
                rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300">
                    PLAY NOW 
                </button>
            </div>
        </div>
    </header>
  )
}

export default Header