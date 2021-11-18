import { useState, useEffect } from 'react';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();
		const fetchData = async () => {
			setIsPending(true);
			try {
				const res = await fetch(url, { signal: controller.signal });
				if (!res.ok) {
					if (res.status === 404) {
						setError('404');
					}
					setIsPending(false);
				} else {
					const json = await res.json();
					// console.log(json);
					setData(json);
					setError(null);
					setIsPending(false);
				}
			} catch (err) {
				// check if component was aborted
				if (err.name === 'AbortError') {
					console.log('The fetch was aborted.');
				} else {
					setIsPending(false);
					setError('Could not fetch data.');
				}
			}
		};

		// Fetch data only if requested
		// if (isSubmitting) {
		fetchData();
		// }

		// cleanup if the component is unmounted during the fetch
		return () => {
			controller.abort();
		};
	}, [url]);

	return { data: data, isPending: isPending, error: error };
};
