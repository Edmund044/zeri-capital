export default function HeroSectionWithBackGroundImage(props){
    return (
        <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-500 bg-blend-multiply">
    <div class="px-4 mx-auto text-center py-24 lg:py-48">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{props.heading}</h1>
        <p class="mb-8 text-2xl ml-8 font-normal text-gray-300 lg:text-4xl sm:px-16 lg:px-48">{props.description}</p>
    </div>
</section>
    )
}