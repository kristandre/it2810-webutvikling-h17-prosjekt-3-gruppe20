import React, { Component } from "react"

class Notifications extends Component {
  render() {
    const notis = this.props.notis
    return(
      <section id="notifications">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2>Notfications</h2> 
              <kbd>{new Date().toDateString()}</kbd>
              <ul>
                { notis.map((e, i) => {
                  return ( <li key={i}><span className="badge badge-danger" id="liBadge">{i+1} </span>{e.title}</li> )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Notifications
