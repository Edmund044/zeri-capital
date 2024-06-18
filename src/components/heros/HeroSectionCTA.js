export default function HeroSectionCTA(props) {
    return ( 
        <main className="">
<section className={props.backGroundColor}>
  <div className="p-8 md:p-12 lg:px-16 mt-20 lg:py-48">
    <div className="mx-auto max-w-lg text-center">
      <h2 className="text-5xl font-bold font-heading text-accent md:text-5xl">
       {props.heading}
      </h2>

      <p className="text-2xl text-gray-600 sm:mt-4 sm:block font-body">
      {props.subheading}
      </p>
    </div>

    {(() => {
        if (props.type == '1') {
          return (
            <div className="mx-auto mt-8 max-w-xl">
            <button type="submit" className="ml-48 text-white text-center absolute bg-accent hover:bg-secondary font-medium rounded-full text-sm px-8 py-4">{props.buttonText}</button>
          </div>
          )
        } else if (props.type == '2') {
          return (
            <div className="mx-auto mt-8 max-w-xl">
              <form>   
    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <input type="search" id="search" className="block w-full p-4 ps-2 text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your email" required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
    </div>
</form>
          </div>
          )
        }
        else if (props.type == '3') {
          <div className="mx-auto mt-8 max-w-xl">
            lkdknlkdn
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-accent hover:bg-secondary font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{props.buttonText}</button>
          </div>
        }
        else {
          return (
            <div>catch all</div>
          )
        }
      })()}

  </div>
</section>
        </main>    

     );
}

