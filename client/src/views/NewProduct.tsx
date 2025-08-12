import { Link } from "react-router-dom";


export default function NewProduct() {
  return (
    <>
      <div className="flex justify-between">
         <h2 className="text-4xl font-black text-slate-500">Rigistrar Producto</h2>
         <Link
            to='/'
            className="rounded-md bg-indigo-600 p-3 text-white text-sm font-bold hover:bg-indigo-500 shadow-sm"
         >
            Volver a productos
         </Link>
      </div>
    </>
  )
}
