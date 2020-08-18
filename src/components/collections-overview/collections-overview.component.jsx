import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../collection-preview/collection-preview.component'
import {connect} from 'react-redux'


const CollectionsOverview=({collections})=>{
    return(
        <div className="collections-overview">

            {Object.keys(collections).map(key=>{
                console.log(key)
                const {id,...otherCollectionProps}=collections[key]
                return (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                )
            })}
        </div>
    )
}

const mapStateToProps=({category:{collections}})=>({
    collections:collections
})

export default connect(mapStateToProps)(CollectionsOverview)