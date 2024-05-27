import http from "@/lib/http";
import { MessageResType } from "@/schemaValidations/common.schema";
import {
  CreateProductBodyType,
  ProductListResType,
  ProductParamsType,
  ProductResType,
  UpdateProductBodyType,
} from "@/schemaValidations/product.schema";

const productApiRequest = {
  getList: () => http.get<ProductListResType>("/products"),
  create: (body: CreateProductBodyType) =>
    http.post<ProductResType>("/products", body),
  uploadImage: (body: FormData) =>
    http.post<{
      message: string;
      data: string;
    }>("/media/upload", body),
  getDetail: (id: number) => http.get<ProductResType>(`/products/${id}`, {
    cache: 'no-store'
  }),
  update: (id: number, body: UpdateProductBodyType) =>
    http.put<ProductResType>(`/products/${id}`, body),
  delete: (id: number) =>
    http.delete<MessageResType>(`/products/${id}`)
};
export default productApiRequest;
