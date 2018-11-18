class staffItem{
    constructor(item){
        this.info={}
        this.info.name=item.name
        this.info.age=item.age||0
        this.info.sex=item.sex
        this.info.id=item.id
        this.info.descrip=item.descrip||''
        this.key= ++staffItem.key
    }
}
staffItem.key=0

export default class STAFF{
    constructor(){
        this.allStaff=[
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10]),
        ]
        this.staff=this.allStaff
        this.word=''
    }
    //增员
    addStaffItem(item){
        let newItem=new staffItem(item)
        this.allStaff.push(newItem)
        this.staff=this.allStaff
        return this
    }
    //搜索
    searchStaff(word){
        this.word=word;
        this.staff=this.allStaff
        this.staff=this.staff.filter(item=>{
            return item.info.name.indexOf(word)!=-1||(item.info.age+'').indexOf(word)!=-1||item.info.id.indexOf(word)!=-1||item.info.sex.indexOf(word)!=-1
        })
        return this
    }
    //减员
    removeStaffItem(word){
        this.staff=this.staff.filter(item=>{
            return item.key!==word;
        })
        return this
    }
    //编辑人员
    editStaffItem(item){
        this.staff.forEach(staffItem=>{
            if(staffItem.key===item.key){
                staffItem.info=item
            }
        })
        return this
    }
    //筛选
    filtStaff(val){
        switch(parseInt(val)){
            case 0:
                this.staff=this.allStaff
                break;
            case 1:
                this.staff=this.allStaff.filter(item=>{
                    return item.info.id==='it'
                })
                break;
            case 2:
                this.staff=this.allStaff.filter(item=>{
                    return item.info.id==='工程师'
                })
                break;
            case 3:
                this.staff=this.allStaff.filter(item=>{
                    return item.info.id==='销售'
                })
                break;
            case 4:
                this.staff=this.allStaff.filter(item=>{
                    return item.info.id==='服务人员'
                })
                break;
            default :break
        }
        return this
    }
    //排序
    orderStaff(val){
        switch (parseInt(val)){
            case 0://职位
                this.allStaff.forEach(item=>{
                    switch(item.info.id){
                        case 'it':
                            item.info.id=1;
                            break;
                        case '工程师':
                            item.info.id=2;
                            break;
                        case '销售':
                            item.info.id=3;
                            break;
                        case '服务人员':
                            item.info.id=4;
                            break;
                        default:
                            break;
                    }
                })
                this.allStaff.sort(function(item1,item2){
                    if(item1.info.id>item2.info.id){
                        return 1
                    }else if(item1.info.id<item2.info.id){
                        return -1
                    }else{
                        return 0
                    }
                })
                this.allStaff.forEach(item=>{
                    switch(item.info.id){
                        case 1:
                            item.info.id='it';
                            break;
                        case 2:
                            item.info.id='工程师';
                            break;
                        case 3:
                            item.info.id='销售';
                            break;
                        case 4:
                            item.info.id='服务人员';
                            break;
                        default:
                            break;
                    }
                })
                break;
            case 1://年龄升
                this.allStaff.sort((item1,item2)=>{
                    if(item1.info.age>item2.info.age){
                        return 1
                    }else if(item1.info.age<item2.info.age){
                        return -1
                    }else{
                        return 0
                    }
                })
                break;
            case 2://年龄降
                this.allStaff.sort((item1,item2)=>{
                    if(item1.info.age>item2.info.age){
                        return -1
                    }else if(item1.info.age<item2.info.age){
                        return 1
                    }else{
                        return 0
                    }
                })
                break;
        }
        return this
    }
}
STAFF.rawData=[
    {descrip:'好好学习，天天向上',sex:'男',age:45,id:'工程师',name:'老李'},
    {descrip:'有好多花儿开在没人看见的地方',sex:'女',age:25,id:'it',name:'佳佳'},
    {descrip:'好好学习，天天向上',sex:'男',age:15,id:'服务人员',name:'小Q'},
    {descrip:'有好多花儿开在没人看见的地方',sex:'男',age:22,id:'工程师',name:'小李'},
    {descrip:'好好学习，天天向上',sex:'女',age:21,id:'销售',name:'小谢'},
    {descrip:'好好学习，天天向上',sex:'男',age:33,id:'it',name:'魏春华'},
    {descrip:'好好学习，天天向上',sex:'男',age:22,id:'it',name:'菜菜'},
    {descrip:'好好学习，天天向上',sex:'男',age:30,id:'it',name:'老左'},
    {descrip:'好好学习，天天向上',sex:'男',age:32,id:'服务人员',name:'陈宝成'},
    {descrip:'好好学习，天天向上',sex:'女',age:30,id:'销售',name:'段文琴'},
    {descrip:'好好学习，天天向上',sex:'女',age:27,id:'工程师',name:'可欣'},
    {descrip:'好好学习，天天向上',sex:'女',age:26,id:'工程师',name:'李舒淇'},
    {descrip:'好好学习，天天向上',sex:'男',age:45,id:'销售',name:'老李'},
    {descrip:'好好学习，天天向上',sex:'女',age:24,id:'工程师',name:'李欣欣'},
    {descrip:'好好学习，天天向上',sex:'女',age:31,id:'销售',name:'王菊可'}
]







