import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
// import addClasses from 'rehype-add-classes';
import './style.css'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'


const markdown = `
|Hello|Hell2|Hello3|
|--|--|--|
|133|1456|546102|
`

const input = `<div className=”custom">

## JavaScript code

</div>`

function App() {
  return (
    <Fragment>
    <div className='testMarkdown'>
    <ReactMarkdown
        className="HelloWorld"
        children={markdown} 
        remarkPlugins={[[remarkGfm, {singleTilde: true}]]}
        // rehypePlugins={[addClasses, {table: 'testTable'}]}
    />
    </div>
    <ReactMarkdown rehypePlugins={[rehypeRaw]} children={input} />
    </Fragment>
  );
}

export default App;
