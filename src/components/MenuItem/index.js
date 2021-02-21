import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const MenuItem = ({ title, imageUrl, size }) => {
	return (
		<div
			className={`menu-item ${size} `}
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		>
			<div className="content">
				<h3 className="title">{title}</h3>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	)
}

MenuItem.propTypes = {
	title: PropTypes.string,
	imageUrl: PropTypes.string,
	size: PropTypes.string,
}

export default MenuItem
