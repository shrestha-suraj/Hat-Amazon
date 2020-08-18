import React from 'react'
import './collectionpage.styles.scss'
import CollectionItem from '../../components/collection-item/collection-item.component'
import {connect} from 'react-redux'



const CollectionPage=({collection})=>{
    const {title,items}=collection
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
                <div className="items">
                    {
                        items.map(item=>(
                            <CollectionItem key={item.id} item={item}/> 
                        ))
                    }
                </div>
        </div>
    )
}

const mapStateToProps=({category:{collections}},ownProps)=>({
    collection:collections[ownProps.match.params.collectionId]
})

export default connect(mapStateToProps)(CollectionPage)