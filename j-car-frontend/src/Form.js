import React from 'react'

class Form extends React.Component{

  state = {
    make: '',
    model: '',
    carImage: ''
  }


  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
    console.log({[event.target.name]: event.target.value})
  }


  handleSubmit(event){
    event.preventDefault()
    console.log(event)
    this.props.getCar(this.state.carImage)
    // this.setState({
    //   // make: event.target.value,
    //   // model: event.target.value,
    //   carImage: event.firstChild.innerHTML
    // })
  }

  render(){
    return(
        <form className='car-form' onSubmit = {(event) => this.handleSubmit(event)}>
          <input
            name='make'
            type='text'
            placeholder='Make'
            onChange={(event)=> this.handleChange(event)}
          />
          <input
            name='model'
            type='text'
            placeholder='Model'
            onChange={(event)=> this.handleChange(event)}
          />
          <button type='submit'>Submit</button>
        </form>
    )
  }

}

export default Form
