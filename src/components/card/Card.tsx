import { useState } from 'react'
import type { ItemType } from '../../utils/types'
import IconButton from '../buttons/IconButton'
import Input from '../input/Input'
import './style.css'

interface CardPropTypes {
    item: ItemType
}

export default function Card({ item }: CardPropTypes) {

    const [amount, setAmount] = useState<number>(1);

    return (
        <div className='card-container'>
            <div className='card-status-bar'>
                <div className='card-status-content'>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', visibility: item.isOnSale ? 'visible' : 'hidden' }}>
                        <div className='card-status-dot'></div>
                        <span style={{ color: 'white', fontSize: 12 }}>ON SALE</span>
                    </div>

                    <div className='card-stock-status'>In stock</div>
                </div>
                <Input type='number' style={{width: '100px', backgroundColor: "#373E54"}} defaultValue={1} value={amount} increaseFunc={() => { setAmount(amount + 1) }} decreaseFunc={() => { setAmount(amount - 1) }} />
            </div>
            
            <div>
                <img src={item.imgUrl} style={{objectFit: 'cover'}} width={'72px'} height={'72px'} alt='item' />
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <span style={{color: '#fcfcfc', fontSize: '18px'}}>{item.name}</span>
                <div className='card-category-badge'>
                    {
                        item.category === 'weapon' && <img src='subscription-icon-green.svg'></img>
                    }
                    {
                        item.category === 'character' && <img src='item-bag.svg'></img>
                    }
                </div>
            </div>

            <div style={{display: 'flex', gap: '10px', color: 'white', fontSize: '16px'}}>
                <span style={{fontWeight: '600'}}>{'$' + item.price.toFixed(2)}</span>
                <span style={{textDecoration: 'line-through', textDecorationColor: 'red', textDecorationThickness: 2}}>{'$' + item.originalPrice.toFixed(2)}</span>
            </div>

            <div style={{color: '#CBCCD1', letterSpacing: '0.86', fontSize: '11px'}}>
                {
                    item.content
                }
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                <IconButton 
                    content='DETAILS' 
                    sx={{
                        color: '#999BA4',
                        backgroundColor: '#35394B',
                        height: '40px',
                        boxSizing: 'border-box'
                    }}
                />
                <IconButton 
                    content='ADD' 
                    endAddornmentIcon={
                        <div
                            style={{
                                backgroundColor: '#454DA8',
                                padding: '4px',
                                borderRadius: '2px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <img src='bucket.svg' width={'16px'} height={'16px'} />
                        </div>
                    }
                    sx={{
                        color: 'white',
                        backgroundColor: '#5762D5'
                    }}
                />
            </div>
        </div>
    )
}