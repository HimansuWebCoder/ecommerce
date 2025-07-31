function Notification({number, style, isShowNotification}) {
	return (
		<>
		{isShowNotification ? (
          <div className={`${style}`}>
          	  {number}
          </div>
          ) : null}
		</>
		)
}

export default Notification;