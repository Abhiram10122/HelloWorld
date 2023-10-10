

const Card = ({name,info,source, dark}: any) => {
    return (
      <div className={`${dark ? "border-black shadow-gray-800 shadow-2xl bg-card-bg" : "shadow-xl bg-white-400 text-black"} rounded-2xl text-center text-gray-500 max-w-sm  p-5 flex flex-col items-center justify-center`}>
      <img className="w-24 h-24 rounded-full mx-auto object-cover object-center" src={source} alt=""/>
      <div className="text-sm mt-5">
          <a href="#"
              className={`font-medium leading-none transition ${dark ? "text-white" : "text-black"} duration-500 ease-in-out`}>{name}
          </a>
          <p>{info}</p>
      </div>
      </div>
  
    )
  }
  
  export default Card