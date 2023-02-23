import CardComponents from "./components/card-components"
import {
  repicePage,
  interiorConsultant,
  buttonComponents,
  myGallery,
  notFound
} from "./data"

function App() {
  return (
    <div className="bg-slate-800">
      <div className="container md:w-7/12 mx-auto py-12">
        <header>
          <h1 className="text-5xl text-violet-300 font-bold">Hi, I'm Nuri Demir. I'm Front-end Developer.</h1>
        </header>
        <h2 className="text-4xl font-bold underline-offset-8 py-6">Challenge</h2>
        <hr />
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 p-6 md:px-0">
          <CardComponents {...repicePage} />
          <CardComponents {...repicePage} />
          <CardComponents {...interiorConsultant} />
          <CardComponents {...buttonComponents} />
          <CardComponents {...myGallery} />
          <CardComponents {...notFound} />
        </section>
      </div>
    </div>

  )
}
export default App
