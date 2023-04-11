import { useEffect, useState } from "react"
import { $getSalesPrice } from "../../api"
import { useDispatch,useSelector } from "react-redux"
import { minus } from "../../store/reducer/commonMethodsReducer"
import "./index.scss"

function Index () {
    const [data,setData] = useState<number>(0)
    const { num } = useSelector((state:any)=> {return state.commonMethodsReducer})
    const dispatch = useDispatch()


    useEffect(()=>{
        //初始化
        // console.log("初始划数据")
        return
    },[])

    function add () {
        setData(data+1)
        $getSalesPrice({fromk:'xx1'}).then((res) => {
            console.log('res',res)
        })
    }
    function subtract () {
        dispatch(minus())
    }

    return (
        <div className="index">
                <h1>index页面</h1>
                <div>初始化数据：{data}</div>
                <button onClick={add}>点击修改初始化数据+1</button>
                <div>redux数据:{num}</div>
                <button onClick={subtract}>用redux的方法修改redux数据-1</button>

        </div>
    )
}

export default Index 