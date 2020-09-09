import { useState, useEffect } from 'react'
import Head from 'next/head'
const axios = require('axios')

const Index = () => {

  // State prop for response from axios GET request
  const [beerRes, setBeerRes] = useState([])

  // State prop for modified beer list according to ABV
  const [beerList, setBeerList] = useState([])

  const getBeers = (e) => {
    e.preventDefault()

    // GET all beers
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => {
        // Store all beers in State

        // beerRes persists original API Response
        setBeerRes(res.data)

        // beerList will be modified when specific ABV ranges are selected
        setBeerList(res.data)

        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  const selectedAbv = (e) => {

    if (e.target.value === 'less than 6') {
      setBeerList(beerRes.filter(beer => beer.abv < 6))
    } else if (e.target.value === '6 or more') {
      setBeerList(beerRes.filter(beer => beer.abv >= 6))
    } else {
      setBeerList(beerRes)
    }

  }

  return (
    <div className='container text-center'>
      <Head>
        <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css" />
      </Head>
      <h3>Beer Punk</h3>
      <button className='btn btn-block btn-primary mb-3' onClick={getBeers}>Get All Beers</button>
      {
        // If beerRes is populated 
        beerRes.length >= 1 ?
          <div>
            <select className='btn btn-block btn-secondary mb-3' onChange={selectedAbv}>
              <option value="">--Choose ABV Range--</option>
              <option value="less than 6">Lower than 6%</option>
              <option value="6 or more">6% or higher</option>
            </select>

            <br />
            <div className='row'>
              {
                beerList.map((beer, idx) => {
                  return <div key={idx} className="card col-sm-4 mb-3 p-3">
                    <img style={{ width: '100%', height: '15vw', objectFit: 'contain' }} src={beer.image_url} alt="" />
                    <h5 className="card-header">{beer.name}</h5>
                    <div className="card-body">
                      <h6 className="card-title">{beer.tagline}</h6>
                      <p className="card-text"><strong>ABV:</strong>{beer.abv}%</p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
          : ''
      }
    </div>
  )
}

export default Index