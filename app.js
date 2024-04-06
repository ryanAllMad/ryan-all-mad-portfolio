
import express from 'express'


import { reactJsxEngine } from './lib/react-engine.js'

const app = express();

app.engine('js', reactJsxEngine)
app.set('views', './views')
app.set('view engine', 'js')

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
	res.render('goals')
})

app.post('/', (req, res) => {
	res.render('goals')
})

app.listen(3000)