import { useNavigate } from "react-router-dom"
import type { Product } from "../types"
import { formatCurrency } from "../utils/inde"

type ProeductDetailsProps = {
    product: Product
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
           onClick={() => navigate(`/productos/${product.id}/edit`)}
           className="bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs"
        >Editar</button>
       </div>
      </td>
    </tr>
  )
}
