import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import About from './components/About';
import Blog from './components/Blog';
import Home from './components/Home';
import Faq from './components/Faq';
import Login from './components/Login';

import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ApolloProvider>
      <Router>
        <Routes>
          {/* homepage route */}
          <Route path="/" element={<Home />}></Route>
          {/* About Us route */}
          <Route path="/about" element={<About />}></Route>
          {/* blog route */}
          <Route path="/blog" element={<Blog />}></Route>
          {/* FAQ route */}
          <Route path="/faq" element={<Faq />}></Route>
          {/* Login route */}
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
