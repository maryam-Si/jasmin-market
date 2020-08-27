import React from'react';
import ShopData from './ShopData';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { collection:ShopData }
    }
    
    render() {
        const col = this.state.collection; 
        return (
            <div className='shop-page'>
                {col.map(({id,...otherCollectionProps})=>(<CollectionPreview key={id} {...otherCollectionProps}/>))}

            </div>
          );
    }
}
 
export default ShopPage;