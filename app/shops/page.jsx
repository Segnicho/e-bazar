import {ShopCard} from '@/components'
import { shops } from '@/data/shops'
import React from 'react'

const Shops = () => {
  return (
    <div>
      <div>
        <h1>Shops</h1>
        <div className='grid-cols-4 space-x-4'>
          {shops.map((shop) => (
            <ShopCard name={shop.name} address={shop.address} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shops