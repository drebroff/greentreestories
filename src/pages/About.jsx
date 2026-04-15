import aboutBanner from "../assets/banners/about_banner.jpg";



function About() {
  return (
    <div className="py-12">
        <div className="h-40 overflow-hidden">
            <img alt="David Okoro portrait" className="w-full h-full object-cover" data-alt="A Tree Banner" src={aboutBanner}/>
        </div>
        <div className="my-4"></div>
      <h1 className="text-4xl font-bold font-headline mb-4 text-slate-900">A Story</h1>
      <p className="text-slate-600 text-lg">The company was founded five years ago in Klaipėda, Lithuania. Its initial focus was on supporting the development of e-commerce. The company assisted brands such as Tupperware, Atomic, Salamon, the ‘Austrian mug brand’, and Löffler.
          Subsequently, the company had the privilege of collaborating with Fujitsu Luxembourg and working with clients such as the European Investment Bank (EIB).
          Currently, Green Tree Stories is engaged in the development of software for online learning.
      </p>
    </div>
  );
}

export default About;
