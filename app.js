import express from 'express'
import { renderToPipeableStream } from 'react-dom/server';
//import { renderToString } from 'react-dom/server';
import GoalsPage from './views/GoalsPage.js';


const app = express();

app.set('views', './views')


app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.use('/', (request, response) => {
	const { pipe } = renderToPipeableStream(<GoalsPage />, {
	onShellReady() {
		response.setHeader('content-type', 'text/html');
		pipe(response);
	}
	});
});

//app.use('/', (req, res) => {
//	const html = renderToString(<GoalsPage />);
//	res.send(html);
//})
//app.get('/', (req, res) => {
//	res.render('index')
//})
//app.post('/', (req, res) => {
//	res.render('index')
//})


app.listen(3000)