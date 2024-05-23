import productApiRequest from "@/apiRequests/products";
import { number } from "zod";
import ProductAddForm from "../_components/product-add-form";

export default async function ProductEdit({
  params
}: {
  params: { id: string };
}) {
  let product = undefined
  try {
    const { payload } = await productApiRequest.getDetail(Number(params.id))
    product = payload.data
  } catch (error) {
    
  }
  return (
    <div>
      {!product &&  <div>Không tìm thấy sản phẩm</div>}
      {product && <ProductAddForm product={product}/>}
      
    </div>
  )
}