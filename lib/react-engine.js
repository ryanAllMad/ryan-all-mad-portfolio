import React from 'react';
import { renderToPipeableStream } from 'react-dom/server'

export const ViewDataContext = React.createContext();

export function reactJsxEngine(filePath, options, callback) {
	import(filePath)
		.then((m) => m.default)
		.then((Component) => {
			let html = renderToPipeableStream(
				<ViewDataContext.Provider value={options}>
					<Component />
				</ViewDataContext.Provider>
			);
			callback(null, html);
		})
}
