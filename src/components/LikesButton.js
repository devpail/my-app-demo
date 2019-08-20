import React from 'react'

class LikeButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        //绑定当前类
        //this.increaseLikes = this.increaseLikes.bind(this)

    }
    increaseLikes() {
        alert(1234);
        console.log(this); //打印当前类（需要在构造函数中绑定当前类this.increaseLikes.bind(this)），否则会打印undefined  ，没有绑定类
        //改变 state 值的唯一途径就是调用state方法
        this.setState({
            likes: ++this.state.likes //点赞+1
        })
    }
    render() {
        return (
            <div className="likes-button-component">
                <button type="button"
                    className="btn btn-outline-primary btn-lg"
                    // onclick="function()"  //html的时间绑定传入方法名的字符串
                    //onClick={this.increaseLikes} // 事件绑定的属性使用驼峰式，参数传输一个函数
                    onClick={() => { this.increaseLikes() }} // 箭头函数 传入当前类
                >
                    <span>👍</span>
                    {this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikeButton