import  React from 'react'
import  ReactDOM from 'react-dom'
export default class StaffHeader extends React.Component{
    handlerSearch(){
        let bar =ReactDOM.findDOMNode(this.refs.searchBar)
        let value=bar.value
        this.props.searchStaff(value)
    }
    handlerIdChange(){
        let selId=ReactDOM.findDOMNode(this.refs.selId)
        let selVal=selId.options[selId.selectedIndex].value
        this.props.filtStaff(selVal)
    }
    //排序
    handleOrderChange(){
        let selOrder=ReactDOM.findDOMNode(this.refs.selOrder)
        let selVal=selOrder.options[selOrder.selectedIndex].value
        this.props.orderStaff(selVal)
    }
    render(){
        return(
            <div>
                <h3 style={{'text-align':'center'}}>人员管理系统</h3>
                <table className='optHeader'>
                    <tbody>
                        <tr>
                            <td className='headerTd'>
                                <input type='text' ref='searchBar' onChange={this.handlerSearch.bind(this)} placeholder='Search...'/>
                            </td>
                            <td className='headerTd'>
                                <label for="idSelect">人员筛选</label>
                                <select id='idSelect' ref='selId' onChange={this.handlerIdChange.bind(this)}>
                                    <option value='0'>全部</option>
                                    <option value='1'>it</option>
                                    <option value='2'>工程师</option>
                                    <option value='3'>销售</option>
                                    <option value='4'>服务人员</option>
                                </select>
                            </td>
                            <td>
                                <label for="orderSelect">排列方式</label>
                                <select id='orderSelect' ref='selOrder' onChange={this.handleOrderChange.bind(this)}>
                                    <option value='0'>身份</option>
                                    <option value='1'>年龄升</option>
                                    <option value='2'>年龄降</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}