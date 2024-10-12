import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { marked } from 'marked';
import './App.css';

// Set options for marked
marked.setOptions({
    breaks: true
});

// Initial Markdown text
const markdownInitialText = `
Github Link [im-vimal](https://github.com/im-vimal) 


# This is H1
## This is H2
### This is H3
#### This is H4 and so

**Strong text** or *italicized text* your choice

> Wow a blockquote - it is just check the markup

Organised
1. First add this
2. Then this
3. This is the last one

Unorganised
- I don't
- like
- numbers

<br />

\`console.log('Finally I can write Hello World!');\`

`;

const themes = [
    "Theme1",
    "Theme2",
    "Theme3",
    "Theme4",
    "Theme5",
    "Theme6",
    "Theme7",
    "Theme8",
    "Theme9",
    "Theme10"
];

const App = () => {
    const [inputText, setInputText] = useState(markdownInitialText);
    const [markup, setMarkup] = useState(marked(markdownInitialText));
    const [selectedTheme, setSelectedTheme] = useState(themes[0]);

    const handleChange = (e) => {
        setInputText(e.target.value);
        setMarkup(marked(e.target.value));
    };

    const handleThemeChange = (e) => {
        setSelectedTheme(e.target.value);
    };

    return (
        <div className={`App ${selectedTheme}`}>
            <header className="App-header">
                <h1>Markdown Previewer</h1>
                <select onChange={handleThemeChange} value={selectedTheme} className="theme-selector">
                    {themes.map(theme => (
                        <option key={theme} value={theme}>{theme}</option>
                    ))}
                </select>
            </header>
            <div className="editor-preview-container">
                <textarea 
                    id="editor" 
                    onChange={handleChange} 
                    value={inputText} 
                    placeholder="Type your markdown here..."
                />
                <div 
                    id="preview" 
                    dangerouslySetInnerHTML={{ __html: markup }} 
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
