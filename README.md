#Webpack/ES6 Playground

###Installation

```
npm install && npm start && open http://localhost:8080
```

Now you can start writing wicked spells, ie:

```
import React, { PropTypes } from 'react'

const App = ({ name }) =>
  <p>{ `Hey ${name}!` }</p>

App.propTypes = {
  name: PropTypes.string
}

export default App
```
