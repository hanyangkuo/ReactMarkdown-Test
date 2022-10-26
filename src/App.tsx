import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown'
// import addClasses from 'rehype-add-classes';
import './style.css'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'

// const processor = rehype()
//     .data('settings', { fragment: true })
//     .use(addClasses, {
//         pre: 'hljs',
//         'h1,h2,h3': 'title',
//         h1: 'is-1',
//         h2: 'is-2',
//         p: 'one two'
//     });

const markdown = `
|Hello|Hell2|Hello3|
|--|--|--|
|133|1456|546102|
`

function App() {
  return (
    <div style={{background: "red", width: "80%"}}>
    <ReactMarkdown
        className="HelloWorld"
        children={markdown} 
        remarkPlugins={[[remarkGfm, {singleTilde: true}]]}
        // rehypePlugins={[addClasses, {table: 'testTable'}]}
    />
    </div>
  );
}

export default App;
