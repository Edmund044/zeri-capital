export default function ContactFormCareers() {
    return (

<section className="bg-white dark:bg-gray-900">
  <div className=" bg-gray-100 px-4 py-8 mt-32 ml-32 mb-32 mr-48 lg:py-24">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white"> Please fill this form and we will get back to you soon.</h2>
      <form action="#">
          <div className="grid gap-8 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                  </div>
              <div className="w-full">
              <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name*</label>
                  <input type="text" name="name" id="name" className="bg-white border border-white text-gray-900 text-sm rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="John" required=""></input>
                </div>
              <div className="w-full">
              <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name*</label>
                  <input type="text" name="brand" id="brand" className="bg-white border border-white text-gray-900 text-sm rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Doe" required=""></input>
          
                   </div>
              <div>
              <label for="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address*</label>
                  <input type="text" name="brand" id="brand" className="bg-white border border-white text-gray-900 text-sm rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="johndoe@emailaddress.com" required=""></input>
          
              </div>
              <div>
                  <label for="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of graduation*</label>
                  <input type="text" name="item-weight" id="item-weight" className="bg-white border border-white text-gray-900 text-sm rounded-none focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="Expected graduation date" required=""></input>
              </div> 
              <div className="sm:col-span-2">
              CV*
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-2 pb-2">
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">Select a file or drop it here.</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div> 

 </div>
          </div>
          <div className="flex items-center space-x-4">
             <button type="submit" className="text-white bg-accent font-medium rounded-full text-sm px-5 py-2.5 text-center">
                  Send Application
              </button>
          </div>
      </form>
  </div>
</section> 


     )}

