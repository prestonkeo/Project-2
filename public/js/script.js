$(document).ready(function () {
	let title = ''
	let body = ''

	// handle change event for my title input
	$("#title").on("change", event => {
		// destructure event
		title = event.target.value

		console.log(title)
	})

	// handle change event for my body input
	$("#body").on("change", event => {
		// destructure event
		body = event.target.value

		console.log(body)
	})

	// handle submit event
	$("form").on("submit", event => {
		// prevent default
		event.preventDefault()

		$.ajax("/api", {
			type: "POST",
			data: {
				"title": title,
				"body": body
			}
		}).then(response => {
			console.log(response)
		})
	})
})
