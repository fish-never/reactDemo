import React from 'react'
import ReactDOM from 'react-dom'
import StaffHeader from './StaffHeader.js'
import StaffItemPanel from './StaffItemPanel.js'
import StaffFooter from './StaffFooter.js'
import StaffDetail from './StaffDetail.js'
import STAFF from './Staff.js'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            staff:new STAFF,
            staffDetail:null
        }
    }
    //增员
    addStaffItem(item){
        this.setState({
            staff:this.state.staff.addStaffItem(item)
        })
    }
    //搜索
    searchStaff(word){
        this.setState({
            staff:this.state.staff.searchStaff(word)
        })
    }
    //删员
    removeStaffItem(item){
        this.setState({
            staff:this.state.staff.removeStaffItem(item)
        })
    }
    //查看详情
    detailStaffItem(num){
        this.setState({
            staffDetail:this.state.staff.staff.filter(item=>{
                return item.key===num
            })[0]
        })
    }
    //关闭详情
    closeDetail(){
        this.setState({
            staffDetail:null
        })
    }
    //编辑详情
    editDetail(item){
        this.closeDetail()
        this.setState({
            staff:this.state.staff.editStaffItem(item)
        })
    }
    //筛选
    filtStaff(val){
        this.setState({
            staff:this.state.staff.filtStaff(val)
        })
    }
    //排序
    orderStaff(val){
        this.setState({
            staff:this.state.staff.orderStaff(val)
        })
    }
    render(){
        return(
            <div>
                <StaffHeader searchStaff={this.searchStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} orderStaff={this.orderStaff.bind(this)}/>
                <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
                <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
                <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
            </div>
        )
    }
}
ReactDOM.render(<App/>,document.getElementById('app'))

