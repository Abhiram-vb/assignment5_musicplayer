import './index.css'

const SongsComponent =(props)=>{
    const {dataItems,likeStateChange,deleteItem} = props 
    const {like,title,subtitle,id,isLiked} = dataItems
     const changeLikeState = () =>{
        likeStateChange(id)
    }
    const deleteItemFromList = () =>{
        deleteItem(id)
    }
    const image = isLiked?'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png':'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    const h1BgColor = isLiked?'h1Color':""
    return(
        <li className="eachSong" >
            <h1 className={h1BgColor}>{like} <img src={image} onClick={changeLikeState} className="like" alt="like"/></h1>
            <div className="titleAndSubtitle">
                <h1 className="title">{title}</h1>
                <p className="subtitle">{subtitle}</p>
            </div>
            <audio controls src="http://docs.google.com/uc?export=open&id=1sanznJvP0Z5XDwDffpiGcoYhFAqZ4DHE"/>
            <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" className="delete" onClick={deleteItemFromList}/>
        </li>
    )
}
export default SongsComponent