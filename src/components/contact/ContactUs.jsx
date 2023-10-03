import axios from "axios";
import React, { Component } from "react";
export default class ContactUs extends Component {
  constructor(props){
    super(props);
    this.state = {
      fullname: '',
      phone_number: '',
      email: '',
      message: ''
    }
  }

  
  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      }
    )
  }
  handleSubmit = (e) => {
    const URL = `https://sheet.best/api/sheets/ddb083d1-99f2-46aa-a0c8-80f328066165`
    e.preventDefault();
    console.log(this.state);
    axios.post(URL, this.state).then(response =>{
      console.log(response, this.setState({fullname: "", phone_number: "", email: "", message: ""}));
    })
  }
 

  render() {
    const {fullname, phone_number, email, message} = this.state;

    return (
      <>
        <div className="mx-auto max-w-full bg-slate-50">
          <div className="container mx-auto">
            <div className="flex flex-auto flex-col md:flex-row">
              <div className="w-1/2">
                <h1 className="font-domine p-5">Contact Us</h1>
                <p className="px-5">
                  Keep in touch with us by directly fill on the form or reach us out through several channel
                </p>
              </div>
              <div className="w-1/2">
                <h1 className="font-domine p-5">Get in touch</h1>
                <form className="px-5 flex-col flex" onSubmit={this.handleSubmit}>
                  <label htmlFor="fullname">Fullname</label>
                  <input
                    type="text"
                    className="border border-x-0 border-t-0 bg-transparent border-b-gray-300 focus:border-b-orange-900 border-1 focus:outline-none"
                    name="fullname"
                    autoComplete="off"
                    value={fullname}
                    onChange={this.handleChange}
                  />
                  <div className="my-2"></div>
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    className="border border-x-0 border-t-0 bg-transparent border-b-gray-300 focus:border-b-orange-900 border-1 focus:outline-none"
                    name="phone_number"
                    autoComplete="off"
                    value={phone_number}
                    onChange={this.handleChange}
                  />
                  <div className="my-2"></div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="border border-x-0 border-t-0 bg-transparent border-b-gray-300 focus:border-b-orange-900 border-1 focus:outline-none"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <div className="my-2"></div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="3"
                    className="border border-x-0 border-t-0 bg-transparent border-b-gray-300 focus:border-b-orange-900 border-1 focus:outline-none resize-none"
                    name="message"
                    autoComplete="off"
                    value={message}
                    onChange={this.handleChange}
                  />

                  <button type="submit" className="p-2 my-5 bg-avocado-2 font-domine text-dark-moss-green-2 w-1/2">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
