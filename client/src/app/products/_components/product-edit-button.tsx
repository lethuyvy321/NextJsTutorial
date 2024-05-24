'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import DeleteProduct from './delete-product'
import { ProductListResType, ProductResType } from '@/schemaValidations/product.schema'
import { isClient } from '@/lib/http'

export default function ProductEditButton({
    product
}: {
    product: ProductListResType['data'][0]
}) {
    const isAuthenticated = isClient() && Boolean(localStorage.getItem('sessionToken'))
    if(!isAuthenticated) return null
  return (
   <div>
     <div className="flex space-x-2">
    <Link href={`/products/${product.id}/edit`}>
      <Button variant={"ghost"}>Edit</Button>
    </Link>
    <DeleteProduct product={product} />
  </div>
   </div>
  )
}