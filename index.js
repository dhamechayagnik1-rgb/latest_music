const express = require('express') 
const path = require('path')

const server = express();
server.use(express.static('src/view'))

server.get('/', (req, res) => {
res.sendFile(path.join(path.resolve(),"MUSIC-WEBISITE" , "src",
"view", "index.html"))
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
console.log('Server running on port  ${PORT}');
});