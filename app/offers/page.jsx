import OfferCard from '@/components/offers/OfferCard'
import { offers } from '@/data/offers'
import React from 'react'


const Offers = () => {

  return (
    <div className="p-6">
      <div className="flex  gap-3 flex-wrap m-5 justify-left justify-items-center">
        {offers.map((offer, idx) => (
          <OfferCard
            key={idx}
            bgcolor={offer.bgcolor}
            discount={offer.discount}
            ky={offer.key}
          />
        ))}
      </div>
    </div>
  );
}

export default Offers