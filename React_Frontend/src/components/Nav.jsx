const baseUrl = "https://localhost:7474";

export default function Product({ product }) {


  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-blue-700" href="/">
          <span>Home</span>
        </a>
      </div>
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-blue-700" href="/DummyDatas">
          <span>GTR API DATA</span>
        </a>
      </div>

      

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/Create"
          >
            Create New Product
          </a>

          
        </div>
      </div>
    </div>
  </div>
</header>
  );
}
