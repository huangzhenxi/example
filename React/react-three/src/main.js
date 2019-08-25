import React from 'react'
import ReactDom from 'react-dom'
import axios from 'axios'

class Dv extends React.Component {
    constructor(props) {
        console.warn('组件生命周期：constructor')
        super(props)
        this.state = { name: 'tadpole', age: 17, list: [] }
    }

    static getDerivedStateFromProps(props, state) {
        console.warn('组件生命周期：getDerivedStateFromProps')
        if (props.age !== state.age) {
            return {
                age: props.age
            }
        }
        return null
    }
    // UNSAFE_componentWillMount() {
    //     console.warn('组件生命周期：UNSAFE_componentWillMount')
    // }

    render() {
        console.warn('组件生命周期：render')
        return (
            // [1, 2, 3, 4]
            // <div>
            //     {
            //         this.setState({
            //             name: '小二'
            //         })
            //     }
            // </div>

            <div>
                <div>Hello,我叫 {this.state.name} , 今年 {this.state.age} 岁了</div>
                <ul>
                    { 
                        this.state.list.map(res => {
                            return <li key={ res.id }>{ res.message }</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        console.warn('组件生命周期：componentDidMount')
        // this.setState({
        //     name: 'tadpole 1号',
        //     age: 19
        // })
        axios.get('/src/test.json').then(res => {
            this.setState({
                list: res.data.list
            })
        })
    }

    // 更新阶段

    shouldComponentUpdate(nextProps, nextState) {
        console.warn('组件生命周期：shouldComponentUpdate')
        // 这里可以拿到更新之前的 props 和 state
        // console.log(this.props)
        // console.log(this.state)

        // 这里可以拿到更新之后的 props 和 state
        // console.log(nextProps)
        // console.log(nextState)

        // 必须有返回值 true 或者 false 更新渲染或者阻止渲染
        return true
        // return false
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.warn('组件生命周期：getSnapshotBeforeUpdate')
        // 更新之前的 props 和 state
        console.log(prevProps)
        console.log(prevState)

        // 这里必须有返回值
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.warn('组件生命周期：componentDidUpdate')
        console.log(prevProps)
        console.log(prevState)
        // 上一步传递过来的对象
        console.log(snapshot)

        // 这里可以更新 state ，但是必须包含在判断条件中
       if(snapshot) {
            this.setState({
                hobby: 'play game'
            })
       }
    }

    
}

ReactDom.render(<Dv age={18}/>, document.getElementById('app'))