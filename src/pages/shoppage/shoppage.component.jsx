import React from "react";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CollectionPage from '../collectionpage/collectionpage.component'

const ShopPage=({match})=>{
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
}

export default ShopPage;
