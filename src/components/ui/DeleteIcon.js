function DeleteIcon({size, isShowDeleteIcon}) {
	return (
		<div className="absolute top-3 right-2">
	{isShowDeleteIcon ? (
          <div className={`w-${size} h-${size} p-1 bg-white rounded-full`}>
          	 <img className="w-full h-full object-contain" src="./images/icon-delete.png" alt="delete icon" />
          </div>
			) : null
	}
	</div>
		)
}

export default DeleteIcon;