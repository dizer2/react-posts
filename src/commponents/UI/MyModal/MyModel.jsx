import React from 'react'
import cl from './MyModal.module.css';


function MyModel({children, visible, setVisible}) {

	const rootClasses = [cl.myModal];
	if(visible){
		rootClasses.push(cl.active)
	}

  return (
	<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
		<div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
			{children}
		</div>
	</div>
  )
}

export default MyModel;