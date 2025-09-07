import { Form, useNavigate, type ActionFunctionArgs, redirect} from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils/inde"

type ProeductDetailsProps = {
    product: Product
}

export async function action({params} : ActionFunctionArgs){
   console.log(params.id)

   return redirect('/')
}

export default function ProductDetails({product} : ProeductDetailsProps) {

  const navigate = useNavigate()

  const isAvailability = product.availability

  return (
    <tr className='border-b'>
      <td className="p-3 text-lg text-gray-800">
        {product.name}
      </td>
      <td className="p-3 text-lg text-gray-800">
        {formatCurrency(product.price)}
      </td>
      <td className="p-3 text-lg text-gray-500">
        {isAvailability  ? 'Disponible': 'No Disponible' }
      </td>
      <td className="p-3 text-lg text-gray-500">
       <div className="flex gap-2 items-baseline-last">
        <button     
           onClick={() => navigate(`/productos/${product.id}/edit` )}
           className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs"
        >Editar</button>

        <Form
           className="w-full"
           method="POST"
           action={`productos/${product.id}/eliminar`}
        >
          <input
            type="submit"
            value='Eliminar'
            className="bg-red-600 text-white  rounded-lg w-full uppercase p-2 font-bold text-xs"
          />
        </Form>
       </div>
      </td>
    </tr>
  )
}
