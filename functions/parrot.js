exports.handler = async function(event, context) {
  if (event.body == null) {
  	return {
  		statusCode: 400,
  		body: JSON.stringify({ message: "No MESSAGE" }),
  	}
  }
  else {
  	return {
  		statusCode: 200,
  		body: JSON.stringify({ message: event.body }),
  	}
  }
};