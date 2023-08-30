import React from "react";
function Colorlist(){
    var [list1,setList1]=React.useState(['task1','task2','task3'])
    var [list2,setList2]=React.useState(['task4','task5','task6'])
    function removelist1(a,i){
        var temp1=list1;
        var temp2=list2;
        temp2.push(list1[a])
        temp1.splice(i,1)

        setList1([...temp1])
        setList2([...temp2])
    }
    function removelist2(b,i){
        var temp1=list1;
        var temp2=list2;
        temp1.push(list2[b])
        temp2.splice(i,1)

        setList1([...temp1])
        setList2([...temp2])
    }
    return(
        <>
            <div className="task1">
                <ul>
                    {
                        list1.map((a,i)=>{
                            return <li className="list" onClick={()=>{removelist1()}}>{a}</li>
                        })
                    }
                </ul>
            </div>
            <div className="task2">
                <ul>
                    {
                        list2.map((b,i)=>{
                            return <li className="list" onClick={()=>{removelist2()}}>{b}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
export default Colorlist;