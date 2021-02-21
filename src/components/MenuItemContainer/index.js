import React from 'react'
import './style.scss'
import Sections from '../../constants/sections'
import MenuItem from '../../components/MenuItem'

const MenuItemContainer = () => {
	return (
		<div className="menu-item-container">
			{Sections.map(({ id, imageUrl, title, size }) => (
				<MenuItem key={id} imageUrl={imageUrl} title={title} size={size} />
			))}
		</div>
	)
}

export default MenuItemContainer
