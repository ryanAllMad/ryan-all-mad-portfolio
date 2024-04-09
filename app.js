import express from 'express'
import { renderToPipeableStream } from 'react-dom/server';
import GoalsPage from './views/GoalsPage.js';
import process from 'process'

//nvm use 21.7.2 
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

app.listen(process.env.port || 3000)