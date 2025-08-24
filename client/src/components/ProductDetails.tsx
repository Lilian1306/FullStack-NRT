import type { Product } from "../types"
import { formatCurrency } from "../utils/inde"

type ProeductDetailsProps = {
    product: Product
}

export default function ProductDetails({product} : ProeductDetailsProps) {

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
    </tr>
  )
}
