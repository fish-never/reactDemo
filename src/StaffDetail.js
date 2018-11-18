import React from 'react'
import ReactDOM from "react-dom";
export default class StaffDetail extends React.Component{
    handlerClose(){
        this.props.closeDetail()
    }
    handlerEdit(){
        let item={}
        let addForm=ReactDOM.findDOMNode(this.refs.editTable)
        let sex=addForm.querySelector('#staffEditSex')
        let id=addForm.querySelector('#staffEditId')
        item.name=addForm.querySelector('#staffEditName').value.trim()
        item.age=addForm.querySelector('#staffEditAge').value.trim()
        item.descrip=addForm.querySelector('#staffEditDescrip').value.trim()
        item.sex=sex.options[sex.selectedIndex].value
        item.id=id.options[id.selectedIndex].value
        item.key=this.props.staffDetail.key
        if(item.name=='' || item.age=='' || item.descrip=='') {
            let tips = React.findDOMNode(this.refs.DtipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        let numReg=/^\d+$///非负整数
        if(!numReg.test(item.age)||parseInt(item.age>150)){
            let tips=ReactDOM.findDOMNode(this.refs.tipsUnAge);
            tips.style.display='block'
            setTimeout(function(){
                tips.style.diaplay='none'
            },1000)
            return
        }
        this.props.editDetail(item)
        let tips=ReactDOM.findDOMNode(this.refs.Dtips)
        tips.style.display='block'
        let that=this
        setTimeout(function(){
            tips.style.display='none'
        },1000)
    }
    render(){
        let staffDetail= this.props.staffDetail
        if(!staffDetail)
            return null

        return(
            <div className='overLay'>
                <h4 style={{'text-align':'center'}}>点击'完成'保存修改，点击'关闭'放弃未保存修改并退出</h4>
                <hr/>
                <table ref='editTable'>
                    <tbody>
                        <tr>
                            <th>姓名</th>
                            <td><input id='staffEditName' type='text' defaultValue={staffDetail.info.name}></input></td>
                        </tr>
                        <tr>
                            <th>年龄</th>
                            <td><input id='staffEditAge' type='text' defaultValue={staffDetail.info.age}></input></td>
                        </tr>
                        <tr>
                            <th>性别</th>
                            <td>
                                <select ref='selSex' id='staffEditSex'>
                                    <option value='男'>男</option>
                                    <option value='女'>女</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>身份</th>
                            <td>
                                <select ref='selId' id='staffEditId'>
                                    <option value='工程师'>工程师</option>
                                    <option value='销售'>销售</option>
                                    <option value='it'>it</option>
                                    <option value='服务人员'>服务人员</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>个人描述</th>
                            <td>
                                <textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p ref='Dtips' className='tips'>修改成功</p>
                <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
                <button onClick={this.handlerEdit.bind(this)}>完成</button>
                <button onClick={this.handlerClose.bind(this)}>关闭</button>
            </div>
        )


    }
}