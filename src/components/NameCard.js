import React from 'react'
// 函数式写法
const NameCard = (props) => {
    const { name, number, isHuman, tags } = props
    return (
        <div className='alert alert-success'>
            <h4 className='alert-heading'>{name}</h4>
            <ul>
                <li>电话：{number}</li>
                <li>{isHuman ? '人类' : '外星生物'/* 默认false */}</li>
                <p> {tags.map((tag, index) => (
                    <span className='badge badge-pill badge-primary' key={index}>
                        {tag}
                    </span>
                ))
                }
                </p>
            </ul>
        </div>
    )
}
// 类写法
// class NameCard extends React.Component {
//     render() {
//         // 将html标签中的属性值赋予 前面的变量
//         const { name, number, isHuman, tags } = this.props
//         return (
//             <div className='alert alert-success'>
//                 <h4 className='alert-heading'>{name}</h4>
//                 <ul>
//                     <li>电话：{number}</li>
//                     <li>{isHuman ? '人类' : '外星生物'/* 默认false */}</li>
//                     <p> {  tags.map((tag, index) => (
//                                 <span className='badge badge-pill badge-primary' key={index}>
//                                     {tag}
//                                 </span>
//                             ))
//                         }
//                     </p>
//                 </ul>
//             </div>
//         )
//     }
// }

export default NameCard