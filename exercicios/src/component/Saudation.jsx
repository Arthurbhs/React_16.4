import React, {Component} from 'react'

export default class Saudation extends Component {

    state = {
        type: 'fala',
        name: 'pedro'
    }
constructor(props){
    super(props)

this.setType = this.setType.bind(this)


}
    setType(e) {
       this.setState({type: e.target.value})
    }

    setName(e) {
        this.setState({type: e.target.value})
     }

render(){
    const {type, name} = this.props
    return (<div>
<h1>{type} {name}</h1>
<hr/>
<input type="text" placeholder='tipo....' value={type} onChange={this.setType} />
<input type="text" placeholder='nome...' value={name} onChange={ e => this.setName()} />


</div>
    )
}
}