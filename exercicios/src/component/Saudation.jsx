import React, {Component} from 'react'

export default class Saudation extends Component {
state = {
    type: 'fala',
    name: 'pedro'
}
    setType(e) {
       this.setState({type: e.target.value})
    }

render(){
    const {type, name} = this.props
    return (<div>
<h1>{type} {name}</h1>
<hr/>
<input type="text" placeholder='tipo....' value={type} onChange={è => this.setType(e)} />
<input type="text" placeholder='nome...' value={name} onChange={è => this.setType(e)} />


</div>
    )
}
}