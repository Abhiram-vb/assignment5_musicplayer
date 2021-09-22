import { Component } from "react"
import NavBarComponent from "../NavBarComponent"
import SongsComponent from '../SongsComponent'
import './index.css'
const data = [{id:1,like:3,title:'Com Truise - Flightwave',subtitle:'Reed',media:'',isLiked:false},
{id:2,like:3,title:'Claude Debussy - Clair de lune',subtitle:'Reed',media:'',isLiked:false},
{id:3,like:2,title:'Culture Shock - Troglodyte',subtitle:'Doug',media:'',isLiked:false},
{id:4,like:2,title:'Tycho - Montana',subtitle:'Reed',media:'',isLiked:false}]
class MainEntertainment extends Component{
    state = {data:data,searchData:'',newTitle:'',newSubtitle:'',para:""}
    addNewSong = (e)=>{
        const {newTitle,newSubtitle,data} = this.state
        e.preventDefault()
        if(newTitle!=='' && newSubtitle!==''){
            const newData = {id:data.length+1,like:0,title:newTitle,subtitle:newSubtitle,media:'',isLiked:false}
        this.setState({data:[...data,newData],para:'',newTitle:'',newSubtitle:''})
        }
        else{
            this.setState({para:"*Enter Correct Input"})
        }
        
    }
    changeNewTitle = (e) =>{
        
        this.setState({newTitle:e.target.value})
    }
    changeNewSubtitle = (e) =>{
        this.setState({newSubtitle:e.target.value})
    }

    filterData = (e)=>{
        this.setState({searchData:e.target.value})
    }

    deleteItem = (id) =>{
        const {data} = this.state 
        const newData = data.filter(eachData=>eachData.id!==id)
        this.setState({data:newData})
    }

    likeStateChange = (id) =>{
        console.log(id)
        this.setState(prevState=>({data:
            prevState.data.map(eachData=>{
            if(id===eachData.id && eachData.isLiked===false ){
                console.log(id,eachData.id)
                return {...eachData,like:eachData.like+1,isLiked:!eachData.isLiked}
            }
            else if(id===eachData.id && eachData.isLiked===true ){
                console.log(id,eachData.id)
                return {...eachData,like:eachData.like-1,isLiked:!eachData.isLiked}
            }
            return eachData
        }),
    }))
    }

    render(){
        const {data,searchData,newSubtitle,newTitle,para} = this.state
        const newData = data.filter(eachData=>eachData.title.toLowerCase().includes(searchData.toLowerCase()))
        return(
            <>
            <NavBarComponent/>
            <div className="mainContainer">
                <div className="search">
                    <input type="search" onChange={this.filterData} value={searchData} className="searchInput" placeholder="Search All Tracks"/>
                </div>
                <ul className="songs">
                    {newData.map(eachData => <SongsComponent dataItems={eachData} deleteItem={this.deleteItem}  likeStateChange={this.likeStateChange} key={eachData.id}/>)}
                </ul>
                <form>
                    <label  htmlFor="titleId"> Title</label>
                    <input id="titleId" onChange={this.changeNewTitle} type="input" value={newTitle} placeholder="Enter song Title to add" className="titleInput"/>
                    <label  htmlFor="subtitleId"> subtitle</label>
                    <input id="subtitleId" onChange={this.changeNewSubtitle} type="input" value={newSubtitle} placeholder="Enter song subtitle to add" className="subtitleInput"/>
                    <p className="alert">{para}</p>
                    <button type="submit" onClick={this.addNewSong}>Add song</button>

                </form>
            </div>          
            </>
        )
    }
}
export default MainEntertainment