const Head = () => {
	return (
		<>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				/>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='anonymous'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Readex+Pro:wght@160..700&display=swap'
					rel='stylesheet'
				/>
				<link
					rel='stylesheet'
					href="/styles.css"
				></link>
				<script
					type='text/javascript'
					src="/js/main.bundle.js"
					async
					defer
				/>
				<script
					type='text/javascript'
					src="/js/index.bundle.js"
					async
					defer
				/>
			</head>
		</>
	);
};

export default Head;
