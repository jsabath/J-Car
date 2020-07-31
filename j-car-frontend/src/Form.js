import React from 'react'

class Form extends React.Component{

  state = {
    make: '',
    model: '',
    year: '',
    carImage: ''
  }


  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
    console.log({[event.target.name]: event.target.value})
  }


  handleSubmit(event){
    event.preventDefault()
    this.props.getCar(this.state.make, this.state.model, this.state.year)
  }

  clearSearch = (event) => {
    event.preventDefault()
    event.target.reset()
    this.setState({make: '', model: '', year: '', carImage: ''})
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
          <input
            name='year'
            type='text'
            placeholder='Year'
            onChange={(event) => this.handleChange(event)}
          />
          <button type='submit'>Search</button>
          <button type='submit' onClick = {(event) => this.clearSearch(event)}>Clear Search</button>
        </form>
    )
  }

}

export default Form
