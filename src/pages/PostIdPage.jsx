import React from 'react'
import { useParams } from 'react-router-dom';

function PostIdPage() {
	const params = useParams()

  return (
	<div>
		<h1>You open posts with ID = {params.id}</h1>
	

	</div>
  )
}

export default PostIdPage;