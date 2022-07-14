import React from 'react'

export default function Banner(props) {
  return (
    <section  style={{
      backgroundImage: `url(${props.bg})`, 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize:'cover',
      height:" 150px", 
      display:'flex', 
      justifyContent:'center', 
      alignItems:'center'
    }}>
        <div className='container'>
            <div className='row'>
                <div className='col text-center'>
                    <h1>{props.title}</h1>
                </div>
            </div>
        </div>
    </section>
  )
}
