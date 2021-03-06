import React from 'react'
import StaffItem from './staffItem.js'
export default class StaffItemPanel extends React.Component{
    render(){
        let items=[]
        if(this.props.items.length==0){
            items.push(<tr><th colSpan='5' className='tempEmpty'>暂无用户</th></tr>)
        }else{
            this.props.items.forEach(item=>{
                items.push(<StaffItem key={item.key} item={item} removeStaffItem={this.props.removeStaffItem} detailStaffItem={this.props.detailStaffItem}/>)
            })
        }
        return(
            <table className='itemPanel'>
                <thead>
                <th className='itemId'>姓名</th>
                <th className='itemId'>年龄</th>
                <th className='itemId'>身份</th>
                <th className='itemId'>性别</th>
                <th className='itemId'>操作</th>
                </thead>
                <tbody>{items}</tbody>
            </table>
        )
    }
}