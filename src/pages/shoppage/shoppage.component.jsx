import React from "react";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import {Route} from 'react-router-dom'
import CategoryPage from '../categorypage/categorypage.component'

const ShopPage=({match})=>{
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
      </div>
    );
}

export default ShopPage;
