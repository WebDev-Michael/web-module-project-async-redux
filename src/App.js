import React from "react";
import { connect } from "react-redux";
import './App.css';
import GifList from './components/GifList';
import GifForm from './components/GifForm';
import {useEffect} from 'react';
import {getGifs} from './actions/actions';


function App (props) {
  const {loading, error, getGifs} = props;

  useEffect(() => {
   getGifs('dog');
    
  }, [])

  return (
    <div className="App">
      <h1>Search for Gifs</h1>

      <GifForm />

      {
        (error !== '') && <h3>{error}</h3>
      }
      {
        loading ? <h3>We are loading</h3> : <GifList/>
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
 
}

export default connect(mapStateToProps,{getGifs})(App); 