import logo from './logo.svg';
import './App.css';

import React from 'react';

import ahoy_img from './ahoy.jpeg'
import poster1 from './418poster_pages-1.pdf'
import poster2 from './418poster_pages-2.pdf'

import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/entry.webpack';

function App() {
  return (
    <div className="App">
      <center><h2> Parallelization of Inference in RNNs </h2></center>
      <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
      <h3 style={{"textAlign":"left", paddingLeft:"5%"}}>Project Objective</h3>
      <p style={{"textAlign":"left", paddingLeft:"5%", paddingRight:"5%"}}>Our objective is to discover and exploit opportunities for parallelism in Recurrent Neural Networks' (RNNs') inference-time forward pass computations. We aim to effectively utilize synchronization and atomic operations to mitigate the purely-sequential nature to which the data dependencies within and across neural network layers lend themselves, so that we can use parallel computation APIs (e.g. openMP) and vectorized operations on GPUs for multiprocessor speedup</p>
      <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
      <h3 style={{"textAlign":"left", paddingLeft:"5%", paddingRight:"5%"}}>Background</h3>
      <p style={{"textAlign":"left", paddingLeft:"5%", paddingRight:"5%"}}> We are interested in finding effective ways to obtain speedup on the following basic algorithmic structure of a forward-pass computation in RNNs: 
        <br/> <br/>
        <img src={ahoy_img} height="100"/> <br/>
        where the following variables correspond to layers that are vectors of neurons, indexed by time and ordered by increasing proximity to the output layer, y: a, h, o. We plan to find some ways to mitigate the constraints enforced by dependent data: for example, the constraint on a[t] is the completion of the computation for the hidden layer's h's) output at time t-1. If different threads were responsible for the forward-pass computations of adjacent time steps, there would need to be communication of hidden-layer values that would inhibit speedup. 
      </p>
      <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />  
      <h3 style={{"textAlign":"left", paddingLeft:"5%"}}>Documents</h3>
      <p style={{"textAlign":"left", paddingLeft:"5%", paddingRight:"5%"}}>
        <ul>
          <li> Project Proposal </li>
          <li> Project Milestone Report (at the approx. midpoint) </li>
          <li> Final Report and Downloadable Poster </li>
        </ul>
      </p>
      <hr width="90%" height='1px' border='1px' style={{'background-color': 'black'}} />
      <h3 style={{"textAlign":"left", paddingLeft:"5%"}}>Project Poster</h3>
      <Document file={poster1}>
        <center>
        <Page scale={1.5} pageNumber={1} />
        </center>
      </Document>
      <Document file={poster2}>
        <center>
        <Page scale={1.5} pageNumber={1} />
        </center>
      </Document>
    </div>
  );
}

export default App;
